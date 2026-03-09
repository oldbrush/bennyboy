import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import { getSoldProperties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Sold Properties | Benjamin Harris Luxury Real Estate",
  description:
    "View recently sold luxury properties by Benjamin Harris in Santa Barbara.",
};

export default function SoldPage() {
  const sold = getSoldProperties();

  return (
    <>
      <div className="h-20 bg-charcoal" />
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Recently Sold"
            subtitle="A selection of properties successfully closed by Benjamin Harris"
          />
          <PropertyGrid properties={sold} showSoldBadge />
        </div>
      </section>
    </>
  );
}
