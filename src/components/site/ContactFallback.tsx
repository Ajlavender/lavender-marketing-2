import { cn } from "@/lib/utils";

export function ContactFallback({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <p className={cn("py-4 text-base leading-relaxed", dark ? "text-primary-foreground" : "text-foreground", className)}>
      Get in touch at{" "}
      <a href="mailto:Aj@lavendermarketingco.com" className="font-semibold underline underline-offset-4">
        Aj@lavendermarketingco.com
      </a>{" "}
      or call{" "}
      <a href="tel:5196716248" className="whitespace-nowrap font-semibold underline underline-offset-4">
        519-671-6248
      </a>.
    </p>
  );
}