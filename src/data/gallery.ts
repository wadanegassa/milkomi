export type GalleryCategory =
  | "exterior"
  | "rooms"
  | "restaurant"
  | "events"
  | "amenities";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
    alt: "Mersimoy International Hotel exterior facade"
  },
  {
    id: "g2",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85",
    alt: "Executive suite interior"
  },
  {
    id: "g3",
    category: "restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85",
    alt: "Restaurant dining area"
  },
  {
    id: "g4",
    category: "events",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=85",
    alt: "Events hall setup"
  },
  {
    id: "g5",
    category: "amenities",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=85",
    alt: "Hotel lounge and reception"
  },
  {
    id: "g6",
    category: "exterior",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
    alt: "Mersimoy International Hotel exterior facade"
  },
  {
    id: "g7",
    category: "rooms",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85",
    alt: "Executive suite interior"
  },
  {
    id: "g8",
    category: "restaurant",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85",
    alt: "Restaurant dining area"
  }
];
