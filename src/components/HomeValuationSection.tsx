"use client";

import { useState } from "react";

export default function HomeValuationSection() {
  const [address, setAddress] = useState("");

  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&h=1080&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="heading-lg text-white mb-4">
          What&apos;s Your Home Worth?
        </h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto">
          Get a complimentary home valuation from Ben Harris. Discover your
          property&apos;s current market value with a personalized analysis.
        </p>

        <div className="flex flex-col sm:flex-row bg-white rounded-sm overflow-hidden shadow-2xl max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Enter your property address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="flex-1 px-6 py-4 text-gray-800 text-sm placeholder-gray-400 outline-none font-body"
          />
          <button className="bg-gold text-white px-8 py-4 uppercase text-sm tracking-wider font-medium hover:bg-gold-light transition-colors whitespace-nowrap">
            Get Valuation
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center mx-auto mb-3 text-white font-heading text-lg">
              1
            </div>
            <p className="text-white/80 text-sm">Enter Your Address</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center mx-auto mb-3 text-white font-heading text-lg">
              2
            </div>
            <p className="text-white/80 text-sm">Receive Your Analysis</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-white/30 flex items-center justify-center mx-auto mb-3 text-white font-heading text-lg">
              3
            </div>
            <p className="text-white/80 text-sm">Plan Your Next Move</p>
          </div>
        </div>
      </div>
    </section>
  );
}
