import { LOCALE_INFO, useLocale } from "@/lib/locale";
import { paymentLink } from "@/data/pricing";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight, Star } from "lucide-react";
import { CtaBand, FaqAccordion, RatingBar, Section, SectionHeading } from "@/components/site/sections";
import { QualifyWizard } from "@/components/site/QualifyWizard";
import { Reveal } from "@/components/site/Reveal";

const plans = [
  {
    name: "Essentials",
    price: "$297",
    note: "per month",
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
    price: "$497",
    note: "per month",
    featured: true,
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
    price: "$4,997",
    note: "per month + ad spend",
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
            <span className="text-gradient-brand">qualifies for our trial offer!</span>
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
  return (
    <>
      <PricingHero />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border ${
                plan.featured
                  ? "border-primary bg-card shadow-xl ring-1 ring-primary/20"
                  : "border-border bg-card"
              } ${plan.featured ? "px-8 pb-8 pt-14" : "p-8"}`}
            >
              {plan.featured && (
                <div className="absolute inset-x-0 top-0 flex items-center justify-center bg-gradient-to-r from-primary via-primary to-primary/80 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-lg">
                  <Star className="mr-2 h-3 w-3 fill-current" />
                  Most popular
                  <Star className="ml-2 h-3 w-3 fill-current" />
                </div>
              )}
              <h2 className="text-2xl">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{plan.blurb}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="text-sm font-semibold text-foreground/70">{LOCALE_INFO[locale].currency}</span>
                <span className="text-sm text-muted-foreground">{plan.note}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              {(() => {
                const href = paymentLink(plan.name, locale);
                const cls = `mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-accent hover:text-accent-foreground"
                }`;
                return href ? (
                  <a href={href} className={cls}>Get Started — {LOCALE_INFO[locale].currency}</a>
                ) : (
                  <Link to="/contact" className={cls}>Get My Free Website Design</Link>
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
