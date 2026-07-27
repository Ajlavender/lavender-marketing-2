import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "light" | "dark";
  submitLabel?: string;
  className?: string;
  compact?: boolean;
  /** "lead" = url + email + phone, "message" = email + phone + message */
  fields?: "lead" | "message";
};

export function LeadForm({
  variant = "light",
  submitLabel = "Book Free Consultation",
  className,
  compact,
  fields = "lead",
}: Props) {
  const [values, setValues] = useState({ url: "", email: "", phone: "", message: "" });
  const dark = variant === "dark";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.email) {
      toast.error("Please add your email so we can get back to you.");
      return;
    }
    toast.success("Thanks! We'll be in touch with your free website demo shortly.");
    setValues({ url: "", email: "", phone: "", message: "" });
  }

  const inputCls = cn(
    "h-14 rounded-full border-0 bg-background px-6 text-base shadow-sm placeholder:text-muted-foreground",
    dark && "bg-background/95",
  );

  return (
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
  );
}
