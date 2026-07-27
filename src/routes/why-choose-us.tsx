import { createFileRoute } from "@tanstack/react-router";
import {
  Counters,
  CtaBand,
  PageHero,
  RatingBar,
  Section,
  SectionHeading,
} from "@/components/site/sections";
import { MEDIA, stats } from "@/data/site";

const reasons = [
  {
    title: "Free demo before you pay",
    body: "You see a real design of your new homepage first. 0% risk — love it or walk away.",
  },
  {
    title: "Marketing-giant quality, freelancer prices",
    body: "A full team of designers, developers, SEO specialists and copywriters for less than one senior hire.",
  },
  {
    title: "Hundreds of 5-star reviews",
    body: "Google, Facebook, Clutch and Trustpilot. We let the customers do the talking.",
  },
  {
    title: "Data from 3000+ customers",
    body: "Every design decision draws on what we've seen work across thousands of websites.",
  },
  {
    title: "Fast, documented process",
    body: "Clear timelines, weekly updates, simple tools. You always know where the project stands.",
  },
  {
    title: "Support that sticks around",
    body: "Optional care plans for hosting, security and content changes long after launch.",
  },
];

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Webtec | Website Redesign Agency" },
      {
        name: "description",
        content:
          "Free demo before you pay, hundreds of 5-star reviews, and data from 3000+ customers. Here's why businesses choose Webtec.",
      },
      { property: "og:title", content: "Why Choose Webtec" },
      { property: "og:description", content: "Free demo before you pay and hundreds of 5-star reviews." },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUs,
});

function WhyChooseUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us?"
        title="Don't decide on emotion, decide on data"
        subtitle="We let you try us out for free. Here's what you get when you do."
        image={`${MEDIA}/2023/02/businessman-launching-startup-768x768.png`}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          title="The cost of getting it wrong"
          subtitle="Many small businesses undervalue their website, leading to lost opportunities worth millions."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <RatingBar />
        <div className="mt-16">
          <Counters />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
