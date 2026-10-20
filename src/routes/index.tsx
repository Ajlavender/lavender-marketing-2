import { INTAKE_URL } from "@/data/pricing";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
  Volume2,
  VolumeX,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TechnologySection } from "@/components/site/TechStack";

import { Button } from "@/components/ui/button";
import { LeadForm, ReportFallback } from "@/components/site/LeadForm";
import { PreviewSteps } from "@/components/site/sections";
import { cn } from "@/lib/utils";
import {
  Counters,
  CtaBand,
  GoogleReviews,
  LogoStrip,
  ProjectGrid,
  RatingBar,
  Section,
  SectionHeading,
  ServicesGrid,
} from "@/components/site/sections";
import { MEDIA, stats, ILLU } from "@/data/site";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { LazySection } from "@/components/site/LazySection";
import { BeforeAfterShowcase } from "@/components/site/BeforeAfterShowcase";
import { StickySteps } from "@/components/site/StickySteps";
import { HeroPhone } from "@/components/site/HeroPhone";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisibilityReportPreview } from "@/components/site/VisibilityReportPreview";
import {
  BuyerPaths,
  CatchSection,
  ComparisonTable,
  PainPointCards,
  SystemLoop,
  TestimonialCarousel,
  ValueStack,
} from "@/components/site/home-sections.lazy";
import heroVideoAsset from "@/assets/hero-mobile.mp4.asset.json";

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

      { property: "og:image", content: "https://lavendermarketingco.com/media/hero-poster.jpg" },
      { name: "twitter:image", content: "https://lavendermarketingco.com/media/hero-poster.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://lavendermarketingco.com/" },
      { rel: "preconnect", href: "https://assets.cdn.filesafe.space", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://assets.cdn.filesafe.space" },
      {
        rel: "preload",
        as: "image",
        href: HERO_POSTER,
        fetchPriority: "high",
      },
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

const HERO_VIDEO = heroVideoAsset.url;

interface VideoPlayerProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  muted: boolean;
  canPlay: boolean;
  videoSrc: string | undefined;
  /** Play only once the banner is actually on screen. */
  shouldPlay: boolean;
  onToggleMute: () => void;
  onCanPlay: () => void;
}


function VideoPlayer({
  videoRef,
  muted,
  canPlay,
  videoSrc,
  shouldPlay,
  onToggleMute,
  onCanPlay,
}: VideoPlayerProps) {
  // Start when the banner scrolls into view, pause when it leaves.
  useEffect(() => {

    const el = videoRef.current;
    if (!el) return;
    if (shouldPlay) el.play().catch(() => {});
    else el.pause();
  }, [shouldPlay, videoRef, videoSrc]);

  // If the file can't be decoded, fall back to the poster instead of the browser's error screen.
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        ref={videoRef}
        poster={HERO_POSTER}
        width={1280}
        height={720}
        muted={muted}
        loop
        playsInline
        controls={ready && !failed}
        disablePictureInPicture
        preload="metadata"
        onError={() => setFailed(true)}
        onCanPlay={() => {
          setReady(true);
          onCanPlay();
        }}
        className="h-full w-full object-cover"
      >
        {videoSrc && !failed && (

          <source src={videoSrc} type="video/mp4" onError={() => setFailed(true)} />
        )}
      </video>



      {/* Click-to-unmute overlay */}
      {muted && canPlay && (
        <button
          type="button"
          onClick={onToggleMute}
          className="group absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center bg-black/30 transition duration-500 hover:bg-black/40"
          aria-label="Unmute video"
        >
          {/* animated rings */}
          <span className="absolute h-24 w-24 rounded-full bg-white/10 animate-pulse-ring" />
          <span
            className="absolute h-24 w-24 rounded-full bg-white/10 animate-pulse-ring"
            style={{ animationDelay: "0.8s" }}
          />
          <span className="absolute h-32 w-32 rounded-full bg-white/5 animate-pulse-ring" />

          {/* glass icon button */}
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(255,255,255,0.25)] transition duration-500 group-hover:scale-110 group-hover:bg-white/25 group-hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.4)]">
            <VolumeX className="relative z-10 h-8 w-8 text-white transition-transform duration-500 group-hover:scale-110" />
          </span>

          {/* sound wave bars */}
          <span className="mt-6 flex h-5 items-end gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-white/80 animate-sound-bar origin-bottom"
                style={{
                  height: "100%",
                  animationDelay: `${i * 0.12}s`,
                }}
              />
            ))}
          </span>

          {/* label */}
          <span className="mt-5 text-center font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.16em] text-white/95 uppercase drop-shadow-lg">
            Tap to unmute
          </span>
        </button>
      )}

      {/* Mute toggle (visible once unmuted) */}
      {!muted && (
        <button
          type="button"
          onClick={onToggleMute}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
          aria-label={muted ? "Unmute video" : "Mute video"}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
}


function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Wrapper around the video banner — drives lazy-load and autoplay.
  const bannerRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  // True while the banner is meaningfully on screen — gates autoplay.
  const [inView, setInView] = useState(false);
  // Video source is attached only after hydration + when the card is near view,
  // so the poster paints first and the mp4 never blocks first render.
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);
  const [canPlay, setCanPlay] = useState(false);


  // Lazy-attach the mp4 once the banner is close to the viewport.
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData) return; // keep the poster only
    if (/^(slow-2g|2g)$/.test(conn?.effectiveType ?? "")) return;

    const attach = () => setVideoSrc(HERO_VIDEO);
    const markScrolled = () => {
      if (window.scrollY > 80) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.5) {

          attach();
          window.removeEventListener("scroll", markScrolled);
        }
      }
    };
    window.addEventListener("scroll", markScrolled, { passive: true });
    return () => {
      window.removeEventListener("scroll", markScrolled);
    };
  }, []);

  useEffect(() => {
    if (videoSrc) videoRef.current?.load();

  }, [videoSrc]);

  // Autoplay while the banner is on screen; pause once it scrolls away.
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[entries.length - 1];
        if (!entry) return;
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.4);
      },
      { threshold: [0, 0.4, 0.75] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);



  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

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

        <div className="mx-auto max-w-7xl px-5 pb-14 pt-36 sm:px-6 sm:pt-32 lg:min-h-0 lg:px-8 lg:pb-20 lg:pt-36">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            <div className="relative animate-fade-in">
              <span className="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-brand/25 bg-background/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-foreground shadow-sm backdrop-blur-md">
                <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-brand px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  <Sparkles className="h-3.5 w-3.5" />
                  Free design
                </span>
                <span className="text-muted-foreground">Automated review engine included</span>
              </span>
              <h1
                className="animate-fade-in text-[2.75rem] font-bold leading-[1] sm:text-7xl"
                style={{ animationDelay: "80ms", animationFillMode: "both" }}
              >
                Your new website,
                <br />
                <span className="text-gradient-brand">designed free.</span>
              </h1>
              <p
                style={{ animationDelay: "180ms", animationFillMode: "both" }}
                className="animate-fade-in mt-6 max-w-lg text-lg text-muted-foreground sm:text-xl"
              >
                Love it? Launch for $297/mo with hosting, honest review requests and missed-call
                text-back built in. Don&apos;t love it? You pay nothing.
              </p>

              <div
                style={{ animationDelay: "240ms", animationFillMode: "both" }}
                className="animate-fade-in mt-8 flex flex-wrap items-center gap-4"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="h-13 rounded-full px-7 text-base shadow-lg transition-transform hover:-translate-y-0.5">
                      Get My Free Website Design
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                    <DialogTitle className="text-2xl font-bold">Get Your Free Website Design</DialogTitle>
                    <DialogDescription>
                      Tell us about your business. We&apos;ll design a custom homepage first, and you pay nothing unless you love it.
                    </DialogDescription>
                    <LeadForm labeled offer="design" submitLabel="Get My Free Website Design" />
                    <ReportFallback className="mt-2 text-center" />
                  </DialogContent>
                </Dialog>
                <Link to="/pricing" className="border-b border-primary pb-1 text-sm font-semibold text-primary">
                  See the $297 plan
                </Link>
              </div>

              {/* trust row */}
              <div
                className="animate-fade-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
                style={{ animationDelay: "320ms", animationFillMode: "both" }}
              >
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-brand" /> No contracts
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 fill-[#f4a62a] text-[#f4a62a]" /> 4.8-star Google rating
                </span>
                <span className="inline-flex items-center gap-2">
                   <Zap className="h-4 w-4 text-brand" /> Live within 14 days
                </span>
              </div>
            </div>

            <div style={{ animationDelay: "220ms", animationFillMode: "both" }} className="animate-scale-in">
              <HeroPhone />
            </div>
          </div>

          {/* Landscape video banner */}
          <div
            ref={bannerRef}
            style={{ animationDelay: "380ms", animationFillMode: "both" }}
            className="animate-fade-in relative mt-16 lg:mt-20"
          >
            <div className="relative rounded-[2rem] p-[1.5px] shadow-[0_50px_110px_-50px_color-mix(in_oklab,var(--brand)_75%,transparent)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-brand opacity-70 blur-[2px]"
              />

              {/* floating proof card — real turnaround stat */}

              <div
                className="animate-float-soft pointer-events-none absolute -right-4 bottom-10 z-20 hidden rounded-2xl border border-white/60 bg-background/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
                style={{ animationDelay: "-2.5s" }}
              >
                <p className="text-2xl font-bold leading-none text-brand">
                  <CountUp value="14 days" />
                </p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">Design to launch</p>
              </div>

              <div className="relative overflow-hidden rounded-[1.9rem] bg-black">
                <VideoPlayer
                  key="hero-video-player"
                  videoRef={videoRef}
                  muted={muted}
                  canPlay={canPlay}
                  videoSrc={videoSrc}
                  shouldPlay={inView}
                  onToggleMute={toggleMute}
                  onCanPlay={() => setCanPlay(true)}
                />
              </div>
            </div>
          </div>

        </div>

        {/* scroll cue */}
        <div className="pointer-events-none flex justify-center pb-8">
          <span className="animate-float-soft inline-flex items-center gap-2 rounded-full border border-brand/20 bg-background/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
            Scroll to see how it works
            <ArrowRight className="h-3.5 w-3.5 rotate-90 text-brand" />
          </span>
        </div>
      </section>


      <LogoStrip />

      <StickySteps />

      <BeforeAfterShowcase />


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
                <a href={INTAKE_URL}>Get My Free Website Design</a>
              </Button>
              <Link
                to="/pricing"
                className="border-b border-primary pb-1 text-sm font-medium text-primary"
              >
                See the $297 plan
              </Link>
            </div>
          </Reveal>

          <LazySection variant="cards" minHeight={600}><PainPointCards /></LazySection>
        </div>
      </Section>

      <LazySection variant="loop" minHeight={520}><SystemLoop /></LazySection>

      {/* Services grid */}
      <Section>
        <SectionHeading
          eyebrow="What you get"
          title="One growth system, built for local service businesses"
          subtitle="Every tool below is included in the $297/month Essentials Plan. No separate logins, no surprise bills."
        />
        <Reveal delay={120} className="mt-14">
          <ServicesGrid />
        </Reveal>
      </Section>

      <PreviewSteps />

      {/* Reviews */}
      <Section muted className="py-24">
        <Reveal>
          <p className="text-center text-base font-semibold text-foreground">
            Rated by 50+ local business owners
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
            Automatically ask real customers for{" "}
            <span className="text-primary">honest Google reviews after every completed job.</span>
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
                  LM&amp;C sets it up. Lavender Suite Pro keeps it running.
                </p>
                <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                  One system instead of five disconnected tools.
                </h2>
                <p className="mt-8 max-w-xl text-background/85">
                  Your calls, texts, forms, bookings, reviews and follow-up all live in one place.
                  You see every lead, where it came from, and what happened next — without adding
                  front-desk work.
                </p>
                <p className="mt-6 font-bold">Already have a decent website?</p>
                <p className="mt-1 max-w-xl text-background/85">
                  Perfect. The review engine works on its own — honest reviews can strengthen your
                  local visibility and create more opportunities to get found and chosen.
                </p>
                <p className="mt-6 text-background/85">
                  Drop your details and we'll send your free Google & Local Visibility Report.
                </p>
                <div className="mt-6 max-w-xl">
                  <LeadForm variant="dark" fields="leadInline" labeled submitLabel="Get My Free Google Report" />
                </div>
              </div>

              <VisibilityReportPreview />
            </div>
          </Reveal>
        </div>
      </section>

      <TechnologySection />

      {/* Stats */}
      <Section>
        <Reveal>
          <p className="text-center text-base text-muted-foreground">
            Why this matters for a local business
          </p>
          <h2 className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold sm:text-5xl">
            Customers decide fast — and they call{" "}
            <span className="text-primary">whoever answers first.</span>
          </h2>
        </Reveal>
        <div className="mx-auto mt-20 grid max-w-5xl gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {stats.slice(0, 3).map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                <CountUp value={`${s.value}${s.suffix ?? ""}`} />
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.label}</p>
              {"source" in s && s.source && (
                <p className="mt-2 text-xs text-muted-foreground/60">Source: {s.source}</p>
              )}
            </Reveal>
          ))}
          <Reveal delay={300} className="col-span-full mt-4 flex justify-center">
            <div className="grid max-w-2xl grid-cols-2 gap-x-10 gap-y-20 sm:gap-x-16 lg:gap-x-24">
              {stats.slice(3).map((s) => (
                <div key={s.label}>
                  <p className="text-center font-[family-name:var(--font-display)] text-7xl font-bold leading-none text-[#2a2352]">
                    <CountUp value={`${s.value}${s.suffix ?? ""}`} />
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">{s.label}</p>
                  {"source" in s && s.source && (
                    <p className="mt-2 text-xs text-muted-foreground/60">Source: {s.source}</p>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal as="h3" className="mx-auto mt-16 max-w-3xl text-center text-3xl font-bold sm:text-4xl">
          We build the website and the system so this{" "}
          <span className="text-primary">doesn&apos;t happen to you.</span>
        </Reveal>
      </Section>

      {/* Projects */}
      <Section muted>
        <Reveal>
          <p className="text-lg font-semibold text-primary">Real websites we&apos;ve built</p>
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

      <LazySection variant="split" minHeight={640}><CatchSection /></LazySection>

      <LazySection variant="split" minHeight={520}><BuyerPaths /></LazySection>

      <LazySection variant="cards" minHeight={640}><ValueStack /></LazySection>

      {/* No strings attached */}
      <Section>
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold sm:text-5xl">
            Built quickly. Supported for the <span className="text-primary">long run.</span>
          </h2>
        </Reveal>
        <div className="mt-14">
          <Counters />
        </div>
      </Section>

      <LazySection variant="table" minHeight={560}><ComparisonTable /></LazySection>

      {/* Testimonials */}
      <Section className="py-24">
        <Reveal>
          <p className="text-center text-lg text-foreground">
            Straight from <span className="text-primary">local owners.</span>
          </p>
          <h2 className="mt-3 text-center text-5xl font-bold text-[#1f2150] sm:text-6xl">
            What clients say after launch
          </h2>
        </Reveal>
        <Reveal delay={140} className="mt-14">
          <LazySection variant="carousel" minHeight={420}><TestimonialCarousel /></LazySection>
        </Reveal>
      </Section>


      <CtaBand />
    </>

  );
}
