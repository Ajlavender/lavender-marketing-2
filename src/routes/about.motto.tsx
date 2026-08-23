import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHeading } from "@/components/site/sections";
import { ILLU } from "@/data/site";

const values = [
  {
    title: "Show, don't pitch",
    body: "We design a real demo before you pay. Decisions should be made on evidence, not on a sales call.",
  },
  {
    title: "Cut the fluff",
    body: "No padded retainers, no vanity reports. If a deliverable doesn't move enquiries, we don't sell it.",
  },
  {
    title: "Speak human",
    body: "No jargon, no mystery. You'll always know what we're doing, why, and what it costs.",
  },
  {
    title: "Own the outcome",
    body: "A pretty site that doesn't convert is a failure. We measure ourselves on your results.",
  },
];

export const Route = createFileRoute("/about/motto")({
  head: () => ({
    meta: [
      { title: "Our Company Motto | Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "The values behind Lavender Marketing & Co.: show don't pitch, cut the fluff, speak human, and own the outcome.",
      },
      { property: "og:title", content: "Our Company Motto | Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      { property: "og:description", content: "The values behind Lavender Marketing & Co.: show don't pitch, cut the fluff, speak human, and own the outcome." },
      { property: "og:url", content: "/about/motto" },
    ],
    links: [{ rel: "canonical", href: "/about/motto" }],
  }),
  component: Motto,
});

function Motto() {
  return (
    <>
      <PageHero
        eyebrow="Company Motto"
        title="Don't decide on emotion. Decide on data."
        subtitle="Four principles that decide how we design, how we price, and how we talk to you."
        image={`${ILLU}/founder.png`}
      />

      <Section>
        <SectionHeading title="What we" highlight="stand for" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-2xl">{v.title}</h3>
              <p className="mt-3 text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
