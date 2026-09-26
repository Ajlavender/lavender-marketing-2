import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { DEFAULT_LOCALE, splitLocale, withLocale, type Locale } from "./lib/locale";

// Paths that live outside the /en-ca | /en-us prefix.
const UNPREFIXED = /^\/(api|sitemap\.xml|__l5e|_serverFn)/;

export const getRouter = () => {
  const queryClient = new QueryClient();
  // Per-router (per-request on the server) current locale.
  let current: Locale = DEFAULT_LOCALE;

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 40,
    defaultPreloadStaleTime: 30_000,
    // Public URLs are /en-ca/... or /en-us/...; routes are defined without the prefix.
    rewrite: {
      input: ({ url }) => {
        const { locale, path } = splitLocale(url.pathname);
        if (locale) {
          current = locale;
          url.pathname = path;
        }
        return url;
      },
      output: ({ url }) => {
        if (UNPREFIXED.test(url.pathname) || splitLocale(url.pathname).locale) return url;
        url.pathname = withLocale(url.pathname, current);
        return url;
      },
    },
  });

  return router;
};
