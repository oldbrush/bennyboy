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
    <div className="property-card group relative overflow-hidden rounded-xl bg-white border border-sandy-dark/40 hover:shadow-xl cursor-pointer transition-shadow duration-200">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={`Property at ${property.address}, ${property.city}`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="empty"
          style={{ backgroundColor: "rgb(235, 226, 210)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {isSold ? (
          <div className="absolute top-4 left-4 bg-terra text-white text-[10px] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-md">
            Sold
          </div>
        ) : null}

        <div className="absolute bottom-4 left-5 right-5">
          <p className="font-serif text-2xl font-bold text-white tabular-nums">
            {priceFormatter.format(property.price)}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-charcoal font-medium mb-1 text-[15px]">{property.address}</h3>
        <p className="text-charcoal/40 text-sm mb-4">
          {property.city}, {property.state} {property.zip}
        </p>
        <div className="flex gap-4 text-[13px] text-charcoal/45 border-t border-sandy-dark/30 pt-4">
          <span>{property.beds} Beds</span>
          <span className="text-sandy-dark">|</span>
          <span>{property.baths} Baths</span>
          <span className="text-sandy-dark">|</span>
          <span>{property.sqft.toLocaleString()} Sq Ft</span>
        </div>
      </div>
    </div>
  );
}
