import { Check, X, Info, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

type StackItem = {
  title: string;
  benefit: string;
  value: number;
};

const included: StackItem[] = [
  {
    title: "Your new website, designed and built",
    benefit:
      "A site that actually sells instead of sitting there. Clear offers, obvious next step, fast on mobile — so the people already finding you turn into calls instead of bouncing to the next business.",
    value: 500,
  },
  {
    title: "Website chat widget with pre-loaded FAQs",
    benefit:
      "Bottom-right chat that answers your most common questions instantly and hands the conversation straight to you or your staff. More of your traffic starts a sales conversation instead of leaving silently.",
    value: 300,
  },
  {
    title: "Missed-call text-back",
    benefit:
      "62% of calls to local businesses go unanswered. If you can't pick up, the caller instantly gets a text so they keep talking to you instead of calling the next plumber in the area.",
    value: 300,
  },
  {
    title: "Review automation",
    benefit:
      "No fake reviews — just automatic email and text follow-up to real customers asking how it went and pointing them to your Google profile. More 5-star reviews means higher ranking and easier sales.",
    value: 400,
  },
  {
    title: "Online booking",
    benefit:
      "Appointments land on your calendar on autopilot. No more \"does Thursday work? Morning or afternoon?\" back-and-forth eating your day.",
    value: 300,
  },
  {
    title: "Automatic follow-up sequences",
    benefit:
      "Every new lead gets followed up with by text and email until they book or say no. Leads stop going cold because you got busy on a job.",
    value: 300,
  },
  {
    title: "Unified inbox (mobile app included)",
    benefit:
      "Email, texts, Facebook DMs, Instagram DMs and website chat all in one inbox on your phone. Nothing gets lost across five apps, so you never miss another lead or message.",
    value: 400,
  },
  {
    title: "Lead pipeline + full CRM",
    benefit:
      "Every contact, note and conversation stored in one place, with each lead visible at the stage they're at. You always know who to call back and what was said last time.",
    value: 400,
  },
  {
    title: "Hosting, domain, security and unlimited small edits",
    benefit:
      "We keep the site online, secure and up to date, and any small change you need is just a message to us — no dev bills, no waiting weeks.",
    value: 200,
  },
];

const upsells: StackItem[] = [
  {
    title: "AI chat widget",
    benefit:
      "Trained on your business, answers questions and qualifies leads 24/7 — turning more of your traffic into booked jobs while you sleep.",
    value: 0,
  },
  {
    title: "Voice AI receptionist",
    benefit:
      "Answers every call you can't, handles the conversation and books the appointment straight into your calendar. Nothing goes to voicemail.",
    value: 0,
  },
];

const notIncluded = ["No setup fee", "No contract for the design", "No paying before you see it"];

const totalValue = included.reduce((sum, item) => sum + item.value, 0);

function StackRow({ item }: { item: StackItem }) {
  return (
    <li className="group relative rounded-2xl bg-card px-6 py-5 shadow-[0_18px_50px_-40px_rgba(31,33,80,0.5)] transition-shadow hover:shadow-[0_28px_60px_-38px_rgba(109,51,214,0.55)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="text-base font-semibold">{item.title}</span>
          <Info className="mt-1 h-4 w-4 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-primary" />
        </div>
        <span className="text-sm font-semibold text-muted-foreground">
          ${item.value}
          <span className="font-normal">/mo value</span>
        </span>
      </div>

      <div className="pointer-events-none absolute left-4 right-4 top-full z-20 mt-2 origin-top scale-95 rounded-2xl bg-[#1d1f4a] p-5 text-sm leading-relaxed text-background opacity-0 shadow-[0_30px_60px_-30px_rgba(29,31,74,0.8)] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100">
        {item.benefit}
      </div>
    </li>
  );
}

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
            we build it, host it and run the whole system that brings you customers.
          </p>
          <p className="mt-4 text-center text-sm font-medium text-primary">
            Hover any line to see what it actually does for your business.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <ul className="grid gap-3">
            {included.map((item) => (
              <StackRow key={item.title} item={item} />
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="mt-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="rounded-3xl bg-card p-8 shadow-[0_30px_60px_-40px_rgba(30,25,70,0.5)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                What it&apos;s worth vs what you pay
              </p>
              <div className="mt-6 space-y-3 text-base">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-muted-foreground">Total monthly value</span>
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#2a2352] line-through decoration-primary/50">
                    ${totalValue.toLocaleString()}/mo
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-border pt-4">
                  <span className="text-muted-foreground">You pay</span>
                  <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-primary">
                    $297<span className="text-2xl">/mo</span>
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The design is free. The $297 covers building it, hosting it and every system above.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
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
                We only get paid when you&apos;ve already seen the website and said yes. Cancel any
                time — no lock-in, no exit fees.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-10">
          <div className="rounded-3xl border border-primary/25 bg-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Want the AI layer on top?
            </p>
            <h3 className="mt-2 text-2xl font-bold">
              Upgrade to Growth — $497/mo
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {upsells.map((item) => (
                <li
                  key={item.title}
                  className="group relative rounded-2xl bg-secondary px-6 py-5 transition-colors hover:bg-primary/10"
                >
                  <div className="flex items-center gap-3">
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base font-semibold">{item.title}</span>
                    <Info className="h-4 w-4 shrink-0 text-muted-foreground/60 transition-colors group-hover:text-primary" />
                  </div>
                  <div className="pointer-events-none absolute left-4 right-4 top-full z-20 mt-2 origin-top scale-95 rounded-2xl bg-[#1d1f4a] p-5 text-sm leading-relaxed text-background opacity-0 shadow-[0_30px_60px_-30px_rgba(29,31,74,0.8)] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                    {item.benefit}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              On $297 you still get a chat widget with pre-loaded FAQs that connects visitors
              straight to you or your staff, plus missed-call text-back so no lead is lost when the
              phone goes unanswered.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
