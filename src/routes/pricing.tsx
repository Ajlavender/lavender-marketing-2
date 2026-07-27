import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBand, FaqAccordion, PageHero, RatingBar, Section, SectionHeading } from "@/components/site/sections";
import { MEDIA } from "@/data/site";

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

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Marketing-giant quality at freelancer prices"
        subtitle="Simple packages, no hidden fees, and a free demo design before you spend a dollar."
        image={`${MEDIA}/2023/02/financial-growth-1024x1024.png`}
      />

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
