import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { CARD_PRESETS, REASONS, REQUEST_TYPES, isTransfer, type RequestType } from "@/lib/transition";
import { getTransitionStatus, submitTransitionRequest } from "@/lib/transition.functions";
import { canCollectContact } from "@/lib/consent-policy";

const TITLE = "Customer Success Centre | Lavender Marketing & Co.";
const DESC = "Adjust your plan, get help with your service, or request an account transition.";

export const Route = createFileRoute("/account-transition")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  loader: () => getTransitionStatus(),
  component: TransitionPage,
});

const cards = [
  {
    key: "options" as const,
    t: "Explore My Options",
    d: "Looking for a different level of service or wondering whether your current package still fits? Let's review what's available.",
  },
  {
    key: "improve" as const,
    t: "Improve My Experience",
    d: "Something isn't working the way you'd hoped? Tell us what's happening so we can look into it.",
  },
  {
    key: "transition" as const,
    t: "Request an Account Transition",
    d: "Thinking about managing your own HighLevel account or moving to another provider? We'll help explain the process.",
  },
];

const next = [
  { n: "01", t: "Request Received", d: "We review the details you've submitted." },
  {
    n: "02",
    t: "Next Steps Confirmed",
    d: "We'll explain the available service options or any requirements related to your requested transition.",
  },
  {
    n: "03",
    t: "Resolution or Transition",
    d: "If we agree on a solution, we'll document the changes. If you decide to move, we'll coordinate the applicable transfer or cancellation process.",
  },
];

const faq: { q: string; a: string[] }[] = [
  {
    q: "What happens to my account if I switch providers?",
    a: [
      "HighLevel supports transfers of eligible client sub-accounts between agencies.",
      "These transfers generally move the supported contents of the account together rather than selectively transferring individual records.",
    ],
  },
  {
    q: "Will everything transfer automatically?",
    a: [
      "Not necessarily.",
      "Depending on the account and transfer method, some third-party integrations, subscriptions, phone services, email settings, connected accounts, and automation settings may require additional work.",
    ],
  },
  {
    q: "Can I move to my own HighLevel account?",
    a: [
      "HighLevel provides a process for eligible sub-accounts to move into a newly established independent agency account, subject to the platform's requirements.",
    ],
  },
  {
    q: "Will Lavender Marketing & Co. remove my customer records or workflows?",
    a: [
      "We will handle legitimate requests according to our agreements, applicable ownership and licensing rights, and platform capabilities.",
      "We will not deliberately interfere with a legitimate transfer or remove customer-owned information as retaliation for leaving.",
    ],
  },
  {
    q: "Are there transfer fees?",
    a: [
      "Any applicable transition assistance fees or contractual obligations will be disclosed before chargeable work is performed.",
    ],
  },
  {
    q: "Can I change my mind?",
    a: [
      "Contact our team as soon as possible.",
      "Available options depend on the current status of the request and whether any platform transfer actions have already been completed.",
    ],
  },
];

const field =
  "mt-1.5 block w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-60";
const labelCls = "text-sm font-medium text-foreground";

function SupportContact() {
  return (
    <>
      email{" "}
      <a href="mailto:Aj@lavendermarketingco.com" className="font-medium text-primary underline underline-offset-2">
        Aj@lavendermarketingco.com
      </a>{" "}
      or call{" "}
      <a href="tel:5196716248" className="font-medium text-primary underline underline-offset-2">
        519-671-6248
      </a>
    </>
  );
}

function TransitionPage() {
  const { configured } = Route.useLoaderData();
  const locale = useLocale();
  const formRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(Date.now());
  const [requestType, setRequestType] = useState<RequestType | "">("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState<string | null>(null);

  const pick = (key: keyof typeof CARD_PRESETS) => {
    setRequestType(CARD_PRESETS[key]);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => formRef.current?.querySelector<HTMLInputElement>("#fullName")?.focus({ preventScroll: true }), 500);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!configured || !canCollectContact("support")) return;
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const res = await submitTransitionRequest({
        data: {
          fullName: String(fd.get("fullName") ?? ""),
          businessName: String(fd.get("businessName") ?? ""),
          email: String(fd.get("email") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          requestType: requestType as string,
          reason: String(fd.get("reason") ?? ""),
          details: String(fd.get("details") ?? ""),
          improve: String(fd.get("improve") ?? ""),
          openToDiscuss: fd.get("openToDiscuss") === "on",
          authorized: (fd.get("authorized") === "on") as true,
          locale,
          company: String(fd.get("company") ?? ""),
          elapsedMs: Date.now() - startedAt.current,
        },
      });
      if (res.ok) {
        setReference(res.reference);
        setStatus("idle");
        window.scrollTo({ top: (formRef.current?.offsetTop ?? 0) - 120, behavior: "smooth" });
      } else {
        setStatus("error");
        setError(res.error);
      }
    } catch {
      setStatus("error");
      setError("Please check the required fields and try again.");
    }
  };

  return (
    <div className="bg-secondary">
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-5 pb-12 pt-36 text-center sm:px-6 sm:pt-40">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Customer success</p>
        <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">Let's Find the Best Way Forward.</h1>
        <p className="mt-5 text-muted-foreground sm:text-lg">
          Your business changes. Sometimes your software and service needs change with it.
        </p>
        <p className="mt-3 text-muted-foreground sm:text-lg">
          Whether you'd like to adjust your plan, resolve an issue, or move your account to another provider, we're
          here to help you understand your options and make the process straightforward.
        </p>
        <p className="mt-5 font-medium text-foreground">
          No pressure. Just a clear conversation about what works best for your business.
        </p>
      </section>

      {/* Options */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((c) => {
            const active = requestType === CARD_PRESETS[c.key];
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => pick(c.key)}
                aria-pressed={active}
                className={cn(
                  "rounded-2xl border bg-card p-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active ? "border-primary" : "border-border hover:border-primary/40",
                )}
              >
                <h2 className="text-lg font-semibold">{c.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-6">
        <div className="scroll-mt-28 rounded-3xl border border-border bg-card p-6 sm:p-10" ref={formRef}>
          {!canCollectContact("support") ? (
            <p className="text-muted-foreground">For help with your account, please <SupportContact />.</p>
          ) : reference ? (
            <div role="status" className="py-6 text-center">
              <h2 className="text-3xl font-semibold">We've Received Your Request.</h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Thanks for reaching out. We've received your information, and our team will follow up using the email
                address provided.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Reference number: <span className="font-mono font-semibold text-foreground">{reference}</span>
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate={false} className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold">Tell Us What You Need.</h2>
                <p className="mt-2 text-muted-foreground">
                  Share a few details below so our team can review your request and follow up appropriately.
                </p>
              </div>

              {!configured && (
                <div role="note" className="rounded-xl border border-border bg-secondary p-4 text-sm text-foreground">
                  Online requests are being set up and can't be sent from this page yet. Please <SupportContact /> and
                  we'll take care of your request directly.
                </div>
              )}

              <fieldset disabled={!configured || status === "sending"} className="space-y-6">
                {/* Honeypot */}
                <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>
                    Company <input name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelCls}>Full Name</label>
                    <input id="fullName" name="fullName" required maxLength={120} autoComplete="name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="businessName" className={labelCls}>Business Name</label>
                    <input id="businessName" name="businessName" required maxLength={160} autoComplete="organization" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>Email Associated With Your Account</label>
                    <input id="email" name="email" type="email" required maxLength={255} autoComplete="email" className={field} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone Number <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={40}
                      pattern="[+()\-.\s0-9]*"
                      autoComplete="tel"
                      placeholder="519-555-0123"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requestType" className={labelCls}>What Would You Like to Do?</label>
                  <select
                    id="requestType"
                    name="requestType"
                    required
                    value={requestType}
                    onChange={(e) => setRequestType(e.target.value as RequestType)}
                    className={field}
                  >
                    <option value="" disabled>Choose one</option>
                    {REQUEST_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {isTransfer(requestType) && (
                    <p className="mt-3 rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
                      HighLevel account transfers require authorization and coordination between the relevant agencies
                      or account owners. Our team will confirm the necessary details and explain the next steps.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reason" className={labelCls}>
                    What's Prompting This Request? <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <select id="reason" name="reason" defaultValue="" className={field}>
                    <option value="">Choose one</option>
                    {REASONS.map((r) => (
                      <option key={r.value} value={r.value}>{r.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className={labelCls}>
                    Tell Us a Little More <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <textarea id="details" name="details" rows={4} maxLength={2000} placeholder="Is there anything you'd like us to know?" className={field} />
                </div>

                <div>
                  <label htmlFor="improve" className={labelCls}>
                    Is There Anything We Could Improve That Would Make You Want to Stay?{" "}
                    <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="improve"
                    name="improve"
                    rows={3}
                    maxLength={2000}
                    placeholder="A different service arrangement, help with your system, or something else?"
                    className={field}
                  />
                </div>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 text-sm text-foreground">
                    <input type="checkbox" name="openToDiscuss" className="mt-0.5 h-5 w-5 shrink-0 accent-primary" />
                    <span>
                      <span className="block font-medium">Would You Like to Discuss Your Options?</span>
                      <span className="text-muted-foreground">Yes, I'd be open to a conversation about my options. (optional)</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 text-sm text-foreground">
                    <input type="checkbox" name="authorized" required className="mt-0.5 h-5 w-5 shrink-0 accent-primary" />
                    <span>I confirm that I am authorized to submit this request on behalf of the business.</span>
                  </label>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  Submitting this form records your request for review. It does not automatically transfer your account
                  or change your subscription settings. Cancellation requests will be handled according to your
                  applicable agreement and legal rights. We use these details only to handle your request — see our{" "}
                  <Link to="/privacy-policy" className="underline underline-offset-2 hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </p>

                {status === "error" && (
                  <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground">
                    {error} Your request was not sent. Please try again, or <SupportContact />.
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                  Submit My Request
                </Button>
              </fieldset>
            </form>
          )}
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-6">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">What Happens Next</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {next.map((s) => (
              <li key={s.n} className="border-t border-border pt-6">
                <p className="text-sm font-semibold text-primary">{s.n}</p>
                <h3 className="mt-2 text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl bg-secondary p-8 text-center">
            <p className="text-xl font-semibold">Your business. Your decision.</p>
            <p className="mt-3 text-muted-foreground">
              We believe the best customer relationships are built on transparency and trust. If Lavender is still the
              right fit, we'd love to keep working together. If not, we'll help make the next steps clear.
            </p>
          </div>
        </div>
      </section>

      {/* Transfer FAQ */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Account Transfer Questions</h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((f, i) => (
              <AccordionItem key={f.q} value={`t-${i}`}>
                <AccordionTrigger className="text-left text-lg">{f.q}</AccordionTrigger>
                <AccordionContent className="space-y-3 text-muted-foreground">
                  {f.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Prefer to talk to someone? You can always <SupportContact />.
          </p>
        </div>
      </section>
    </div>
  );
}
