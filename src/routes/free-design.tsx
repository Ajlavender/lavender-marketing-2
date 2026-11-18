import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { Check, Lock } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Section } from "@/components/site/sections";
import { INTAKE_URL } from "@/data/pricing";
import { submitLead } from "@/lib/leads.functions";

const TITLE = "Claim Your Free Website Design | Lavender Marketing & Co.";
const DESC = "Reserve your free custom website design in under a minute. No card needed — you only pay if you love it and choose to launch.";

export const Route = createFileRoute("/free-design")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://lavendermarketingco.com/free-design" }],
  }),
  component: FreeDesign,
});

const INCLUDED = [
  "A custom homepage design for your business",
  "Mobile and desktop versions",
  "A walkthrough of your design with AJ",
  "No obligation to launch",
];

function FreeDesign() {
  const send = useServerFn(submitLead);
  const [v, setV] = useState({ name: "", email: "", phone: "", business: "" });
  const [sms, setSms] = useState(false);
  const [sending, setSending] = useState(false);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) => setV({ ...v, [k]: e.target.value });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await send({
        data: {
          source: "Free design checkout",
          name: v.name,
          email: v.email,
          phone: v.phone || undefined,
          answers: { business: v.business, smsConsent: sms ? "yes" : "no" },
        },
      });
      if (!res.ok) {
        toast.error("Something went wrong. Please email Aj@lavendermarketingco.com.");
        return;
      }
      window.location.href = `${INTAKE_URL}?email=${encodeURIComponent(v.email)}`;
    } catch {
      toast.error("Something went wrong. Please email Aj@lavendermarketingco.com.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Section className="pt-32">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_22rem]">
        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-border bg-card p-6 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Checkout</p>
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">Claim your free website design</h1>
          <p className="text-muted-foreground">Takes under a minute. Next you'll tell us about your business.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="fd-name">Your name</Label><Input id="fd-name" required maxLength={120} value={v.name} onChange={set("name")} /></div>
            <div className="space-y-2"><Label htmlFor="fd-business">Business name</Label><Input id="fd-business" required maxLength={200} value={v.business} onChange={set("business")} /></div>
            <div className="space-y-2"><Label htmlFor="fd-email">Email</Label><Input id="fd-email" type="email" required maxLength={255} value={v.email} onChange={set("email")} /></div>
            <div className="space-y-2"><Label htmlFor="fd-phone">Phone</Label><Input id="fd-phone" type="tel" maxLength={40} value={v.phone} onChange={set("phone")} /></div>
          </div>
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <Checkbox checked={sms} onCheckedChange={(c) => setSms(c === true)} className="mt-0.5" />
            <span>Optional: I agree to receive text messages from Lavender Marketing & Co. about my design. Message and data rates may apply. Reply STOP to opt out.</span>
          </label>
          <Button type="submit" size="lg" className="w-full" disabled={sending}>
            {sending ? "Confirming…" : "Confirm my free design"}
          </Button>
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> No card needed. You pay nothing unless you choose to launch.</p>
        </form>
        <aside className="h-fit rounded-3xl bg-nav-plum p-6 text-nav-plum-foreground sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-glow">Order summary</p>
          <div className="mt-5 flex items-baseline justify-between border-b border-nav-plum-foreground/15 pb-5">
            <span className="font-semibold">Custom website design</span>
            <span className="font-display text-2xl font-semibold">$0</span>
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {INCLUDED.map((i) => (
              <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-glow" /><span className="text-nav-plum-foreground/80">{i}</span></li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between border-t border-nav-plum-foreground/15 pt-5 font-semibold">
            <span>Due today</span><span>$0.00</span>
          </div>
        </aside>
      </div>
    </Section>
  );
}
