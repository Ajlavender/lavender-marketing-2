import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "light" | "dark";
  submitLabel?: string;
  className?: string;
  compact?: boolean;
};

export function LeadForm({
  variant = "light",
  submitLabel = "Book Free Consultation",
  className,
  compact,
}: Props) {
  const [values, setValues] = useState({ url: "", email: "", phone: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.email || !values.url) {
      toast.error("Please add your website URL and email so we can send the demo.");
      return;
    }
    toast.success("Thanks! We'll be in touch with your free website demo shortly.");
    setValues({ url: "", email: "", phone: "" });
  }

  const dark = variant === "dark";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-3", compact && "sm:flex sm:items-center sm:gap-3 sm:space-y-0", className)}
    >
      <Input
        type="url"
        required
        placeholder="Website URL"
        aria-label="Website URL"
        value={values.url}
        onChange={(e) => setValues((v) => ({ ...v, url: e.target.value }))}
        className={cn(dark && "border-background/20 bg-background/10 text-background placeholder:text-background/60")}
      />
      <Input
        type="email"
        required
        placeholder="Email"
        aria-label="Email"
        value={values.email}
        onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        className={cn(dark && "border-background/20 bg-background/10 text-background placeholder:text-background/60")}
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        aria-label="Phone Number"
        value={values.phone}
        onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
        className={cn(dark && "border-background/20 bg-background/10 text-background placeholder:text-background/60")}
      />
      <Button type="submit" className="w-full sm:w-auto">
        {submitLabel}
      </Button>
    </form>
  );
}
