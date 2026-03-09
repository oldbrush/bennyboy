"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section className="py-24 px-6 bg-teal">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          title="Stay Informed"
          subtitle="Get exclusive listings and market updates delivered to your inbox"
          accent={false}
        />
        {submitted ? (
          <p className="text-white/90 text-lg">
            Thank you for subscribing! We&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded bg-charcoal hover:bg-charcoal-light text-white text-sm tracking-wide transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
