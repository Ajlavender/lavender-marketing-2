import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/voice-ai-receptionist")({
  head: () => ({
    meta: [
      { title: "Voice AI Receptionist For Local Business | Lavender Marketing & Co." },
      { name: "description", content: "An AI receptionist that answers missed calls, qualifies callers and books appointments into your calendar. Available on the Growth and Scale plans." },
      { property: "og:title", content: "Voice AI Receptionist For Local Business | Lavender Marketing & Co." },
      { property: "og:description", content: "An AI receptionist that answers missed calls, qualifies callers and books appointments into your calendar. Available on the Growth and Scale plans." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/voice-ai-receptionist" },
    ],
    links: [{ rel: "canonical", href: "/voice-ai-receptionist" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Add-on"
      title="Voice AI receptionist that answers every call"
      subtitle="Picks up when you can't, has a natural conversation, answers questions and books the appointment straight into your calendar."
      image={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
      intro={[
        "Voicemail is where jobs go to die. A voice AI receptionist answers on the second ring, every time, including evenings and weekends.",
        "It greets the caller by your business name, answers common questions, takes the details and books the appointment — then sends you a transcript and summary.",
      ]}
      benefits={[
        { title: "Answers 24/7", body: "Overflow, after-hours or every call — your choice." },
        { title: "Books into your calendar", body: "Live availability, confirmations and reminders." },
        { title: "Full transcripts", body: "Every call summarised in your CRM timeline." },
      ]}
      process={[
        { step: "01", title: "Script", body: "Greeting, questions and escalation rules written with you." },
        { step: "02", title: "Voice", body: "Voice selected and the agent trained on your services." },
        { step: "03", title: "Route", body: "Forwarding rules set for overflow or after hours." },
        { step: "04", title: "Refine", body: "Call reviews each month to sharpen the script." },
      ]}
    />
  ),
});
