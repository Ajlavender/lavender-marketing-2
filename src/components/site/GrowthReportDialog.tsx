import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GrowthReportWidget } from "./GrowthReportWidget";
import { LOGO } from "@/data/site";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Reusable growth-report popup: the plum gradient banner + the embedded
 * LeadConnector widget. Wrap any trigger element as children.
 *
 * The popup sizes itself to the form's real height and only fills the viewport
 * when the form would otherwise overflow — so there's never a vertical
 * scrollbar inside the popup.
 */
export function GrowthReportDialog({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const bannerRef = useRef<HTMLDivElement>(null);
  const [bannerH, setBannerH] = useState(96);
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800,
  );

  useEffect(() => {
    const update = () => {
      setVh(window.innerHeight);
      if (bannerRef.current) setBannerH(bannerRef.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    if (bannerRef.current) ro.observe(bannerRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // Max widget height: 90% of the viewport minus the banner + dialog padding.
  const widgetMaxH = Math.max(240, vh * 0.9 - bannerH - 16);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="flex max-h-[90dvh] w-[calc(100vw-1rem)] max-w-[calc(100vw-1rem)] flex-col overflow-hidden border-border/50 bg-card p-0 shadow-2xl sm:w-full sm:max-w-[480px] [&>button]:right-3 [&>button]:top-3 [&>button]:text-muted-foreground"
      >
        <DialogTitle className="sr-only">Free Google & Local Visibility Report</DialogTitle>
        <DialogHeader className="sr-only" />

        {/* Gradient plum banner — replaces the widget's native image header */}
        <div
          ref={bannerRef}
          className="relative shrink-0 overflow-hidden bg-gradient-to-r from-[#150524] to-[#2c085d] px-5 pb-3 pt-4 text-white"
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <img src={LOGO} alt="" width={22} height={22} className="h-[22px] w-[22px] object-contain" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                Lavender Marketing & Co.
              </p>
              <p className="truncate text-[17px] font-semibold leading-tight text-white">
                Your free Google & Local Visibility Report
              </p>
            </div>
          </div>
          <div className="relative mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-[#9789b5]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#9789b5]" /> Takes 30 seconds
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-3 w-3 text-[#9789b5]" /> No cost, no obligation
            </span>
          </div>
        </div>

        <div className="bg-background p-0">
          <GrowthReportWidget
            className="w-full rounded-none border-0"
            scale={isMobile ? 1 : 0.9}
            maxHeight={widgetMaxH}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
