import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function AgentSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img
                src="/images/ben-harris.jpeg"
                alt={siteConfig.ownerName}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Meet Your Agent
            </p>
            <h2 className="heading-lg text-gray-900 mb-6">
              {siteConfig.ownerName}
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
              {siteConfig.ownerTitle}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Growing up in Vacaville, California, Ben Harris learned early what it means to feel rooted in a place. Nestled between the Bay Area and Sacramento, Vacaville shaped Ben&apos;s appreciation for community, open space, and the quiet pride that comes from knowing your neighbors and your town. That foundation led him south to UC Santa Barbara, where he earned his degree in Environmental Science and fell in love with California in an entirely new way. The oceanfront campus, the Gaviota Coast, the golden hills above Santa Barbara — UCSB didn&apos;t just give Ben an education. It gave him a lens through which he&apos;s seen everything since.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              After graduation, Ben followed his connection to the land somewhere unexpected: the vineyards of Northern and Central California. Working across some of the state&apos;s most celebrated wine country — from the sun-drenched valleys of Napa and Sonoma to the foggy coastal ridgelines of Santa Cruz — he spent years immersed in the rhythms of the land and the people who tend it. It was hands-on, humbling, and deeply formative work that taught him patience, precision, and that the difference between good and exceptional almost always comes down to how much you care. But somewhere between the vineyard rows and the rolling California hills, something else was taking root. Real estate kept calling.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              So Ben made the move — back to Santa Barbara, where he now lives on the Mesa and proudly serves buyers and sellers throughout Santa Barbara County. Everything he gathered along the way — the analytical rigor of environmental science, the patience and care of wine country, the deep California roots that stretch from Vacaville to the South Coast — prepared him for this work in ways he couldn&apos;t have planned. For Ben, real estate isn&apos;t just about transactions. Every home has a story, every neighborhood has its own ecology, and every client deserves an agent who treats their goals like his own. When he&apos;s not working, you&apos;ll find him in the lineup at a local surf break, playing music, or doing what comes naturally — bringing people together. In Santa Barbara, this isn&apos;t just Ben&apos;s market. It&apos;s his home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/team" className="btn-primary">
                Learn More
              </Link>
              <Link href="/contact" className="btn-primary bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Contact Ben
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
