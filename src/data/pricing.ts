import type { Locale } from "@/lib/locale";

export type Billing = "monthly" | "annual";
const BASE = "https://links.lavendersuitepro.com/payment-link/";

/** HighLevel (Stripe) checkout links per plan, billing and country. */
export const CHECKOUT_LINKS: Record<string, Record<"usd" | "cad", Record<Billing, string>>> = {
  Essentials: {
    usd: { monthly: BASE + "6afce9e121a48a3872d2704a", annual: BASE + "6afcea9021a48a3872d27057" },
    cad: { monthly: BASE + "6ae8d59c5b49394de8f58dbc", annual: BASE + "6ae8d5ac00921ddbe8ee1286" },
  },
  Growth: {
    usd: { monthly: BASE + "6a98bba6f9c8c807930bb967", annual: BASE + "6afcea83906a8b62055d7661" },
    cad: { monthly: BASE + "6afcea2d21a48a3872d27050", annual: BASE + "6afcea4a21a48a3872d27054" },
  },
  Scale: {
    usd: { monthly: BASE + "6a98bbc4f9c8c807930bb968", annual: BASE + "6afcea7321a48a3872d27056" },
    cad: { monthly: BASE + "6afcea36906a8b62055d765d", annual: BASE + "6afcea41906a8b62055d765f" },
  },
};

/** Intake form customers reach after the free design sign-up or a purchase. */
export const INTAKE_URL = "https://start.lavendermarketingco.com";
/** On-site $0 checkout for the free website design (locale prefix added on click). */
export const FREE_DESIGN_URL = "/free-design";

export function checkoutLink(plan: string, locale: Locale, billing: Billing): string | null {
  return CHECKOUT_LINKS[plan]?.[locale === "en-us" ? "usd" : "cad"][billing] ?? null;
}

/** The Black Friday 30-day trial is attached only to the US Essentials monthly checkout. */
export function hasTrial(plan: string, locale: Locale, billing: Billing): boolean {
  return plan === "Essentials" && locale === "en-us" && billing === "monthly";
}
