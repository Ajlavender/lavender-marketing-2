import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, X, ArrowUpRight } from "lucide-react";
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
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled || openMenu
          ? "translate-y-0 border-b border-white/10 bg-nav-plum/90 shadow-[0_8px_30px_-18px_rgba(16,18,24,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent shadow-none",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-[height] duration-500 ease-out sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >

        <Link to="/" className="shrink-0" aria-label="Lavender Marketing & Co. home">
          <img src={LOGO} alt="Lavender Marketing & Co." width={120} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="relative hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const dark = scrolled || !!openMenu;
            return item.children ? (
              <div
                key={item.label}
                className={item.children.some((c: NavChild) => !!c.group) ? "" : "relative"}
                onMouseEnter={() => openNow(item.label)}
                onMouseLeave={closeSoon}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    dark ? "text-white/85 hover:text-white" : "text-ink hover:text-ink/70",
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
                activeProps={{ className: dark ? "text-white" : "text-ink" }}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  dark ? "text-white/85 hover:text-white" : "text-ink hover:text-ink/70",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>


        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className={cn(
              "hidden rounded-full px-5 text-sm font-semibold transition-colors sm:inline-flex",
              scrolled || openMenu
                ? "border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
                : "border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-ink/10 hover:text-ink",
            )}
          >
            <Link to="/contact" className="inline-flex items-center gap-1.5">
              Get Your Free Growth Report
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors lg:hidden",
              scrolled || openMenu
                ? "border border-white/20 text-white"
                : "border border-ink/20 text-ink hover:border-ink/40 hover:text-ink/80",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-nav-plum lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-white/20 pl-3">
                    {groupChildren(item.children).map(([groupLabel, kids]) => (
                      <div key={groupLabel || "default"}>
                        {groupLabel && (
                          <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wide text-white/50">
                            {groupLabel}
                          </p>
                        )}
                        {kids.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm text-white/80"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
