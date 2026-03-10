"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitted(true);
        setSubmitting(false);
        setEmail("");
      }, 600);
    }
  }

  return (
    <section className="py-28 md:py-36 px-8 md:px-16 bg-terra">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.1em] uppercase text-white/60 mb-4">
          Stay Connected
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
          Exclusive Market Updates
        </h2>
        <p className="text-white/70 text-base md:text-lg mb-10">
          Be the first to know about new listings, market trends, and
          investment opportunities along the American Riviera.
        </p>
        {submitted ? (
          <div className="py-6 px-8 rounded-xl bg-white/15 border border-white/20">
            <p className="text-white text-base" role="status" aria-live="polite">
              Thank you for subscribing. We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email&hellip;"
              required
              className="flex-1 px-5 py-4 rounded-lg bg-white/15 border border-white/25 text-white placeholder:text-white/40 focus:outline-none focus:border-white/60 transition-colors duration-150"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-4 rounded-lg bg-charcoal hover:bg-charcoal-light text-white text-sm tracking-[0.08em] uppercase cursor-pointer transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
