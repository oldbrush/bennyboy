import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/properties", label: "Properties" },
  { href: "/sold", label: "Sold" },
  { href: "/explore/santa-barbara", label: "Santa Barbara" },
  { href: "/explore/montecito", label: "Montecito" },
  { href: "/explore/carpinteria", label: "Carpinteria" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-iron border-t border-charcoal-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Agent Info */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-[11px] tracking-[0.08em] uppercase text-adobe mb-6">
              {siteConfig.title}
            </p>
            <p className="text-cream/40 text-sm leading-relaxed">
              {siteConfig.brokerage}
              <br />
              DRE# {siteConfig.dreNumber}
              <br />
              {siteConfig.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.08em] uppercase text-cream/30 mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/50 hover:text-terra-light transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.08em] uppercase text-cream/30 mb-6">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-4 text-sm text-cream/50">
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-terra-light transition-colors duration-150"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-terra-light transition-colors duration-150"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] text-center text-xs text-cream/20">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
