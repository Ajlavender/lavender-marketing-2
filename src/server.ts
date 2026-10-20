import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const LOCALE_RE = /^\/(en-ca|en-us)(\/|$)/i;
const SKIP_RE = /^\/(api|__l5e|_serverFn|_build|assets|@|node_modules|src)/;

/** The homepage lives at "/" (Canadian default); old un-prefixed page URLs move to the Canadian site. */
function localeRedirect(request: Request): Response | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const url = new URL(request.url);
  const p = url.pathname;
  if (/^\/en-ca\/?$/i.test(p)) {
    return new Response(null, { status: 301, headers: { location: "/" + url.search } });
  }
  if (p === "/") return null;
  if (LOCALE_RE.test(p) || SKIP_RE.test(p) || /\.[a-z0-9]+$/i.test(p)) return null;
  url.pathname = `/en-ca${p}`;
  return new Response(null, { status: 301, headers: { location: url.pathname + url.search } });
}

const SITE = "https://lavendermarketingco.com";

/** Locale-prefixed URL, except the Canadian homepage which is the bare root. */
function localeUrl(l: string, barePath: string): string {
  if (barePath === "/") return l === "en-ca" ? `${SITE}/` : `${SITE}/${l}`;
  return `${SITE}/${l}${barePath}`;
}

/** Point canonical/og:url at the locale version, add hreflang alternates, set <html lang>. */
function localizeHtml(html: string, locale: string, barePath: string): string {
  html = html.replace(
    /(<link[^>]*rel="canonical"[^>]*href="|<meta[^>]*property="og:url"[^>]*content=")https:\/\/lavendermarketingco\.com(\/[^"]*)?"/g,
    (_all, pre: string, path: string | undefined) => {
      const p = (path ?? "/").replace(/^\/(en-ca|en-us)(?=\/|$)/, "") || "/";
      return `${pre}${localeUrl(locale, p)}"`;
    },
  );
  const alt = (l: string) => localeUrl(l, barePath);
  const tags =
    `<link rel="alternate" hreflang="en-CA" href="${alt("en-ca")}"/>` +
    `<link rel="alternate" hreflang="en-US" href="${alt("en-us")}"/>` +
    `<link rel="alternate" hreflang="x-default" href="${alt("en-ca")}"/>`;
  return html.replace("</head>", `${tags}</head>`);
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const redirect = localeRedirect(request);
      if (redirect) return redirect;
      const handler = await getServerEntry();
      let response = await handler.fetch(request, env, ctx);
      const isHtml = (response.headers.get("content-type") ?? "").includes("text/html");
      const pathname = new URL(request.url).pathname;
      const m = pathname.match(LOCALE_RE);
      if (isHtml && (m || pathname === "/") && response.status < 400) {
        const locale = m ? m[1]!.toLowerCase() : "en-ca";
        const bare = pathname.replace(LOCALE_RE, "/").replace(/\/$/, "") || "/";
        const html = localizeHtml(await response.text(), locale, bare);
        const headers = new Headers(response.headers);
        headers.delete("content-length");
        response = new Response(html, { status: response.status, headers });
      }
      const country = request.headers.get("cf-ipcountry");
      if (country && isHtml) {
        response = new Response(response.body, response);
        response.headers.append("set-cookie", `lmc_geo=${country.toUpperCase()}; Path=/; Max-Age=86400; SameSite=Lax`);
      }
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
