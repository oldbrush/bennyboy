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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
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
              With over 40 years of real estate experience, Ben Harris is one of
              Santa Barbara&apos;s most trusted and accomplished real estate
              professionals. As a top 1% Berkshire Hathaway HomeServices agent
              worldwide, Ben brings unparalleled market knowledge, negotiation
              expertise, and a genuine passion for helping clients achieve their
              real estate goals.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Growing up in the Santa Barbara area, Ben has deep-rooted
              connections and an extensive understanding of every neighborhood
              from Montecito to Carpinteria. His commitment to client
              satisfaction, combined with his strategic approach to buying and
              selling, has earned him a reputation as the go-to agent for luxury
              properties along the American Riviera.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re searching for your dream home or looking to
              sell your property for top dollar, Ben&apos;s decades of experience
              and personalized approach ensure an exceptional real estate
              experience.
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
