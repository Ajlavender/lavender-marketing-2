import { INTAKE_URL } from "@/data/pricing";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Star, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },

      { property: "og:image", content: HERO_POSTER },
      { name: "twitter:image", content: HERO_POSTER },
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

          {/* Landscape video banner */}
          <div
            ref={bannerRef}
            style={{ animationDelay: "380ms", animationFillMode: "both" }}
            className="animate-fade-in relative mx-auto mt-16 max-w-7xl lg:mt-20"
          >
            <div className="relative rounded-[2rem] p-[1.5px] shadow-[0_50px_110px_-50px_color-mix(in_oklab,var(--brand)_75%,transparent)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-brand opacity-70 blur-[2px]"
              />

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
            Scroll to see more
            <ArrowRight className="h-3.5 w-3.5 rotate-90 text-brand" />
          </span>
        </div>
      </section>


      <HomeProblem />

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
