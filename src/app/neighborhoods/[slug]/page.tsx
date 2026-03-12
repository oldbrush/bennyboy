import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import { neighborhoods } from "@/data/neighborhoods";
import { properties } from "@/data/properties";
import type { Metadata } from "next";

export function generateStaticParams() {
  return neighborhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) return {};
  return {
    title: `${neighborhood.name} | Harris Land & Home`,
    description: neighborhood.description,
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);
  if (!neighborhood) notFound();

  const cityProperties = properties.filter(
    (p) =>
      p.city.toLowerCase() === neighborhood.name.toLowerCase() ||
      neighborhood.name.toLowerCase().includes(p.city.toLowerCase())
  );

  return (
    <>
      <PageHero
        title={neighborhood.name}
        subtitle={neighborhood.tagline}
        image={neighborhood.image}
      />

      {/* Description */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            {neighborhood.description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div>
              <p className="text-3xl md:text-4xl font-heading font-light mb-1">
                {neighborhood.population}
              </p>
              <p className="text-sm uppercase tracking-wider text-white/70">
                Population
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-light mb-1">
                {neighborhood.medianAge}
              </p>
              <p className="text-sm uppercase tracking-wider text-white/70">
                Median Age
              </p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-light mb-1">
                ${neighborhood.avgIncome}
              </p>
              <p className="text-sm uppercase tracking-wider text-white/70">
                Avg Income
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-md text-center text-gray-900 mb-12">
            Neighborhood Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhood.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties in Area */}
      {cityProperties.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="heading-md text-gray-900 text-center mb-12">
              Properties in {neighborhood.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {cityProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="heading-md text-white mb-6">
            Interested in {neighborhood.name}?
          </h2>
          <p className="text-white/80 mb-8">
            Let Ben Harris help you find the perfect property in{" "}
            {neighborhood.name}. Schedule a private consultation today.
          </p>
          <Link href="/contact" className="btn-outline">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
