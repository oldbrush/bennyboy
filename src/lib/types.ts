export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  description: string;
  image: string;
  images?: string[];
  status: "active" | "sold";
  neighborhood: "santa-barbara" | "montecito" | "carpinteria";
  featured?: boolean;
}

export interface Neighborhood {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  highlights: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  brokerage: string;
  dreNumber: string;
  phone: string;
  email: string;
  tagline: string;
  address: string;
}
