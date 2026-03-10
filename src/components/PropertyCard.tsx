import Image from "next/image";
import { Property } from "@/lib/types";

interface PropertyCardProps {
  property: Property;
  showSoldBadge?: boolean;
}

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function PropertyCard({
  property,
  showSoldBadge = false,
}: PropertyCardProps) {
  const isSold = showSoldBadge && property.status === "sold";

  return (
    <div className="group relative overflow-hidden rounded-lg bg-charcoal-light cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={`Property at ${property.address}, ${property.city}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="empty"
          style={{ backgroundColor: "rgb(40, 35, 32)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {isSold ? (
          <div className="absolute top-4 left-4 bg-terra text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded">
            Sold
          </div>
        ) : null}

        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-serif text-2xl font-bold text-white">
            {priceFormatter.format(property.price)}
          </p>
        </div>
      </div>

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
