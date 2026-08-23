import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA, ILLU } from "@/data/site";

export const Route = createFileRoute("/online-booking")({
  head: () => serviceHead("/online-booking"),
  component: () => (
    <ServicePage
      slug="/online-booking"
      eyebrow="Online Booking"
      title="Appointments land on your calendar on autopilot"
      subtitle="Customers pick a time that's actually free. No phone tag, no “does Thursday work?” eating your afternoon."
      image={`${ILLU}/booking.png`}
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
