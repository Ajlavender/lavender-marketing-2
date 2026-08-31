const WIDGET_ID = "69913d5dd2dae6c8487503d5";
const SRC = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

/**
 * CSS injected into the iframe document. The LeadConnector widget ships with
 * fixed max-widths (480px banner, 384px form) and centers itself, so when we
 * zoom the iframe out (scale < 1) the form floats with whitespace on both
 * sides. Forcing every layer to fill 100% width makes the form span the full
 * iframe, so the zoom no longer leaves side gaps.
 */
const FILL_CSS = `
[id^="prospecting-widget-"] { width: 100% !important; max-width: 100% !important; }
[id^="prospecting-widget-"] * { max-width: 100% !important; }
[id^="prospecting-widget-"] div { width: 100% !important; margin: 0 !important; }
[id^="prospecting-widget-"] form { width: 100% !important; margin: 0 !important; padding: 0 1.25rem 1.5rem !important; display: flex !important; flex-direction: column !important; gap: 0.875rem !important; }
[id^="prospecting-widget-"] img { width: 100% !important; height: auto !important; margin: 0 !important; display: block; }
[id^="prospecting-widget-"] .flex.flex-col.gap-4 { padding: 0 !important; gap: 0 !important; }
[id^="prospecting-widget-"] p { padding: 1rem 1.25rem !important; margin: 0 !important; }
[id^="prospecting-widget-"] label { display: block !important; margin-bottom: 0.375rem !important; line-height: 1.35 !important; }
[id^="prospecting-widget-"] input, [id^="prospecting-widget-"] select, [id^="prospecting-widget-"] textarea {
  width: 100% !important; height: auto !important; min-height: 2.75rem !important;
  padding: 0.625rem 0.875rem !important; line-height: 1.4 !important; font-size: 15px !important;
}
[id^="prospecting-widget-"] button { min-height: 2.875rem !important; margin-top: 0.25rem !important; }
`;

const DOC = `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1" />
<style>html,body{margin:0;padding:0;background:transparent;font-family:system-ui,sans-serif}${FILL_CSS}</style>
</head><body><script src="${SRC}" data-widget-id="${WIDGET_ID}"><\/script></body></html>`;

/**
 * Embeds the LeadConnector growth-report widget inside an isolated iframe so
 * its global styles/overlays cannot affect the page layout.
 *
 * `scale` zooms the embedded document out (desktop) so the whole form fits on
 * screen without inner scrolling; the iframe is sized up by 1/scale to
 * compensate. The injected FILL_CSS keeps the form flush to the iframe edges
 * so no side whitespace appears at any zoom level.
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
