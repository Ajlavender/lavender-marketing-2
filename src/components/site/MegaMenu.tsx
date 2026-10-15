import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Bot, CalendarCheck, Inbox, LayoutDashboard, LineChart, MapPin, MessageSquare, Megaphone, PhoneMissed, Repeat, ServerCog, Sparkles, Star, PhoneCall, BellRing, Send, Receipt, Workflow, ContactRound, MessagesSquare, GalleryHorizontalEnd, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSpell } from '@/lib/locale';
import { Button } from '@/components/ui/button';
export type MegaChild = { label: string; to: string; group?: string; category?: string; short?: string; value?: string; column?: string };
const ICONS: Record<string, LucideIcon> = {
 '/website-redesign': LayoutDashboard, '/chat-widget': MessageSquare, '/missed-call-text-back': PhoneMissed, '/review-automation': Star, '/online-booking': CalendarCheck, '/follow-up-automation': Repeat, '/unified-inbox': Inbox, '/crm-pipeline': LineChart, '/hosting-and-support': ServerCog, '/growth-report': LineChart, '/ai-chat-widget': Bot, '/voice-ai-receptionist': PhoneCall, '/ad-management': Megaphone, '/local-seo': MapPin, '/instant-lead-response': Send, '/sales-calling': ContactRound, '/appointment-reminders': BellRing, '/social-media-publishing': Megaphone, '/text-email-marketing': MessagesSquare, '/customer-reactivation': Repeat, '/website-review-display': GalleryHorizontalEnd, '/estimates-invoices-payments': Receipt, '/business-automation': Workflow,
};
export function groupChildren(children: readonly MegaChild[]): [string, MegaChild[]][] {
 const groups: [string, MegaChild[]][] = [];
 for (const child of children) { const key = child.category ?? child.group ?? ''; const group = groups.find(([name]) => name === key); if (group) group[1].push(child); else groups.push([key,[child]]); }
 return groups;
}
export function MegaPanel({ items, wide, onNavigate, open = true }: { items: readonly MegaChild[]; wide?: boolean; onNavigate?: () => void; open?: boolean }) {
 const t = useSpell();
 return <div className={cn('overflow-y-auto rounded-lg border border-nav-glass-border bg-nav-glass-bg text-nav-plum-foreground shadow-lg backdrop-blur-2xl overscroll-contain', wide ? 'w-[min(88rem,calc(100vw-3rem))] max-h-[calc(100dvh-10rem)]' : 'w-[22rem] max-h-[calc(100dvh-10rem)]')}>
  <div className={cn('grid gap-5 p-5',wide && 'grid-cols-4 gap-0 p-6')}>
   {groupChildren(items).map(([category,kids],i) => <div key={category || 'default'} className={cn('min-w-0',wide && 'px-3',wide && i > 0 && 'border-l border-nav-glass-border')}>
    {category && <h2 className="min-h-14 px-2 font-display text-xl font-semibold leading-tight text-nav-plum-foreground">{t(category)}</h2>}
    <div className="space-y-1">{kids.map(child => { const Icon = ICONS[child.to] ?? Sparkles; return <Link to={child.to} onClick={onNavigate} tabIndex={open ? 0 : -1} key={child.to} className="group flex min-h-24 items-start gap-2.5 rounded-lg px-2 py-3 transition-colors hover:bg-nav-plum-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nav-plum-foreground">
      <Icon className="mt-0.5 size-4 shrink-0 text-nav-plum-foreground/65" aria-hidden="true" /><span className="min-w-0"><span className="block text-sm font-semibold leading-snug">{t(child.label)}</span>{child.short && <span className="mt-1.5 block text-xs leading-relaxed text-nav-plum-foreground/65">{t(child.short)}</span>}</span>
    </Link>; })}</div>
   </div>)}
  </div>
  {wide && <div className="flex items-center justify-between gap-6 border-t border-nav-glass-border bg-nav-plum-foreground/5 px-8 py-5"><div><p className="font-display text-xl font-semibold">Not sure what your business needs?</p><p className="mt-1 text-sm text-nav-plum-foreground/65">We'll help you figure out which tools make sense for you.</p></div><Button asChild variant="secondary" className="shrink-0"><Link to="/services" onClick={onNavigate} tabIndex={open ? 0 : -1}>Explore the Services <ArrowUpRight className="size-4" /></Link></Button></div>}
 </div>;
}
