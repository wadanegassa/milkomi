import type {Translations} from "./rooms";

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
  alt: Translations;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    category: "exterior",
    image: "/assets/images/gallery/exterior/exterior-1.jpg",
    alt: {
      en: "Placeholder exterior photo",
      am: "ቅድመ-ሙከራ የውጭ ፎቶ",
      om: "Placeholder suuraa alaa"
    }
  },
  {
    id: "g2",
    category: "rooms",
    image: "/assets/images/gallery/rooms/rooms-1.jpg",
    alt: {
      en: "Placeholder room photo",
      am: "ቅድመ-ሙከራ የክፍል ፎቶ",
      om: "Placeholder suuraa qola"
    }
  },
  {
    id: "g3",
    category: "restaurant",
    image: "/assets/images/gallery/restaurant/restaurant-1.jpg",
    alt: {
      en: "Placeholder restaurant ambiance",
      am: "ቅድመ-ሙከራ የምግብ ቤት አካባቢ",
      om: "Placeholder mooda mana nyaataa"
    }
  },
  {
    id: "g4",
    category: "events",
    image: "/assets/images/gallery/events/events-1.jpg",
    alt: {
      en: "Placeholder event setup",
      am: "ቅድመ-ሙከራ የዝግጅት ውድቀት",
      om: "Placeholder qindaa'insa sagantaa"
    }
  },
  {
    id: "g5",
    category: "amenities",
    image: "/assets/images/gallery/amenities/amenities-1.jpg",
    alt: {
      en: "Placeholder amenity photo",
      am: "ቅድመ-ሙከራ የአገልግሎት ፎቶ",
      om: "Placeholder suuraa tajaajila"
    }
  },
  {
    id: "g6",
    category: "exterior",
    image: "/assets/images/hero/home-hero.jpg",
    alt: {
      en: "Placeholder exterior photo",
      am: "ቅድመ-ሙከራ የውጭ ፎቶ",
      om: "Placeholder suuraa alaa"
    }
  },
  {
    id: "g7",
    category: "rooms",
    image: "/assets/images/rooms/deluxe-room.jpg",
    alt: {
      en: "Placeholder room photo",
      am: "ቅድመ-ሙከራ የክፍል ፎቶ",
      om: "Placeholder suuraa qola"
    }
  },
  {
    id: "g8",
    category: "restaurant",
    image: "/assets/images/dining/dining-main.jpg",
    alt: {
      en: "Placeholder restaurant ambiance",
      am: "ቅድመ-ሙከራ የምግብ ቤት አካባቢ",
      om: "Placeholder mooda mana nyaataa"
    }
  }
];

