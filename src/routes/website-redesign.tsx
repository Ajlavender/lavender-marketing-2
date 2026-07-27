import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/website-redesign")({
  head: () => ({
    meta: [
      { title: "Website Redesign Services | Webtec" },
      {
        name: "description",
        content:
          "A conversion-focused website redesign for small and mid-sized businesses. See a free demo of your new site before you pay anything.",
      },
      { property: "og:title", content: "Website Redesign Services | Webtec" },
      {
        property: "og:description",
        content: "See a free demo of your redesigned website before you pay anything.",
      },
      { property: "og:url", content: "/website-redesign" },
    ],
    links: [{ rel: "canonical", href: "/website-redesign" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Website Redesign"
      title="A redesign that looks great and actually sells"
      subtitle="We rebuild your website around the way your customers really buy — then prove it with a free demo design before you commit."
      image={`${MEDIA}/2023/02/web-design-1024x1024.png`}
      intro={[
        "Most redesigns fail because they start with taste instead of evidence. We start with your analytics, your sales calls and the data from 3000+ customers we've worked with, then design around what makes people enquire.",
        "You get a modern, fast, mobile-first website with clear messaging, obvious calls to action and a content structure search engines understand. And you see a real demo of the homepage before you spend a dime.",
      ]}
      benefits={[
        {
          title: "Free demo design first",
          body: "We design your new homepage up front. Love it and we continue; don't and you walk away owing nothing.",
        },
        {
          title: "Built to convert",
          body: "Conversion paths, proof and offers are designed in from the first wireframe, not bolted on later.",
        },
        {
          title: "Fast and mobile-first",
          body: "Core Web Vitals, responsive layouts and accessible markup as standard on every build.",
        },
      ]}
      process={[
        { step: "01", title: "Discovery", body: "We learn your business, audience and goals in one focused call." },
        { step: "02", title: "Free demo", body: "We design your new homepage and walk you through the reasoning." },
        { step: "03", title: "Build", body: "Full design and development with weekly check-ins and clear timelines." },
        { step: "04", title: "Launch & support", body: "Migration, redirects, testing, and optional ongoing care." },
      ]}
    />
  ),
});
