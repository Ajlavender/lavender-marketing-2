import { createFileRoute } from "@tanstack/react-router";
import {
  Counters,
  CtaBand,
  PageHero,
  Section,
  SectionHeading,
  TestimonialGrid,
} from "@/components/site/sections";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About Webtec | Website Redesign Agency" },
      {
        name: "description",
        content:
          "Webtec was founded by our typical client – ourselves. Meet the website redesign agency helping small and mid-sized businesses convert more visitors.",
      },
      { property: "og:title", content: "About Webtec | Website Redesign Agency" },
      { property: "og:description", content: "The team behind thousands of website redesigns." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Founded by our typical client – ourselves"
        subtitle="We want to be the best, fastest, and most professional website redesign agency out there."
        image={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-768x768.png`}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg text-muted-foreground">
          <p>
            Webtec started because we needed exactly what we now sell: a website that looked the part,
            loaded fast and actually brought in enquiries — without an agency retainer the size of a
            mortgage.
          </p>
          <p>
            Today we're a distributed team of designers, developers, SEO specialists and copywriters
            working with small and mid-sized businesses across dozens of countries. We've analysed
            thousands of websites, and that data shapes every design decision we make.
          </p>
          <p>
            Our goal is simple: help businesses who want beautiful-looking websites that convert visitors
            into customers — and let them see the result before they pay.
          </p>
        </div>
      </Section>

      <Section muted>
        <Counters />
      </Section>

      <Section>
        <SectionHeading title="The people we" highlight="work for" />
        <div className="mt-12">
          <TestimonialGrid limit={6} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
