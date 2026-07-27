import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, FaqAccordion, PageHero, Section } from "@/components/site/sections";
import { faqs, MEDIA } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Website Redesign FAQ | Webtec" },
      {
        name: "description",
        content:
          "Answers to the most common questions about website redesign cost, timelines, free demos, SEO and ongoing support.",
      },
      { property: "og:title", content: "Website Redesign FAQ | Webtec" },
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
        image={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
      />
      <Section>
        <FaqAccordion />
      </Section>
      <CtaBand />
    </>
  );
}
