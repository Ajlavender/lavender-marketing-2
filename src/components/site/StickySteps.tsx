import { useEffect, useRef, useState } from "react";
import { Check, Palette, Rocket, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { INTAKE_URL } from "@/data/pricing";

const steps = [
  {
    icon: Palette,
    eyebrow: "Step 1",
    title: "We design your website free.",
    body: "Tell us about your business. We build a custom design and show you a 7-day preview before you pay anything.",
    points: ["Custom to your brand", "No contract to see it"],
  },
  {
    icon: Rocket,
    eyebrow: "Step 2",
    title: "Launch for $297/month.",
    body: "Love it? We set it up, host it, and turn on the review engine so happy customers leave Google reviews.",
    points: ["Live in about 14 days", "Hosting and support included"],
  },
  {
    icon: TrendingUp,
    eyebrow: "Step 3",
    title: "Grow into the full system.",
    body: "When you're ready, add AI follow-up, booking and local SEO. One system instead of five disconnected tools.",
    points: ["Add tools only when you need them", "Monthly report on what's working"],
  },
];

export function StickySteps() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const preview = previewRef.current;
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const previewBox = preview?.getBoundingClientRect();
      // Compare both columns at the same visual centre, not a narrow
      // viewport intersection band whose callbacks depend on scroll direction.
      const focus = desktop && previewBox
        ? previewBox.top + previewBox.height / 2
        : window.innerHeight / 2;
      let nearest = 0;
      let distance = Infinity;
      refs.current.forEach((element, i) => {
        if (!element) return;
        const box = element.getBoundingClientRect();
        const delta = Math.abs(box.top + box.height / 2 - focus);
        if (delta < distance) {
          distance = delta;
          nearest = i;
        }
      });
      setActive((current) => current === nearest ? current : nearest);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    refs.current.forEach((element) => element && observer.observe(element));
    if (previewRef.current) observer.observe(previewRef.current);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-bold sm:text-5xl">
          Three simple steps. No guesswork.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            {steps.map((s, i) => (
              <div
                key={s.title}
                data-i={i}
                ref={(el) => { refs.current[i] = el; }}
                className={cn(
                  "flex flex-col justify-center border-l-2 py-10 pl-8 transition-colors duration-500 motion-reduce:transition-none lg:min-h-[70svh] lg:py-16",
                  active === i ? "border-primary" : "border-border",
                )}
              >
                <div className={cn("transition-opacity duration-500 motion-reduce:transition-none", active === i ? "opacity-100" : "lg:opacity-45")}>
                <p className="text-sm font-semibold text-primary">{s.eyebrow}</p>
                <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="h-4 w-4 text-primary" /> {p}
                    </li>
                  ))}
                </ul>
                {i === 0 && (
                  <a href={INTAKE_URL} className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline">
                    Get Free Website Design →
                  </a>
                )}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <div ref={previewRef} className="sticky top-28 h-[min(32rem,calc(100svh-9rem))] overflow-hidden rounded-[2rem] border border-border bg-secondary">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    aria-hidden={active !== i}
                    className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
                      active === i ? "translate-y-0 opacity-100" : i < active ? "pointer-events-none -translate-y-3 opacity-0" : "pointer-events-none translate-y-3 opacity-0",
                    )}
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg">
                      <Icon className="h-11 w-11" />
                    </div>
                    <p className="text-6xl font-bold text-foreground">{`0${i + 1}`}</p>
                    <p className="max-w-xs text-lg font-medium text-muted-foreground">{s.title}</p>
                    <div className="flex gap-2">
                      {steps.map((_, j) => (
                        <span key={j} className={cn("h-1.5 w-8 rounded-full transition-colors duration-500 motion-reduce:transition-none", j === active ? "bg-primary" : "bg-border")} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
