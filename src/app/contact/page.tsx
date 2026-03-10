import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Benjamin Harris for luxury real estate inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <div className="h-24 md:h-28 bg-warm-white" />
      <section className="min-h-[calc(100vh-6rem)] flex items-center justify-center py-24 md:py-32 px-8 md:px-16 bg-warm-white">
        <div className="max-w-6xl mx-auto w-full">
          <SectionHeading
            title="Get in Touch"
            subtitle="Ready to find your dream home? Let&apos;s start the conversation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 mt-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.08em] uppercase text-charcoal/30 mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-lg text-charcoal/70 hover:text-terra transition-colors duration-150"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.08em] uppercase text-charcoal/30 mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg text-charcoal/70 hover:text-terra transition-colors duration-150"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.08em] uppercase text-charcoal/30 mb-3">
                  Office
                </h3>
                <p className="text-lg text-charcoal/70">{siteConfig.address}</p>
              </div>
              <div>
                <h3 className="text-[11px] font-bold tracking-[0.08em] uppercase text-charcoal/30 mb-3">
                  Brokerage
                </h3>
                <p className="text-charcoal/70">
                  {siteConfig.brokerage}
                  <br />
                  <span className="text-charcoal/40 text-sm">
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
