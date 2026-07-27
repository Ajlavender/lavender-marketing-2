import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/site/LeadForm";
import { cn } from "@/lib/utils";
import {
  Counters,
  CtaBand,
  FaqAccordion,
  ExpertiseBand,
  GoogleReviews,
  LogoStrip,
  ProjectGrid,
  RatingBar,
  Section,
  SectionHeading,
  ServicesGrid,
  TestimonialGrid,
} from "@/components/site/sections";
import { MEDIA, painPoints, stats } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webtec | Website Redesign & SEO Services" },
      {
        name: "description",
        content:
          "Website redesign agency specializing in web redesign & SEO for small and medium-sized businesses. Get a free website demo before you decide.",
      },
      { property: "og:title", content: "Webtec | Website Redesign & SEO Services" },
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
      <section className="relative overflow-hidden border-b border-border bg-secondary">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-gradient-brand opacity-20 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Web Development, SEO &amp; Paid Ads Agency
            </p>
            <h1 className="text-5xl sm:text-6xl">
              Website Redesign
              <span className="mt-2 block text-3xl font-semibold sm:text-4xl">
                Get a <span className="text-primary">Free</span> Website Redesign Before You Decide
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Our services rely on insights gained from 3000+ customers' data. We design a real demo of
              your new website first — you only pay if you love it.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <LeadForm />
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-deep p-6 shadow-xl">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-background/70">
              Up for a whole new experience?
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl">
              <img
                src={`${MEDIA}/2023/02/man-seating-on-beanbag-and-work-on-laptop.png`}
                alt="Designer working on a website redesign"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-sm text-background/70">
              See how a free Webtec demo redesign works — in 90 seconds.
            </p>
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* Pain points */}
      <Section>
        <SectionHeading
          title="Website Redesign so you"
          highlight="Thrive Online."
          subtitle="Whatever is holding your website back, there's a fix — and you can see it before you spend a dime."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((p, i) => (
            <div
              key={p.title}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1",
                i % 2 === 1 && "lg:translate-y-8",
              )}
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                className="h-24 w-24 rounded-xl object-cover"
              />
              <h3 className="mt-5 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>


      {/* Services */}
      <Section muted>
        <SectionHeading
          eyebrow="What we do"
          title="The Quality of Marketing Giants At The Price of"
          highlight="Freelancers."
        />
        <div className="mt-14">
          <ServicesGrid />
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeading
          title="Our customers are raving about us like we're"
          highlight="the latest viral TikTok dance."
        />
        <div className="mt-12">
          <RatingBar />
        </div>
        <div className="mt-8">
          <GoogleReviews />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">See all reviews</Link>
          </Button>
        </div>
      </Section>

      {/* Sexy and affordable */}
      <Section muted>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={`${MEDIA}/2023/02/businessman-launching-startup-768x768.png`}
            alt="Launching a redesigned website"
            loading="lazy"
            className="mx-auto w-full max-w-md rounded-2xl"
          />
          <div>
            <h2 className="text-4xl sm:text-5xl">
              Sexy And <span className="text-primary">Affordable.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              We're on a mission to be the coolest cats in the web game. We whip up website redesigns so
              sexy you'll want to marry them, with services so affordable you can keep your second
              mortgage.
            </p>
            <p className="mt-4 text-muted-foreground">
              The best part? We make sure your site is a love magnet for customers who can't resist your
              charm. So if you're a small or mid-sized biz who wants to look good, get found, and rule the
              online jungle, we're your go-to team!
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact">Get a free website redesign</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <SectionHeading
          title="Do You Have Limited Time, Knowledge, and Budget?"
          subtitle="Many small businesses undervalue their website, leading to lost opportunities worth millions."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary">
                {s.value}
                {s.suffix}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-2xl">
          We've analyzed thousands of websites to ensure this{" "}
          <span className="text-primary">won't happen to you.</span>
        </p>
      </Section>

      {/* Projects */}
      <Section muted>
        <SectionHeading title="A Website Redesign Agency With A" highlight="Black Belt In Style" />
        <div className="mt-14">
          <ProjectGrid limit={4} />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/projects">See all projects</Link>
          </Button>
        </div>
      </Section>

      {/* Guarantee */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary bg-card p-10 text-center">
          <h2 className="text-4xl">
            No Strings Attached. <span className="text-primary">Seriously.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            0% risk. You will either love your new website redesign or don't pay a dime! You've got
            nothing to lose.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Claim your free demo</Link>
          </Button>
        </div>
        <div className="mt-16">
          <Counters />
          <p className="mt-8 text-center text-2xl">
            Our Experience Is <span className="text-primary">Your Advantage.</span>
          </p>
        </div>
      </Section>

      {/* Testimonials */}
      <Section muted>
        <SectionHeading title="Join Thousands Of" highlight="Happy Customers" />
        <div className="mt-14">
          <TestimonialGrid limit={6} />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/reviews">Read more reviews</Link>
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading title="Don't Be Shy." highlight="Ask Away!" />
        <div className="mt-12">
          <FaqAccordion limit={5} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
