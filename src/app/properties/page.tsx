import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import { getActiveProperties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse active luxury listings in Santa Barbara, Montecito, and Carpinteria.",
};

export default function PropertiesPage() {
  const active = getActiveProperties();

  return (
    <>
      <div className="h-24 md:h-28 bg-warm-white" />
      <section className="py-24 md:py-32 px-8 md:px-16 bg-warm-white">
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
