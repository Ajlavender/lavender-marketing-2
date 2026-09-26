import { useRouterState } from "@tanstack/react-router";

export type Locale = "en-ca" | "en-us";
export const LOCALES: Locale[] = ["en-ca", "en-us"];
export const DEFAULT_LOCALE: Locale = "en-ca";
export const LOCALE_COOKIE = "lmc_locale";

export const LOCALE_INFO: Record<Locale, { country: string; flag: string; currency: "CAD" | "USD"; hreflang: string; htmlLang: string }> = {
  "en-ca": { country: "Canada", flag: "🇨🇦", currency: "CAD", hreflang: "en-CA", htmlLang: "en-CA" },
  "en-us": { country: "United States", flag: "🇺🇸", currency: "USD", hreflang: "en-US", htmlLang: "en-US" },
};

const PREFIX_RE = /^\/(en-ca|en-us)(?=\/|$)/i;

/** Split "/en-us/pricing" into { locale: "en-us", path: "/pricing" }. */
export function splitLocale(pathname: string): { locale: Locale | null; path: string } {
  const m = pathname.match(PREFIX_RE);
  if (!m) return { locale: null, path: pathname };
  return { locale: m[1]!.toLowerCase() as Locale, path: pathname.slice(m[0].length) || "/" };
}

export function withLocale(path: string, locale: Locale): string {
  return `/${locale}${path === "/" ? "" : path}`;
}

/** Current locale, read from the real (public) URL. */
export function useLocale(): Locale {
  const href = useRouterState({ select: (s) => s.location.publicHref });
  return splitLocale(href.split(/[?#]/)[0] ?? "/").locale ?? DEFAULT_LOCALE;
}

// Copy is authored in Canadian spelling; convert for the US site.
const CA_TO_US: [RegExp, string][] = [
  [/\b(F|f)avourite/g, "$1avorite"],
  [/\b(C|c)olour/g, "$1olor"],
  [/\b(C|c)entre/g, "$1enter"],
  [/\b(B|b)ehaviour/g, "$1ehavior"],
  [/\b(N|n)eighbour/g, "$1eighbor"],
  [/\b(H|h)onour/g, "$1onor"],
  [/\b(L|l)abour/g, "$1abor"],
  [/\b(F|f)lavour/g, "$1lavor"],
  [/\b(O|o)ptimis/g, "$1ptimiz"],
  [/\b(O|o)rganis/g, "$1rganiz"],
  [/\b(A|a)nalys(e|ed|ing)\b/g, "$1nalyz$2"],
  [/\b(C|c)heque/g, "$1heck"],
  [/\b(C|c)ancelled/g, "$1anceled"],
];

export function spell(text: string, locale: Locale): string {
  if (locale === "en-ca") return text;
  return CA_TO_US.reduce((t, [re, rep]) => t.replace(re, rep), text);
}

export function useSpell() {
  const locale = useLocale();
  return (text: string) => spell(text, locale);
}

export function Spell({ children }: { children: string }) {
  return useSpell()(children);
}

export function formatPrice(price: string, locale: Locale) {
  return `${price} ${LOCALE_INFO[locale].currency}`;
}
