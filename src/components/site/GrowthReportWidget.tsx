import { useEffect, useRef } from "react";

const WIDGET_ID = "69913d5dd2dae6c8487503d5";
const SRC = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

/** Embeds the LeadConnector growth-report widget. Client-only. */
export function GrowthReportWidget({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    host.innerHTML = "";
    const script = document.createElement("script");
    script.src = SRC;
    script.async = true;
    script.setAttribute("data-widget-id", WIDGET_ID);
    host.appendChild(script);
    return () => {
      host.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className={className} />;
}
