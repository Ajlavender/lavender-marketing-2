import { useSpell } from "@/lib/locale";
import { Button } from "@/components/ui/button";
import { INTAKE_URL } from "@/data/pricing";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, X, ArrowUpRight } from "lucide-react";
import { nav, LOGO } from "@/data/site";
import { cn } from "@/lib/utils";
import { groupChildren, type MegaChild } from "@/components/site/MegaMenu";
import { GrowthReportDialog } from "@/components/site/GrowthReportDialog";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const isReportPage = useRouterState({ select: (state) => state.location.pathname === "/growth-report" });
  const t = useSpell();
  const [categoryOpen, setCategoryOpen] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(open);
  const [reportOpen, setReportOpen] = useState(false);

  // keep panel mounted through the exit animation — and while the report
  // popup is open, since the dialog lives in this subtree
  useEffect(() => {
    if (open || reportOpen) {
      setMounted(true);
      return;
    }
    const t = setTimeout(() => setMounted(false), 350);
    return () => clearTimeout(t);
  }, [open, reportOpen]);

  // body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // escape + focus trap
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (!firstEl || !lastEl) return;
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div className="lg:hidden" aria-hidden={!open}>
      {/* Scrim */}
      <button
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[99] cursor-default bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          "fixed inset-y-0 right-0 z-[100] flex w-[min(22rem,92vw)] flex-col pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] border-l border-white/12 bg-nav-glass-bg shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-nav-glass-glow blur-[80px]" />

        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/" onClick={onClose} aria-label="Lavender Marketing & Co. home">
            <img src={LOGO} alt="Lavender Marketing & Co." width={120} height={32} className="h-8 w-auto" />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-nav-plum"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 pb-4" aria-label="Mobile">
          {nav.map((item, i) => {
            const isOpen = expanded === item.label;
            return (
              <div
                key={item.label}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                className={cn(
                  "border-b border-white/8 transition-all duration-500 ease-out",
                  open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                )}
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-4 w-4 text-white/70 transition-transform duration-300", isOpen && "rotate-180")}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-3 border-l border-white/15 pb-3 pl-3">
                          {groupChildren(item.children as MegaChild[]).map(([groupLabel, kids]) => (
                            <div key={groupLabel || "default"}>
                              {groupLabel ? <Button variant="ghost" tabIndex={isOpen ? 0 : -1} onClick={() => setCategoryOpen(categoryOpen === groupLabel ? null : groupLabel)} aria-expanded={categoryOpen === groupLabel} className="my-1 h-auto w-full justify-between whitespace-normal px-3 py-3 text-left text-nav-plum-foreground hover:bg-nav-plum-foreground/10 hover:text-nav-plum-foreground">
                                <span className="font-display text-lg leading-tight">{t(groupLabel)}</span><ChevronDown className={cn("size-4 shrink-0",categoryOpen === groupLabel && "rotate-180")} />
                              </Button> : null}
                              {(!groupLabel || categoryOpen === groupLabel) && kids.map(child => <Link key={child.to} to={child.to} onClick={onClose} tabIndex={isOpen ? 0 : -1} className="block rounded-lg px-3 py-3 text-nav-plum-foreground transition-colors hover:bg-nav-plum-foreground/10">
                                <span className="block text-sm font-semibold">{t(child.label)}</span>{child.short && <span className="mt-1 block text-xs leading-relaxed text-nav-plum-foreground/65">{t(child.short)}</span>}
                              </Link>)}
                            </div>
                          ))}
                          {item.to === "/services" && <div className="mt-4 border-t border-nav-glass-border px-3 pt-4"><p className="text-sm font-semibold text-nav-plum-foreground">Not sure what your business needs?</p><p className="mt-2 text-xs leading-relaxed text-nav-plum-foreground/65">We'll help you figure out which tools make sense for you.</p><Button asChild variant="secondary" className="mt-4" tabIndex={isOpen ? 0 : -1}><Link to="/services" onClick={onClose}>Explore the Services <ArrowUpRight className="size-4" /></Link></Button></div>}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="block rounded-xl px-3 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          {isReportPage ? (
            <GrowthReportDialog open={reportOpen} onOpenChange={setReportOpen}>
              <button
                onClick={() => {
                  setReportOpen(true);
                  onClose();
                }}
                className="group relative flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-nav-plum"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to" />
                <span className="relative">Get My Free Google Report</span>
                <ArrowUpRight className="relative h-4 w-4" />
              </button>
            </GrowthReportDialog>
          ) : (
            <a
              href={INTAKE_URL}
              onClick={onClose}
              className="group relative flex items-center justify-center gap-1.5 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-nav-plum"
            >
            <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to transition-all duration-300 group-hover:from-nav-cta-hover-from group-hover:to-nav-cta-hover-to" />
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
            <span className="relative">Get My Free Website Design</span>
            <ArrowUpRight className="relative h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
