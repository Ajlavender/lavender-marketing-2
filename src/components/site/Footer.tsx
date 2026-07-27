import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { LOGO, services } from "@/data/site";
import { LeadForm } from "./LeadForm";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <img
            src={LOGO}
            alt="Webtec"
            width={120}
            height={32}
            className="h-8 w-auto brightness-0 invert"
            loading="lazy"
          />
          <p className="text-sm leading-relaxed opacity-80">
            Webtec was founded by our typical client – ourselves. We want to be the best, fastest, and
            most professional website redesign agency out there. Our goal is to help small and mid-sized
            businesses who want beautiful-looking websites that convert visitors into customers.
          </p>
          <Link to="/about" className="inline-block text-sm font-semibold text-primary hover:underline">
            More About Us
          </Link>
          <div className="flex gap-3 pt-2">
            <a href="https://www.facebook.com/" aria-label="Facebook" className="opacity-80 hover:opacity-100">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram" className="opacity-80 hover:opacity-100">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/" aria-label="Twitter" className="opacity-80 hover:opacity-100">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg">Services</h2>
          <ul className="space-y-2 text-sm opacity-80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.slug} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg">Company</h2>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us Today
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-primary">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary">
                Webtec Blog
              </Link>
            </li>
            <li>
              <Link to="/why-choose-us" className="hover:text-primary">
                Why Choose Us?
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-primary">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg">Get A Free Website Redesign Today!</h2>
          <LeadForm variant="dark" submitLabel="Free Website Facelift" />
        </div>
      </div>

      <div className="border-t border-background/15 py-6 text-center text-xs opacity-70">
        © Copyright {new Date().getFullYear()} by Webtec
      </div>
    </footer>
  );
}
