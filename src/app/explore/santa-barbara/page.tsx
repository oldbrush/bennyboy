import type { Metadata } from "next";
import NeighborhoodHero from "@/components/NeighborhoodHero";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import { getNeighborhood } from "@/data/neighborhoods";
import { getPropertiesByNeighborhood } from "@/data/properties";

export const metadata: Metadata = {
  title: "Santa Barbara",
  description:
    "Explore luxury real estate in Santa Barbara, the American Riviera.",
};

export default function SantaBarbaraPage() {
  const neighborhood = getNeighborhood("santa-barbara")!;
  const properties = getPropertiesByNeighborhood("santa-barbara");

  return (
    <>
      <div className="h-20" />
      <NeighborhoodHero
        name={neighborhood.name}
        tagline={neighborhood.tagline}
        image={neighborhood.heroImage}
      />
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-cream/60 text-lg leading-relaxed">
            {neighborhood.description}
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Area Highlights" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
            {neighborhood.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 p-4 rounded-lg border border-white/5"
              >
                <span className="text-terra mt-0.5">&#10003;</span>
                <span className="text-cream/70">{highlight}</span>
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
