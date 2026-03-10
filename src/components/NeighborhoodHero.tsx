import Image from "next/image";

interface NeighborhoodHeroProps {
  name: string;
  tagline: string;
  image: string;
}

export default function NeighborhoodHero({
  name,
  tagline,
  image,
}: NeighborhoodHeroProps) {
  return (
    <section className="relative h-[50vh] flex items-end">
      <Image
        src={image}
        alt={`${name} neighborhood`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        placeholder="empty"
        style={{ backgroundColor: "rgb(28, 24, 20)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
      <div className="relative z-10 px-6 pb-16 w-full max-w-7xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] uppercase text-adobe mb-3">
          Explore
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {name}
        </h1>
        <p className="mt-3 text-lg text-cream/60">{tagline}</p>
      </div>
    </section>
  );
}
