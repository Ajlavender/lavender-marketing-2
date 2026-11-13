import { INTAKE_URL } from "@/data/pricing";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoStrip } from "@/components/site/sections";
import { MEDIA } from "@/data/site";
import { BeforeAfterShowcase } from "@/components/site/BeforeAfterShowcase";
import {
  ExploreWork,
  FinalCta,
  HomeFaq,
  HomeProblem,
  HomeReviews,
  HomeSteps,
  HomeSystem,
  ReportNudge,
  TransformationsIntro,
  ValueCalculator,
} from "@/components/site/HomeSections";
import { PlatformVideo } from "@/components/site/PlatformVideo";

const HERO_POSTER = `${MEDIA}/hero-poster.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "We design your new website for free. If you love it, launch for $297/mo — hosting, review engine, missed-call text-back and follow-up included.",
      },
      { property: "og:title", content: "Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co." },
      {
        property: "og:description",
        content:
          "We design your new website for free. If you love it, launch for $297/mo — hosting, review engine, missed-call text-back and follow-up included.",
      },
      { property: "og:url", content: "https://lavendermarketingco.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

      { property: "og:image", content: HERO_POSTER },
      { name: "twitter:image", content: HERO_POSTER },
    ],
    links: [
      { rel: "canonical", href: "https://lavendermarketingco.com/" },
      { rel: "preconnect", href: "https://assets.cdn.filesafe.space", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://assets.cdn.filesafe.space" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://lavendermarketingco.com/#webpage",
              url: "https://lavendermarketingco.com/",
              name: "Free Website Design + Review Engine for Local Businesses | Lavender Marketing & Co.",
              description:
                "We design your new website for free. If you love it, launch for $297/mo — hosting, review engine, missed-call text-back and follow-up included.",
              isPartOf: { "@id": "https://lavendermarketingco.com/#website" },
              about: { "@id": "https://lavendermarketingco.com/#organization" },
              inLanguage: "en",
            },
            ...[
              { name: "Website Design", url: "https://lavendermarketingco.com/website-redesign" },
              { name: "Pricing", url: "https://lavendermarketingco.com/pricing" },
              { name: "Free Google Report", url: "https://lavendermarketingco.com/growth-report" },
              { name: "Case Studies", url: "https://lavendermarketingco.com/projects" },
              { name: "Reviews", url: "https://lavendermarketingco.com/reviews" },
              { name: "About Lavender Marketing", url: "https://lavendermarketingco.com/about" },
              { name: "Contact", url: "https://lavendermarketingco.com/contact" },
            ].map((n) => ({
              "@type": "SiteNavigationElement",
              name: n.name,
              url: n.url,
            })),
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-secondary">
        {/* atmosphere */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 hero-grid opacity-70" />
          <div
            className="aurora-blob left-[-10%] top-[-12%] h-[38rem] w-[38rem] opacity-40"
            style={{ background: "radial-gradient(circle, var(--brand-glow), transparent 65%)" }}
          />
          <div
            className="aurora-blob right-[-14%] top-[6%] h-[34rem] w-[34rem] opacity-35"
            style={{
              background: "radial-gradient(circle, var(--brand), transparent 65%)",
              animationDelay: "-6s",
            }}
          />
          <div
            className="aurora-blob bottom-[-20%] left-[35%] h-[30rem] w-[30rem] opacity-25"
            style={{
              background: "radial-gradient(circle, var(--brand-deep), transparent 65%)",
              animationDelay: "-11s",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="mx-auto max-w-[110rem] px-5 pb-14 pt-36 sm:px-6 sm:pt-32 lg:min-h-0 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="mx-auto w-full text-center">


            <div className="relative">
              <h1 className="mx-auto max-w-5xl text-balance text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.04]">
                A better website is just the beginning.
              </h1>
              <p className="mx-auto mt-5 max-w-3xl text-balance text-xl font-semibold text-gradient-brand sm:text-2xl">
                Look professional. Respond faster. Turn more inquiries into customers.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Your next customer might be visiting your website or calling while you&apos;re busy. We
                design your new website for free, then connect it to tools that help you answer missed
                calls, follow up with interested customers, and make review requests part of your routine.
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-foreground">
                Love your design? Launch with Essentials from $297/month.
              </p>
              <div className="mt-9 flex justify-center">
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-base font-semibold">
                  <a href={INTAKE_URL}>
                    Get My Free Website Design
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-sm font-medium text-foreground">
                Free design preview. No payment required to review it.
              </p>
              <p className="mx-auto mt-1 max-w-md text-xs text-muted-foreground">
                You&apos;ll get a custom homepage design to review. The full website is built after you approve it.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" /> No payment for the preview
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand" /> No long-term contract
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-current text-brand" /> 4.8 on Google · 50+ reviews
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* scroll cue */}
        <div className="pointer-events-none flex justify-center pb-8">
          <span className="animate-float-soft inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
            Scroll to see more
            <ArrowRight className="h-3.5 w-3.5 rotate-90 text-brand" />
          </span>
        </div>
      </section>


      <HomeProblem />

      <PlatformVideo />

      <TransformationsIntro />
      <BeforeAfterShowcase />
      <ExploreWork />
      <LogoStrip />

      <HomeSteps />

      <HomeSystem />

      <ValueCalculator />

      <HomeReviews />

      <ReportNudge />

      <HomeFaq />

      <FinalCta />
    </>

  );
}
