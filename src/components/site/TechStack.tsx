import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const layers = [
  { name: "Lavender Marketing & Co.", role: "Implementation & strategy", tone: "top" },
  { name: "Lavender Suite Pro", role: "Connected business platform", tone: "mid" },
  { name: "HighLevel", role: "Underlying technology", tone: "base" },
] as const;

/** Three stacked layers joined by a thin connector — one ecosystem, not three rivals. */
export function TechStackVisual({ labels }: { labels?: readonly { name: string; role: string }[] }) {
  const items = labels ?? layers;
  return (
    <div className="relative mx-auto w-full max-w-md" aria-label="How the technology fits together" role="img">
      <div
        aria-hidden
        className="absolute bottom-8 left-8 top-8 w-px bg-gradient-to-b from-primary via-primary/40 to-border"
      />
      <ol className="relative space-y-4">
        {items.map((l, i) => (
          <li
            key={l.name}
            className={cn(
              "relative flex items-center gap-4 rounded-2xl border p-4 pl-5 transition-colors duration-300",
              i === 0
                ? "border-primary/30 bg-card shadow-[0_24px_60px_-36px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
                : "border-border bg-card/70",
            )}
            style={{ marginLeft: `${i * 1.25}rem` }}
          >
            <span
              className={cn(
                "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[0.65rem] font-semibold",
                i === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="font-display text-base font-semibold leading-tight text-foreground">{l.name}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{l.role}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Homepage "Our Technology" trust section. */
export function TechnologySection() {
  return (
    <section className="border-y border-border bg-background py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our technology</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            Powerful software is the foundation. What we build around it makes the difference.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-muted-foreground">
            <p>
              Great software can do a lot. Getting everything configured, connected, and working for your
              business is another story.
            </p>
            <p>
              That's why we use Lavender Suite Pro, our branded platform powered by HighLevel, to bring your
              customer conversations, leads, appointments, reviews, and automations together.
            </p>
            <p>Lavender Marketing &amp; Co. handles the implementation. Lavender Suite Pro helps keep the system running.</p>
          </div>
          <p className="mt-6 font-semibold text-foreground">
            You focus on your business. We'll help put the right systems behind it.
          </p>
          <Link
            to="/lavender-suite-pro/compare-highlevel"
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Explore Our Technology
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <TechStackVisual />
        </Reveal>
      </div>
    </section>
  );
}
