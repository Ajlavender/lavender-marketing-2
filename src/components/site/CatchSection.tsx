import { Check, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

const included = [
  "Your new website designed, built and launched",
  "Hosting, domain setup, security and updates",
  "Review engine that asks every customer for a Google review",
  "Missed-call text-back so no lead goes cold",
  "All your leads, calls and messages in one inbox",
  "Unlimited small edits — just send us a message",
];

const notIncluded = [
  "No setup fee",
  "No contract for the design",
  "No paying before you see it",
];

export function CatchSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-base font-semibold text-primary">
            Let&apos;s get the awkward part out of the way
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-bold sm:text-5xl">
            &ldquo;Okay&hellip; so what&apos;s the catch?&rdquo;
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
            There isn&apos;t one. We design your new website completely free. You look at it. If you
            like it, you pay <span className="font-semibold text-foreground">$297 a month</span> and
            we put it live and run it for you. If you don&apos;t like it, you walk away and it costs
            you nothing.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="rounded-3xl bg-card p-8 shadow-[0_30px_60px_-40px_rgba(30,25,70,0.5)] sm:p-10">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-[#2a2352]">
                  $297
                </span>
                <span className="text-lg text-muted-foreground">per month, everything in</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                The design is free. The $297 covers building it, hosting it and the systems that
                bring you customers.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button asChild size="lg">
                  <Link to="/contact">Get my free design</Link>
                </Button>
                <Link
                  to="/pricing"
                  className="border-b border-primary pb-1 text-sm font-medium text-primary"
                >
                  See all pricing
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[linear-gradient(150deg,#1d1f4a_0%,#2a2352_45%,#6d33d6_100%)] p-8 text-background sm:p-10">
              <h3 className="text-2xl font-bold">What you don&apos;t pay for</h3>
              <ul className="mt-6 space-y-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <X className="mt-1 h-5 w-5 shrink-0 text-[#a78bfa]" />
                    <span className="text-background/85">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-background/85">
                We only get paid when you&apos;ve already seen the website and said yes. That&apos;s
                the whole deal.
              </p>
              <p className="mt-6 text-sm text-background/70">
                Cancel any time. No lock-in, no exit fees.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
