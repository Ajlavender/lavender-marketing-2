import { useEffect } from "react";
import { INTAKE_URL } from "@/data/pricing";

const KEYS = /^(utm_[a-z]+|gclid|fbclid|msclkid)$/;
const STORE = "lmc_attribution";

/** Carries campaign tags (never personal data) onto free-design intake links, same tab. */
export function IntakeAttribution() {
  useEffect(() => {
    const incoming = new URLSearchParams(window.location.search);
    const kept: Record<string, string> = {};
    incoming.forEach((v, k) => {
      if (KEYS.test(k) && v.length <= 200) kept[k] = v;
    });
    if (Object.keys(kept).length) sessionStorage.setItem(STORE, JSON.stringify(kept));

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a || !a.href.startsWith(INTAKE_URL)) return;
      a.removeAttribute("target");
      const raw = sessionStorage.getItem(STORE);
      if (!raw) return;
      const url = new URL(a.href);
      if (url.origin !== new URL(INTAKE_URL).origin) return;
      for (const [k, v] of Object.entries(JSON.parse(raw) as Record<string, string>)) {
        if (KEYS.test(k) && !url.searchParams.has(k)) url.searchParams.set(k, v);
      }
      a.href = url.toString();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
