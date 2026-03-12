"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig, navLinks } from "@/data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span
            className={`font-heading text-xl md:text-2xl font-semibold uppercase tracking-wider transition-colors ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            {siteConfig.businessName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-primary ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 transition-all ${
              mobileOpen
                ? "rotate-45 translate-y-2 bg-gray-800"
                : scrolled
                ? "bg-gray-800"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-7 h-0.5 transition-all ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-gray-800"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-7 h-0.5 transition-all ${
              mobileOpen
                ? "-rotate-45 -translate-y-2 bg-gray-800"
                : scrolled
                ? "bg-gray-800"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t mt-2">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 text-sm uppercase tracking-wider text-gray-700 hover:bg-gray-50 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary block text-center"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
