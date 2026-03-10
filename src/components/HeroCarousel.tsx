"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface HeroCarouselProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  interval?: number;
}

export default function HeroCarousel({
  images,
  title,
  subtitle,
  ctaText,
  ctaHref = "/properties",
  interval = 6000,
}: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [advance, interval]);

  return (
    <section className="relative h-dvh flex items-end overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
          placeholder="empty"
          style={{ backgroundColor: "rgb(28, 24, 20)" }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

      <div className="relative z-10 px-8 pb-32 md:pb-40 w-full hero-nav-align">
        <p className="text-xs tracking-[0.1em] uppercase text-adobe mb-6">
          Santa Barbara &middot; Montecito &middot; Carpinteria
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 text-lg md:text-xl text-cream/70 max-w-2xl">
            {subtitle}
          </p>
        ) : null}
        {ctaText ? (
          <Link
            href={ctaHref}
            className="mt-14 inline-flex items-center gap-2 bg-terra hover:bg-terra-light text-white px-8 py-4 rounded-lg text-sm tracking-[0.08em] uppercase transition-colors duration-150"
          >
            {ctaText}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        ) : null}

        {/* Dot indicators */}
        <div className="flex gap-2.5 mt-14 mb-8 md:mb-12" role="tablist" aria-label="Hero images">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                i === active
                  ? "w-8 bg-white"
                  : "w-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
