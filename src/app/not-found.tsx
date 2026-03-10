import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-20 bg-charcoal" />
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-charcoal">
        <div className="text-center">
          <h1 className="font-serif text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-cream/60 text-lg mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-terra hover:bg-terra-light text-white px-8 py-3.5 rounded text-sm tracking-wide transition-colors"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
