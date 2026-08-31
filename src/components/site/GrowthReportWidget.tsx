const WIDGET_ID = "6a96011c8fedf72db4fd0b10";
const SRC = "https://services.leadconnectorhq.com/prospecting/client/widget-embed.js";

/**
 * CSS injected into the iframe document. The LeadConnector widget ships with
 * fixed max-widths (480px banner, 384px form) and centers itself, so when we
 * zoom the iframe out (scale < 1) the form floats with whitespace on both
 * sides. Forcing every layer to fill 100% width makes the form span the full
 * iframe, so the zoom no longer leaves side gaps.
 */
const W = '[id^="prospecting-widget-"]';
const FILL_CSS = `
${W} { width: 100% !important; max-width: 100% !important; }
/* outer wrapper + the white card: fill the iframe instead of the widget's fixed 30rem */
${W} > div { width: 100% !important; max-width: 100% !important; }
${W} > div > div { width: 100% !important; max-width: 100% !important; padding: 24px !important; border-radius: 0 !important; }
/* banner block: keep its full-bleed breakout in sync with the new padding */
${W} > div > div > div:first-child { margin: -24px -24px 1rem !important; }
/* the form is capped at max-w-sm by the widget */
${W} form { width: 100% !important; max-width: 100% !important; }
/* radio row must wrap instead of overflowing */
${W} form > div.flex { flex-wrap: wrap !important; row-gap: 0.5rem !important; }
${W} input:not([type="radio"]):not([type="checkbox"]),
${W} select,
${W} textarea { min-height: 2.75rem !important; padding: 0.625rem 0.875rem !important; }
${W} button[type="submit"] { min-height: 2.875rem !important; }
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
