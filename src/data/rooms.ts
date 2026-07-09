export type RoomType = {
  slug: string;
  name: string;
  description: string;
  capacity: number;
  keyAmenities: {iconKey: string; text: string}[];
  startingPriceUSD: number;
  coverImage: string;
  galleryImages: string[];
  allAmenities: string[];
};

export const rooms: RoomType[] = [
  {
    slug: "standard-room",
    name: "Standard Room",
    description: "A calm, beautifully appointed room with a comfortable bed, en-suite bathroom, and workspace — ideal for business or leisure travelers.",
    capacity: 2,
    keyAmenities: [
      {iconKey: "wifi", text: "Free Wi‑Fi"},
      {iconKey: "breakfast", text: "Breakfast Options"},
      {iconKey: "parking", text: "On-site Parking"}
    ],
    startingPriceUSD: 95,
    coverImage: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=85"
    ],
    allAmenities: [
      "AC & climate control",
      "Work desk & smart lighting",
      "Private bathroom",
      "Nightly turndown service"
    ]
  },
  {
    slug: "deluxe-room",
    name: "Deluxe Room",
    description: "Spacious and refined — enjoy added square footage, premium linens, and a relaxing city or garden view during your stay.",
    capacity: 3,
    keyAmenities: [
      {iconKey: "wifi", text: "Fast Wi‑Fi"},
      {iconKey: "roomService", text: "Room Service"},
      {iconKey: "parking", text: "Secure Parking"}
    ],
    startingPriceUSD: 120,
    coverImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85"
    ],
    allAmenities: [
      "Luxury linens",
      "Premium bedding & pillow selection",
      "Sound-insulated comfort"
    ]
  },
  {
    slug: "junior-suite",
    name: "Junior Suite",
    description: "A separate lounge area with enhanced comfort — perfect for extended stays, featuring additional seating, a work desk, and upgraded amenities.",
    capacity: 3,
    keyAmenities: [
      {iconKey: "lounge", text: "Separate Lounge"},
      {iconKey: "wifi", text: "Reliable Wi‑Fi"},
      {iconKey: "breakfast", text: "Included Breakfast"}
    ],
    startingPriceUSD: 165,
    coverImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=85"
    ],
    allAmenities: [
      "Lounge seating & workspace",
      "Premium bathroom amenities",
      "Evening turndown"
    ]
  },
  {
    slug: "executive-suite",
    name: "Executive Suite",
    description: "Our finest accommodation — a distinct living experience with premium furnishings, a spacious bathroom, and executive-level comforts throughout.",
    capacity: 4,
    keyAmenities: [
      {iconKey: "lounge", text: "Executive Lounge"},
      {iconKey: "wifi", text: "High-speed Wi‑Fi"},
      {iconKey: "breakfast", text: "Breakfast Included"}
    ],
    startingPriceUSD: 230,
    coverImage: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85"
    ],
    allAmenities: [
      "Dining area for meetings",
      "Curated minibar selection",
      "Premium bath experience"
    ]
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    description: "Designed with families in mind — flexible sleeping arrangements, extra storage, and ample space for everyone to relax and feel at home.",
    capacity: 5,
    keyAmenities: [
      {iconKey: "family", text: "Flexible Living Space"},
      {iconKey: "wifi", text: "Wi‑Fi for Everyone"},
      {iconKey: "parking", text: "Easy Parking"}
    ],
    startingPriceUSD: 270,
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85"
    ],
    allAmenities: [
      "Family-friendly layout",
      "Extra towels & storage",
      "Comfort seating"
    ]
  }
];
