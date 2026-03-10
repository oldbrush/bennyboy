import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-24 md:h-28 bg-charcoal" />
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-charcoal">
        <div className="text-center max-w-md">
          <p className="font-serif text-7xl md:text-8xl font-semibold text-charcoal-border mb-4">
            404
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-cream/50 text-base mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-terra hover:bg-terra-light text-white px-8 py-4 rounded-lg text-sm tracking-[0.08em] uppercase transition-colors duration-200"
          >
            Return Home
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
    </>
  );
}
