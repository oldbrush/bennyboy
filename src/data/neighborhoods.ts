import { Neighborhood } from "@/lib/types";

export const neighborhoods: Neighborhood[] = [
  {
    slug: "santa-barbara",
    name: "Santa Barbara",
    tagline: "The American Riviera",
    description:
      "Santa Barbara offers a rare combination of Mediterranean climate, stunning coastal beauty, and vibrant cultural life. From the red-tile rooftops of the downtown corridor to the expansive estates of the Riviera and Hope Ranch, this iconic city delivers an unparalleled luxury lifestyle. World-class dining, boutique shopping on State Street, and year-round outdoor recreation make Santa Barbara one of the most coveted addresses on the California coast.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80",
    highlights: [
      "Mediterranean climate with 300+ days of sunshine",
      "World-class dining and wine country access",
      "Pristine beaches and harbor activities",
      "Top-rated schools and cultural institutions",
      "Historic architecture and vibrant arts scene",
      "Outdoor recreation from mountains to sea",
    ],
  },
  {
    slug: "montecito",
    name: "Montecito",
    tagline: "Where Elegance Meets Nature",
    description:
      "Montecito is synonymous with understated luxury. This exclusive enclave just south of Santa Barbara is home to A-list celebrities, tech moguls, and families seeking privacy amid extraordinary natural beauty. Tree-lined lanes wind past gated estates, manicured gardens, and boutique shopping at the Upper and Lower Villages. With the Santa Ynez Mountains as a backdrop and the Pacific at its feet, Montecito offers a lifestyle that is truly second to none.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    highlights: [
      "Ultra-exclusive gated estates and compounds",
      "Celebrity and high-net-worth community",
      "Butterfly Beach and private coastal access",
      "Upper & Lower Village boutique shopping",
      "Montecito Union and Cold Spring School districts",
      "Hiking trails in the Santa Ynez foothills",
    ],
  },
  {
    slug: "carpinteria",
    name: "Carpinteria",
    tagline: "The World's Safest Beach",
    description:
      "Carpinteria offers a relaxed coastal charm that perfectly complements the sophistication of the greater Santa Barbara area. Known for its gentle, reef-protected beach—often called the world's safest—this tight-knit community blends small-town character with growing luxury appeal. Avocado groves, oceanfront estates, and the scenic Toro Canyon foothills create a distinctive setting for those who value authenticity alongside coastal living.",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    highlights: [
      "Calm, family-friendly beach with gentle surf",
      "Charming downtown with local shops and eateries",
      "Toro Canyon hiking and nature preserves",
      "Growing luxury market with strong value",
      "Annual Avocado Festival and community events",
      "Easy access to Santa Barbara and Ventura",
    ],
  },
];

export function getNeighborhood(slug: string) {
  return neighborhoods.find((n) => n.slug === slug);
}
