import Link from "next/link";
import PageHero from "@/components/PageHero";
import { neighborhoods } from "@/data/neighborhoods";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neighborhoods | Harris Land & Home",
  description: "Explore the premier neighborhoods of Santa Barbara, Montecito, and Carpinteria.",
};

export default function NeighborhoodsPage() {
  return (
    <>
      <PageHero
        title="Neighborhoods"
        subtitle="Discover the communities that make the American Riviera one of the most coveted destinations in the world"
        image="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1920&h=800&fit=crop"
      />
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group"
              >
                <div className="relative h-[350px] overflow-hidden mb-6">
                  <img
                    src={n.image}
                    alt={n.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-heading text-2xl text-white uppercase tracking-wider">
                      {n.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">{n.tagline}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {n.description}
                </p>
                <p className="text-primary text-sm uppercase tracking-wider mt-4 group-hover:underline">
                  Explore {n.name} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
