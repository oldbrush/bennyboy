import PageHero from "@/components/PageHero";
import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ben Harris | Harris Land & Home",
  description: "Meet Ben Harris — over 40 years of Santa Barbara real estate expertise.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="About"
        subtitle={`Meet ${siteConfig.ownerName}`}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop"
      />

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop"
                alt={siteConfig.ownerName}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-primary text-sm uppercase tracking-widest mb-3">
                {siteConfig.ownerTitle}
              </p>
              <h2 className="heading-lg text-gray-900 mb-2">
                {siteConfig.ownerName}
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                CA DRE# {siteConfig.dre}
              </p>

              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Ben Harris grew up in the Santa Barbara area, developing a
                  deep appreciation for the unique lifestyle and stunning
                  natural beauty of the American Riviera. After attending the
                  University of California where he received his degree, Ben
                  began his real estate career — and has never looked back.
                </p>
                <p>
                  With over 40 years of experience in the real estate industry,
                  Ben has established himself as one of the most trusted and
                  accomplished agents in the Santa Barbara and Montecito
                  markets. As a member of the top 1% of Berkshire Hathaway
                  HomeServices REALTORS&reg; worldwide, his track record speaks
                  for itself.
                </p>
                <p>
                  Ben&apos;s deep-rooted connections and extensive understanding
                  of the Santa Barbara area and its surroundings set him apart.
                  Known for his open communication style, exceptional listening
                  skills, and dedicated client counseling, Ben ensures every
                  client receives personalized attention throughout the entire
                  transaction process.
                </p>
                <p>
                  Whether you&apos;re buying your first home, selling a
                  multi-million dollar estate, or investing in the Santa Barbara
                  market, Ben brings the expertise, market knowledge, and
                  negotiation skills needed to achieve outstanding results.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-3xl font-heading text-primary font-light">
                    40+
                  </p>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-3xl font-heading text-primary font-light">
                    500+
                  </p>
                  <p className="text-gray-500 text-sm">Homes Sold</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-3xl font-heading text-primary font-light">
                    Top 1%
                  </p>
                  <p className="text-gray-500 text-sm">BHHS Worldwide</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-3xl font-heading text-primary font-light">
                    $500M+
                  </p>
                  <p className="text-gray-500 text-sm">Career Sales</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Ben
                </Link>
                <Link
                  href="/properties"
                  className="btn-primary bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-md text-gray-900 text-center mb-12">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Buyer Representation",
                description:
                  "Expert guidance through every step of the home buying process, from property search to closing.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                title: "Seller Representation",
                description:
                  "Strategic marketing, expert pricing, and skilled negotiation to maximize your property's value.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Market Analysis",
                description:
                  "Comprehensive market reports and property valuations to help you make informed decisions.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-medium uppercase tracking-wide mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
