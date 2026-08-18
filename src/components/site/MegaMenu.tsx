import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bot,
  CalendarCheck,
  Inbox,
  LayoutDashboard,
  LineChart,
  MapPin,
  MessageSquare,
  Megaphone,
  PhoneMissed,
  Repeat,
  ServerCog,
  Sparkles,
  Star,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type MegaChild = { label: string; to: string; group?: string; short?: string; value?: string };

const ICONS: Record<string, LucideIcon> = {
  "/website-redesign": LayoutDashboard,
  "/chat-widget": MessageSquare,
  "/missed-call-text-back": PhoneMissed,
  "/review-automation": Star,
  "/online-booking": CalendarCheck,
  "/follow-up-automation": Repeat,
  "/unified-inbox": Inbox,
  "/crm-pipeline": LineChart,
  "/hosting-and-support": ServerCog,
  "/growth-report": LineChart,
  "/ai-chat-widget": Bot,
  "/voice-ai-receptionist": PhoneCall,
  "/ad-management": Megaphone,
  "/local-seo": MapPin,
};

function groupChildren(children: readonly MegaChild[]): [string, MegaChild[]][] {
  const groups: [string, MegaChild[]][] = [];
  for (const child of children) {
    const key = child.group ?? "";
    const existing = groups.find(([k]) => k === key);
    if (existing) existing[1].push(child);
    else groups.push([key, [child]]);
  }
  return groups;
}

function Row({
  child,
  onNavigate,
  open = true,
  index = 0,
}: {
  child: MegaChild;
  onNavigate?: () => void;
  open?: boolean;
  index?: number;
}) {
  const Icon = ICONS[child.to] ?? Sparkles;
  return (
    <Link
      to={child.to}
      onClick={onNavigate}
      tabIndex={open ? 0 : -1}
      style={{ transitionDelay: open ? `${40 + index * 28}ms` : "0ms" }}
      className={cn(
        "group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-[background-color,transform,opacity] duration-300 ease-out hover:bg-white/[0.07]",
        "motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!delay-0",
        open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-nav-plum-foreground/90 transition-colors group-hover/item:border-white/25 group-hover/item:text-nav-plum-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="flex items-start gap-1.5">
          <span className="text-sm font-semibold leading-snug text-nav-plum-foreground">{child.label}</span>
          <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 text-nav-plum-foreground transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
        </span>
        {child.short && (
          <span className="mt-0.5 line-clamp-2 block text-[11px] leading-snug text-nav-plum-foreground/75">
            {child.short}
          </span>
        )}
      </span>
    </Link>
  );
}

export function MegaPanel({
  items,
  wide,
  onNavigate,
  open = true,
}: {
  items: readonly MegaChild[];
  wide?: boolean;
  onNavigate?: () => void;
  open?: boolean;
}) {
  const groups = groupChildren(items);
  let order = 0;


  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/12 bg-nav-glass-bg shadow-[0_40px_80px_-40px_rgba(16,18,24,0.92)] backdrop-blur-2xl",
        wide ? "w-[64rem]" : "w-[22rem]",
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-nav-glass-glow blur-[60px]" />
      <div className={cn("grid gap-3 p-4", wide && "grid-cols-[2fr_1.05fr_14.5rem]")}>
        {groups.map(([groupLabel, kids], gi) => (
          <div key={groupLabel || "default"} className="min-w-0">
            {groupLabel && (
              <p
                style={{ transitionDelay: open ? `${gi * 60}ms` : "0ms" }}
                className={cn(
                  "px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-nav-plum-foreground/70 transition-[transform,opacity] duration-300 ease-out",
                  "motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!delay-0",
                  open ? "translate-y-0 opacity-100" : "translate-y-1.5 opacity-0",
                )}
              >
                {groupLabel}
              </p>
            )}
            <div className={cn("space-y-0.5", kids.length > 6 && "grid grid-cols-2 gap-x-2 space-y-0")}>
              {kids.map((child) => (
                <Row key={child.to} child={child} onNavigate={onNavigate} open={open} index={order++} />
              ))}
            </div>
          </div>
        ))}

        {wide && (
          <div
            style={{ transitionDelay: open ? `${80 + order * 20}ms` : "0ms" }}
            className={cn(
              "relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/12 bg-white/[0.06] p-5 transition-[transform,opacity] duration-300 ease-out",
              "motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100 motion-reduce:!delay-0 motion-reduce:!scale-100",
              open ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.98] opacity-0",
            )}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-nav-plum-foreground/70">
                All-in for
              </p>
              <p className="mt-1 font-display text-3xl font-bold text-nav-plum-foreground">$297/mo</p>
              <p className="mt-2 text-xs leading-relaxed text-nav-plum-foreground/75">
                We design your website for free. You only pay when you love it — then the whole growth system
                runs for one flat monthly price.
              </p>
            </div>
            <Link
              to="/pricing"
              onClick={onNavigate}
              className="relative mt-5 inline-flex items-center justify-center gap-1.5 rounded-full bg-nav-plum-foreground px-4 py-2 text-xs font-semibold text-nav-plum transition-transform hover:scale-[1.02]"
            >
              See what's included
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export { groupChildren };
