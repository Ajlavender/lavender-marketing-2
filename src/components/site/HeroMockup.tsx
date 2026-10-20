import { useEffect, useState } from "react";
import { MessageSquareText, Star, CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: Star, title: "New 5-star Google review", body: "\u201cFast, friendly, and the site looks amazing.\u201d", tone: "text-orange" },
  { icon: MessageSquareText, title: "Missed call \u2192 text sent", body: "\u201cSorry we missed you! How can we help?\u201d", tone: "text-brand" },
  { icon: CalendarCheck, title: "New booking", body: "Estimate visit \u00b7 Thursday 10:00 AM", tone: "text-primary" },
];

/** Stacked "live" notifications that ease in one after another. */
export function HeroMockup({ className }: { className?: string }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShown(items.length); return; }
    const timers = items.map((_, i) => setTimeout(() => setShown(i + 1), 900 + i * 900));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div aria-hidden="true" className={cn("pointer-events-none flex w-72 flex-col gap-3", className)}>
      {items.map((it, i) => {
        const Icon = it.icon;
        return (
          <div
            key={it.title}
            className={cn(
              "flex items-start gap-3 rounded-2xl border border-white/60 bg-background/90 p-3.5 shadow-xl backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              i < shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
            )}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <Icon className={cn("h-4.5 w-4.5", it.tone)} />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{it.title}</span>
              <span className="mt-0.5 block truncate text-xs text-muted-foreground">{it.body}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
