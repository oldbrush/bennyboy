import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Benjamin Harris, Santa Barbara's premier luxury real estate agent.",
};

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Properties Sold", value: "200+" },
  { label: "Sales Volume", value: "$500M+" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Spacer */}
      <div className="h-24 md:h-28 bg-charcoal" />

      <section className="py-24 md:py-32 px-8 md:px-16 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Headshot */}
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
              <Image
                src="/images/ben-harris.png"
                alt="Benjamin Harris, Santa Barbara luxury realtor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-terra mb-4">
                About
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-[1.15]">
                Benjamin Harris
              </h1>
              <div className="space-y-5 text-cream/55 leading-[1.8] text-[15px]">
                <p>
                  Born and raised on the California coast, Benjamin Harris has
                  spent over 15 years helping discerning buyers and sellers
                  navigate the Santa Barbara luxury real estate market. His deep
                  understanding of the local landscape — from the sun-drenched
                  bluffs of the Mesa to the gated estates of Montecito — gives
                  clients an unmatched advantage.
                </p>
                <p>
                  Benjamin&apos;s approach is built on relationships, not
                  transactions. He takes the time to understand each
                  client&apos;s unique vision, leveraging his extensive network,
                  market expertise, and negotiation skills to deliver
                  exceptional results. His track record of record-setting sales
                  speaks for itself.
                </p>
                <p>
                  When he&apos;s not closing deals, you&apos;ll find Benjamin
                  surfing at Rincon Point, exploring the Santa Ynez wine
                  country, or volunteering with local conservation efforts. He
                  believes that living well in Santa Barbara isn&apos;t just
                  about the home you own — it&apos;s about the life you build
                  around it.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-10 rounded-xl bg-charcoal-light border border-charcoal-border"
              >
                <div className="font-serif text-4xl md:text-5xl font-semibold text-terra mb-3 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-[0.2em] text-cream/40 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
