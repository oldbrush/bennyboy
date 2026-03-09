"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import MobileMenu from "./MobileMenu";

const exploreLinks = [
  { href: "/explore/santa-barbara", label: "Santa Barbara" },
  { href: "/explore/montecito", label: "Montecito" },
  { href: "/explore/carpinteria", label: "Carpinteria" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wide text-white">
              {siteConfig.name}
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-cream-dark">
              {siteConfig.title}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm tracking-wide text-cream/80 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm tracking-wide text-cream/80 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/properties"
              className="text-sm tracking-wide text-cream/80 hover:text-white transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/sold"
              className="text-sm tracking-wide text-cream/80 hover:text-white transition-colors"
            >
              Sold
            </Link>

            {/* Explore Dropdown */}
            <div className="relative group">
              <button className="text-sm tracking-wide text-cream/80 hover:text-white transition-colors flex items-center gap-1">
                Explore
                <svg
                  className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-charcoal-light border border-white/10 rounded-lg py-2 min-w-[180px] shadow-xl">
                  {exploreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-cream/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="text-sm tracking-wide bg-teal hover:bg-teal-light text-white px-5 py-2.5 rounded transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        exploreLinks={exploreLinks}
      />
    </>
  );
}
