"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&h=1080&fit=crop"
      >
        <source
          src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="heading-xl mb-4 leading-tight">
          Live the Santa Barbara
          <span className="block">Lifestyle</span>
        </h1>
        <p className="text-lg md:text-xl font-light mb-3 tracking-wide font-body">
          {siteConfig.ownerName} — {siteConfig.businessName}
        </p>
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light">
          Your trusted guide to luxury real estate along the American Riviera
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex bg-white rounded-sm overflow-hidden shadow-2xl">
            <input
              type="text"
              placeholder="Search by city, neighborhood, or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-4 text-gray-800 text-sm placeholder-gray-400 outline-none font-body"
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
          <Link href="/contact" className="btn-outline text-xs">
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
