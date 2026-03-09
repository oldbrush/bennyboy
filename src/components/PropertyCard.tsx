import Image from "next/image";
import { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
  showSoldBadge?: boolean;
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PropertyCard({
  property,
  showSoldBadge = false,
}: PropertyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-charcoal-light cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.address}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {showSoldBadge && property.status === "sold" && (
          <div className="absolute top-4 left-4 bg-teal text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded">
            Sold
          </div>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-serif text-2xl font-bold text-white">
            {formatPrice(property.price)}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="text-white font-medium mb-1">{property.address}</h3>
        <p className="text-cream/50 text-sm mb-3">
          {property.city}, {property.state} {property.zip}
        </p>
        <div className="flex gap-4 text-sm text-cream/60">
          <span>{property.beds} Beds</span>
          <span className="text-cream/20">|</span>
          <span>{property.baths} Baths</span>
          <span className="text-cream/20">|</span>
          <span>{property.sqft.toLocaleString()} Sq Ft</span>
        </div>
      </div>
    </div>
  );
}
