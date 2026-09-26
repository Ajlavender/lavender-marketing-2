import { LOCALE_INFO, useLocale } from "@/lib/locale";
import { paymentLink } from "@/data/pricing";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/components/site/BookingDialog";
import { CtaBand, FaqAccordion, PreviewSteps, RatingBar, Section, SectionHeading } from "@/components/site/sections";
import { QualifyWizard } from "@/components/site/QualifyWizard";
import { Reveal } from "@/components/site/Reveal";

const plans = [
  {
    name: "Essentials",
    stage: "Start here",
    emphasis: true,
    dark: false,
    progress: "w-8",
    price: "$297",
    note: "per month",
    annualPrice: "$2,997",
    annualMonthly: "$297/mo billed annually",
    blurb: "The full system. Your site is designed free — you only pay once you like it.",
    features: [
      "Your new website, designed and built",
      "Website chat widget with pre-loaded FAQs",
      "Missed-call text-back",
      "Review automation",
      "Online booking",
      "Automatic follow-up sequences",
      "Unified inbox (mobile app included)",
      "Lead pipeline + full CRM",
      "Hosting, domain, security & unlimited small edits",
      "Google & Local Visibility Report",
    ],
  },
  {
    name: "Growth",
    stage: "The next step",
    emphasis: false,
    dark: false,
    progress: "w-16",
    price: "$497",
    note: "per month",
    annualPrice: "$4,997",
    annualMonthly: "$497/mo billed annually",
    blurb: "Everything in Essentials, plus AI that answers and books while you work.",
    features: [
      "Everything in Essentials",
      "AI chat widget trained on your business",
      "Voice AI receptionist (answers missed calls)",
      "AI books straight into your calendar",
      "Lead qualification before it reaches you",
      "Call transcripts and summaries in your CRM",
      "Monthly AI transcript review and retraining",
    ],
  },
  {
    name: "Scale",
    stage: "The destination",
    emphasis: false,
    dark: true,
    progress: "w-28",
    price: "$4,997",
    note: "per month + ad spend",
    annualPrice: "$49,997",
    annualMonthly: "$4,997/mo billed annually",
    blurb: "For businesses ready to buy demand, not just catch it.",
    features: [
      "Everything in Growth",
      "Google & Meta ad management",
      "Local SEO & Google Business Profile",
      "Landing pages built for each campaign",
      "Cost-per-booked-job reporting",
      "Database reactivation campaigns",
      "Dedicated account manager",
    ],
  },
];


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
      { property: "og:url", content: "https://lavendermarketingco.com/pricing" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/pricing" }],
  }),
  component: Pricing,
});

const heroFaqs = [
  {
    q: "How long does a web project take?",
    a: "You’ll typically receive your initial design demo within 48 hours, with most websites fully launched within 14 days — depending on how quickly we receive your content, feedback, and approvals.",
  },
  {
    q: "Why should you choose Lavender Marketing & Co.?",
    a: "You see a free demo design of your new homepage before you pay anything, with unlimited changes and a fixed price.",
  },
];

function PricingHero() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* aurora atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="aurora-blob -left-[10%] -top-[10%] h-[55%] w-[55%] opacity-40"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.22 292 / 0.55), transparent 70%)" }}
        />
        <div
          className="aurora-blob bottom-[5%] right-[-5%] h-[45%] w-[45%] opacity-35"
          style={{
            background: "radial-gradient(circle, oklch(0.72 0.18 300 / 0.5), transparent 70%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="aurora-blob left-[30%] top-[40%] h-[35%] w-[35%] opacity-30"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.24 288 / 0.45), transparent 70%)",
            animationDelay: "-12s",
          }}
        />
        <div className="hero-grid absolute inset-0 opacity-60" />
      </div>

      {/* curved connector */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-56 hidden h-[380px] w-[520px] -translate-x-24 text-muted-foreground/40 lg:block"
        viewBox="0 0 520 380"
        fill="none"
      >
        <path
          d="M40 40C160 -10 250 30 230 110C210 190 60 210 120 290C170 355 340 330 500 300"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="2 6"
          strokeLinecap="round"
        />
        <circle cx="232" cy="86" r="22" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-40 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8">
        <Reveal>
          <p className="text-base text-primary">Exclusive Growth Plan Pricing</p>
          <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[1.05] sm:text-6xl">
            See if your business{" "}
            <span className="text-gradient-brand">qualifies for a free 7-day website preview!</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            Answer four quick questions to see if you qualify for an exclusive trial on our flagship
            Growth Plan — featuring AI chat, an AI voice receptionist, and automatic lead booking.
          </p>

          <div className="mt-10 max-w-lg space-y-4">
            {heroFaqs.map((item, i) => (
              <div
                key={item.q}
                className="rounded-3xl bg-card p-6 shadow-[0_25px_50px_-30px_rgba(30,25,70,0.45)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-lg font-semibold">{item.q}</span>
                  <ChevronRight
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      open === i ? "rotate-90" : ""
                    }`}
                  />
                </button>
                {open === i && <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <QualifyWizard />
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  const locale = useLocale();
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const annual = billing === "annual";

  return (
    <>
      <PricingHero />

      <PreviewSteps />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-lavender-wash px-4 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-brand-deep">
              <span className="h-1 w-1 rounded-full bg-brand" />
              The roadmap
            </span>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Start with Essentials.{" "}
              <span className="italic text-brand-deep">Grow into the rest.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Every client starts with the free 7-day website preview on Essentials. Most add AI with
              Growth when the calls pick up, then move to Scale when they're ready to buy demand
              instead of just catching it.
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
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${
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
                      ? "border-nav-plum-foreground/25 text-nav-plum-foreground/75"
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
                      plan.dark ? "text-nav-plum-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    {annual ? "/yr" : plan.note}
                  </span>
                </div>
                {annual && (
                  <p
                    className={`mt-1 text-xs ${
                      plan.dark ? "text-nav-plum-foreground/60" : "text-muted-foreground"
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
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {(() => {
                const href = paymentLink(plan.name, locale);
                if (plan.name === "Scale") {
                  return (
                    <Button asChild size="lg" variant="outline" className="mt-8 w-full">
                      <a href={BOOKING_URL}>Let's Talk First</a>
                    </Button>
                  );
                }

                return (
                  <Button asChild size="lg" variant={plan.emphasis ? "default" : "outline"} className="mt-8 w-full">
                    {href ? (
                      <a href={href}>Get My Free Website Design</a>
                    ) : (
                      <Link to="/contact">Get My Free Website Design</Link>
                    )}
                  </Button>
                );
              })()}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Essentials and Growth are fixed monthly plans. Scale campaigns are customized based on your market, goals and advertising requirements.
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
