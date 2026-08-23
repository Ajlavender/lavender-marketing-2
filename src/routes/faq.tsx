import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, FaqAccordion, PageHero, Section } from "@/components/site/sections";
import { faqs, MEDIA, ILLU } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Answers about free website design, the $297/mo launch plan, timelines, hosting, review engine, missed-call text-back and ongoing support.",
      },
      { property: "og:title", content: "FAQ | Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      { property: "og:description", content: "Answers about free website design, the $297/mo launch plan, timelines, hosting, review engine, missed-call text-back and ongoing support." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Don't be shy. Ask away!"
        subtitle="Everything people ask us before starting a website redesign."
        image={`${ILLU}/founder.png`}
      />
      <Section>
        <FaqAccordion />
      </Section>
      <CtaBand />
    </>
  );
}
