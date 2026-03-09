import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import { getActiveProperties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Properties | Benjamin Harris Luxury Real Estate",
  description:
    "Browse active luxury listings in Santa Barbara, Montecito, and Carpinteria.",
};

export default function PropertiesPage() {
  const active = getActiveProperties();

  return (
    <>
      <div className="h-20 bg-charcoal" />
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Active Listings"
            subtitle="Explore our curated collection of luxury properties"
          />
          <PropertyGrid properties={active} />
        </div>
      </section>
    </>
  );
}
