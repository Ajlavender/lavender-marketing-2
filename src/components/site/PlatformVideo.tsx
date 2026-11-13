import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { MEDIA } from "@/data/site";
import heroVideoAsset from "@/assets/hero-mobile.mp4.asset.json";

const POSTER = `${MEDIA}/hero-poster.jpg`;

/** Optional platform tour: click to play with sound, nothing loads before the click. */
export function PlatformVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    requestAnimationFrame(() => {
      const el = videoRef.current;
      if (!el) return;
      el.muted = false;
      el.play().catch(() => {});
    });
  };

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Powered by Lavender Suite Pro
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-5xl">
            See how everything works together.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Your website, customer conversations, follow-ups and reviews shouldn&apos;t run separately. See how
            Lavender Suite Pro brings them together to help your business run more smoothly.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">Platform overview · 2 min 48 sec</p>
        </div>

        <div className="relative mx-auto mt-10 overflow-hidden rounded-[1.75rem] bg-foreground shadow-[0_40px_90px_-50px_color-mix(in_oklab,var(--brand)_70%,transparent)]">
          <div className="relative aspect-video w-full">
            {started ? (
              <video
                ref={videoRef}
                src={heroVideoAsset.url}
                poster={POSTER}
                controls
                playsInline
                disablePictureInPicture
                className="h-full w-full object-cover"
              />
            ) : (
              <button
                type="button"
                onClick={start}
                aria-label="Play the platform overview video"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <img src={POSTER} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-foreground/30 transition group-hover:bg-foreground/40" />
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-background/90 text-brand shadow-xl transition duration-300 group-hover:scale-105">
                  <Play className="ml-1 h-8 w-8 fill-current" />
                </span>
              </button>
            )}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm text-muted-foreground">
          Features shown are available across different Lavender Suite Pro plans. Some need an upgraded plan or extra
          setup.{" "}
          <Link to="/pricing" className="font-medium text-primary underline underline-offset-2">
            Compare plans
          </Link>
        </p>
      </div>
    </section>
  );
}
