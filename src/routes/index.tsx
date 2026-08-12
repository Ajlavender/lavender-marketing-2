import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";
import { cn } from "@/lib/utils";
import {
  Counters,
  CtaBand,
  GoogleReviews,
  LogoStrip,
  ProjectGrid,
  RatingBar,
  Section,
} from "@/components/site/sections";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";
import { MEDIA, stats } from "@/data/site";
import { PainPointCards } from "@/components/site/PainPointCards";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { CatchSection } from "@/components/site/CatchSection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lavender Marketing & Co. | Website Redesign & SEO Services" },
      {
        name: "description",
        content:
          "Website redesign agency specializing in web redesign & SEO for small and medium-sized businesses. Get a free website demo before you decide.",
      },
      { property: "og:title", content: "Lavender Marketing & Co. | Website Redesign & SEO Services" },
      {
        property: "og:description",
        content:
          "Get a free website redesign demo before you decide. Web design, SEO and paid ads for small and mid-sized businesses.",
      },
      { property: "og:url", content: "/" },
      {
        property: "og:image",
        content:
          "https://www.trywebtec.com/wp-content/uploads/2023/02/man-seating-on-beanbag-and-work-on-laptop.png",
      },
      {
        name: "twitter:image",
        content:
          "https://www.trywebtec.com/wp-content/uploads/2023/02/man-seating-on-beanbag-and-work-on-laptop.png",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="relative animate-fade-in">
            <p className="mb-4 text-base text-muted-foreground">
              Free website design + automated review engine
            </p>
            <h1
              className="animate-fade-in text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
              style={{ animationDelay: "80ms", animationFillMode: "both" }}
            >
              We build your new website <span className="text-primary">for free.</span>
            </h1>
            <h2
              style={{ animationDelay: "180ms", animationFillMode: "both" }}
              className="animate-fade-in mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-[2.25rem]">
              You only pay $297/mo if you like it.
            </h2>
            <p
              style={{ animationDelay: "240ms", animationFillMode: "both" }}
              className="animate-fade-in mt-5 max-w-xl text-lg text-muted-foreground"
            >
              Built for local service businesses. The $297 covers hosting, the review engine that
              keeps you #1 on Google, missed-call text-back and follow-up. No setup fee, no
              contract, no paying before you see the design.
            </p>

            <div
              className="animate-fade-in mt-10 max-w-xl"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <LeadForm submitLabel="Get My Free Website Design" />
            </div>

            {/* curved connector line to the video card */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-[-9rem] top-[7.5rem] hidden h-24 w-40 text-foreground/25 xl:block"
              viewBox="0 0 160 96"
              fill="none"
            >
              <path
                d="M0 4C60 4 100 30 158 88"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Video card */}
          <div
            style={{ animationDelay: "220ms", animationFillMode: "both" }}
            className="animate-scale-in overflow-hidden rounded-2xl bg-black shadow-[0_30px_80px_-40px_rgba(16,18,24,0.6)]">
            <div className="flex items-start justify-between gap-4 px-6 pb-4 pt-6">
              <p className="text-2xl font-bold text-white sm:text-[1.6rem]">
                What do you want to fix first? 🌿
              </p>
              <span aria-hidden="true" className="mt-1 text-xl text-white/70">
                ✕
              </span>
            </div>
            <div className="relative">
              <img
                src={`${MEDIA}/2023/05/representacion-3d-concepto-alojamiento-sitios-web-scaled.jpg`}
                alt="Lavender Marketing & Co. intro video"
                className="h-[20rem] w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 ring-2 ring-white/80 backdrop-blur-sm transition hover:scale-105">
                  <Play className="ml-1 h-8 w-8 fill-white text-white" />
                </span>
              </div>
              {/* chat overlay */}
              <div className="absolute inset-x-0 bottom-0 px-8 pb-4">
                <p className="mb-3 text-center text-base text-white/80">Choose 1 of 3 options</p>
                <div className="space-y-3">
                  {[
                    ["A", "Free website design 👷"],
                    ["B", "More Google reviews ⭐"],
                    ["C", "Stop missing calls 📱"],
                  ].map(([key, label], i) => (
                    <div
                      key={key}
                      className={cn(
                        "flex items-center gap-3 rounded-full px-3 py-2 text-white",
                        i < 2 ? "bg-white/15 backdrop-blur-sm" : "",
                      )}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#3b3b4f] text-sm font-semibold">
                        {key}
                      </span>
                      <span className="text-lg font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="px-6 pb-4 pt-5 text-center text-lg text-white">
              Pick one and we&apos;ll show you exactly how it works.
            </p>

            <div className="flex items-center justify-center gap-1.5 bg-[#1a1a1a] py-3">
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-white text-[9px] font-bold text-black">
                w
              </span>
              <span className="text-sm font-semibold text-white">Lavender</span>
            </div>
          </div>
        </div>
      </section>


      <LogoStrip />

      {/* Pain points — the four leak points */}
      <Section className="pt-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-12">
          <Reveal from="left" className="lg:sticky lg:top-32">
            <p className="max-w-sm text-base text-primary">The real issue</p>
            <h2 className="mt-4 max-w-md text-4xl font-bold leading-[1.1] sm:text-5xl">
              Most local businesses don&apos;t have a traffic problem. They have a{" "}
              <span className="text-primary">follow-up and conversion problem.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              You can have great work, referrals and word of mouth. But if your website is weak,
              your calls get missed, your follow-up is slow, or your reviews aren&apos;t being
              captured, good leads quietly disappear.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button asChild size="lg">
                <Link to="/contact">Get my free design</Link>
              </Button>
              <Link
                to="/pricing"
                className="border-b border-primary pb-1 text-sm font-medium text-primary"
              >
                See the $297 plan
              </Link>
            </div>
          </Reveal>

          <PainPointCards />
        </div>
      </Section>

      <SystemLoop />

      {/* Reviews */}
      <Section muted className="py-24">
        <Reveal>
          <p className="text-center text-base font-semibold text-foreground">
            Rated by 50+ local business owners
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
            The review engine that turns happy customers into{" "}
            <span className="text-primary">Google rankings.</span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-16">
          <RatingBar />
        </Reveal>
        <Reveal delay={200} className="mt-16">
          <GoogleReviews />
        </Reveal>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">See all reviews</Link>
          </Button>
        </div>
      </Section>

      {/* Sexy and affordable */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal scale className="relative rounded-[2rem] bg-[linear-gradient(115deg,#1d1f4a_0%,#231f57_45%,#6d33d6_100%)] px-8 py-14 text-background sm:px-14 lg:px-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
              <div>
                <p className="text-xl font-medium text-[#a78bfa]">
                  The Quality of Marketing Giants At The Price of Freelancers.
                </p>
                <h2 className="mt-3 text-5xl font-bold sm:text-6xl">Sexy And Affordable.</h2>
                <p className="mt-8 max-w-xl text-background/85">
                  We're on a mission to be the coolest cats in the web game. We whip up website
                  redesigns so sexy you'll want to marry them with services so affordable you can
                  keep your second mortgage.
                </p>
                <p className="mt-6 font-bold">The best part?</p>
                <p className="mt-1 max-w-xl text-background/85">
                  We make sure your site is a love magnet for customers who can't resist your charm.
                  So if you're a small or mid-sized biz who wants to look good, get found, and rule
                  the online jungle, we're your go-to team!
                </p>
                <p className="mt-6 text-background/85">
                  Get a free website redesign by dropping your details below.
                </p>
                <div className="mt-6 max-w-xl">
                  <LeadForm variant="dark" fields="leadInline" submitLabel="go!" />
                </div>
              </div>
              <div className="relative">
                <img
                  src={`${MEDIA}/2023/02/businessman-giving-analysis-presentation-1024x1024.png`}
                  alt="Businessman giving analysis presentation"
                  loading="lazy"
                  className="mx-auto w-full max-w-lg lg:absolute lg:-bottom-24 lg:left-1/2 lg:w-[125%] lg:max-w-none lg:-translate-x-1/2"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <Reveal>
          <p className="text-center text-base text-muted-foreground">
            Do You Have Limited Time, Knowledge, and Budget?
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
            Many small businesses undervalue their website, leading to{" "}
            <span className="text-primary">lost opportunities worth millions.</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-20 grid max-w-5xl gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className={cn(i === 3 && "lg:col-start-2")}>
              <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                <CountUp value={`${s.value}${s.suffix ?? ""}`} />
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="mx-auto mt-16 max-w-3xl text-center text-3xl font-bold sm:text-4xl">
          We've analyzed thousands of websites to ensure this{" "}
          <span className="text-primary">won't happen to you.</span>
        </Reveal>
      </Section>

      {/* Projects */}
      <Section muted>
        <Reveal>
          <p className="text-lg font-semibold text-primary">
            A Website Redesign Agency With A Black Belt In Style
          </p>
          <h2 className="mt-3 text-5xl font-bold sm:text-6xl">Cutting-Edge Creations</h2>
        </Reveal>
        <Reveal delay={140} className="mt-14">
          <ProjectGrid limit={3} />
        </Reveal>
        <div className="mt-14 text-center">
          <Button asChild size="lg" className="px-10 uppercase tracking-wide">
            <Link to="/projects">
              See all projects <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      <CatchSection />


      {/* No strings attached */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="left" scale>
            <img
              src={`${MEDIA}/2023/02/businessman-doing-work-on-working-desk-1-1024x1024.png`}
              alt="Businessman doing work on working desk"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <h2 className="text-4xl font-bold sm:text-5xl">
              No Strings Attached. Seriously. <span className="text-primary">0% risk.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              You will either love your new website redesign or don't pay a dime! You've got nothing
              to lose.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a
                href="https://calendly.com/webtec-website/free-webdesign-sketch"
                target="_blank"
                rel="noreferrer"
              >
                Free Lead Boost Tips
              </a>
            </Button>
          </Reveal>
        </div>

        <div className="mt-20">
          <Counters />
        </div>
      </Section>

      {/* Testimonials */}
      <Section muted className="py-24">
        <Reveal>
          <p className="text-center text-lg text-foreground">
            Our Experience Is <span className="text-primary">Your Advantage.</span>
          </p>
          <h2 className="mt-3 text-center text-5xl font-bold text-[#1f2150] sm:text-6xl">
            Join Thousands Of Happy Customers
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-14">
          <TestimonialCarousel />
        </Reveal>
      </Section>


      <CtaBand />
    </>
  );
}
