import { Check, Minus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const columns = [
  {
    label: "Option 01",
    title: "DIY website builders",
    rows: [
      { text: "Looks okay", ok: false },
      { text: "No follow-up system", ok: false },
      { text: "No customer database", ok: false },
      { text: "No automations", ok: false },
      { text: "You still chase every lead by hand", ok: false },
    ],
  },
  {
    label: "Option 02",
    title: "Generic agencies",
    rows: [
      { text: "Expensive upfront builds", ok: false },
      { text: "Slow turnaround", ok: false },
      { text: "Nothing running behind the site", ok: false },
      { text: "Hard to get changes made", ok: false },
      { text: "Focused only on design", ok: false },
    ],
  },
  {
    label: "Option 03",
    title: "Lavender Marketing & Co.",
    highlight: true,
    rows: [
      { text: "Free website design, built before you pay", ok: true },
      { text: "Every lead, call and message in one inbox", ok: true },
      { text: "Missed-call text-back", ok: true },
      { text: "Review engine and booking flows", ok: true },
      { text: "Automatic follow-up so leads don't go cold", ok: true },
    ],
  },
];

export function ComparisonTable() {
  return (
    <section className="section-band py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center">
          <p className="rail-eyebrow text-[#c4b5fd]">Compare</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-4xl font-bold sm:text-5xl">
            Not another software login you forget about.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={i * 120} scale>
              <div
                className={cn(
                  "h-full rounded-3xl p-8 transition-transform duration-300 sm:p-10",
                  col.highlight
                    ? "border border-white/25 bg-[linear-gradient(150deg,#312E81_0%,#3d2a7a_45%,#7c3aed_100%)] text-white shadow-[0_36px_90px_-30px_rgba(124,58,237,0.75)] lg:-translate-y-3"
                    : "border border-white/10 bg-white/[0.06] text-white shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)] backdrop-blur-sm",
                )}
              >
                <p
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wide",
                    col.highlight ? "text-[#c4b5fd]" : "text-white/45",
                  )}
                >
                  {col.label}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{col.title}</h3>
                <ul className="mt-8 space-y-4">
                  {col.rows.map((row) => (
                    <li key={row.text} className="flex gap-3 text-base">
                      {row.ok ? (
                        <Check className="mt-1 h-5 w-5 shrink-0 text-[#a78bfa]" />
                      ) : (
                        <Minus className="mt-1 h-5 w-5 shrink-0 text-white/35" />
                      )}
                      <span className={col.highlight ? "text-white/85" : "text-white/60"}>
                        {row.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Button asChild size="lg" className="px-10">
            <Link to="/contact">Start with the free design</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
