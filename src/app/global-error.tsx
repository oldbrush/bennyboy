"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[rgb(28,24,20)] text-[rgb(250,245,235)]">
        <section className="min-h-dvh flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-lg mb-8 opacity-60">
              We encountered an unexpected error. Please try again.
            </p>
            <button
              onClick={reset}
              className="inline-block bg-[rgb(183,94,58)] text-white px-8 py-3.5 rounded text-sm tracking-wide"
            >
              Try Again
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
