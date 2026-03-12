import { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group">
      <div className="relative h-[280px] overflow-hidden mb-4">
        <img
          src={property.image}
          alt={property.address}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider text-white ${
            property.status === "sold"
              ? "bg-red-600"
              : property.status === "pending"
              ? "bg-yellow-600"
              : "bg-primary"
          }`}
        >
          {property.status === "active"
            ? "For Sale"
            : property.status === "pending"
            ? "Pending"
            : "Sold"}
        </div>
      </div>
      <h3 className="font-heading text-lg font-medium uppercase tracking-wide text-gray-900 mb-1">
        {property.address}
      </h3>
      <p className="text-gray-500 text-sm mb-2">
        {property.city}, {property.state} {property.zip}
      </p>
      <p className="text-primary text-xl font-heading font-semibold mb-2">
        {property.price}
      </p>
      <p className="text-gray-500 text-sm mb-3">{property.description}</p>
      <div className="flex gap-4 text-gray-500 text-sm">
        <span>{property.beds} Beds</span>
        <span>|</span>
        <span>{property.baths} Baths</span>
        <span>|</span>
        <span>{property.sqft} Sq Ft</span>
      </div>
    </div>
  );
}
