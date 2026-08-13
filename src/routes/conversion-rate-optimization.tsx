import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { MEDIA } from "@/data/site";
import { CLAY } from "@/data/clay";

export const Route = createFileRoute("/conversion-rate-optimization")({
  head: () => ({
    meta: [
      { title: "Conversion Rate Optimization (CRO) | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Turn more of your existing traffic into customers with Lavender Marketing & Co.'s conversion rate optimization service.",
      },
      { property: "og:title", content: "Conversion Rate Optimization (CRO) | Lavender Marketing & Co." },
      { property: "og:description", content: "Get more customers from the traffic you already have." },
      { property: "og:url", content: "/conversion-rate-optimization" },
    ],
    links: [{ rel: "canonical", href: "/conversion-rate-optimization" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Conversion Rate Optimization"
      title="More customers from the traffic you already have"
      subtitle="Doubling traffic is expensive. Doubling conversion rate is faster, cheaper, and makes every other marketing dollar work harder."
      image={CLAY.growth}
      intro={[
        "We look at where visitors hesitate, what they can't find, and which promises aren't believable — then fix those things in priority order.",
        "Offers, forms, proof, page speed and navigation all get tested. You get a documented lift, not opinions.",
      ]}
      benefits={[
        { title: "Conversion audit", body: "Heatmaps, session data and funnel analysis turned into a ranked fix list." },
        { title: "Offer design", body: "A low-risk, specific call to action that beats 'Contact Us' every time." },
        { title: "Testing programme", body: "Structured A/B tests on the pages that carry the most revenue." },
      ]}
      process={[
        { step: "01", title: "Measure", body: "Correct tracking first — most accounts are measuring the wrong thing." },
        { step: "02", title: "Diagnose", body: "Qualitative and quantitative research to find the real blockers." },
        { step: "03", title: "Test", body: "Prioritised experiments run one at a time so results are readable." },
        { step: "04", title: "Roll out", body: "Winners shipped permanently and documented for your team." },
      ]}
    />
  ),
});
