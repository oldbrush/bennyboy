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
      <div className="text-center py-12">
        <h3 className="font-serif text-2xl font-bold text-white mb-4">
          Message Sent
        </h3>
        <p className="text-cream/60">
          Thank you for reaching out. Benjamin will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-cream/40 focus:outline-none focus:border-terra transition-colors"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-cream/40 focus:outline-none focus:border-terra transition-colors"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-cream/40 focus:outline-none focus:border-terra transition-colors"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={4}
          className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-cream/40 focus:outline-none focus:border-terra transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-terra hover:bg-terra-light text-white py-3.5 rounded text-sm tracking-wide transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
