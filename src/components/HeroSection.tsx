"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

// Video URL - Replace with your Pexels or other video source
// You can download a video from pexels.com/search/videos/california%20coast and place it in /public/videos/
const HERO_VIDEO_URL = "/videos/santa-barbara-coast.mp4";
const HERO_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1920&h=1080&fit=crop";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover"
          poster={HERO_FALLBACK_IMAGE}
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_FALLBACK_IMAGE}
          alt="Gaviota Coast, Santa Barbara County coastline"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#2c1810]/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-6 font-body">
          {siteConfig.businessName}
        </p>
        <h1 className="heading-xl mb-6 leading-tight italic">
          Live the Santa Barbara
          <span className="block not-italic font-light">Lifestyle</span>
        </h1>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light">
          Land, homes, and the art of country living along the American Riviera
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex bg-white/95 backdrop-blur-sm rounded-sm overflow-hidden shadow-2xl">
            <input
              type="text"
              placeholder="Search by city, neighborhood, or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-4 text-charcoal text-sm placeholder-warm-gray outline-none font-body bg-transparent"
            />
            <Link
              href="/properties"
              className="bg-primary text-white px-8 py-4 uppercase text-sm tracking-wider font-medium hover:bg-primary-dark transition-colors flex items-center"
            >
              Search
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/properties" className="btn-outline text-xs">
            View Properties
          </Link>
          <Link href="/neighborhoods" className="btn-outline text-xs">
            Explore Neighborhoods
          </Link>
          <Link href="/contact" className="btn-gold text-xs">
            Schedule Consultation
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
