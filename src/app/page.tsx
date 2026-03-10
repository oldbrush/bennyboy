import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import NewsletterSection from "@/components/NewsletterSection";
import { getFeaturedProperties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Santa Barbara Luxury Living",
  description:
    "Discover extraordinary luxury properties along the American Riviera. Browse exclusive homes in Santa Barbara, Montecito, and Carpinteria.",
};

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <HeroSection
        image="https://images.unsplash.com/photo-1763467941420-a971deda1779?w=1600&q=80"
        title="Luxury Living on the American Riviera"
        subtitle="Discover extraordinary properties in Santa Barbara, Montecito, and Carpinteria"
        ctaText="View Properties"
        ctaHref="/properties"
      />
      <WelcomeSection />
      <ServicesSection />
      <section className="py-36 md:py-44 px-8 md:px-16 bg-warm-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Featured Properties"
            subtitle="Hand-selected homes representing the finest in coastal living"
          />
          <PropertyGrid properties={featured} />
        </div>
      </section>
      <NewsletterSection />
    </>
  );
}
