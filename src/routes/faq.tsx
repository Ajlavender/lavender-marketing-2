import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, FaqAccordion, PageHero, Section } from "@/components/site/sections";
import { faqs, MEDIA } from "@/data/site";
import { CLAY } from "@/data/clay";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Website Redesign FAQ | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Answers to the most common questions about website redesign cost, timelines, free demos, SEO and ongoing support.",
      },
      { property: "og:title", content: "Website Redesign FAQ | Lavender Marketing & Co." },
      { property: "og:description", content: "Costs, timelines, free demos, SEO and support — answered." },
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
        image={CLAY.developer}
      />
      <Section>
        <FaqAccordion />
      </Section>
      <CtaBand />
    </>
  );
}
