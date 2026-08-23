import { createFileRoute } from "@tanstack/react-router";
import { serviceHead } from "@/lib/seo";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA, ILLU } from "@/data/site";

export const Route = createFileRoute("/hosting-and-support")({
  head: () => serviceHead("/hosting-and-support"),
  component: () => (
    <ServicePage
      slug="/hosting-and-support"
      eyebrow="Hosting & Support"
      title="Hosting, domain, security and unlimited small edits"
      subtitle="We keep the site fast, online and up to date — and any small change you need is just a message to us."
      image={`${ILLU}/hosting-support.png`}
      intro={[
        "A website is not a one-time purchase. Prices change, staff change, seasons change — and most business owners either pay a developer every time or let the site go stale.",
        "Your plan includes hosting, domain and SSL management, security monitoring and unlimited small edits. You message us, we make the change.",
      ]}
      benefits={[
        { title: "Fast managed hosting", body: "Global delivery, backups and uptime monitoring handled." },
        { title: "Security and SSL", body: "Certificates, updates and monitoring, all on us." },
        { title: "Unlimited small edits", body: "Text, photos, prices, hours, new service pages — just ask." },
      ]}
      process={[
        { step: "01", title: "Migrate", body: "Domain, DNS and hosting moved over with no downtime." },
        { step: "02", title: "Secure", body: "SSL, backups and monitoring switched on." },
        { step: "03", title: "Maintain", body: "Updates and performance checks run continuously." },
        { step: "04", title: "Edit on request", body: "Message us any time; most edits are same or next day." },
      ]}
    />
  ),
});
