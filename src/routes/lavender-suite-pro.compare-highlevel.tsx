import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { TechStackVisual } from "@/components/site/TechStack";
import { INTAKE_URL } from "@/data/pricing";

const URL = "https://lavendermarketingco.com/lavender-suite-pro/compare-highlevel";
const TITLE = "Lavender Marketing & Co. vs. HighLevel | What's the Difference?";
const DESC =
  "Discover how Lavender Marketing & Co. combines HighLevel technology with done-for-you websites, CRM setup, automations, and ongoing business support through Lavender Suite Pro.";

export const Route = createFileRoute("/lavender-suite-pro/compare-highlevel")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: ComparePage,
});

const pillars = [
  {
    n: "01",
    t: "Established Technology",
    d: "A powerful CRM and automation foundation with tools for customer communication, scheduling, and business management.",
  },
  {
    n: "02",
    t: "Built Around Your Business",
    d: "We configure the systems and workflows covered by your package around your services, customers, and operating needs.",
  },
  {
    n: "03",
    t: "People Behind the Platform",
    d: "Your subscription combines technology with the onboarding, assistance, and ongoing services included in your selected plan.",
  },
];

const rows = [
  {
    c: "CRM & Contact Management",
    hl: "Available through the underlying platform.",
    lm: "HighLevel-powered CRM, configured as part of the applicable Lavender Suite Pro package.",
  },
  {
    c: "Website Design & Implementation",
    hl: "Provides website and funnel building tools. Customers can build their own sites or obtain assistance separately.",
    lm: "Custom website design and implementation according to the published service package.",
  },
  {
    c: "Appointment Scheduling",
    hl: "Calendar and booking tools are available for customer configuration.",
    lm: "Booking systems configured according to the services included in the client's package.",
  },
  {
    c: "Missed-Call Text-Back",
    hl: "Supported through the platform, subject to configuration and applicable messaging costs.",
    lm: "Configured as part of our published Essentials package, subject to the applicable service terms.",
  },
  {
    c: "Workflow Automation",
    hl: "Powerful configurable workflow tools.",
    lm: "Applicable follow-up and customer communication workflows configured by our team.",
  },
  {
    c: "Review Automation",
    hl: "Review request and reputation management capabilities.",
    lm: "Review request workflows configured as part of our published service offering.",
  },
  {
    c: "AI Receptionist & AI Tools",
    hl: "AI capabilities available according to product, plan, configuration, and applicable usage charges.",
    lm: "Applicable AI implementation and services included in the relevant Growth or Scale package.",
  },
  {
    c: "Technical Setup",
    hl: "Customers may configure their own systems or purchase available implementation assistance.",
    lm: "The defined done-for-you implementation services included in the purchased package.",
  },
  {
    c: "Ongoing Service",
    hl: "HighLevel provides platform support, resources, and applicable service options.",
    lm: "Agency-level support and ongoing assistance within the terms of the selected package.",
  },
  {
    c: "Best Suited For",
    hl: "Businesses, marketers, and agencies comfortable configuring and managing software themselves.",
    lm: "Service businesses that prefer an established technology platform combined with agency implementation and ongoing services.",
  },
];

const value = [
  {
    n: "01",
    t: "A Professional Website",
    d: "We design and implement a website built around your business, with the services and hosting included in your selected plan.",
  },
  {
    n: "02",
    t: "Connected Customer Communication",
    d: "Help bring incoming leads, messages, appointments, and follow-up into one organized environment.",
  },
  {
    n: "03",
    t: "Practical Automation",
    d: "Put repeatable systems in place for lead follow-up, missed calls, reviews, and other applicable workflows.",
  },
  {
    n: "04",
    t: "Ongoing Assistance",
    d: "Get the support, maintenance, and service included in your subscription rather than managing every component entirely on your own.",
  },
];

const fitDirect = [
  "You enjoy building and configuring automation systems.",
  "You have internal technical resources.",
  "You want to independently manage your CRM configuration.",
  "You're comfortable learning integrations and workflow logic.",
  "You're primarily purchasing access to software.",
];
const fitLavender = [
  "You want a professional website and connected growth systems.",
  "You don't want to configure every workflow yourself.",
  "You need better organization around your leads and customer communication.",
  "You want implementation handled as part of your package.",
  "You value an ongoing relationship with a team familiar with your business.",
];

const steps = [
  {
    n: "01",
    t: "See Your Design",
    d: "Request your free website design preview and see what your new online presence could look like.",
  },
  { n: "02", t: "Choose Your Package", d: "Review your design and select the services that match your business." },
  {
    n: "03",
    t: "We Configure Your System",
    d: "Our team implements the website and applicable software, communication, scheduling, and follow-up tools.",
  },
  {
    n: "04",
    t: "Keep Moving Forward",
    d: "Use your connected system with the ongoing hosting, assistance, and services included in your subscription.",
  },
];

const faq: { q: string; a: string[] }[] = [
  {
    q: "Is Lavender Suite Pro built on HighLevel?",
    a: [
      "Yes. Lavender Suite Pro uses HighLevel technology as its underlying CRM and automation platform.",
      "Lavender Marketing & Co. combines that technology with website implementation, business-specific configuration, and the ongoing services included in your selected subscription.",
    ],
  },
  {
    q: "Is Lavender Suite Pro the same thing as HighLevel?",
    a: [
      "They share the same underlying technology, but they are not identical service offerings.",
      "HighLevel provides the software platform. Lavender Suite Pro is our branded offering, delivered with the applicable implementation and services from Lavender Marketing & Co.",
    ],
  },
  {
    q: "Why should I pay Lavender Marketing & Co. instead of subscribing directly to HighLevel?",
    a: [
      "That depends on what you're looking for.",
      "If you want software access and prefer configuring everything yourself, subscribing directly may make sense.",
      "If you want the website, CRM setup, automations, and services included in a Lavender package handled by our team, our offering may be a better fit.",
    ],
  },
  {
    q: "Can I use HighLevel without Lavender Marketing & Co.?",
    a: [
      "Absolutely. HighLevel is available independently.",
      "Our value comes from the implementation and services we provide, not from restricting access to the underlying technology.",
    ],
  },
  {
    q: "Does Lavender Marketing & Co. provide additional support?",
    a: [
      "We provide the onboarding, assistance, and ongoing services included in your selected plan.",
      "The specific level of support depends on your package and service agreement.",
    ],
  },
  {
    q: "Can my business move to another HighLevel provider?",
    a: [
      "Eligible HighLevel sub-accounts may be transferred through HighLevel's supported transfer process.",
      "Transfers require appropriate authorization and may involve additional steps for integrations, phone services, email configurations, subscriptions, and other connected systems.",
      "Applicable agreements and ownership rights also govern which client-specific or separately licensed materials can be transferred.",
    ],
  },
  {
    q: "Do I own my customer data?",
    a: [
      "Customer data access, export, retention, and ownership are governed by our applicable service agreements, privacy practices, and the underlying platform's capabilities.",
      "We aim to handle customer information responsibly and make legitimate transition requests straightforward.",
    ],
  },
  {
    q: "Is Lavender Marketing & Co. affiliated with HighLevel?",
    a: [
      "Lavender Marketing & Co. is an independent business using HighLevel technology in its branded software offering.",
      "We are not HighLevel itself.",
    ],
  },
];

function Eyebrow({ children }: { children: string }) {
  return <p className="text-sm font-semibold uppercase tracking-widest text-primary">{children}</p>;
}

function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:px-8">
          <div>
            <Eyebrow>Lavender Marketing &amp; Co. vs. HighLevel</Eyebrow>
            <h1 className="mt-3 text-[2.15rem] leading-[1.08] sm:text-6xl">
              Powerful Technology. A More Hands-On Experience.
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              HighLevel gives you the tools to build powerful business systems. Lavender Marketing &amp; Co. helps
              you put those tools to work.
            </p>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Through Lavender Suite Pro, we combine CRM technology, automation, website implementation, and ongoing
              services into a solution designed for local businesses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/pricing">Explore Our Plans</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="#comparison">See the Difference</a>
              </Button>
            </div>
          </div>
          <TechStackVisual
            labels={[
              { name: "Business Operations", role: "Your leads, bookings, reviews and follow-up" },
              { name: "Implementation", role: "Configured and supported by Lavender Marketing & Co." },
              { name: "Technology", role: "Established HighLevel foundation" },
            ]}
          />
        </div>
      </section>

      {/* Transparent explanation */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
          <Reveal>
            <Eyebrow>The platform behind the experience</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Yes, We Use HighLevel. And We're Happy to Tell You Why.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-4 text-muted-foreground">
            <p>
              Lavender Suite Pro is built on HighLevel, an established platform for CRM, marketing automation,
              customer communication, scheduling, and more.
            </p>
            <p>
              We chose to work with existing technology instead of reinventing software that already provides a
              strong foundation.
            </p>
            <p>
              But access to software is only one part of building an effective system for your business. That's
              where Lavender Marketing &amp; Co. comes in. We help configure the tools, connect the moving parts, and
              implement the services included in your plan.
            </p>
            <p className="font-medium text-foreground">
              You're not paying us to pretend we invented HighLevel. You're working with us because you'd rather
              have a team help you put the technology to use.
            </p>
          </Reveal>
        </div>
        <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40">
                <p className="text-sm font-semibold text-primary">{p.n}</p>
                <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="scroll-mt-28 border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>The real difference</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              The Technology May Be Similar. The Experience Doesn't Have to Be.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Both options can give you powerful tools. The difference comes down to how much you want to configure,
              manage, and maintain yourself — and which services you'd rather have handled for you.
            </p>
          </Reveal>

          {/* Desktop table */}
          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border bg-card md:block">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">HighLevel Direct compared with Lavender Marketing &amp; Co.</caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="w-[24%] px-6 py-5 font-semibold text-muted-foreground">Capability</th>
                  <th scope="col" className="w-[38%] px-6 py-5 font-semibold text-foreground">HighLevel Direct</th>
                  <th scope="col" className="w-[38%] bg-primary/[0.06] px-6 py-5 font-semibold text-primary">
                    Lavender Marketing &amp; Co.
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.c} className="border-b border-border last:border-0 transition-colors hover:bg-secondary/50">
                    <th scope="row" className="px-6 py-5 align-top font-semibold text-foreground">{r.c}</th>
                    <td className="px-6 py-5 align-top text-muted-foreground">{r.hl}</td>
                    <td className="bg-primary/[0.04] px-6 py-5 align-top text-foreground/85">{r.lm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-10 space-y-4 md:hidden">
            {rows.map((r) => (
              <div key={r.c} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="text-base font-semibold">{r.c}</h3>
                <dl className="mt-3 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">HighLevel Direct</dt>
                    <dd className="mt-1 text-muted-foreground">{r.hl}</dd>
                  </div>
                  <div className="rounded-xl bg-primary/[0.06] p-3">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-primary">Lavender Marketing &amp; Co.</dt>
                    <dd className="mt-1 text-foreground/85">{r.lm}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Lavender inclusions depend on your selected plan. See{" "}
            <Link to="/pricing" className="underline underline-offset-2 hover:text-primary">
              pricing
            </Link>{" "}
            for what each plan includes.
          </p>
        </div>
      </section>

      {/* Beyond the software */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>Beyond the software</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              You Can Buy the Tools. Or You Can Have Someone Help You Put Them Together.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most business owners don't wake up excited to configure CRM pipelines, connect appointment calendars,
              troubleshoot automations, or figure out why leads aren't being followed up with. They have customers
              to serve and a business to run. Our job is to make the technical side easier.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {value.map((v, i) => (
              <Reveal key={v.n} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <p className="font-display text-3xl font-semibold text-primary/80">{v.n}</p>
                  <h3 className="mt-4 text-lg font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="border-y border-border bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Different Businesses Need Different Levels of Support.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { t: "Going Directly to HighLevel May Make Sense If...", items: fitDirect, accent: false },
              { t: "Lavender Marketing & Co. May Be a Better Fit If...", items: fitLavender, accent: true },
            ].map((card, i) => (
              <Reveal key={card.t} delay={i * 100}>
                <div
                  className={
                    card.accent
                      ? "h-full rounded-2xl border border-primary/30 bg-card p-8"
                      : "h-full rounded-2xl border border-border bg-card p-8"
                  }
                >
                  <h3 className="text-xl font-semibold">{card.t}</h3>
                  <ul className="mt-6 space-y-3">
                    {card.items.map((it) => (
                      <li key={it} className="flex gap-3 text-muted-foreground">
                        <Check className={card.accent ? "mt-1 h-4 w-4 shrink-0 text-primary" : "mt-1 h-4 w-4 shrink-0 text-muted-foreground"} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-3xl space-y-3 text-center text-muted-foreground">
            <p className="font-medium text-foreground">There's no single right answer for every business.</p>
            <p>
              If you want the software and prefer building everything yourself, HighLevel may be a great fit. If
              you'd rather have an agency help build and maintain the systems covered by your package, that's where
              Lavender Marketing &amp; Co. comes in.
            </p>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              From First Design to a Connected Business System.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <li className="list-none">
                  <p className="text-sm font-semibold text-primary">{s.n}</p>
                  <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`q-${i}`}>
                <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  {f.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-[linear-gradient(115deg,#1d1f4a_0%,#231f57_55%,#6d33d6_100%)] px-8 py-14 text-center text-background sm:px-14">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              You Run the Business. We'll Help Build the Systems Behind It.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-background/80">
              From your website to your follow-up, let's build something that makes running your business easier.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <a href={INTAKE_URL}>
                  Get My Free Website Design <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <Link to="/pricing">Explore Our Plans</Link>
              </Button>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Lavender Suite Pro is an independent software and services offering by Lavender Marketing &amp; Co.,
            powered by HighLevel technology. It is not HighLevel itself, nor an officially endorsed HighLevel product.
          </p>
        </div>
      </section>
    </>
  );
}
