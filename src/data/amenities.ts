export type Amenity = {
  slug: string;
  iconKey:
    | "wifi"
    | "parking"
    | "restaurant"
    | "spa"
    | "generator"
    | "laundry"
    | "shuttle"
    | "conference"
    | "desk";
  title: string;
  description: string;
  image: string;
};

export const amenities: Amenity[] = [
  {
    slug: "wifi",
    iconKey: "wifi",
    title: "Free Wi‑Fi",
    description: "Fast, reliable internet throughout the property for work and leisure.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "parking",
    iconKey: "parking",
    title: "On-site Parking",
    description: "Secure parking designed for easy arrival and a calm departure.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "restaurant",
    iconKey: "restaurant",
    title: "Restaurant",
    description: "Local Ethiopian favorites and international classics—crafted with care.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "spa",
    iconKey: "spa",
    title: "Spa & Wellness",
    description: "Relaxing treatments and wellness moments to help you reset.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "generator",
    iconKey: "generator",
    title: "Backup Generator",
    description: "Reliable power backup for uninterrupted comfort.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "laundry",
    iconKey: "laundry",
    title: "Laundry Service",
    description: "Clean clothes, handled with care and returned promptly.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "shuttle",
    iconKey: "shuttle",
    title: "Airport Shuttle",
    description: "Convenient transfers for arriving guests and departing travelers.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "conference",
    iconKey: "conference",
    title: "Conference Hall",
    description: "Flexible setups for theater, banquet, and boardroom arrangements.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  },
  {
    slug: "front-desk",
    iconKey: "desk",
    title: "24/7 Front Desk",
    description: "Friendly assistance anytime you need it.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85"
  }
];
