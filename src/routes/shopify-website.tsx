import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";
import { CLAY } from "@/data/clay";

export const Route = createFileRoute("/shopify-website")({
  head: () => ({
    meta: [
      { title: "Shopify & E-commerce Redesign | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Shopify and e-commerce storefront redesigns built to sell — migrated safely with redirects, tracking and checkout testing.",
      },
      { property: "og:title", content: "Shopify & E-commerce Redesign | Lavender Marketing & Co." },
      { property: "og:description", content: "Storefronts built to sell, migrated without losing revenue." },
      { property: "og:url", content: "/shopify-website" },
    ],
    links: [{ rel: "canonical", href: "/shopify-website" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="E-commerce Redesign"
      title="Shopify stores built to sell, not just to look pretty"
      subtitle="A store redesign is an engineering event. We protect your rankings and revenue through launch day."
      image={CLAY.webDesign}
      intro={[
        "Product pages, collection filtering and checkout carry your revenue. We redesign them around real shopper behaviour and test on real devices before anything goes live.",
        "URL maps are frozen, redirects set, structured data re-verified and analytics validated — so launch day is boring, in the best possible way.",
      ]}
      benefits={[
        { title: "Conversion-led storefront", body: "PDPs, collections and cart designed to reduce hesitation at every step." },
        { title: "Safe migration", body: "301 redirects, preserved structured data and no ranking cliff." },
        { title: "Apps kept lean", body: "We audit your app stack and remove what's slowing the store down." },
      ]}
      process={[
        { step: "01", title: "Store audit", body: "Analytics, app stack, speed and funnel drop-off review." },
        { step: "02", title: "Design", body: "Templates designed for your catalogue, not a generic theme demo." },
        { step: "03", title: "Build & test", body: "Real-device checkout testing with live payment methods." },
        { step: "04", title: "Soft launch", body: "Phased cut-over while we watch add-to-cart and completion rates." },
      ]}
    />
  ),
});
