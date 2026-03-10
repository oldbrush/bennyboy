import type { Metadata } from "next";
import NeighborhoodHero from "@/components/NeighborhoodHero";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import { getNeighborhood } from "@/data/neighborhoods";
import { getPropertiesByNeighborhood } from "@/data/properties";

export const metadata: Metadata = {
  title: "Montecito",
  description:
    "Explore luxury estates in Montecito, where elegance meets nature.",
};

export default function MontecitoPage() {
  const neighborhood = getNeighborhood("montecito")!;
  const properties = getPropertiesByNeighborhood("montecito");

  return (
    <>
      <div className="h-24 md:h-28" />
      <NeighborhoodHero
        name={neighborhood.name}
        tagline={neighborhood.tagline}
        image={neighborhood.heroImage}
      />
      <section className="py-24 px-8 md:px-16 bg-warm-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-charcoal/60 text-lg leading-relaxed">
            {neighborhood.description}
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Area Highlights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
            {neighborhood.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 p-5 rounded-xl bg-sandy border border-sandy-dark/40"
              >
                <span className="text-terra mt-0.5">&#10003;</span>
                <span className="text-charcoal/70">{highlight}</span>
              </div>
            ))}
          </div>
          <SectionHeading
            title={`Properties in ${neighborhood.name}`}
            subtitle="Available and recently sold homes in this area"
          />
          <PropertyGrid properties={properties} showSoldBadge />
        </div>
      </section>
    </>
  );
}
