"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 rounded-xl bg-sage/10 border border-sage/20">
        <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3">
          Message Sent
        </h3>
        <p className="text-charcoal/60" role="status" aria-live="polite">
          Thank you for reaching out. Benjamin will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="contact-name" className="block text-[11px] tracking-[0.15em] uppercase text-charcoal/40 mb-2">
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name&hellip;"
          required
          className="w-full bg-white border border-sandy-dark/50 rounded-lg px-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terra/50 transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-[11px] tracking-[0.15em] uppercase text-charcoal/40 mb-2">
          Email Address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          spellCheck={false}
          className="w-full bg-white border border-sandy-dark/50 rounded-lg px-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terra/50 transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-[11px] tracking-[0.15em] uppercase text-charcoal/40 mb-2">
          Phone Number
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(805) 555-0100"
          className="w-full bg-white border border-sandy-dark/50 rounded-lg px-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terra/50 transition-colors duration-200"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[11px] tracking-[0.15em] uppercase text-charcoal/40 mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your real estate goals&hellip;"
          required
          rows={5}
          className="w-full bg-white border border-sandy-dark/50 rounded-lg px-4 py-3.5 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-terra/50 transition-colors duration-200 resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-terra hover:bg-terra-light text-white py-4 rounded-lg text-sm tracking-[0.08em] uppercase cursor-pointer transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
