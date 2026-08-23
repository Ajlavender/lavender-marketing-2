import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { ILLU } from "@/data/site";

export const Route = createFileRoute("/unified-inbox")({
  head: () => serviceHead("/unified-inbox"),
  component: () => (
    <ServicePage
      slug="/unified-inbox"
      eyebrow="Unified Inbox"
      title="Every message in one inbox, on your phone"
      subtitle="Email, texts, Facebook and Instagram DMs, Google messages and website chat — all in one app, so nothing gets lost."
      image={`${ILLU}/unified-inbox.png`}
      intro={[
        "Leads arrive in five different places and each one has its own app, its own notifications and its own way of getting buried.",
        "We put every channel in a single inbox with a mobile app, so replying to a customer takes ten seconds no matter where they messaged from.",
      ]}
      benefits={[
        { title: "All channels, one thread", body: "Full history per contact, whatever channel they used." },
        { title: "Mobile app included", body: "Reply from the truck, the shop floor or the couch." },
        { title: "Team-ready", body: "Assign conversations to staff and leave internal notes." },
      ]}
      process={[
        { step: "01", title: "Connect channels", body: "Email, SMS, Facebook, Instagram, Google and chat." },
        { step: "02", title: "Set up app", body: "Installed on your phone and your team's phones." },
        { step: "03", title: "Rules", body: "Notifications, assignment and business hours configured." },
        { step: "04", title: "Train", body: "A short walkthrough so everyone knows how to use it." },
      ]}
    />
  ),
});
