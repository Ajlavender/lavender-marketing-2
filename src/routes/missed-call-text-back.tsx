import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/missed-call-text-back")({
  head: () => ({
    meta: [
      { title: "Missed-Call Text-Back For Local Business | Lavender Marketing & Co." },
      { name: "description", content: "Automatically text back every missed call so callers stay with you instead of calling a competitor. Part of the $297/mo Lavender growth system." },
      { property: "og:title", content: "Missed-Call Text-Back For Local Business | Lavender Marketing & Co." },
      { property: "og:description", content: "Automatically text back every missed call so callers stay with you instead of calling a competitor. Part of the $297/mo Lavender growth system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/missed-call-text-back" },
    ],
    links: [{ rel: "canonical", href: "/missed-call-text-back" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Missed-Call Text-Back"
      title="Never lose a job to a missed call again"
      subtitle="If you can't pick up, the caller instantly gets a text from your business — so they keep talking to you instead of calling the next name on the list."
      image={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
      intro={[
        "Around 6 in 10 calls to a local business go unanswered, and most of those callers never call back. They just dial the next business.",
        "Missed-call text-back closes that hole. The second a call goes unanswered, an automatic text goes out asking how we can help — and the conversation continues in your inbox.",
      ]}
      benefits={[
        { title: "Instant response", body: "The text goes out in seconds, while they still have their phone in hand." },
        { title: "Written in your voice", body: "Not a robot message — a short, friendly text that sounds like your business." },
        { title: "Nothing to remember", body: "It runs whether you're on a job, driving or asleep." },
      ]}
      process={[
        { step: "01", title: "Connect", body: "We connect a texting number to your business line." },
        { step: "02", title: "Write", body: "We write the text-back message and any follow-ups." },
        { step: "03", title: "Test", body: "We call and miss on purpose until it's perfect." },
        { step: "04", title: "Track", body: "Every recovered call shows up in your monthly report." },
      ]}
    />
  ),
});
