import type { Metadata } from "next";
import HeroCarousel from "@/components/HeroCarousel";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import NewsletterSection from "@/components/NewsletterSection";
import { getFeaturedProperties } from "@/data/properties";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
    alt: "Modern Montecito estate with infinity pool at dusk",
  },
  {
    src: "https://images.unsplash.com/photo-1726933990851-0141ad5ac85c?w=1600&q=80",
    alt: "Coastal estate on a cliff overlooking the Pacific Ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1701662454034-b98c550e54e9?w=1600&q=80",
    alt: "Luxury home overlooking the ocean at sunset",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1746327707391-d095ac370b9c?w=1600&q=80",
    alt: "Sprawling luxury estate with pool at golden hour",
  },
];

export const metadata: Metadata = {
  title: "Santa Barbara Luxury Living",
  description:
    "Discover extraordinary luxury properties along the American Riviera. Browse exclusive homes in Santa Barbara, Montecito, and Carpinteria.",
};

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <HeroCarousel
        images={heroImages}
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
