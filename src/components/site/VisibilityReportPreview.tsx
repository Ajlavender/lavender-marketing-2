import { BarChart3, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const metrics = [
  { label: "Visibility score", value: "82/100", detail: "+11 this month", icon: BarChart3 },
  { label: "Google Maps", value: "#4", detail: "for your top service", icon: MapPin },
  { label: "Reviews vs. competitors", value: "4.9★", detail: "68 reviews", icon: Star },
  { label: "Website performance", value: "94", detail: "mobile score", icon: CheckCircle2 },
];

export function VisibilityReportPreview() {
  return (
    <Reveal from="right" scale className="relative mx-auto w-full max-w-xl lg:rotate-2">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/20 blur-2xl" aria-hidden="true" />
      <div className="overflow-hidden rounded-2xl border border-background/20 bg-background text-foreground shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Monthly report</p>
            <p className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold">Google &amp; Local Visibility</p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">September</span>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border">
          {metrics.map(({ label, value, detail, icon: Icon }) => (
            <div key={label} className="bg-background p-4 sm:p-5">
              <Icon className="h-4 w-4 text-primary" />
              <p className="mt-3 text-xs text-muted-foreground">{label}</p>
              <p className="mt-1 text-2xl font-bold sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs font-medium text-primary">{detail}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:p-6">
          <div>
            <p className="text-sm font-semibold">Leads generated</p>
            <div className="mt-4 flex h-20 items-end gap-2" aria-label="Lead activity chart">
              {[35, 52, 44, 68, 61, 84, 76, 96].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-sm bg-primary/20 last:bg-primary"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:w-40 sm:grid-cols-1">
            <div className="rounded-lg bg-secondary p-3">
              <Phone className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xl font-bold">43</p>
              <p className="text-xs text-muted-foreground">Calls</p>
            </div>
            <div className="rounded-lg bg-secondary p-3">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xl font-bold">17</p>
              <p className="text-xs text-muted-foreground">Bookings</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-secondary/70 px-5 py-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">What to fix next</p>
          <p className="mt-1 text-sm text-muted-foreground">Improve your service-area pages to close the gap on the top three map results.</p>
        </div>
      </div>
    </Reveal>
  );
}