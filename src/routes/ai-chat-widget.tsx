import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/ai-chat-widget")({
  head: () => serviceHead("/ai-chat-widget"),
  component: () => (
    <ServicePage
      slug="/ai-chat-widget"
      eyebrow="Add-on"
      title="AI chat widget trained on your business"
      subtitle="Answers real questions, qualifies the lead and books the job 24/7 — an upgrade from the standard FAQ widget."
      image={`${ILLU}/chat-widget.png`}
      intro={[
        "The standard widget answers the questions we pre-load. The AI widget answers anything — because it's trained on your services, service area, pricing approach and policies.",
        "It holds a real conversation, qualifies the lead, and either books them in or hands a warm, summarised conversation to you.",
      ]}
      benefits={[
        { title: "Trained on your business", body: "Your services, pricing rules, area and policies, not generic answers." },
        { title: "Qualifies while you sleep", body: "Asks the questions you'd ask before quoting." },
        { title: "Books directly", body: "Connected to your calendar, so it can close the loop." },
      ]}
      process={[
        { step: "01", title: "Feed it", body: "We train it on your site, docs and FAQs." },
        { step: "02", title: "Set guardrails", body: "What it can say, what it must escalate." },
        { step: "03", title: "Launch", body: "Live on the site with human handoff enabled." },
        { step: "04", title: "Improve", body: "Monthly transcript reviews and retraining." },
      ]}
    />
  ),
});
