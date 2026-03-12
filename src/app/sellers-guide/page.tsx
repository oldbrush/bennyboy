import PageHero from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seller's Guide | Harris Land & Home",
  description: "Your comprehensive guide to selling your home in Santa Barbara and Montecito.",
};

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a thorough discussion of your goals, timeline, and expectations. Ben will evaluate your property and provide a detailed market analysis to establish the optimal listing strategy.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    title: "Strategic Pricing",
    description:
      "Leveraging decades of market expertise and comprehensive comparable analysis, Ben will recommend a pricing strategy designed to maximize your return while attracting qualified buyers.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Property Preparation",
    description:
      "From staging recommendations to pre-listing improvements, Ben will guide you through preparing your home to make the best possible first impression on potential buyers.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    title: "Marketing & Exposure",
    description:
      "Your property will receive maximum exposure through professional photography, virtual tours, targeted digital marketing, print advertising, and Ben's extensive network of qualified buyers and agents.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    title: "Negotiation & Closing",
    description:
      "Ben's expert negotiation skills ensure you receive the best possible terms. He manages every detail from offer review through closing, keeping you informed and confident at every step.",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop",
  },
];

export default function SellersGuidePage() {
  return (
    <>
      <PageHero
        title="Seller's Guide"
        subtitle="Your roadmap to a successful home sale"
        image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&h=800&fit=crop"
      />

      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-md text-gray-900 mb-4">
              The Selling Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Selling your home is one of life&apos;s most important
              transactions. Ben Harris brings a proven, strategic approach to
              ensure you achieve the best possible outcome.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
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
            Ready to Sell Your Home?
          </h2>
          <p className="text-white/80 mb-8">
            Contact Ben Harris today for a complimentary home valuation and
            personalized selling strategy.
          </p>
          <Link href="/contact" className="btn-outline">
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
