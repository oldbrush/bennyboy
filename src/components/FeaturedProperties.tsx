"use client";

import { useState } from "react";
import Link from "next/link";
import { properties } from "@/data/properties";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured);
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const next = () =>
    setCurrent((c) => Math.min(c + 1, featured.length - visibleCount));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="heading-lg text-gray-900 mb-2">
              Featured Properties
            </h2>
            <p className="text-gray-500">
              Handpicked luxury listings across the American Riviera
            </p>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
              aria-label="Previous properties"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={current >= featured.length - visibleCount}
              className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
              aria-label="Next properties"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.slice(current, current + visibleCount).map((property) => (
            <Link
              key={property.id}
              href="/properties"
              className="group"
            >
              <div className="relative h-[300px] overflow-hidden mb-4">
                <img
                  src={property.image}
                  alt={property.address}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs uppercase tracking-wider">
                  {property.status === "pending" ? "Pending" : "Featured"}
                </div>
              </div>
              <h3 className="font-heading text-lg font-medium uppercase tracking-wide text-gray-900 mb-1">
                {property.address}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                {property.city}, {property.state} {property.zip}
              </p>
              <p className="text-primary text-xl font-heading font-semibold mb-2">
                {property.price}
              </p>
              <div className="flex gap-4 text-gray-500 text-sm">
                <span>{property.beds} Beds</span>
                <span>|</span>
                <span>{property.baths} Baths</span>
                <span>|</span>
                <span>{property.sqft} Sq Ft</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/properties" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
