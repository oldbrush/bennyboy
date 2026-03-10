import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-charcoal-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Agent Info */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              {siteConfig.brokerage}
              <br />
              DRE# {siteConfig.dreNumber}
              <br />
              {siteConfig.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-cream-dark mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About" },
                { href: "/properties", label: "Properties" },
                { href: "/sold", label: "Sold" },
                { href: "/explore/santa-barbara", label: "Santa Barbara" },
                { href: "/explore/montecito", label: "Montecito" },
                { href: "/explore/carpinteria", label: "Carpinteria" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 hover:text-terra-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-cream-dark mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-cream/60">
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-terra-light transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-terra-light transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-border text-center text-xs text-cream/30">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
