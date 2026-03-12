import Link from "next/link";
import { neighborhoods } from "@/data/neighborhoods";

export default function GallerySection() {
  return (
    <section className="bg-[#2a2318] section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-lg text-white text-center mb-4">
          Explore Our Neighborhoods
        </h2>
        <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Discover the unique communities that make the Santa Barbara area one
          of the most coveted destinations in the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}`}
              className="group relative h-[400px] overflow-hidden"
            >
              <img
                src={n.image}
                alt={n.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-heading text-2xl text-white uppercase tracking-wider mb-2">
                  {n.name}
                </h3>
                <p className="text-white/70 text-sm mb-4">{n.tagline}</p>
                <span className="text-white text-xs uppercase tracking-widest border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
