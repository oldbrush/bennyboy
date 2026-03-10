"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <div className="h-20 bg-charcoal" />
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-charcoal">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-white mb-4">
            Something went wrong
          </h1>
          <p className="text-cream/60 text-lg mb-8">
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            className="inline-block bg-terra hover:bg-terra-light text-white px-8 py-3.5 rounded text-sm tracking-wide transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    </>
  );
}
