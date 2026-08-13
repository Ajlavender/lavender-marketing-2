import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReviewSlider } from "@/components/site/ReviewSlider";
import { Reveal } from "@/components/site/Reveal";
import { MEDIA, googleReviews, projects } from "@/data/site";
import { CLAY } from "@/data/clay";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — See What People Say About Lavender Marketing & Co." },
      {
        name: "description",
        content:
          "Read hundreds of 5-star Lavender Marketing & Co. reviews on Google and Bark, plus video testimonials from real customers who love their new website.",
      },
      { property: "og:title", content: "Reviews — See What People Say About Lavender Marketing & Co." },
      {
        property: "og:description",
        content: "Google reviews, Bark reviews and video testimonials from Lavender Marketing & Co. customers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const demoBtn =
  "h-9 rounded-full bg-[linear-gradient(90deg,#8b5cf6_0%,#6d33d6_100%)] px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-background shadow-[0_12px_30px_-14px_rgba(109,51,214,0.9)] hover:opacity-90";

function DemoButton({ label = "Schedule a demo" }: { label?: string }) {
  return (
    <Button asChild className={demoBtn}>
      <Link to="/contact">
        {label}
        <ArrowRight className="ml-2 h-3 w-3" />
      </Link>
    </Button>
  );
}

const facebookReviews = [
  {
    name: "Mark P.",
    when: "Recommends Lavender Marketing & Co. on Facebook",
    rating: 5,
    quote:
      "Great communication from start to finish. The team built exactly what we asked for and then some.",
  },
  {
    name: "Dana R.",
    when: "Recommends Lavender Marketing & Co. on Facebook",
    rating: 5,
    quote: "Fast, affordable and genuinely talented designers. Our bookings doubled after launch.",
  },
  {
    name: "Tony L.",
    when: "Recommends Lavender Marketing & Co. on Facebook",
    rating: 5,
    quote:
      "They showed me a full demo before I paid a cent. Nobody else does that. Easy decision.",
  },
];


const videoPosters = [
  CLAY.analytics,
  CLAY.seo,
  CLAY.developer,
  ...projects.map((p) => p.image),
];

function VideoTile({ poster, tall, i }: { poster: string; tall?: boolean; i: number }) {
  return (
    <Reveal delay={(i % 2) * 90} scale>
      <button
        type="button"
        aria-label="Play video testimonial"
        className="group relative block w-full overflow-hidden rounded-lg bg-card shadow-[0_18px_45px_-30px_rgba(16,18,24,0.5)]"
      >
        <img
          src={poster}
          alt="Lavender Marketing & Co. customer video testimonial"
          loading="lazy"
          className={
            tall
              ? "aspect-[3/4] w-full object-cover"
              : "aspect-[4/3] w-full object-cover"
          }
        />
        <span className="absolute inset-0 bg-foreground/10 transition group-hover:bg-foreground/0" />
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card/95 shadow-lg transition group-hover:scale-110">
          <Play className="ml-0.5 h-6 w-6 fill-[#6d33d6] text-[#6d33d6]" />
        </span>
      </button>
    </Reveal>
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
              src={CLAY.reviews}
              alt="Customer giving Lavender Marketing & Co. a five star rating"
              className="mx-auto w-full max-w-xs"
            />
          </Reveal>
        </div>
      </section>

      {/* Feature video */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal scale>
            <button
              type="button"
              aria-label="Play the Lavender Marketing & Co. reviews video"
              className="group relative block w-full overflow-hidden rounded-xl bg-[#101218] shadow-[0_35px_80px_-45px_rgba(16,18,24,0.8)]"
            >
              <img
                src={`${MEDIA}/2024/09/maxresdefault.webp`}
                alt="Lavender Marketing & Co. customer highlight reel"
                className="aspect-[16/7] w-full object-cover opacity-90"
              />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#6d33d6] shadow-[0_18px_40px_-12px_rgba(109,51,214,0.9)] transition group-hover:scale-110">
                <Play className="ml-1 h-7 w-7 fill-background text-background" />
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Google reviews */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal from="left">
            <img
              src={CLAY.reviews}
              alt="Customers giving a five star rating on a phone"
              loading="lazy"
              className="mx-auto w-full max-w-sm"
            />
          </Reveal>
          <Reveal from="right" delay={110}>
            <img
              src="https://www.trywebtec.com/wp-content/uploads/2023/03/Google_2015_logo.svg-300x101.png"
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

      {/* Purple wave divider */}
      <div aria-hidden className="-mb-px">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="h-12 w-full">
          <path d="M0 40 C 360 0, 1080 60, 1440 12 L1440 60 L0 60 Z" fill="#6d33d6" />
        </svg>
      </div>

      {/* Video testimonials */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Don't Just Take Our Word For It
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold sm:text-4xl">
              See Our
              <br />
              <span className="text-primary">Video Testimonials</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {videoPosters.map((poster, i) => (
              <VideoTile key={`${poster}-${i}`} poster={poster} tall={i < 2} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Facebook reviews */}
      <section className="py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <Reveal from="left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg"
              alt="Facebook"
              loading="lazy"
              className="h-6 w-auto object-contain"
            />
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              See What They Say On <span className="text-primary">Facebook.</span>
            </h2>
            <div className="mt-5">
              <DemoButton />
            </div>
            <div className="mt-8">
              <ReviewSlider reviews={facebookReviews} />
            </div>

          </Reveal>
          <Reveal from="right" delay={110}>
            <img
              src={CLAY.reviews}
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
