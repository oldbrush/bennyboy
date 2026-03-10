import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Buyer Representation",
    description:
      "Navigate the competitive Santa Barbara market with expert guidance, off-market access, and strategic negotiation.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
      </svg>
    ),
  },
  {
    title: "Seller Services",
    description:
      "Maximize your property's value with premium staging, professional photography, and targeted marketing campaigns.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Market Analysis",
    description:
      "Make informed decisions with comprehensive market data, neighborhood insights, and investment analysis.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 md:py-36 px-8 md:px-16 bg-sandy">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="How We Can Help"
          subtitle="Comprehensive real estate expertise tailored to your goals"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 md:p-10 rounded-xl bg-warm-white border border-sandy-dark/60 hover:border-terra/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-terra/10 flex items-center justify-center text-terra mb-6 group-hover:bg-terra/15 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal/50 leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
