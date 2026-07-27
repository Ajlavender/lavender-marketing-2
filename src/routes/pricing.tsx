import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { CtaBand, FaqAccordion, RatingBar, Section, SectionHeading } from "@/components/site/sections";
import { QualifyWizard } from "@/components/site/QualifyWizard";
import { Reveal } from "@/components/site/Reveal";

const plans = [
  {
    name: "Starter",
    price: "$1,490",
    note: "one-off",
    blurb: "A sharp, modern 5-page website for businesses that need to look credible fast.",
    features: [
      "Free demo design first",
      "Up to 5 custom pages",
      "Mobile-first responsive build",
      "Basic on-page SEO",
      "Contact form & analytics",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Growth",
    price: "$3,490",
    note: "one-off",
    featured: true,
    blurb: "Our most popular redesign package — built around conversion, not just looks.",
    features: [
      "Everything in Starter",
      "Up to 15 custom pages",
      "Professional copywriting",
      "Conversion-focused layouts",
      "Technical SEO setup",
      "Blog & CMS training",
      "Unlimited revisions in build",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    note: "from $6,000",
    blurb: "For e-commerce, custom functionality and ongoing marketing support.",
    features: [
      "Everything in Growth",
      "Shopify or custom build",
      "Integrations & custom features",
      "Monthly SEO or paid ads",
      "CRO testing programme",
      "Dedicated account manager",
    ],
  },
];

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Website Redesign Pricing | Webtec" },
      {
        name: "description",
        content:
          "Transparent website redesign pricing from Webtec. See a free demo design of your new homepage before you pay anything.",
      },
      { property: "og:title", content: "Website Redesign Pricing | Webtec" },
      { property: "og:description", content: "Transparent packages, with a free demo before you pay." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const heroFaqs = [
  {
    q: "How long does a web project take?",
    a: "Most redesigns go live in about 45 days. Qualifying businesses get priority scheduling.",
  },
  {
    q: "Why should you choose Webtec?",
    a: "You see a free demo design of your new homepage before you pay anything, with unlimited changes and a fixed price.",
  },
];

function PricingHero() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-secondary">
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
          <p className="text-base text-primary">Special Pricing</p>
          <h1 className="mt-5 max-w-xl text-5xl font-bold leading-[1.05] sm:text-6xl">
            See if your business{" "}
            <span className="text-primary">qualifies for special pricing</span>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground">
            Answer four quick questions and we&apos;ll tell you in 24 hours whether you qualify for
            our reduced project rate — plus a free demo design of your new homepage.
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
  return (
    <>
      <PricingHero />

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                plan.featured
                  ? "border-primary bg-card shadow-xl ring-1 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Most popular
                </span>
              )}
              <h2 className="text-2xl">{plan.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{plan.blurb}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold">
                  {plan.price}
                </span>
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
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                Get a free demo
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices are indicative. Every project is quoted after a short discovery call.
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
