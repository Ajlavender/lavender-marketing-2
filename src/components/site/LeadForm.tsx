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
    <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
      <Icon className="h-3.5 w-3.5 text-brand" />
      {children}
    </label>
  );
}

export function LeadForm({
  variant = "light",
  submitLabel = "Book Free Consultation",
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
      toast.success("You're in! Pick a time to talk through your free design.");
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
      <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
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
        {labeled && (
          <div className="grid gap-1.5 sm:grid-cols-2">
            <FieldLabel icon={Phone}>Phone</FieldLabel>
            <FieldLabel icon={Mail}>Email</FieldLabel>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-3">
          <Input
            type="tel"
            placeholder="Phone number"
            aria-label="Phone number"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className={cn(inputCls, "min-w-0 flex-1")}
          />
          <Input
            type="email"
            required
            placeholder="hello@youremail.com"
            aria-label="Email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={cn(inputCls, "min-w-0 flex-1")}
          />
          <Button
            type="submit"
            size="lg"
            className="h-14 shrink-0 rounded-full px-8 text-sm font-bold uppercase tracking-wider"
          >
            {submitLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
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
            <Input
              type="email"
              required
              placeholder="hello@youremail.com"
              aria-label="Email"
              value={values.email}
              onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              className={inputCls}
            />
            <Input
              type="tel"
              placeholder="Your phone number"
              aria-label="Phone number"
              value={values.phone}
              onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
              className={inputCls}
            />
          </div>
        </>
      ) : (
        <>
          <Input
            type="email"
            required
            placeholder="Email"
            aria-label="Email"
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
            className={inputCls}
          />
          <Input
            type="tel"
            placeholder="Your Phone Number"
            aria-label="Phone number"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className={inputCls}
          />
          <Input
            type="text"
            placeholder="Message"
            aria-label="Message"
            value={values.message}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            className={inputCls}
          />

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
