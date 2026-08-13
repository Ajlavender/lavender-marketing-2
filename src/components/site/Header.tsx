import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, X, ArrowUpRight } from "lucide-react";
import { nav, LOGO } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-nav-plum shadow-[0_8px_30px_-18px_rgba(16,18,24,0.45)]">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 transition-[height] duration-500 ease-out sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >

        <Link to="/" className="shrink-0" aria-label="Lavender Marketing & Co. home">
          <img src={LOGO} alt="Lavender Marketing & Co." width={120} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-nav-plum-foreground/90 transition-colors hover:text-white">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-0 top-full w-64 rounded-xl border border-white/10 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-white" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-nav-plum-foreground/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden rounded-full border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:border-white hover:bg-white/10 hover:text-white sm:inline-flex">
            <Link to="/contact" className="inline-flex items-center gap-1.5">
              Get My Free Audit
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
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
                    {item.children.map((child) => (
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
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
