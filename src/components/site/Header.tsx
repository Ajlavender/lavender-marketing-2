import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, ArrowUpRight } from "lucide-react";
import { nav, LOGO } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MegaPanel, groupChildren, type MegaChild } from "@/components/site/MegaMenu";

type NavChild = MegaChild;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={cn(
          "relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-nav-glass-border bg-nav-glass-bg shadow-nav-glass backdrop-blur-2xl transition-all duration-500 ease-out",
          scrolled && "shadow-[0_28px_60px_-14px_rgba(0,0,0,0.45)]",
        )}
      >
        {/* Top highlight line */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-nav-glass-highlight to-transparent" />

        <div
          className={cn(
            "relative flex items-center justify-between gap-6 px-5 transition-[height] duration-500 ease-out sm:px-7",
            scrolled ? "h-16" : "h-[4.5rem]",
          )}
        >
          <Link to="/" className="shrink-0" aria-label="Lavender Marketing & Co. home">
            <img src={LOGO} alt="Lavender Marketing & Co." width={120} height={32} className="h-8 w-auto" />
          </Link>

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
                      "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-200 ease-out",
                      openMenu === item.label
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <MegaPanel
                      items={item.children as NavChild[]}
                      wide={(item.children as NavChild[]).some((c) => !!c.group)}
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

          <div className="flex items-center gap-2">
            <Button
              asChild
              className="group/btn relative hidden overflow-hidden rounded-full px-6 text-sm font-semibold tracking-wide text-white shadow-none sm:inline-flex"
            >
              <Link to="/contact" className="inline-flex items-center gap-1.5">
                <span className="absolute inset-0 bg-gradient-to-br from-nav-cta-from to-nav-cta-to transition-all duration-300 group-hover/btn:from-nav-cta-hover-from group-hover/btn:to-nav-cta-hover-to" />
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
                <span className="relative">Get Your Free Growth Report</span>
                <ArrowUpRight className="relative h-4 w-4" />
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
