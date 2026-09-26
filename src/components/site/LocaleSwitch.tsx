import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { LOCALE_COOKIE, LOCALE_INFO, splitLocale, useLocale, withLocale, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

function readCookie(name: string) {
  return document.cookie.split("; ").find((c) => c.startsWith(name + "="))?.split("=")[1];
}

function rememberChoice(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function useSwitchTo() {
  const href = useRouterState({ select: (s) => s.location.publicHref });
  return (locale: Locale) => {
    rememberChoice(locale);
    const [pathname, rest = ""] = href.split(/(?=[?#])/);
    const { path } = splitLocale(pathname ?? "/");
    window.location.href = withLocale(path, locale) + rest;
  };
}

/** Small CA / US toggle for header and footer. */
export function LocaleSwitch({ className }: { className?: string }) {
  const locale = useLocale();
  const switchTo = useSwitchTo();
  return (
    <div className={cn("inline-flex items-center rounded-full border border-current/20 p-0.5 text-xs font-semibold", className)} role="group" aria-label="Choose your country">
      {(["en-ca", "en-us"] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => l !== locale && switchTo(l)}
          aria-pressed={l === locale}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            l === locale ? "bg-primary text-primary-foreground" : "opacity-70 hover:opacity-100",
          )}
        >
          <span aria-hidden className="mr-1">{LOCALE_INFO[l].flag}</span>
          {l === "en-ca" ? "CA" : "US"}
        </button>
      ))}
    </div>
  );
}

function detectCountry(): "CA" | "US" | null {
  const geo = readCookie("lmc_geo");
  if (geo === "CA" || geo === "US") return geo;
  if (geo) return null;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  const caZones = ["Toronto", "Vancouver", "Montreal", "Edmonton", "Winnipeg", "Halifax", "Regina", "St_Johns", "Moncton", "Whitehorse", "Yellowknife", "Iqaluit"];
  if (caZones.some((z) => tz.includes(z))) return "CA";
  if (tz.startsWith("America/")) return "US";
  return null;
}

/** "Looks like you're in the United States" popup, shown once. */
export function LocalePrompt() {
  const locale = useLocale();
  const switchTo = useSwitchTo();
  const [suggest, setSuggest] = useState<Locale | null>(null);

  useEffect(() => {
    if (readCookie(LOCALE_COOKIE)) return;
    const c = detectCountry();
    const target: Locale | null = c === "US" ? "en-us" : c === "CA" ? "en-ca" : null;
    if (target && target !== locale) setSuggest(target);
    else rememberChoice(locale);
  }, [locale]);

  if (!suggest) return null;
  const stay = () => {
    rememberChoice(locale);
    setSuggest(null);
  };

  return (
    <div role="dialog" aria-label="Choose your country site" className="fixed inset-x-3 bottom-24 z-[70] mx-auto max-w-sm rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-2xl sm:bottom-6 sm:left-auto sm:right-6 sm:mx-0 animate-fade-in">
      <button type="button" onClick={stay} aria-label="Close" className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">
        <X className="h-4 w-4" />
      </button>
      <p className="pr-6 text-base font-semibold">
        <span aria-hidden className="mr-1.5">{LOCALE_INFO[suggest].flag}</span>
        Looks like you're in the {LOCALE_INFO[suggest].country}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        Would you like to see {LOCALE_INFO[suggest].currency} pricing on our {LOCALE_INFO[suggest].country === "Canada" ? "Canadian" : "US"} site?
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={() => switchTo(suggest)} className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Go to {suggest === "en-us" ? "US" : "Canadian"} site
        </button>
        <button type="button" onClick={stay} className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-accent">
          Stay on {locale === "en-us" ? "US" : "Canadian"} site
        </button>
      </div>
    </div>
  );
}
