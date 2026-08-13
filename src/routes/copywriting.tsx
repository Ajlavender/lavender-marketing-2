import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/copywriting")({
  head: () => ({
    meta: [
      { title: "Website Copywriting Services | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Website and landing page copywriting that sounds like you and converts like your best salesperson.",
      },
      { property: "og:title", content: "Website Copywriting Services | Lavender Marketing & Co." },
      { property: "og:description", content: "Copy that sounds like you and sells like your best rep." },
      { property: "og:url", content: "/copywriting" },
    ],
    links: [{ rel: "canonical", href: "/copywriting" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Copywriting"
      title="Words that do the selling for you"
      subtitle="Clear beats clever. We write website copy your customers understand instantly — and act on."
      image={`${MEDIA}/2023/02/hand-hold-marker-1024x1024.png`}
      intro={[
        "Great design with vague copy still loses the sale. We interview you, mine your reviews and sales calls, then write pages that say what you do, who it's for, and why it's worth it.",
        "Every claim gets backed by proof, every page ends with an obvious next step, and every word is written to be read on a phone.",
      ]}
      benefits={[
        { title: "Messaging framework", body: "One clear positioning statement your whole site and sales team can use." },
        { title: "Page-by-page copy", body: "Homepage, services, about, landing pages — structured for scanning." },
        { title: "SEO-aware", body: "Written for humans first, with keyword intent handled naturally." },
      ]}
      process={[
        { step: "01", title: "Interview", body: "A deep-dive call with you and, ideally, a customer or two." },
        { step: "02", title: "Framework", body: "Positioning, proof points and voice agreed before drafting." },
        { step: "03", title: "Draft", body: "Full page copy delivered in a shared doc with rationale." },
        { step: "04", title: "Refine", body: "Two rounds of revisions, then handover into the design." },
      ]}
    />
  ),
});
