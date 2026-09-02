import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewSlider } from "@/components/site/ReviewSlider";
import { Reveal } from "@/components/site/Reveal";
import { googleReviews, ILLU } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Read 5-star Lavender Marketing & Co. reviews on Google, plus what local business owners say about their free-design-first website and growth system.",
      },
      { property: "og:title", content: "Reviews | Lavender Marketing & Co." },
      {
        property: "og:description",
        content: "Read 5-star Lavender Marketing & Co. reviews on Google, plus what local business owners say about their free-design-first website and growth system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://lavendermarketingco.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/reviews" }],
  }),
  component: Reviews,
});

const demoBtn =
  "h-9 rounded-full bg-[linear-gradient(90deg,#8b5cf6_0%,#6d33d6_100%)] px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-background shadow-[0_12px_30px_-14px_rgba(109,51,214,0.9)] hover:opacity-90";

function DemoButton({
  label = "Get My Free Website Design",
  to,
  href = "https://links.lavendersuitepro.com/widget/booking/sElYCoHQVkd1yhfDrM4l",
}: {
  label?: string;
  to?: string;
  href?: string;
}) {
  return (
    <Button asChild className={demoBtn}>
      {to ? (
        <Link to={to}>
          {label}
          <ArrowRight className="ml-2 h-3 w-3" />
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer">
          {label}
          <ArrowRight className="ml-2 h-3 w-3" />
        </a>
      )}
    </Button>
  );
}



function Reviews() {
  return (
    <div className="overflow-hidden bg-secondary">
      {/* Hero */}
      <section className="pb-14 pt-36">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Reveal from="left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Words That Warm Our Hearts
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-[1.1] sm:text-5xl">
              See What People
              <br />
              <span className="text-primary">Say About Us.</span>
            </h1>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Real reviews from real business owners. No filters, no scripts — just the honest word
              on what it's like to work with Lavender Marketing & Co..
            </p>
          </Reveal>
          <Reveal from="right" delay={120}>
            <img
              src={`${ILLU}/reviews.webp`}
              alt="Customer giving Lavender Marketing & Co. a five star rating"
              className="mx-auto w-full max-w-xs"
            />
          </Reveal>
        </div>
      </section>

      {/* Google reviews */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal from="left">
            <img
              src={`${ILLU}/reporting.webp`}
              alt="Customers giving a five star rating on a phone"
              loading="lazy"
              className="mx-auto w-full max-w-sm"
            />
          </Reveal>
          <Reveal from="right" delay={110}>
            <img
              src="/logos/google.svg"
              alt="Google"
              loading="lazy"
              className="h-6 w-auto object-contain"
            />
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              See What They Say On <span className="text-primary">Google.</span>
            </h2>
            <div className="mt-5">
              <DemoButton />
            </div>
            <div className="mt-8">
              <ReviewSlider reviews={googleReviews} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facebook recommendations */}
      <section className="py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <Reveal from="left">
            <img
              src="/facebook-logo.svg"
              alt="Facebook"
              loading="lazy"
              className="h-6 w-auto object-contain"
            />
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              See What They Say On <span className="text-primary">Facebook.</span>
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Read recommendations from local business owners on our Facebook page.
            </p>
            <div className="mt-5">
              <Button asChild>
                <a href="https://www.facebook.com/LavenderMarketingCompany" target="_blank" rel="noreferrer">
                  See recommendations on Facebook
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal from="right" delay={110}>
            <img
              src={`${ILLU}/founder.webp`}
              alt="Businessman holding five stars"
              loading="lazy"
              className="mx-auto w-full max-w-xs"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
