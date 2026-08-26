import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "./sections";
import { Reveal } from "./Reveal";
import beforeAsset from "@/assets/authentic-customs-before.webp.asset.json";
import afterAsset from "@/assets/authentic-customs-after.webp.asset.json";

export type Transformation = {
  client: string;
  industry: string;
  type: string;
  beforeImage: string;
  afterImage: string;
  url?: string;
  beforePoints?: string[];
  afterPoints?: string[];
};

export const transformations: Transformation[] = [
  {
    client: "Authentic Customs",
    industry: "General Contracting",
    type: "Website Redesign",
    beforeImage: beforeAsset.url,
    afterImage: afterAsset.url,
    url: "https://authenticcustomsdemo.lavendermarketingco.com",
    beforePoints: [
      "Dated visual design",
      "Desktop-first experience",
      "Weak conversion path",
    ],
    afterPoints: [
      "Modern premium presentation",
      "Responsive mobile experience",
      "Clear conversion-focused calls to action",
    ],
  },
];

const clamp = (n: number) => Math.min(100, Math.max(0, n));

export function BeforeAfterCompare({
  item,
  priority = true,
}: {
  item: Transformation;
  priority?: boolean;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const introDone = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };
  const endDrag = () => setDragging(false);

  // One-time demonstration sweep when the section first enters the viewport.
  useEffect(() => {
    const el = frameRef.current;
    if (!el || introDone.current) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      introDone.current = true;
      return;
    }
    if (typeof IntersectionObserver === "undefined") return;

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || introDone.current) continue;
          introDone.current = true;
          observer.disconnect();

          const start = performance.now();
          const duration = 1500;
          // 35% -> 60% -> 50%
          const keys = [35, 60, 50];
          const ease = (t: number) => 1 - Math.pow(1 - t, 3);
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const seg = t < 0.6 ? 0 : 1;
            const local = seg === 0 ? ease(t / 0.6) : ease((t - 0.6) / 0.4);
            const from = keys[seg];
            const to = keys[seg + 1];
            setPos(from + (to - from) * local);
            if (t < 1) frame = requestAnimationFrame(tick);
          };
          setPos(35);
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => clamp(p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => clamp(p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-brand/12 bg-[#2b2b2b] shadow-[0_28px_70px_-40px_rgba(24,16,48,0.55)]">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-3 py-2.5 sm:px-4">
        <div className="flex shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white/10 px-3 py-1">
          <span className="truncate text-[11px] text-white/60">
            {item.url?.replace(/^https?:\/\//, "") ?? "example.com"}
          </span>
        </div>
      </div>

      <div
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          "relative isolate w-full select-none overflow-hidden bg-secondary",
          dragging ? "cursor-ew-resize" : "cursor-pointer",
        )}
        style={{ aspectRatio: "1920 / 888", touchAction: "pan-y" }}
      >

      {/* AFTER = base layer */}
      <img
        src={item.afterImage}
        alt={`${item.client} website after Lavender Marketing redesign`}
        width={1920}
        height={1062}
        draggable={false}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-left-top"
      />

      {/* BEFORE = clipped overlay */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <img
          src={item.beforeImage}
          alt={`${item.client} website before Lavender Marketing redesign`}
          width={1920}
          height={1062}
          draggable={false}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:text-[11px]">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-ink/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:text-[11px]">
        After
      </span>

      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white/85 shadow-[0_0_0_1px_rgba(24,16,48,0.12)]"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Compare the ${item.client} website before and after the redesign`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before image shown`}
        aria-orientation="horizontal"
        onKeyDown={onKeyDown}
        className="absolute top-1/2 z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        style={{ left: `${pos}%` }}
      >
        <span className="pointer-events-none flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-md">
          <ChevronLeft className="h-3.5 w-3.5 -mr-0.5" />
          <ChevronRight className="h-3.5 w-3.5 -ml-0.5" />
        </span>
      </div>
      </div>
    </div>
  );

}

export function BeforeAfterShowcase() {
  const item = transformations[0];

  return (
    <Section className="pt-24 pb-4 sm:pt-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
          Real transformations
        </p>
        <h2 className="text-4xl sm:text-5xl">
          Same business.
          <br />
          <span className="text-primary">Completely different first impression.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          See what happens when an outdated website is rebuilt around modern design, trust and
          conversion.
        </p>
      </Reveal>

      <Reveal delay={120} className="mx-auto mt-12 w-full max-w-[1280px]">
        <BeforeAfterCompare item={item} />

        {/* Project info row */}
        <div className="mt-6 flex flex-col gap-3 border-b border-brand/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-xl font-semibold text-ink">{item.client}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.industry} • {item.type}
            </p>
          </div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center gap-1.5 border-b border-primary pb-1 text-sm font-medium text-primary"
            >
              View Live Website
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Transformation summary */}
        <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-12">
          {[
            { label: "Before", points: item.beforePoints ?? [], muted: true },
            { label: "After", points: item.afterPoints ?? [], muted: false },
          ].map((col) => (
            <div key={col.label}>
              <p
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.18em]",
                  col.muted ? "text-muted-foreground" : "text-primary",
                )}
              >
                {col.label}
              </p>
              <ul className="mt-3 space-y-2">
                {col.points.map((p) => (
                  <li
                    key={p}
                    className={cn(
                      "text-base",
                      col.muted ? "text-muted-foreground" : "text-ink",
                    )}
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          We don&apos;t start from templates. We rebuild the way your business looks, feels and
          converts online.
        </p>
      </Reveal>
    </Section>
  );
}
