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
      className={`relative ${fullHeight ? "h-screen" : "h-[60vh]"} flex items-end`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
        placeholder="empty"
        style={{ backgroundColor: "rgb(28, 24, 20)" }}
      />
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
      ) : null}
      <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 w-full max-w-7xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] uppercase text-adobe mb-4">
          Santa Barbara &middot; Montecito &middot; Carpinteria
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 text-lg md:text-xl text-cream/70 max-w-2xl">
            {subtitle}
          </p>
        ) : null}
        {ctaText ? (
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 bg-terra hover:bg-terra-light text-white px-8 py-4 rounded-lg text-sm tracking-[0.08em] uppercase transition-colors duration-200"
          >
            {ctaText}
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        ) : null}
      </div>
    </section>
  );
}
