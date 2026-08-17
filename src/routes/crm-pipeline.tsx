import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/crm-pipeline")({
  head: () => ({
    meta: [
      { title: "Lead Pipeline And CRM For Local Business | Lavender Marketing & Co." },
      { name: "description", content: "A simple lead pipeline and full CRM that shows every lead's stage, history and next step. Included in the $297/mo Lavender growth system." },
      { property: "og:title", content: "Lead Pipeline And CRM For Local Business | Lavender Marketing & Co." },
      { property: "og:description", content: "A simple lead pipeline and full CRM that shows every lead's stage, history and next step. Included in the $297/mo Lavender growth system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/crm-pipeline" },
    ],
    links: [{ rel: "canonical", href: "/crm-pipeline" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Lead Pipeline + CRM"
      title="Always know who to call back and what was said"
      subtitle="Every contact, note and conversation in one place, with each lead sitting at the stage they're actually at."
      image={`${MEDIA}/2023/02/financial-growth-1024x1024.png`}
      intro={[
        "Notes on your phone, quotes in your email, numbers on a scrap of paper — that's where revenue leaks.",
        "We set up a simple pipeline built around how your business actually sells, so you can see at a glance who's new, who's quoted, who's booked and who needs chasing today.",
      ]}
      benefits={[
        { title: "One record per customer", body: "Calls, texts, emails, quotes and notes in one timeline." },
        { title: "Visual pipeline", body: "Drag a lead from new to quoted to won in one tap." },
        { title: "Nothing forgotten", body: "Automatic tasks and reminders on every stage." },
      ]}
      process={[
        { step: "01", title: "Map your sales steps", body: "We copy how you already sell, not a template." },
        { step: "02", title: "Import contacts", body: "Existing customers and leads brought in." },
        { step: "03", title: "Automate stages", body: "Follow-ups and tasks attached to each stage." },
        { step: "04", title: "Review", body: "Pipeline value and win rate in your monthly report." },
      ]}
    />
  ),
});
