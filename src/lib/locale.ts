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
  [/\b(S|s)ummaris/g, "$1ummariz"],
  [/\b(P|p)rioritis/g, "$1rioritiz"],
  [/\b(C|c)ustomis/g, "$1ustomiz"],
  [/\b(P|p)ersonalis/g, "$1ersonaliz"],
  [/\b(R|r)ecognis/g, "$1ecogniz"],
  [/\b(R|r)ealis(e|ed|es|ing)\b/g, "$1ealiz$2"],
  [/\b(S|s)pecialis/g, "$1pecializ"],
  [/\b(M|m)aximis/g, "$1aximiz"],
  [/\b(M|m)inimis/g, "$1inimiz"],
  [/\b(A|a)pologis/g, "$1pologiz"],
  [/\b(S|s)tandardis/g, "$1tandardiz"],
  [/\b(A|a)utomatis/g, "$1utomatiz"],
  [/\b(U|u)tilis/g, "$1tiliz"],
  [/\b(E|e)mphasis(e|ed|es|ing)\b/g, "$1mphasiz$2"],
  [/\b(A|a)uthoris/g, "$1uthoriz"],
  [/\b(C|c)atalogue/g, "$1atalog"],
  [/\b(T|t)ravell(ed|ing|er)/g, "$1ravel$2"],
  [/\b(E|e)nrol(s|ment)?\b/g, "$1nroll$2"],
  [/\b(L|l)icence/g, "$1icense"],
  [/\b(D|d)efence/g, "$1efense"],
  [/\b(H|h)umour/g, "$1umor"],
  [/\b(R|r)umour/g, "$1umor"],
  [/\b(E|e)ndeavour/g, "$1ndeavor"],
  [/\b(A|a)rmour/g, "$1rmor"],
  [/\b(S|s)avour/g, "$1avor"],
  [/\b(M|m)etre/g, "$1eter"],
  [/\b(T|t)heatre/g, "$1heater"],
  [/\b(G|g)rey\b/g, "$1ray"],
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
