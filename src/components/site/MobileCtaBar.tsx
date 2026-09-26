import { INTAKE_URL } from "@/data/pricing";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GrowthReportDialog } from "@/components/site/GrowthReportDialog";

/**
 * Sticky mobile-only CTA bar pinned to the bottom of the viewport,
 * respecting the iPhone home-indicator safe area.
 */
export function MobileCtaBar() {
  const isReportPage = useRouterState({ select: (state) => state.location.pathname === "/growth-report" });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] pt-2 transition-all duration-300 ease-out lg:hidden",
        "bg-gradient-to-t from-background via-background/95 to-transparent",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
        {isReportPage ? (
          <GrowthReportDialog>
            <Button className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-[0.95rem] font-semibold text-white shadow-[0_16px_40px_-14px_rgba(124,77,255,0.85)] active:scale-[0.99]">
              <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to" />
              <Sparkles className="relative h-4 w-4 shrink-0" />
              <span className="relative truncate">Get My Free Google Report</span>
              <ArrowUpRight className="relative h-4 w-4 shrink-0" />
            </Button>
          </GrowthReportDialog>
        ) : (
          <Button asChild className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-[0.95rem] font-semibold text-white shadow-[0_16px_40px_-14px_rgba(124,77,255,0.85)] active:scale-[0.99]">
          <a href={INTAKE_URL}>
            <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to" />
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/25" />
            <Sparkles className="relative h-4 w-4 shrink-0" />
            <span className="relative truncate">Get My Free Website Design</span>
            <ArrowUpRight className="relative h-4 w-4 shrink-0" />
          </a>
          </Button>
        )}
    </div>,
    document.body,
  );
}
