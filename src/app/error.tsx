"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <div className="h-24 md:h-28 bg-charcoal" />
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-charcoal">
        <div className="text-center max-w-md">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra mb-4">
            Error
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-cream/50 text-base mb-8">
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            className="inline-block bg-terra hover:bg-terra-light text-white px-8 py-4 rounded-lg text-sm tracking-[0.08em] uppercase cursor-pointer transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
      </section>
    </>
  );
}
