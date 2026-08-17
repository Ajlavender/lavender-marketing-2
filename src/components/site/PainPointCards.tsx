import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { painPoints } from "@/data/site";
import { cn } from "@/lib/utils";

const links = ["/website-redesign", "/missed-call-text-back", "/review-automation", "/follow-up-automation"];

/** Per-card parallax speed (px of travel per 100px of scroll progress) */
const speeds = [-26, 14, 20, -18];

export function PainPointCards() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = wrapRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // -1 (below viewport) -> 1 (above viewport)
        const p = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2);
        setProgress(Math.max(-1, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
      {painPoints.map((p, i) => (
        <Link
          key={p.title}
          to={links[i]}
          style={{ transform: `translate3d(0, ${progress * speeds[i]}px, 0)` }}
          className={cn(
            "group relative block rounded-2xl bg-card px-7 pb-10 pt-24 shadow-[0_24px_60px_-30px_rgba(31,33,80,0.45)] transition-shadow duration-300 will-change-transform hover:shadow-[0_30px_70px_-28px_rgba(109,51,214,0.45)]",
            i === 1 && "sm:mt-24",
            i === 2 && "sm:-mt-6",
            i === 3 && "sm:mt-16",
          )}
        >
          <img
            src={p.image}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute -top-16 left-6 h-40 w-40 object-contain transition-transform duration-300 group-hover:-translate-y-1"
          />
          <h3 className="text-xl font-semibold capitalize leading-snug group-hover:text-primary">
            {p.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
        </Link>
      ))}
    </div>
  );
}
