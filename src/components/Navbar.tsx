"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const mobileMenuImport = () => import("./MobileMenu");
const MobileMenu = dynamic(mobileMenuImport, { ssr: false });

const exploreLinks = [
  { href: "/explore/santa-barbara", label: "Santa Barbara" },
  { href: "/explore/montecito", label: "Montecito" },
  { href: "/explore/carpinteria", label: "Carpinteria" },
];

const AGENT_NAME = "Benjamin Harris";
const AGENT_TITLE = "Luxury Real Estate";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleOpen = useCallback(() => setMobileOpen(true), []);
  const handleClose = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 md:top-4 md:left-6 md:right-6">
        <div className="bg-charcoal/95 backdrop-blur-md md:rounded-xl border-b border-white/5 md:border md:border-white/[0.07] md:shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
            <Link href="/" className="flex flex-col group">
              <span className="font-serif text-xl font-bold tracking-wide text-cream group-hover:text-white transition-colors duration-200">
                {AGENT_NAME}
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-adobe">
                {AGENT_TITLE}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                className="text-[13px] tracking-[0.08em] uppercase text-cream/70 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[13px] tracking-[0.08em] uppercase text-cream/70 hover:text-white transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/properties"
                className="text-[13px] tracking-[0.08em] uppercase text-cream/70 hover:text-white transition-colors duration-200"
              >
                Properties
              </Link>
              <Link
                href="/sold"
                className="text-[13px] tracking-[0.08em] uppercase text-cream/70 hover:text-white transition-colors duration-200"
              >
                Sold
              </Link>

              {/* Explore Dropdown */}
              <div className="relative group">
                <button
                  className="text-[13px] tracking-[0.08em] uppercase text-cream/70 hover:text-white transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
                  aria-haspopup="true"
                >
                  Explore
                  <svg
                    className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  role="menu"
                >
                  <div className="bg-charcoal border border-charcoal-border rounded-lg py-2 min-w-[200px] shadow-2xl">
                    {exploreLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        className="block px-5 py-2.5 text-[13px] tracking-wide text-cream/70 hover:text-white hover:bg-white/[0.04] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="text-[13px] tracking-[0.08em] uppercase bg-terra hover:bg-terra-light text-white px-6 py-2.5 rounded-lg transition-colors duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-cream cursor-pointer"
              onClick={handleOpen}
              onMouseEnter={() => void mobileMenuImport()}
              onFocus={() => void mobileMenuImport()}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <MobileMenu
          open={mobileOpen}
          onClose={handleClose}
          exploreLinks={exploreLinks}
        />
      ) : null}
    </>
  );
}
