import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer's Guide | Harris Land & Home",
  description: "Your guide to buying a home in Santa Barbara and Montecito with Ben Harris.",
};

const steps = [
  {
    title: "Define Your Vision",
    description:
      "We start by understanding your lifestyle, priorities, and budget. Whether you're seeking a beachfront estate, mountain retreat, or village charmer, Ben will curate a personalized search strategy.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&h=400&fit=crop",
  },
  {
    title: "Get Pre-Approved",
    description:
      "Ben works with top local lenders to help you secure pre-approval, giving you a competitive edge in the market. Knowing your purchasing power is the first step to a confident offer.",
    image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&h=400&fit=crop",
  },
  {
    title: "Property Tours",
    description:
      "Experience curated property tours tailored to your criteria. Ben's insider knowledge often provides access to off-market listings and upcoming inventory before they hit the public market.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&h=400&fit=crop",
  },
  {
    title: "Making an Offer",
    description:
      "When you find the right home, Ben's expert negotiation skills and market insights ensure your offer is strategically positioned to win — at the best possible price and terms.",
    image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=600&h=400&fit=crop",
  },
  {
    title: "Closing & Beyond",
    description:
      "From inspections and appraisals through closing day, Ben manages every detail. And his commitment doesn't end at closing — he remains your trusted resource for all things real estate.",
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&h=400&fit=crop",
  },
];

export default function BuyersGuidePage() {
  return (
    <>
      <PageHero
        title="Buyer's Guide"
        subtitle="Your path to finding the perfect home"
        image="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&h=800&fit=crop"
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-md text-gray-900 mb-4">
              The Buying Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Buying a home in the Santa Barbara area is an exciting journey.
              Ben Harris is here to guide you through every step with expertise
              and care.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="w-10 h-10 bg-primary text-white flex items-center justify-center font-heading text-lg">
                      {i + 1}
                    </span>
                    <h3 className="font-heading text-xl font-medium uppercase tracking-wide">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="heading-md text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-white/80 mb-8">
            Contact Ben Harris today to begin your personalized property search
            along the American Riviera.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/properties" className="btn-outline">
              Browse Properties
            </Link>
            <Link href="/contact" className="btn-gold">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
