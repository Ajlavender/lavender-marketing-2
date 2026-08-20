"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const WIDGET_SCRIPT = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
const WIDGET_ID = "69913d5dd2dae6c8487503d5";
export const GROWTH_REPORT_DIRECT_URL =
  "https://services.leadconnectorhq.com/prospecting/widgets/public/69913d5dd2dae6c8487503d5";

export type LeadConnectorWidgetProps = {
  className?: string;
  /** Visual container treatment. "bare" removes padding/border (useful inside a modal). */
  variant?: "panel" | "bare";
};

type Status = "loading" | "ready" | "error";

export function LeadConnectorWidget({ className, variant = "panel" }: LeadConnectorWidgetProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setStatus("loading");
    setAttempt((a) => a + 1);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (typeof document === "undefined" || !mount) return;

    mount.innerHTML = "";

    const script = document.createElement("script");
    script.src = `${WIDGET_SCRIPT}?r=${attempt}`;
    script.async = true;
    script.dataset.widgetId = WIDGET_ID;
    script.onload = () => setStatus("ready");
    script.onerror = () => setStatus("error");

    // Fail-safe: if nothing renders within 12s, show the fallback.
    const timer = window.setTimeout(() => {
      setStatus((s) => (s === "loading" ? "error" : s));
    }, 12000);

    mount.appendChild(script);

    return () => {
      window.clearTimeout(timer);
      script.onload = null;
      script.onerror = null;
      script.remove();
    };
  }, [attempt]);

  return (
    <div
      className={cn(
        "relative w-full",
        variant === "panel" &&
          "rounded-2xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm sm:rounded-3xl sm:p-6",
        className,
      )}
    >
      <div
        ref={mountRef}
        className={cn(
          "w-full overflow-x-hidden",
          // Let the embed dictate height, but keep a sensible floor per breakpoint
          status === "ready" ? "min-h-[360px] sm:min-h-[420px]" : "min-h-0",
          "[&_iframe]:!w-full [&_iframe]:!max-w-full [&_iframe]:!rounded-2xl [&_iframe]:!border-0",
          "[&_*]:!max-w-full",
        )}
      />

      {status === "loading" && <WidgetSkeleton />}

      {status === "error" && (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-10 text-center">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-amber-400/15 text-amber-300">
            <AlertTriangle className="h-5 w-5" />
          </span>
          <div className="space-y-1">
            <p className="text-base font-semibold text-nav-plum-foreground">
              The form didn&apos;t load
            </p>
            <p className="mx-auto max-w-sm text-sm text-nav-plum-foreground/70">
              An ad blocker or a slow connection can block it. Try again, or open the form in a new
              tab.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={retry}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>
            <a
              href={GROWTH_REPORT_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-nav-plum-foreground transition-colors hover:bg-white/10"
            >
              Open in new tab
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function WidgetSkeleton() {
  return (
    <div className="animate-pulse space-y-4 px-1 py-4" aria-hidden>
      <div className="h-3 w-28 rounded-full bg-white/15" />
      <div className="h-11 w-full rounded-xl bg-white/10" />
      <div className="h-3 w-24 rounded-full bg-white/15" />
      <div className="h-11 w-full rounded-xl bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3">
          <div className="h-3 w-20 rounded-full bg-white/15" />
          <div className="h-11 w-full rounded-xl bg-white/10" />
        </div>
        <div className="space-y-3">
          <div className="h-3 w-20 rounded-full bg-white/15" />
          <div className="h-11 w-full rounded-xl bg-white/10" />
        </div>
      </div>
      <div className="h-12 w-full rounded-full bg-white/15" />
      <span className="sr-only">Loading the growth report form…</span>
    </div>
  );
}
