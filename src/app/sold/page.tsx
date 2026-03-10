import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import { getSoldProperties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Sold Properties",
  description:
    "View recently sold luxury properties by Benjamin Harris in Santa Barbara.",
};

export default function SoldPage() {
  const sold = getSoldProperties();

  return (
    <>
      <div className="h-24 md:h-28 bg-charcoal" />
      <section className="py-24 md:py-32 px-8 md:px-16 bg-charcoal">
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
