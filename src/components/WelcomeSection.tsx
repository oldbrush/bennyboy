import SectionHeading from "./SectionHeading";

export default function WelcomeSection() {
  return (
    <section className="py-24 px-6 bg-charcoal">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          title="Welcome"
          subtitle="Your trusted partner in Santa Barbara luxury real estate"
        />
        <p className="text-cream/60 leading-relaxed text-lg">
          With deep roots in the Santa Barbara community and an unwavering
          commitment to excellence, Benjamin Harris brings a personalized,
          results-driven approach to every transaction. Whether you&apos;re
          searching for a beachfront estate, a Montecito retreat, or your
          forever home along the American Riviera, you&apos;ll find a dedicated
          advocate who understands the nuances of this extraordinary market.
        </p>
      </div>
    </section>
  );
}
