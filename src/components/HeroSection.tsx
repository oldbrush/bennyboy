import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
  fullHeight?: boolean;
}

export default function HeroSection({
  image,
  title,
  subtitle,
  ctaText,
  ctaHref = "/properties",
  overlay = true,
  fullHeight = true,
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${fullHeight ? "h-screen" : "h-[60vh]"} flex items-center justify-center`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg md:text-xl text-white/80">{subtitle}</p>
        )}
        {ctaText && (
          <Link
            href={ctaHref}
            className="mt-8 inline-block bg-teal hover:bg-teal-light text-white px-8 py-3.5 rounded text-sm tracking-wide transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
