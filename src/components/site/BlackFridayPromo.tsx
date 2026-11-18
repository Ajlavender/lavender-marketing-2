import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { checkoutLink } from "@/data/pricing";

const DISMISS_KEY = "lmc_bf_promo_dismissed";
const SHOW_DELAY_MS = 5000;
const SHOW_SCROLL_RATIO = 0.45;

/**
 * Black Friday promotion popup for the local Essentials monthly checkout,
 * shown at most once per browser session in either country.
 */
export function BlackFridayPromo() {
  const locale = useLocale();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined" && sessionStorage.getItem(DISMISS_KEY)) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= SHOW_SCROLL_RATIO) show();
    };

    const timer = window.setTimeout(show, SHOW_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [locale]);

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* private mode: popup simply won't persist the dismissal */
    }
    setOpen(false);
  };

  const checkout = checkoutLink("Essentials", locale, "monthly");

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : dismiss())}>
      <DialogContent className="max-w-md overflow-hidden border-brand-glow/25 bg-nav-plum p-0 text-nav-plum-foreground shadow-[0_50px_120px_-30px_color-mix(in_oklab,var(--brand)_60%,transparent)] sm:rounded-[1.75rem] [&>button]:grid [&>button]:h-9 [&>button]:w-9 [&>button]:place-items-center [&>button]:rounded-full [&>button]:border [&>button]:border-white/15 [&>button]:text-nav-plum-foreground/70 [&>button]:opacity-100 [&>button]:transition-colors [&>button]:hover:border-white/30 [&>button]:hover:text-nav-plum-foreground">
        {/* glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-brand-glow/25 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-brand/30 blur-3xl"
        />

        <div className="relative px-7 pb-8 pt-10 text-center sm:px-10">
          <p className="mx-auto inline-flex items-center rounded-full border border-brand-glow/40 bg-brand-glow/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-glow">
            Black Friday
          </p>

          <DialogTitle className="mt-5 text-3xl font-bold leading-[1.08] sm:text-4xl">
            Your first 30 days
            <br />
            <span className="text-brand-glow">are on us.</span>
          </DialogTitle>

          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-nav-plum-foreground/75">
            Start the Essentials plan today and pay nothing for the first month. Your website,
            review engine and customer tools — live before you spend a dollar.
          </p>

          <ul className="mx-auto mt-6 max-w-xs space-y-2.5 text-left text-sm">
            {[
              "Custom website designed and built for you",
              "Automated review engine included",
              locale === "en-us" ? "30 days free, then $297 USD/month" : "30 days free, then CA$297/month",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-glow" />
                <span className="text-nav-plum-foreground/85">{point}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            size="lg"
            className="mt-7 w-full rounded-full bg-brand-glow text-base font-semibold text-brand-deep hover:bg-brand-glow/90"
          >
            <a href={checkout ?? (locale === "en-us" ? "/en-us/pricing" : "/pricing")}>
              Claim my 30 free days <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>

          <Link
            to="/pricing"
            onClick={dismiss}
            className="mt-4 inline-block text-sm font-medium text-nav-plum-foreground/60 underline-offset-4 transition-colors hover:text-nav-plum-foreground hover:underline"
          >
            Compare all plans first
          </Link>

          <p className="mt-5 text-[11px] leading-relaxed text-nav-plum-foreground/45">
            Limited-time offer on the Essentials monthly plan. No long-term contract — cancel
            anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
