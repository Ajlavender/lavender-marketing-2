import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

const items = [
  {
    title: "Local business growth report",
    body: "Where leads are slipping through your business right now.",
    value: "$297",
  },
  {
    title: "Website conversion audit",
    body: "Every drop-off point on your current site, mapped out in plain English.",
    value: "$497",
  },
  {
    title: "Custom website design direction",
    body: "A concept built for your business, your offers and your area.",
    value: "$750",
  },
  {
    title: "Follow-up system recommendations",
    body: "Missed-call text-back, booking and automatic follow-up.",
    value: "$397",
  },
  {
    title: "Review & reputation snapshot",
    body: "How you stack up against local competitors — and how to win.",
    value: "$197",
  },
];

export function ValueStack() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-base font-semibold text-primary">
            ✦ Here&apos;s everything you get ✦
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-bold sm:text-5xl">
            What you get when you request your{" "}
            <span className="text-primary">free design today.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-card px-7 py-6 shadow-[0_18px_50px_-40px_rgba(31,33,80,0.5)]">
                <div className="flex min-w-0 gap-4">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-base text-muted-foreground">{item.body}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Free</p>
                  <p className="text-sm text-muted-foreground line-through">{item.value} value</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            Normally <span className="line-through">$2,138</span>
          </p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-5xl font-bold text-[#2a2352]">
            Today: free
          </p>
          <Button asChild size="lg" className="mt-8 px-10">
            <Link to="/contact">Yes — send me my free design</Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            🔒 Your info stays private. We never spam.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
