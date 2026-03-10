"use client";

import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  exploreLinks: { href: string; label: string }[];
}

export default function MobileMenu({
  open,
  onClose,
  exploreLinks,
}: MobileMenuProps) {
  const [exploreOpen, setExploreOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-warm-white border-l border-sandy-dark/20 p-8 flex flex-col overflow-y-auto overscroll-contain shadow-2xl">
        <button
          onClick={onClose}
          className="self-end text-charcoal/40 hover:text-charcoal mb-10 p-1 cursor-pointer transition-colors duration-200"
          aria-label="Close menu"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col gap-1">
          <Link
            href="/"
            onClick={onClose}
            className="text-lg text-charcoal/70 hover:text-terra py-3 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-lg text-charcoal/70 hover:text-terra py-3 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/properties"
            onClick={onClose}
            className="text-lg text-charcoal/70 hover:text-terra py-3 transition-colors duration-200"
          >
            Properties
          </Link>
          <Link
            href="/sold"
            onClick={onClose}
            className="text-lg text-charcoal/70 hover:text-terra py-3 transition-colors duration-200"
          >
            Sold
          </Link>

          <button
            onClick={() => setExploreOpen((prev) => !prev)}
            className="text-lg text-charcoal/70 hover:text-terra py-3 text-left flex items-center justify-between cursor-pointer transition-colors duration-200"
          >
            Explore
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
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
          {exploreOpen ? (
            <div className="flex flex-col gap-1 pl-4 border-l border-sandy-dark/30 ml-2">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-base text-charcoal/50 hover:text-terra py-2.5 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}

          <div className="mt-8 pt-8 border-t border-sandy-dark/30">
            <Link
              href="/contact"
              onClick={onClose}
              className="block text-center bg-terra hover:bg-terra-light text-white px-6 py-4 rounded-lg text-sm tracking-[0.08em] uppercase transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
