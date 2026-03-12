"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Ben will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm uppercase tracking-wider text-gray-600 mb-2 font-heading">
            Full Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm uppercase tracking-wider text-gray-600 mb-2 font-heading">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm uppercase tracking-wider text-gray-600 mb-2 font-heading">
          Phone
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary transition-colors"
          placeholder="(805) 555-0123"
        />
      </div>
      <div>
        <label className="block text-sm uppercase tracking-wider text-gray-600 mb-2 font-heading">
          Message
        </label>
        <textarea
          rows={5}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your real estate goals..."
        />
      </div>
      <button type="submit" className="btn-primary w-full md:w-auto">
        Send Message
      </button>
    </form>
  );
}
