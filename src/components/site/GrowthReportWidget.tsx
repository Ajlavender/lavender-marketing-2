const WIDGET_ID = "69913d5dd2dae6c8487503d5";
const SRC = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

const DOC = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1" />
<style>html,body{margin:0;padding:0;background:transparent;font-family:system-ui,sans-serif}</style>
</head><body><script src="${SRC}" data-widget-id="${WIDGET_ID}"><\/script></body></html>`;

/**
 * Embeds the LeadConnector growth-report widget inside an isolated iframe so its
 * global styles/overlays cannot affect the page layout.
 */
export function GrowthReportWidget({ className }: { className?: string }) {
  return (
    <iframe
      title="Free growth report"
      srcDoc={DOC}
      sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
      className={className ?? "h-[70vh] w-full rounded-xl border-0"}
      loading="lazy"
    />
  );
}
