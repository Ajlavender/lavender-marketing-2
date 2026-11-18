import { LOCALE_INFO, spell, useLocale } from "@/lib/locale";
import { FREE_DESIGN_URL, checkoutLink, hasTrial } from "@/data/pricing";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SCALE_CALENDAR_URL } from "@/components/site/BookingDialog";
import { CtaBand, FaqAccordion, RatingBar, Section, SectionHeading } from "@/components/site/sections";
import { StartingPoint } from "@/components/site/StartingPoint";
import { plans } from "@/data/pricing-plans";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Transparent pricing from Lavender Marketing & Co. — your website design is free, then launch from $297/mo with hosting, review engine, missed-call text-back and follow-up included.",
      },
      { property: "og:title", content: "Pricing | Lavender Marketing & Co." },
      { property: "og:description", content: "Transparent pricing from Lavender Marketing & Co. — your website design is free, then launch from $297/mo with hosting, review engine, missed-call text-back and follow-up included." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://lavendermarketingco.com/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/pricing" }],
  }),
  component: Pricing,
});

function Pricing() {
  const locale = useLocale();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const annual = billing === "annual";

  return (
    <>
      <StartingPoint />

      <Section>
        <div id="compare-plans" className="mx-auto max-w-2xl scroll-mt-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-lavender-wash px-4 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-brand-deep">
              <span className="h-1 w-1 rounded-full bg-brand" />
              The roadmap
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Start with the Essentials.
              <span className="block italic text-brand-deep">Grow into the rest.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Essentials gives you the website and follow-up tools. Growth adds AI and starter local SEO.
              Scale adds managed advertising and ongoing local SEO. Compare the plans below,
              or use your check-in to decide what makes sense for you.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div
            className="relative flex w-[268px] max-w-full items-center rounded-full border border-border bg-muted p-1"
            role="group"
            aria-label="Billing period"
          >
            <span
              aria-hidden
              className="absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full border border-border/60 bg-card shadow-[0_10px_24px_-12px_rgba(40,20,60,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ transform: annual ? "translateX(100%)" : "translateX(0)" }}
            />
            <button
              type="button"
              aria-pressed={!annual}
              onClick={() => setBilling("monthly")}
              className={`relative z-10 flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                annual ? "text-muted-foreground hover:text-ink" : "text-brand-deep"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={annual}
              onClick={() => setBilling("annual")}
              className={`relative z-10 flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                annual ? "text-brand-deep" : "text-muted-foreground hover:text-ink"
              }`}
            >
              Annual
            </button>
          </div>

          <div className="flex h-7 items-center" aria-live="polite">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-500 ${
                annual
                  ? "border-brand/25 bg-brand/10 text-brand-deep"
                  : "border-border/70 bg-card text-muted-foreground"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                  annual ? "animate-pulse bg-brand" : "bg-muted-foreground/40"
                }`}
              />
              Get 2 months free with annual billing
              {annual && <Check className="h-3.5 w-3.5 text-brand" />}
            </span>
          </div>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              id={`plan-${plan.name.toLowerCase()}`}
              className={`relative scroll-mt-32 flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 target:ring-4 target:ring-brand target:ring-offset-4 ${
                plan.dark
                  ? "border-brand-deep/40 bg-gradient-deep shadow-[0_35px_70px_-35px_rgba(30,15,50,0.6)]"
                  : plan.emphasis
                    ? "border-brand/25 bg-card shadow-[0_28px_60px_-35px_rgba(60,30,90,0.45)] ring-1 ring-brand/10"
                    : "border-border bg-card hover:border-brand/25"
              }`}
            >
              <div className="mb-6">
                <span
                  className={`inline-flex items-center border-b pb-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] ${
                    plan.dark
                      ? "border-nav-plum-foreground/35 text-nav-plum-foreground/90"
                      : "border-brand/25 text-brand-deep"
                  }`}
                >
                  {plan.stage}
                </span>
              </div>

              <h2 className={`text-2xl ${plan.dark ? "text-nav-plum-foreground" : "text-ink"}`}>
                {plan.name}
              </h2>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.dark ? "text-nav-plum-foreground/70" : "text-muted-foreground"
                }`}
              >
                {plan.blurb}
              </p>
              <span
                aria-hidden
                className={`mt-5 block h-1 rounded-full ${
                  plan.dark ? "bg-nav-plum-foreground/20" : "bg-brand/15"
                } ${plan.progress}`}
              />

              <div className="mt-5 min-h-16">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span
                    className={`font-[family-name:var(--font-display)] text-4xl font-bold ${
                      plan.dark ? "text-nav-plum-foreground" : "text-ink"
                    }`}
                  >
                    {annual
                      ? `${locale === "en-ca" ? "CA" : ""}${plan.annualPrice}`
                      : plan.price}
                  </span>
                  {!annual && (
                    <span
                      className={`text-sm font-semibold ${
                        plan.dark ? "text-nav-plum-foreground/70" : "text-foreground/70"
                      }`}
                    >
                      {LOCALE_INFO[locale].currency}
                    </span>
                  )}
                  <span
                    className={`text-sm ${
                      plan.dark ? "text-nav-plum-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {annual ? "/yr" : plan.note}
                  </span>
                </div>
                {annual && (
                  <p
                    className={`mt-1 text-xs ${
                      plan.dark ? "text-nav-plum-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {plan.annualMonthly}
                  </p>
                )}
              </div>

              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.dark ? "text-brand-glow" : "text-primary"
                      }`}
                    />
                    <span className={plan.dark ? "text-nav-plum-foreground/80" : "text-muted-foreground"}>
                      {spell(f, locale)}
                    </span>
                  </li>
                ))}
              </ul>

              {hasTrial(plan.name, locale, billing) && (
                <p className="mt-6 rounded-full border border-brand-glow/40 px-3 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-brand-glow">
                  Black Friday: 30-day free trial
                </p>
              )}
              <div className={hasTrial(plan.name, locale, billing) ? "mt-4 space-y-3" : "mt-8 space-y-3"}>
                <Button
                  asChild
                  size="lg"
                  variant={plan.dark ? "outline" : "default"}
                  className="w-full"
                >
                  <a href={checkoutLink(plan.name, locale, billing) ?? FREE_DESIGN_URL}>
                    Buy {plan.name} {annual ? "yearly" : "monthly"}
                  </a>
                </Button>
                {plan.name === "Scale" ? (
                  <a href={SCALE_CALENDAR_URL} className="block text-center text-sm font-semibold text-primary underline-offset-4 hover:underline">
                    Prefer to chat first? Let's Talk First
                  </a>
                ) : (
                  <a href={FREE_DESIGN_URL} className={`block text-center text-sm font-semibold underline-offset-4 hover:underline ${plan.dark ? "text-brand-glow" : "text-primary"}`}>
                    Or start with a free website design
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {spell(
            "Essentials and Growth are fixed monthly plans. Scale starts at $997/month plus ad spend — campaigns are customised based on your market, goals and advertising requirements.",
            locale,
          )}
        </p>
      </Section>

      <Section muted>
        <RatingBar />
      </Section>

      <Section>
        <SectionHeading title="Pricing" highlight="questions" />
        <div className="mt-10">
          <FaqAccordion limit={5} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
