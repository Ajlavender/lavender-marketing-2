const WIDGET_ID = "69913d5dd2dae6c8487503d5";
const SRC = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

const DOC = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1" />
<style>html,body{margin:0;padding:0;background:transparent;font-family:system-ui,sans-serif}</style>
</head><body><script src="${SRC}" data-widget-id="${WIDGET_ID}"><\/script></body></html>`;

/**
 * Embeds the LeadConnector growth-report widget inside an isolated iframe so its
 * global styles/overlays cannot affect the page layout.
 *
 * `scale` zooms the embedded document out (desktop) so the whole form fits on
 * screen without inner scrolling; the iframe is sized up by 1/scale to compensate.
 */
export function GrowthReportWidget({
  className,
  scale = 1,
}: {
  className?: string;
  scale?: number;
}) {
  const pct = `${100 / scale}%`;
  return (
    <div className={`relative overflow-hidden ${className ?? "h-[70vh] w-full rounded-xl"}`}>
      <iframe
        title="Free growth report"
        srcDoc={DOC}
        sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
        className="absolute left-0 top-0 border-0"
        style={{
          width: pct,
          height: pct,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        loading="lazy"
      />
    </div>
  );
}
