import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ChevronDown, ArrowUpRight, X, Sparkles } from "lucide-react";
import { nav, LOGO } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MegaPanel, type MegaChild } from "@/components/site/MegaMenu";
import { MobileMenu } from "@/components/site/MobileMenu";
import { GrowthReportDialog } from "@/components/site/GrowthReportDialog";
import { LocaleSwitch } from "@/components/site/LocaleSwitch";

type NavChild = MegaChild;

function AnnouncementBar({ onClose }: { onClose: () => void }) {
  return (
       <div className="relative z-50 min-h-9 w-full overflow-hidden border-b border-white/10 bg-gradient-to-r from-nav-cta-from via-[#7c4dff] to-nav-cta-to text-white shadow-[0_8px_30px_-12px_rgba(124,77,255,0.55)]">
      {/* shimmer sweep */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)] [background-size:220%_100%] animate-[shimmer_3.2s_ease-in-out_infinite] motion-reduce:hidden" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="relative mx-auto flex max-w-[90rem] items-center justify-center gap-2 px-4 py-2 pr-10 sm:gap-3 sm:px-8 sm:pr-12 lg:px-10">
        <Sparkles className="hidden h-4 w-4 shrink-0 text-white/90 sm:block" />
        <p className="flex min-w-0 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[0.7rem] font-medium leading-tight tracking-wide sm:text-xs">
          <span className="hidden sm:inline">✦</span>
          <span>
            <span className="hidden sm:inline">Free website design + review engine — launch your site for </span>
            <span className="sm:hidden">Free website design — launch for </span>
            <span className="font-semibold underline decoration-white/40 underline-offset-2">$297/mo</span>.
          </span>
          <Link
            to="/pricing"
            className="inline-flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-full bg-white/15 px-2.5 py-0.5 text-[0.68rem] font-semibold ring-1 ring-inset ring-white/25 transition-colors hover:bg-white/25 sm:text-[0.72rem]"
          >
            See if you qualify
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </p>
        <button
          onClick={onClose}
          aria-label="Dismiss announcement"
          className="absolute right-2 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white/80 ring-1 ring-inset ring-white/20 transition-colors hover:bg-white/20 hover:text-white sm:right-4 lg:right-5"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}


export function Header() {
  const isReportPage = useRouterState({ select: (state) => state.location.pathname === "/growth-report" });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const delta = y - last;
      if (Math.abs(delta) > 6) {
        // hide when scrolling down past the header, show when scrolling up
        setHidden(delta > 0 && y > 120);
        last = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // never hide while a menu is open
  const isHidden = hidden && !openMenu && !open;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      {showAnnouncement && <AnnouncementBar onClose={() => setShowAnnouncement(false)} />}
      <div
        className={cn(
          "relative w-full border-b border-nav-glass-border bg-nav-glass-bg backdrop-blur-2xl transition-all duration-500 ease-out",
          scrolled && "shadow-[0_24px_60px_-20px_rgba(0,0,0,0.55)]",
        )}
      >
        {/* Ambient lavender glow behind the nav */}
        <div
          className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-nav-glass-glow blur-[80px]"
          aria-hidden="true"
        />
        {/* Top highlight line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        {/* Bottom highlight line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-nav-glass-highlight to-transparent" />

        <div
          className={cn(
            "relative mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 transition-[height] duration-500 ease-out sm:px-8 lg:px-10",
            scrolled ? "h-16" : "h-[4.75rem]",
          )}
        >
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Lavender Marketing & Co. home">
            <img src={LOGO} alt="" width={120} height={32} className="h-8 w-[120px] object-contain object-left" fetchPriority="high" />
            <span className="hidden whitespace-nowrap font-display text-lg font-semibold tracking-tight text-white sm:inline">
              Lavender Marketing & Co.
            </span>
          </Link>

          <div className="flex items-center justify-end gap-2 lg:gap-4">
            <nav className="relative hidden items-center gap-1 lg:flex" aria-label="Main">
              {nav.map((item) => {
                return item.children ? (
                  <div
                    key={item.label}
                    className={item.children.some((c: NavChild) => !!c.group) ? "" : "relative"}
                    onMouseEnter={() => openNow(item.label)}
                    onMouseLeave={closeSoon}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium tracking-wide text-nav-plum-foreground/85 transition-all duration-200 hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.15)]",
                        openMenu === item.label && "bg-white/10 text-white shadow-[0_0_24px_-4px_rgba(255,255,255,0.18)]",
                      )}
                      aria-expanded={openMenu === item.label}
                      onFocus={() => openNow(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          openMenu === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-200 ease-out motion-reduce:transition-none",
                        openMenu === item.label
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0",
                      )}
                    >
                      <MegaPanel
                        items={item.children as NavChild[]}
                        wide={(item.children as NavChild[]).some((c) => !!c.group)}
                        open={openMenu === item.label}
                        onNavigate={() => setOpenMenu(null)}
                      />
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onMouseEnter={closeSoon}
                    activeProps={{ className: "text-white bg-white/[0.07] shadow-[0_0_24px_-4px_rgba(255,255,255,0.18)]" }}
                    className="rounded-full px-3 py-2 text-sm font-medium tracking-wide text-nav-plum-foreground/85 transition-all duration-200 hover:bg-white/[0.07] hover:text-white hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.15)]"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <LocaleSwitch className="hidden xl:inline-flex" />
            {isReportPage ? (
              <GrowthReportDialog>
                <Button
                  className="group/btn relative h-9 max-w-[11rem] overflow-hidden rounded-full px-4 text-xs font-semibold tracking-wide text-white shadow-none max-sm:hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to transition-all duration-300 group-hover/btn:from-nav-cta-hover-from group-hover/btn:to-nav-cta-hover-to" />
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                  <span className="relative">Get Free Google Report</span>
                  <ArrowUpRight className="relative h-3.5 w-3.5" />
                </Button>
              </GrowthReportDialog>
            ) : (
              <Button asChild
                className="group/btn relative h-9 max-w-[11rem] overflow-hidden rounded-full px-4 text-xs font-semibold tracking-wide text-white shadow-none max-sm:hidden"
              >
              <a href={INTAKE_URL}>
                <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to transition-all duration-300 group-hover/btn:from-nav-cta-hover-from group-hover/btn:to-nav-cta-hover-to" />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                <span className="relative">Get Free Website Design</span>
                <ArrowUpRight className="relative h-3.5 w-3.5" />
              </Link>
              </Button>
            )}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-nav-plum lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
