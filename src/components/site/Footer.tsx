import { Link } from "@tanstack/react-router";
import { LOGO } from "@/data/site";
import { LeadForm } from "./LeadForm";

const links = [
  { label: "More About Us", to: "/about" },
  { label: "Contact Us Today", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Testimonials", to: "/reviews" },
  { label: "Lavender Marketing & Co. Blog", to: "/blog" },
] as const;

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:gap-16 lg:px-8">
        <div className="space-y-5">
          <img src={LOGO} alt="Lavender Marketing & Co." width={150} height={36} className="h-9 w-auto" loading="lazy" />
          <p className="text-base leading-loose text-foreground/80">
            Lavender Marketing & Co. was founded by our typical client – ourselves. We want to be the best, fastest, and
            most professional website redesign agency out there. Our goal is to help small and
            mid-sized businesses who want beautiful-looking websites that convert visitors into
            customers.
          </p>
        </div>

        <div>
          <ul className="list-disc space-y-3 pl-5 text-base text-foreground/85 marker:text-foreground/60">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://www.trywebtec.com/privacy-policy/" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.trywebtec.com/disclaimer/" className="hover:text-primary">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-2xl text-foreground">Get A Free Website Redesign Today!</h2>
          <LeadForm submitLabel="Free Website Facelift" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 pb-10 text-center text-base text-foreground/70 sm:flex-row sm:justify-center sm:gap-4">
        <span>© Copyright {new Date().getFullYear()} by Lavender Marketing & Co.</span>
        <span className="hidden sm:inline" aria-hidden="true">·</span>
        <a href="/sitemap.xml" className="hover:text-primary hover:underline">
          Sitemap
        </a>
      </div>
    </footer>
  );
}
