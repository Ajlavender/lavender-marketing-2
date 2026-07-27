import { createFileRoute } from "@tanstack/react-router";
import {
  CtaBand,
  GoogleReviews,
  PageHero,
  RatingBar,
  Section,
  SectionHeading,
  TestimonialGrid,
} from "@/components/site/sections";
import { MEDIA } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Webtec Reviews & Testimonials" },
      {
        name: "description",
        content:
          "Hundreds of 5-star reviews on Google, Facebook, Clutch and Trustpilot. Read what Webtec customers say about their website redesign.",
      },
      { property: "og:title", content: "Webtec Reviews & Testimonials" },
      { property: "og:description", content: "Hundreds of 5-star reviews from Webtec customers." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Our customers are raving about us"
        subtitle="Hundreds of 5-star reviews across Google, Facebook, Clutch and Trustpilot."
        image={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-768x768.png`}
      />
      <Section>
        <RatingBar />
        <div className="mt-10">
          <GoogleReviews />
        </div>
      </Section>
      <Section muted>
        <SectionHeading title="Join thousands of" highlight="happy customers" />
        <div className="mt-12">
          <TestimonialGrid />
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
