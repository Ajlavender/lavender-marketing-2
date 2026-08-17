import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/online-booking")({
  head: () => ({
    meta: [
      { title: "Online Booking For Local Business Websites | Lavender Marketing & Co." },
      { name: "description", content: "Let customers book straight into your calendar from your website, with reminders that cut no-shows. Included in the $297/mo growth system." },
      { property: "og:title", content: "Online Booking For Local Business Websites | Lavender Marketing & Co." },
      { property: "og:description", content: "Let customers book straight into your calendar from your website, with reminders that cut no-shows. Included in the $297/mo growth system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/online-booking" },
    ],
    links: [{ rel: "canonical", href: "/online-booking" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Online Booking"
      title="Appointments land on your calendar on autopilot"
      subtitle="Customers pick a time that's actually free. No phone tag, no “does Thursday work?” eating your afternoon."
      image={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
      intro={[
        "Every booking made by phone costs you two or three interruptions. Every booking made online costs you nothing.",
        "We connect a booking calendar to your site, your chat widget and your follow-up messages, so any lead can lock in a time in about twenty seconds.",
      ]}
      benefits={[
        { title: "Synced to your real calendar", body: "Only genuinely free slots are offered, with buffers you control." },
        { title: "Automatic reminders", body: "Text and email reminders cut no-shows dramatically." },
        { title: "Bookable from everywhere", body: "Website, chat, follow-up texts and your Google profile." },
      ]}
      process={[
        { step: "01", title: "Map availability", body: "Hours, service types, travel time and buffers." },
        { step: "02", title: "Connect calendar", body: "Google or Outlook, two-way synced." },
        { step: "03", title: "Embed", body: "Booking added to the site, chat and messages." },
        { step: "04", title: "Reminders", body: "Reminder sequence turned on and tested." },
      ]}
    />
  ),
});
