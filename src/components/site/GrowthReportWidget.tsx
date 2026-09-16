import { useEffect, useRef, useState } from "react";

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
 * Auto-fit: because the iframe is a same-origin srcDoc (sandbox includes
 * allow-same-origin), the parent can read the widget's real content height
 * once it renders. The container is then sized to that exact content height
 * (capped at `maxHeight`), so:
 *  - on a tall screen the popup shrinks to the form — no empty gap, scale 1;
 *  - on a short screen the form is scaled down to fit `maxHeight` — no scroll.
 */
export function GrowthReportWidget({
  className,
  scale: scaleCap = 1,
  maxHeight,
}: {
  className?: string;
  scale?: number;
  maxHeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [contentH, setContentH] = useState(0);

  // Measure the widget's natural content height inside the iframe.
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    let stopped = false;
    const measure = (): boolean => {
      if (stopped) return false;
      try {
        const doc = iframe.contentDocument;
        if (!doc) return false;
        const widget = doc.querySelector(W) as HTMLElement | null;
        if (widget && widget.scrollHeight > 0) {
          setContentH(widget.scrollHeight);
          return true;
        }
      } catch {
        /* cross-origin / not ready yet */
      }
      return false;
    };
    const onLoad = () => {
      let tries = 0;
      const id = setInterval(() => {
        if (measure() || ++tries > 80) clearInterval(id);
      }, 200);
    };
    iframe.addEventListener("load", onLoad);
    measure();
    return () => {
      stopped = true;
      iframe.removeEventListener("load", onLoad);
    };
  }, []);

  // Container height: the form's real height, capped at maxHeight when given.
  const targetH =
    contentH > 0 ? (maxHeight ? Math.min(contentH, maxHeight) : contentH) : maxHeight ?? 360;

  // Scale so the (unscaled, full-height) iframe fits the container exactly.
  const scale = contentH > 0 ? Math.min(scaleCap, targetH / contentH) : scaleCap;

  // iframe sized to the natural content (no internal scroll); scaled to fit.
  const iframeH = contentH > 0 ? `${contentH}px` : "100%";
  const iframeW = `${100 / scale}%`;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? "h-[70vh] w-full rounded-xl"}`}
      style={{ height: targetH }}
    >
      <iframe
        ref={iframeRef}
        title="Free Google & Local Visibility Report"
        srcDoc={DOC}
        sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
        className="absolute left-0 top-0 border-0"
        style={{
          width: iframeW,
          height: iframeH,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        loading="lazy"
      />
    </div>
  );
}
