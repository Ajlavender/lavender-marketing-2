import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/digital-ads")({
  head: () => ({
    meta: [
      { title: "Digital Ads & Paid Media | Webtec" },
      {
        name: "description",
        content:
          "Google and social advertising managed by Webtec — campaigns built to book meetings, not burn budget.",
      },
      { property: "og:title", content: "Digital Ads & Paid Media | Webtec" },
      { property: "og:description", content: "Paid campaigns built to book meetings, not burn budget." },
      { property: "og:url", content: "/digital-ads" },
    ],
    links: [{ rel: "canonical", href: "/digital-ads" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Digital ADs"
      title="A shot of espresso for your brand"
      subtitle="Our digital advertising gives you the energy and buzz to power through the competition — and the tracking to prove it worked."
      image={`${MEDIA}/2023/03/boy-doing-social-media-marketing-1024x1024.png`}
      intro={[
        "We book 250 meetings a month for our own sales team with ads, SEO and strong conversion rates. The same playbook runs your campaigns.",
        "Search, social and remarketing, wired into your CRM so marketing spend and sales outcomes finally live in the same report.",
      ]}
      benefits={[
        { title: "Full-funnel campaigns", body: "Search for demand capture, social for demand creation, remarketing to close." },
        { title: "Landing pages included", body: "We build and test the pages your ads point at — a huge lever most agencies ignore." },
        { title: "Connected data", body: "Conversion tracking and CRM sync so you see cost per customer, not cost per click." },
      ]}
      process={[
        { step: "01", title: "Account audit", body: "We review spend, structure and tracking before touching anything." },
        { step: "02", title: "Build", body: "Campaigns, creative and landing pages set up from scratch where needed." },
        { step: "03", title: "Optimise", body: "Weekly bid, budget and creative iteration against pipeline." },
        { step: "04", title: "Scale", body: "Push budget into what works and cut what doesn't, transparently." },
      ]}
    />
  ),
});
