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
    <section className="relative h-[50vh] flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white">
          {name}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80">{tagline}</p>
      </div>
    </section>
  );
}
