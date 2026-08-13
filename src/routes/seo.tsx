import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";
import { CLAY } from "@/data/clay";

export const Route = createFileRoute("/seo")({
  head: () => ({
    meta: [
      { title: "Smart SEO Services | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Smart SEO for small and mid-sized businesses: we cut the fluff and chase the rankings that actually generate enquiries and revenue.",
      },
      { property: "og:title", content: "Smart SEO Services | Lavender Marketing & Co." },
      {
        property: "og:description",
        content: "SEO focused on commercial intent, not vanity metrics.",
      },
      { property: "og:url", content: "/seo" },
    ],
    links: [{ rel: "canonical", href: "/seo" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="SEO"
      title="Smart SEO — maximum impact, zero fluff"
      subtitle="High-quality SEO that gives you the most bang for the buck. We skip the busywork and go straight for the terms that bring buyers."
      image={CLAY.seo}
      intro={[
        "Monthly reports full of impressions don't pay salaries. Our Smart SEO programme maps your keyword universe by intent, builds the money pages first, and fixes the technical issues holding the rest of the site back.",
        "You get fewer deliverables, tied tightly to enquiries and revenue — and a clear view of exactly what we did and why.",
      ]}
      benefits={[
        { title: "Intent-first keywords", body: "We prioritise buying terms over volume so rankings translate into enquiries." },
        { title: "Technical foundations", body: "Crawlability, speed, internal links and schema handled properly." },
        { title: "Content that ranks", body: "Pages written by humans who understand your offer and your customer." },
      ]}
      process={[
        { step: "01", title: "Audit", body: "Technical, content and competitor review with prioritised fixes." },
        { step: "02", title: "Strategy", body: "Intent-mapped keyword plan and a page-by-page roadmap." },
        { step: "03", title: "Execute", body: "Fixes shipped, pages written, links earned — monthly." },
        { step: "04", title: "Report", body: "Enquiries and revenue from organic, not vanity metrics." },
      ]}
    />
  ),
});
