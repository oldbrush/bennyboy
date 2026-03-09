import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About | Benjamin Harris Luxury Real Estate",
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
      <div className="h-20 bg-charcoal" />

      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Headshot */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Benjamin Harris"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Bio */}
            <div>
              <SectionHeading
                title="About Benjamin"
                center={false}
              />
              <div className="space-y-5 text-cream/60 leading-relaxed">
                <p>
                  Born and raised on the California coast, Benjamin Harris has
                  spent over 15 years helping discerning buyers and sellers
                  navigate the Santa Barbara luxury real estate market. His deep
                  understanding of the local landscape—from the sun-drenched
                  bluffs of the Mesa to the gated estates of Montecito—gives
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
                  about the home you own—it&apos;s about the life you build
                  around it.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-lg border border-white/5"
              >
                <div className="font-serif text-4xl font-bold text-teal mb-2">
                  {stat.value}
                </div>
                <div className="text-sm tracking-wide text-cream/50 uppercase">
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
