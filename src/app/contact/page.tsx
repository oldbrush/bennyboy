import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Harris Land & Home",
  description: "Get in touch with Ben Harris for all your Santa Barbara real estate needs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Let's start a conversation about your real estate goals"
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=800&fit=crop"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="heading-md text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re looking to buy, sell, or simply explore the
                possibilities, Ben Harris is here to help. Reach out today for
                a complimentary consultation.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gray-900 mb-2">
                    {siteConfig.ownerName}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {siteConfig.ownerTitle}
                  </p>
                  <p className="text-gray-500 text-sm">
                    CA DRE# {siteConfig.dre}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Phone
                  </h4>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Montecito Office
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {siteConfig.officeAddress}
                    <br />
                    {siteConfig.officeCity}, {siteConfig.officeState}{" "}
                    {siteConfig.officeZip}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Santa Barbara Office
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {siteConfig.secondaryOfficeAddress}
                    <br />
                    {siteConfig.secondaryOfficeCity},{" "}
                    {siteConfig.secondaryOfficeState}{" "}
                    {siteConfig.secondaryOfficeZip}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
              Montecito Office
            </p>
            <p className="text-gray-700 font-heading text-lg">
              {siteConfig.officeAddress}, {siteConfig.officeCity},{" "}
              {siteConfig.officeState} {siteConfig.officeZip}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
