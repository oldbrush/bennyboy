import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-36 md:py-44 px-8 md:px-16 bg-warm-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.1em] uppercase text-terra mb-3">
          The American Riviera
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.15] tracking-tight">
          Your Trusted Partner in Luxury Real Estate
        </h2>
        <p className="mt-6 text-charcoal/60 leading-[1.6] text-base md:text-lg">
          With deep roots in the Santa Barbara community and an unwavering
          commitment to excellence, Benjamin Harris brings a personalized,
          results-driven approach to every transaction. Whether you&apos;re
          searching for a beachfront estate, a Montecito retreat, or your
          forever home along the American Riviera, you&apos;ll find a
          dedicated advocate who understands the nuances of this extraordinary
          market.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-2 text-terra hover:text-terra-dark text-sm tracking-[0.08em] uppercase transition-colors duration-150"
        >
          Learn More
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
      </div>
    </section>
  );
}
