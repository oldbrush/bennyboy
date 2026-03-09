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
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-charcoal border-l border-white/10 p-6 flex flex-col">
        <button
          onClick={onClose}
          className="self-end text-cream mb-8"
          aria-label="Close menu"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            onClick={onClose}
            className="text-lg text-cream/80 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-lg text-cream/80 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/properties"
            onClick={onClose}
            className="text-lg text-cream/80 hover:text-white transition-colors"
          >
            Properties
          </Link>
          <Link
            href="/sold"
            onClick={onClose}
            className="text-lg text-cream/80 hover:text-white transition-colors"
          >
            Sold
          </Link>

          <button
            onClick={() => setExploreOpen(!exploreOpen)}
            className="text-lg text-cream/80 hover:text-white transition-colors text-left flex items-center gap-2"
          >
            Explore
            <svg
              className={`w-4 h-4 transition-transform ${exploreOpen ? "rotate-180" : ""}`}
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
          {exploreOpen && (
            <div className="flex flex-col gap-3 pl-4">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-base text-cream/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 text-center bg-teal hover:bg-teal-light text-white px-5 py-3 rounded transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
