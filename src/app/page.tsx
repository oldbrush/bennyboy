import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import ServicesSection from "@/components/ServicesSection";
import SectionHeading from "@/components/SectionHeading";
import PropertyGrid from "@/components/PropertyGrid";
import NewsletterSection from "@/components/NewsletterSection";
import { getFeaturedProperties } from "@/data/properties";

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <HeroSection
        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80"
        title="Santa Barbara Luxury Living"
        subtitle="Discover extraordinary properties along the American Riviera"
        ctaText="View Properties"
        ctaHref="/properties"
      />
      <WelcomeSection />
      <ServicesSection />
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
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
