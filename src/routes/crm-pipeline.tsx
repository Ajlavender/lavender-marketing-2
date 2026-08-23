import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/crm-pipeline")({
  head: () => serviceHead("/crm-pipeline"),
  component: () => (
    <ServicePage
      slug="/crm-pipeline"
      eyebrow="Lead Pipeline + CRM"
      title="Always know who to call back and what was said"
      subtitle="Every contact, note and conversation in one place, with each lead sitting at the stage they're actually at."
      image={`${ILLU}/crm-pipeline.png`}
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
