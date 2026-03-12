import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties for Sale | Harris Land & Home",
  description: "Browse luxury properties for sale in Santa Barbara, Montecito, and Carpinteria.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        title="Properties"
        subtitle="Explore luxury homes across the American Riviera"
        image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1920&h=800&fit=crop"
      />
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-gray-200">
            <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 outline-none focus:border-primary">
              <option>All Cities</option>
              <option>Santa Barbara</option>
              <option>Montecito</option>
              <option>Carpinteria</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 outline-none focus:border-primary">
              <option>Price Range</option>
              <option>Under $3M</option>
              <option>$3M - $5M</option>
              <option>$5M - $10M</option>
              <option>$10M+</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 outline-none focus:border-primary">
              <option>Bedrooms</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
            <select className="border border-gray-300 px-4 py-2 text-sm text-gray-600 outline-none focus:border-primary">
              <option>Status</option>
              <option>For Sale</option>
              <option>Pending</option>
            </select>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
