import { Link } from "@tanstack/react-router";
import { LOGO } from "@/data/site";
import { LeadForm } from "./LeadForm";

const links = [
  { label: "Website Design", to: "/website-redesign" },
  { label: "Pricing", to: "/pricing" },
  { label: "Growth Report", to: "/growth-report" },
  { label: "Our Work", to: "/projects" },
  { label: "Reviews", to: "/reviews" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Blog", to: "/blog" },
] as const;

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/LavenderMarketingCompany",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lavendermarketingco",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07Zm0 3.06a5.04 5.04 0 1 1 0 10.08 5.04 5.04 0 0 1 0-10.08Zm0 1.8a3.24 3.24 0 1 0 0 6.48 3.24 3.24 0 0 0 0-6.48Zm6.4-.36a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajlavender/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
        <div className="space-y-5">
          <img src={LOGO} alt="Lavender Marketing & Co." width={150} height={36} className="h-9 w-auto" loading="lazy" />
          <p className="text-sm leading-relaxed text-foreground/70">
            Lavender Marketing & Co. helps local service businesses turn more visitors, calls and
            customers into booked work. We build the website. Lavender Suite Pro keeps the follow-up,
            reviews, bookings and customer conversations running behind it.
          </p>
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full sm:h-9 sm:w-9 border border-foreground/15 text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-foreground/50">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-base text-foreground/85">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="-mx-2 inline-block px-2 py-2 transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-foreground">Get A Free Website Redesign Today!</h2>
          <LeadForm submitLabel="Get My Free Website Design" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 pb-10 text-center text-sm text-foreground/60 sm:flex-row sm:justify-center sm:gap-4">
        <span>© {new Date().getFullYear()} Lavender Marketing & Co.</span>
        <span className="hidden sm:inline" aria-hidden="true">·</span>
        <a href="/sitemap.xml" className="hover:text-primary hover:underline">
          Sitemap
        </a>
      </div>
    </footer>
  );
}
