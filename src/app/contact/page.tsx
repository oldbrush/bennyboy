import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Benjamin Harris Luxury Real Estate",
  description: "Get in touch with Benjamin Harris for luxury real estate inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <div className="h-20 bg-charcoal" />
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Get in Touch"
            subtitle="Ready to find your dream home? Let's start the conversation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-cream-dark mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-lg text-cream/80 hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-cream-dark mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg text-cream/80 hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-cream-dark mb-3">
                  Office
                </h3>
                <p className="text-lg text-cream/80">{siteConfig.address}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-cream-dark mb-3">
                  Brokerage
                </h3>
                <p className="text-cream/80">
                  {siteConfig.brokerage}
                  <br />
                  <span className="text-cream/50 text-sm">
                    DRE# {siteConfig.dreNumber}
                  </span>
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
