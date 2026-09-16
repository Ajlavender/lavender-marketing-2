import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Globe, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import { BookingDialog } from "@/components/site/BookingDialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";

type Props = {
  variant?: "light" | "dark";
  submitLabel?: string;
  className?: string;
  compact?: boolean;
  /** Render premium field labels above each input */
  labeled?: boolean;
  /** "lead" = url + email + phone, "message" = email + phone + message, "leadInline" = url over phone+email+button */
  fields?: "lead" | "message" | "leadInline";
};

function FieldLabel({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-current/70">
      <Icon className="h-3.5 w-3.5 text-brand" />
      {children}
    </label>
  );
}

export function LeadForm({
  variant = "light",
  submitLabel = "Get My Free Google Report",
  className,
  compact,
  labeled = false,
  fields = "lead",
}: Props) {
  const [values, setValues] = useState({ url: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [booking, setBooking] = useState(false);
  const send = useServerFn(submitLead);
  const dark = variant === "dark";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.email) {
      toast.error("Please add your email so we can get back to you.");
      return;
    }
    setSending(true);
    try {
      const res = await send({
        data: {
          source: `LeadForm:${fields}`,
          email: values.email,
          phone: values.phone || undefined,
          website: values.url || undefined,
          message: values.message || undefined,
        },
      });
      if (!res.ok) {
        toast.error("Something went wrong sending that. Please email Aj@lavendermarketingco.com.");
        return;
      }
      toast.success("Your Google report is being prepared! Check your inbox for your personalized Google & Local Visibility Report.");
      setBooking(true);
    } catch {
      toast.error("Something went wrong sending that. Please email Aj@lavendermarketingco.com.");
    } finally {
      setSending(false);
    }
  }


  const inputCls = cn(
    "h-14 rounded-full border-0 bg-background px-6 text-base shadow-sm placeholder:text-muted-foreground",
    dark && "bg-background/95",
  );

  const bookingDialog = (
    <BookingDialog
      open={booking}
      onOpenChange={(o) => {
        setBooking(o);
        if (!o) setValues({ url: "", email: "", phone: "", message: "" });
      }}
      prefill={{ email: values.email, phone: values.phone }}
    />
  );

  if (fields === "leadInline") {
    return (
      <>
      <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
        <div>
          {labeled && <FieldLabel icon={Globe}>Your website</FieldLabel>}
          <Input
            type="text"
            required
            placeholder="yourwebsite.com"
            aria-label="Website URL"
            value={values.url}
            onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
            className={inputCls}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            {labeled && <FieldLabel icon={Phone}>Phone</FieldLabel>}
            <Input
              type="tel"
              placeholder="(555) 123-4567"
              aria-label="Phone number"
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              className={cn(inputCls, "w-full min-w-0")}
            />
          </div>
          <div>
            {labeled && <FieldLabel icon={Mail}>Email</FieldLabel>}
            <Input
              type="email"
              required
              placeholder="hello@youremail.com"
              aria-label="Email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className={cn(inputCls, "w-full min-w-0")}
            />
          </div>
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={sending}
          className="h-14 w-full rounded-full px-8 text-sm font-bold uppercase tracking-wider sm:w-auto"
        >
          {submitLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
      {bookingDialog}
      </>
    );
  }


  return (
    <>
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      {fields === "lead" ? (
        <>
          {labeled && <FieldLabel icon={Globe}>Your current website</FieldLabel>}
          <Input
            type="text"
            required
            placeholder="yourwebsite.com"
            aria-label="Website URL"
            value={values.url}
            onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
            className={inputCls}
          />
          <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
            <div>
              {labeled && <FieldLabel icon={Mail}>Email address</FieldLabel>}
              <Input
                type="email"
                required
                placeholder="hello@youremail.com"
                aria-label="Email"
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                className={inputCls}
              />
            </div>
            <div>
              {labeled && <FieldLabel icon={Phone}>Phone number</FieldLabel>}
              <Input
                type="tel"
                placeholder="(555) 123-4567"
                aria-label="Phone number"
                value={values.phone}
                onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                className={inputCls}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            {labeled && <FieldLabel icon={Mail}>Email address</FieldLabel>}
            <Input
              type="email"
              required
              placeholder="hello@youremail.com"
              aria-label="Email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            {labeled && <FieldLabel icon={Phone}>Phone number</FieldLabel>}
            <Input
              type="tel"
              placeholder="(555) 123-4567"
              aria-label="Phone number"
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              className={inputCls}
            />
          </div>
          <div>
            {labeled && <FieldLabel icon={MessageSquare}>How can we help?</FieldLabel>}
            <Input
              type="text"
              placeholder="Tell us a little about your project"
              aria-label="Message"
              value={values.message}
              onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              className={inputCls}
            />
          </div>

        </>
      )}
      <Button
        type="submit"
        size="lg"
        className="h-14 w-full text-sm font-bold uppercase tracking-wider"
      >
        {submitLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
    {bookingDialog}
    </>
  );
}
