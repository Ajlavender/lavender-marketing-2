import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, ArrowUpRight } from "lucide-react";
import { nav, LOGO } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MegaPanel, type MegaChild } from "@/components/site/MegaMenu";
import { MobileMenu } from "@/components/site/MobileMenu";

type NavChild = MegaChild;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
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
            <img src={LOGO} alt="" width={120} height={32} className="h-8 w-auto" />
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
                        "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium tracking-wide text-nav-plum-foreground/80 transition-colors hover:text-white",
                        openMenu === item.label && "bg-white/10 text-white",
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
                    activeProps={{ className: "text-white" }}
                    className="rounded-full px-3 py-2 text-sm font-medium tracking-wide text-nav-plum-foreground/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <Button
              asChild
              className="group/btn relative hidden h-9 overflow-hidden rounded-full px-4 text-xs font-semibold tracking-wide text-white shadow-none sm:inline-flex"
            >
              <Link to="/contact" className="inline-flex items-center gap-1">
                <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to transition-all duration-300 group-hover/btn:from-nav-cta-hover-from group-hover/btn:to-nav-cta-hover-to" />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                <span className="relative">Free Growth Report</span>
                <ArrowUpRight className="relative h-3.5 w-3.5" />
              </Link>
            </Button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-nav-plum lg:hidden"
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
