"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const WIDGET_SCRIPT = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";
const WIDGET_ID = "69913d5dd2dae6c8487503d5";

export type LeadConnectorWidgetProps = {
  className?: string;
};

export function LeadConnectorWidget({ className }: LeadConnectorWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined" || !containerRef.current) return;

    const existing = document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`);
    if (existing) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = WIDGET_SCRIPT;
    script.async = true;
    script.dataset.widgetId = WIDGET_ID;

    script.onload = () => setLoaded(true);
    script.onerror = () => {
      // eslint-disable-next-line no-console
      console.error("LeadConnector widget failed to load");
    };

    containerRef.current.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-[420px] w-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm",
        className,
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-nav-plum-foreground/70">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
          <p className="text-sm font-medium">Loading form…</p>
        </div>
      )}
    </div>
  );
}
