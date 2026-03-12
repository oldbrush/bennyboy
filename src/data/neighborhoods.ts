export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  population: string;
  medianAge: string;
  avgIncome: string;
  highlights: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    slug: "montecito",
    name: "Montecito",
    tagline: "The Crown Jewel of the American Riviera",
    description:
      "An exclusive community just a few miles south of Santa Barbara, Montecito is home to some of the most impressive and expensive real estate in the world. This premier destination has long attracted celebrities, business leaders, and those seeking the ultimate California lifestyle. With its lush landscapes, world-class dining, and proximity to pristine beaches, Montecito offers an unparalleled quality of life.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&h=800&fit=crop",
    population: "8,823",
    medianAge: "51.8",
    avgIncome: "$132,404",
    highlights: [
      "Home to Butterfly Beach and Hammond's Beach",
      "World-class shopping at Coast Village Road",
      "Renowned restaurants and cafes",
      "Prestigious private schools",
      "Celebrity enclave with gated estates",
    ],
  },
  {
    slug: "santa-barbara",
    name: "Santa Barbara",
    tagline: "The American Riviera",
    description:
      "Known as the American Riviera, Santa Barbara is a stunning coastal city nestled between the Santa Ynez Mountains and the Pacific Ocean. With its iconic red-tile roofs, Spanish Colonial architecture, and year-round Mediterranean climate, Santa Barbara offers a lifestyle that blends cultural sophistication with laid-back coastal living. From Stearns Wharf to State Street, the city exudes charm at every turn.",
    image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&h=800&fit=crop",
    population: "88,665",
    medianAge: "36.4",
    avgIncome: "$78,591",
    highlights: [
      "Historic State Street shopping district",
      "World-famous Stearns Wharf",
      "Santa Barbara Bowl concert venue",
      "Vibrant arts and cultural scene",
      "Award-winning wineries nearby",
    ],
  },
  {
    slug: "carpinteria",
    name: "Carpinteria",
    tagline: "The World's Safest Beach",
    description:
      "A charming beach town just south of Montecito, Carpinteria is known for its gentle waves, family-friendly atmosphere, and tight-knit community. The town boasts what many call the 'World's Safest Beach' thanks to its natural reef breakwater. With organic farms, local artisan shops, and stunning Padaro Lane beachfront estates, Carpinteria offers a more relaxed pace of coastal living.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=800&fit=crop",
    population: "16,515",
    medianAge: "43.6",
    avgIncome: "$56,010",
    highlights: [
      "Protected family-friendly beaches",
      "Carpinteria Salt Marsh Nature Park",
      "Padaro Lane beachfront estates",
      "Local farmers markets",
      "Rincon Point surfing",
    ],
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "Ben stayed with us throughout the entire real estate process from home inspection through closing. He is extremely knowledgeable and connected, linking us with incredible service providers including insurance companies, roofers, and plumbers. We couldn't have asked for a better experience.",
    author: "Michael & Sarah Thompson",
    location: "Montecito",
  },
  {
    id: "2",
    quote:
      "His knowledge of the market and dedication to client satisfaction made our home purchasing process smooth and stress-free. Ben's professionalism and expertise were evident throughout every step of the transaction.",
    author: "David & Jennifer Collins",
    location: "Santa Barbara",
  },
  {
    id: "3",
    quote:
      "Working with Ben was an absolute pleasure. His deep understanding of the Santa Barbara market, combined with his genuine care for our needs, resulted in us finding our dream home. He went above and beyond at every turn.",
    author: "Robert & Patricia Wallace",
    location: "Carpinteria",
  },
  {
    id: "4",
    quote:
      "Ben Harris is the consummate professional. He guided us through the sale of our Montecito home with expert market knowledge, strategic pricing, and flawless execution. Our home sold in just two weeks above asking price.",
    author: "James & Elizabeth Monroe",
    location: "Montecito",
  },
  {
    id: "5",
    quote:
      "From our very first meeting, Ben made us feel at ease. His patience, market expertise, and negotiation skills are unmatched. We are thrilled with our new Santa Barbara home and grateful for Ben's guidance.",
    author: "Christopher & Amanda Price",
    location: "Santa Barbara",
  },
];
