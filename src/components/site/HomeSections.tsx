import { useId, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/sections";
import { VisibilityReportPreview } from "@/components/site/VisibilityReportPreview";
import { FREE_DESIGN_URL } from "@/data/pricing";
import { googleReviews } from "@/data/site";
import { useLocale } from "@/lib/locale";
import { jobsToCover } from "@/lib/value-calculator";

const CONTACT_EMAIL = "Aj@lavendermarketingco.com";

function Eyebrow({ children }: { children: string }) {
  return <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

function IntakeButton({ label = "Get My Free Website Design", variant }: { label?: string; variant?: "secondary" }) {
  return (
    <Button asChild size="lg" variant={variant} className="h-12 rounded-full px-6 font-semibold">
      <a href={FREE_DESIGN_URL}>
        {label} <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </Button>
  );
}

/* 02 — Problem */
const problems = [
  {
    title: "The call you couldn't answer",
    body: "You're on a job, driving or with a customer. The phone rings, and by the time you call back they've already booked someone else.",
    fix: "Missed calls get an instant text back, so the conversation keeps going while you finish the work.",
  },
  {
    title: "The visitor who didn't reach out",
    body: "Someone finds your website, isn't sure you're the right fit, and leaves without calling or filling anything in.",
    fix: "A clear, modern website with chat and online booking makes it easy to ask a question or book a time.",
  },
  {
    title: "The review nobody requested",
    body: "Your customers are happy, but life gets busy and most of them never think to leave a review.",
    fix: "A friendly review request goes out after each job, so asking becomes part of your routine.",
  },
];

export function HomeProblem() {
  return (
    <Section className="py-24">
      <Reveal className="max-w-3xl">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
          You&apos;re doing the work. But some customers never reach you.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Most businesses don&apos;t lose work because they&apos;re bad at what they do. They lose it in
          the small gaps between a customer finding them and actually getting in touch.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 80} className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm">
            <p className="text-sm font-semibold text-muted-foreground">0{i + 1}</p>
            <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
            <p className="mt-3 text-muted-foreground">{p.body}</p>
            <div className="mt-auto pt-6">
              <div className="rounded-2xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">The Lavender solution</p>
                <p className="mt-2 text-sm text-foreground">{p.fix}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* 03 — Transformations heading (slider rendered by the page) */
export function TransformationsIntro() {
  return (
    <Section className="pb-0 pt-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Real transformations</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
          Same business. A completely different first impression.
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          Drag the slider to compare real client websites before and after we rebuilt them.
        </p>
      </Reveal>
    </Section>
  );
}

export function ExploreWork() {
  return (
    <div className="flex justify-center pb-8">
      <Button asChild variant="outline" size="lg" className="rounded-full">
        <Link to="/projects">Explore Our Work <ArrowRight className="ml-1 h-4 w-4" /></Link>
      </Button>
    </div>
  );
}

/* 04 — How it works */
const steps = [
  {
    title: "Tell us about your business",
    body: "Answer a few quick questions about your services, customers and the look you like. No payment required.",
  },
  {
    title: "See what we create",
    body: "We design a custom homepage preview for your business. You review it and tell us what you'd change.",
  },
  {
    title: "Approve it and launch",
    body: "Love it? Choose a plan and we build out the full website, connect your tools and take it live, usually within 14 days.",
  },
];

export function HomeSteps() {
  return (
    <Section muted className="py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>Simple from the start</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
          See your new website before you spend a dollar.
        </h2>
      </Reveal>
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 80} className="rounded-3xl border border-border bg-card p-7">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-3 text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
        The free part is a custom homepage design preview. The full website and monthly services
        start only after you approve the design and choose a plan.
      </p>
      <div className="mt-8 flex justify-center">
        <IntakeButton />
      </div>
    </Section>
  );
}

/* 05 — What the system does */
const benefits = [
  {
    title: "A website that works for your business",
    body: "A custom, mobile-friendly website that's hosted, secured and kept up to date, with small edits whenever you need them.",
  },
  {
    title: "Missed calls don't have to mean missed conversations",
    body: "When you can't pick up, the caller gets a text so they can tell you what they need.",
  },
  {
    title: "Follow-up without the constant back-and-forth",
    body: "Calls, texts, chats and form messages land in one inbox on your phone, with automatic follow-ups for people who go quiet.",
  },
  {
    title: "Make customer reviews part of the routine",
    body: "Send an honest review request after each job without having to remember to ask.",
  },
];

const essentials = [
  "Custom website, designed and built",
  "Hosting, domain support, security and small edits",
  "Website chat with your common questions",
  "Missed-call text-back",
  "Review requests",
  "Online booking",
  "Automatic follow-up",
  "One inbox with a mobile app",
  "Customer list and lead tracking",
  "Google & Local Visibility Report",
];

export function HomeSystem() {
  return (
    <Section className="py-24">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>More than a website</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
              One less thing to worry about. Several more ways to stay connected.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              We build it. We connect it. We help keep it running. You get the tools without having
              to set them up or manage them yourself.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 60} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg font-bold leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120} className="rounded-3xl bg-secondary p-8 lg:sticky lg:top-32">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Essentials · $297/month</p>
          <h3 className="mt-2 text-2xl font-bold">Everything included in Essentials</h3>
          <ul className="mt-6 space-y-3">
            {essentials.map((f) => (
              <li key={f} className="flex gap-3 text-sm">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
            Not in Essentials: AI receptionist and starter local SEO (Growth), or managed advertising and
            ongoing SEO (Scale, ad spend billed separately).
          </p>
          <Button asChild variant="outline" className="mt-6 w-full rounded-full">
            <Link to="/pricing">See What&apos;s Included</Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}

/* 06 — Value calculator */
const PLANS = [
  { name: "Essentials", price: 297 },
  { name: "Growth", price: 497 },
  { name: "Scale", price: 997, note: "plus ad spend" },
];

export function ValueCalculator() {
  const locale = useLocale();
  const cur = locale === "en-us" ? "US$" : "CA$";
  const [job, setJob] = useState("500");
  const [margin, setMargin] = useState("50");
  const id = useId();
  const jobN = Number(job);
  const marginN = Number(margin);
  const essentials = jobsToCover(297, jobN, marginN);

  return (
    <Section muted className="overflow-x-clip py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>The numbers</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
              What could one more customer mean for your business?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Enter your own numbers to see how many extra jobs a month would cover each plan. This is
              an illustration, not a promise of results.
            </p>
          </Reveal>
          <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor={`${id}-job`} className="text-sm font-semibold">
                Average job value ({cur})
                <input
                  id={`${id}-job`}
                  type="number"
                  inputMode="decimal"
                  min={0}
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal"
                />
              </label>
              <label htmlFor={`${id}-margin`} className="text-sm font-semibold">
                Profit margin (%)
                <input
                  id={`${id}-margin`}
                  type="number"
                  inputMode="decimal"
                  min={1}
                  max={100}
                  value={margin}
                  onChange={(e) => setMargin(e.target.value)}
                  className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal"
                />
              </label>
            </div>
            <div aria-live="polite" className="mt-6">
              <p className="text-xl font-bold">
                {essentials === null
                  ? "Enter a job value and margin to see the result."
                  : `About ${essentials} additional job${essentials === 1 ? "" : "s"} a month could cover Essentials.`}
              </p>
              <ul className="mt-4 divide-y divide-border rounded-2xl border border-border">
                {PLANS.map((p) => {
                  const n = jobsToCover(p.price, jobN, marginN);
                  return (
                    <li key={p.name} className="flex items-center justify-between gap-4 px-4 py-3 text-sm">
                      <span>
                        <span className="font-semibold">{p.name}</span>{" "}
                        <span className="text-muted-foreground">
                          {cur}{p.price}/month{p.note ? ` ${p.note}` : ""}
                        </span>
                      </span>
                      <span className="font-semibold">{n === null ? "—" : `${n} job${n === 1 ? "" : "s"}`}</span>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">
                Based on profit per job (job value × margin). Scale&apos;s ad spend isn&apos;t included.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Illustrative report preview
          </p>
          <VisibilityReportPreview />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Know what&apos;s happening with your business. Sample numbers shown.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* 07 — Reviews */
export function HomeReviews() {
  const picks = googleReviews.filter((r) => !r.quote.startsWith("This user only")).slice(0, 3);
  return (
    <Section className="py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Eyebrow>From our clients</Eyebrow>
        <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
          Good work is better when people can vouch for it.
        </h2>
        <p className="mt-4 text-muted-foreground">Rated 4.8 on Google from 50+ reviews.</p>
      </Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {picks.map((r, i) => (
          <Reveal as="figure" key={r.name} delay={i * 80} className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
            <div className="flex gap-0.5" role="img" aria-label={`${r.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className={s < r.rating ? "h-4 w-4 fill-current text-primary" : "h-4 w-4 text-border"} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-foreground/85">&ldquo;{r.quote}&rdquo;</blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold">{r.name}</span>
              <span className="text-muted-foreground"> · Google review</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <Link to="/reviews">Read More Customer Reviews</Link>
        </Button>
      </div>
    </Section>
  );
}

/* Secondary offer — visibility report (chat/email only while chat is the sole consent form) */
export function ReportNudge() {
  return (
    <div className="mx-auto max-w-site px-4 pb-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-card p-7 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold">Already happy with your website?</h3>
          <p className="mt-1 text-muted-foreground">
            See where your business may have opportunities to improve its visibility online. Ask for a
            free Google visibility review in the chat, or email us.
          </p>
        </div>
        <Button asChild variant="outline" className="shrink-0 rounded-full">
          <a href={`mailto:${CONTACT_EMAIL}?subject=Google%20visibility%20review`}>Explore Your Google Visibility</a>
        </Button>
      </div>
    </div>
  );
}

/* 08 — FAQ + final CTA */
const homeFaqs: { q: string; a: string; link?: boolean }[] = [
  {
    q: "Is the website design really free?",
    a: "Yes. We create a custom homepage design concept for you to review, with no payment required. The completed website and monthly services begin only after you approve the design and choose a plan.",
  },
  {
    q: "What if I don't like the design?",
    a: "Tell us what you'd change and we'll take another look. If it still isn't right for you, you don't owe anything for reviewing the preview.",
  },
  {
    q: "What do I get for $297 per month?",
    a: "Essentials covers your custom website, hosting and upkeep, website chat, missed-call text-back, review requests, online booking, automatic follow-up, one inbox with a mobile app, customer and lead tracking, and your visibility report.",
    link: true,
  },
  {
    q: "Does the monthly plan include advertising or SEO?",
    a: "Essentials focuses on your website and customer follow-up. Growth ($497/month) adds starter local SEO and upgraded AI tools. Scale (from $997/month) adds managed advertising and ongoing SEO, with ad spend charged separately.",
  },
  {
    q: "Do I need to know how to use the software?",
    a: "No. We set everything up, connect it and keep it running. You'll just need to share details about your business, approve your design, and reply to the customers who reach out. We'll show you how the inbox and app work.",
  },
  {
    q: "What happens if I already have a website?",
    a: "We'll look at your current site and recommend whether a rebuild makes sense or whether connecting our tools to what you have is the better choice.",
  },
  {
    q: "Can I cancel? What happens to my website and domain?",
    a: "Your domain is 100% yours, and we always recommend keeping it that way. Your website is built and hosted on our platform, but if you ever decide to leave, you can request an export of your website's code to move it to another hosting provider. We believe in earning your business, not locking you in. Our goal is to build lasting partnerships because you love working with us, not because you're forced to stay.",
  },
  {
    q: "Are there any additional charges?",
    a: "Text messaging and calling are billed by usage, and so are AI features where you use them. On Scale, advertising spend is paid separately from the plan. We'll walk you through what to expect before you launch.",
  },
];

export function HomeFaq() {
  return (
    <Section muted className="py-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>Questions? We&apos;ve got answers.</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.1] sm:text-5xl">
            Everything you should know before getting started.
          </h2>
        </Reveal>
        <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6">
          {homeFaqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
                {f.link && (
                  <>
                    {" "}
                    <Link to="/pricing" className="font-medium text-primary underline underline-offset-2">
                      See the full pricing breakdown
                    </Link>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

export function FinalCta() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6 lg:px-8">
        <Reveal className="rounded-[2rem] bg-gradient-brand px-8 py-16 text-center text-primary-foreground sm:px-14">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl">
            Your business deserves a better first impression.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            Let&apos;s show you what that could look like. We&apos;ll design a custom homepage preview for your
            business. See it first, decide if it&apos;s right, and only move forward when you&apos;re ready.
          </p>
          <div className="mt-8 flex justify-center">
            <IntakeButton variant="secondary" />
          </div>
          <p className="mt-4 text-sm opacity-80">Free to review. No payment required to see your design.</p>
        </Reveal>
      </div>
    </section>
  );
}
