import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/developers")({
  head: () => ({
    meta: [
      { title: "Hire Dedicated Web Developers | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Dedicated Lavender Marketing & Co. developers for custom builds, integrations, maintenance and ongoing website support.",
      },
      { property: "og:title", content: "Hire Dedicated Web Developers | Lavender Marketing & Co." },
      { property: "og:description", content: "Custom builds, integrations and ongoing website support." },
      { property: "og:url", content: "/developers" },
    ],
    links: [{ rel: "canonical", href: "/developers" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Developers"
      title="A development team on tap"
      subtitle="Custom builds, tricky integrations and the maintenance work nobody on your team wants to own."
      image={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
      intro={[
        "Sometimes a template won't cut it. Our developers build custom functionality, connect your website to the tools you already run on, and keep everything patched and fast.",
        "Work is scoped in writing, delivered in sprints, and handed over with documentation. You own the code.",
      ]}
      benefits={[
        { title: "Custom functionality", body: "Calculators, portals, booking flows and anything a plugin can't do properly." },
        { title: "Integrations", body: "CRM, ERP, payments, marketing automation and bespoke APIs." },
        { title: "Care plans", body: "Hosting, backups, security updates and rapid-response fixes." },
      ]}
      process={[
        { step: "01", title: "Scope", body: "A written spec with fixed pricing before a line of code is written." },
        { step: "02", title: "Build", body: "Sprint-based delivery with a staging site you can review any time." },
        { step: "03", title: "QA", body: "Cross-browser, cross-device and accessibility testing before release." },
        { step: "04", title: "Handover", body: "Documentation, training and optional ongoing support." },
      ]}
    />
  ),
});
