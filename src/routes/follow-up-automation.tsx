import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/follow-up-automation")({
  head: () => ({
    meta: [
      { title: "Automatic Lead Follow-Up Sequences | Lavender Marketing & Co." },
      { name: "description", content: "Text and email follow-up sequences that chase every new lead until they book or opt out. Included in the $297/mo Lavender growth system." },
      { property: "og:title", content: "Automatic Lead Follow-Up Sequences | Lavender Marketing & Co." },
      { property: "og:description", content: "Text and email follow-up sequences that chase every new lead until they book or opt out. Included in the $297/mo Lavender growth system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/follow-up-automation" },
    ],
    links: [{ rel: "canonical", href: "/follow-up-automation" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Follow-Up Automation"
      title="Every lead followed up with, until they book or say no"
      subtitle="Automatic text and email sequences that keep working after you've gone back to the job site."
      image={`${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`}
      intro={[
        "Most leads aren't lost to competitors, they're lost to silence. One message goes unanswered, the week gets busy, and a good lead quietly goes cold.",
        "We build the follow-up you'd send if you had time: a handful of short, friendly messages spread over the first two weeks, stopping the moment they reply or book.",
      ]}
      benefits={[
        { title: "Persistent, not annoying", body: "Spaced, short and easy to opt out of — the way you'd actually follow up." },
        { title: "Stops when they reply", body: "The sequence ends the second the conversation becomes real." },
        { title: "Reactivates old leads", body: "We can run the same system across your existing contact list." },
      ]}
      process={[
        { step: "01", title: "Map the journey", body: "What happens after a form, a call and a chat." },
        { step: "02", title: "Write", body: "Message copy written in your voice and approved by you." },
        { step: "03", title: "Automate", body: "Sequences wired into your CRM triggers." },
        { step: "04", title: "Optimise", body: "We review reply rates monthly and adjust." },
      ]}
    />
  ),
});
