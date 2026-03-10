import { Property } from "@/lib/types";
import PropertyCard from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  showSoldBadge?: boolean;
}

export default function PropertyGrid({
  properties,
  showSoldBadge = false,
}: PropertyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          showSoldBadge={showSoldBadge}
        />
      ))}
    </div>
  );
}
