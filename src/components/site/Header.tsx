import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ChevronDown, X } from "lucide-react";
import { nav, LOGO } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="Webtec home">
          <img src={LOGO} alt="Webtec" width={120} height={32} className="h-8 w-auto" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary">
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible absolute left-0 top-full w-64 rounded-lg border border-border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-primary"
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
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Free Website Demo</Link>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground"
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
