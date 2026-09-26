import type { Locale } from "@/lib/locale";

/**
 * Payment links per plan. Canadian site uses CAD links, US site uses USD links.
 * TODO(AJ): paste your 6 payment links below. Empty = button goes to /contact.
 */
export const PAYMENT_LINKS: Record<string, { cad: string; usd: string }> = {
  Essentials: { cad: "", usd: "" },
  Growth: { cad: "", usd: "" },
  Scale: { cad: "", usd: "" },
};

export function paymentLink(plan: string, locale: Locale): string | null {
  const l = PAYMENT_LINKS[plan];
  if (!l) return null;
  return (locale === "en-us" ? l.usd : l.cad) || null;
}
