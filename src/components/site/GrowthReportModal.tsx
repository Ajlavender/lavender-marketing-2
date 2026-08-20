"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { LeadConnectorWidget } from "@/components/site/LeadConnectorWidget";

const EVENT = "lavender:open-growth-report";

/** Opens the Growth Report modal from anywhere in the app. */
export function openGrowthReport() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(EVENT));
  }
}

export function GrowthReportModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(EVENT, handler);
    return () => window.removeEventListener(EVENT, handler);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-h-[92dvh] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto overscroll-contain border-white/10 bg-nav-plum p-5 text-nav-plum-foreground sm:p-8"
      >
        <div className="space-y-2 pr-6 text-left">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-nav-plum-foreground/80">
            Free report
          </span>
          <DialogTitle className="text-2xl font-black tracking-tight sm:text-3xl">
            Get your free growth report
          </DialogTitle>
          <DialogDescription className="text-nav-plum-foreground/70">
            Answer a few quick questions and we&apos;ll send your one-page report within 24 hours.
          </DialogDescription>
        </div>

        {open && <LeadConnectorWidget variant="bare" className="mt-5" />}
      </DialogContent>
    </Dialog>
  );
}
