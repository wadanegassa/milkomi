import type {Translations} from "./rooms";

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
  title: Translations;
  description: Translations;
  image: string; // placeholder spotlight image path
};

export const amenities: Amenity[] = [
  {
    slug: "wifi",
    iconKey: "wifi",
    title: {en: "Free Wi‑Fi", am: "ነፃ Wi‑Fi", om: "Wi‑Fi Bilisaa"},
    description: {
      en: "Fast, reliable internet throughout the property for work and leisure.",
      am: "ለስራ እና ለመዝናኛ ፈጣን እና ተረጋገጠ ኢንተርኔት።",
      om: "Internetii saffisaa fi amanamaa bakka hundaaf."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "parking",
    iconKey: "parking",
    title: {en: "On-site Parking", am: "በቦታው መኪና ማቆሚያ", om: "Parking Biyya Keessatti"},
    description: {
      en: "Secure parking designed for easy arrival and a calm departure.",
      am: "ለመግባት ቀላል እና ለመውጣት የሚያረጋግጥ የደህንነት መኪና ማቆሚያ።",
      om: "Parking nageenya qabu siif salphaatti gadi ba’uu."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "restaurant",
    iconKey: "restaurant",
    title: {en: "Restaurant", am: "ምግብ ቤት", om: "Manaa Nyaataa"},
    description: {
      en: "Local Ethiopian favorites and international classics—crafted with care.",
      am: "የኢትዮጵያ ተወዳጅ ምግቦች እና የዓለም ቅርጾች—በጥንቃቄ የተዘጋጁ።",
      om: "Afuuri Itoophiyaa fi qajeelfama addunyaa—akkasumas hawwii."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "spa",
    iconKey: "spa",
    title: {en: "Spa & Wellness", am: "ስፓ እና ዌልነስ", om: "Spa fi Eebbisiinsa Fayyaa"},
    description: {
      en: "Relaxing treatments and wellness moments to help you reset.",
      am: "ለመረጋጋት የሚያግዙ ህክምናዎች እና የጤና ጊዜዎች።",
      om: "Wal-qabsiisaa fi damma."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "generator",
    iconKey: "generator",
    title: {en: "Backup Generator", am: "የባክአፕ ጀነሬተር", om: "Jeneratorii Deebii"},
    description: {
      en: "Reliable power backup for uninterrupted comfort.",
      am: "ለማይቋረጥ ምቾት ተረጋገጠ የኃይል ድጋፍ።",
      om: "Deeggarsa humnaa amanamaa."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "laundry",
    iconKey: "laundry",
    title: {en: "Laundry Service", am: "የልብስ ማጠብ አገልግሎት", om: "Tajaajila Dhukkubbii"},
    description: {
      en: "Clean clothes, handled with care and returned promptly.",
      am: "ንጹሕ ልብስ በጥንቃቄ ይዞ ይመልሳል።",
      om: "uffata qulqulluu saffisaan deebif."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "shuttle",
    iconKey: "shuttle",
    title: {en: "Airport Shuttle", am: "የአየር ማረፊያ ሹትል", om: "Shuttle Garbicha Raayyaa"},
    description: {
      en: "Convenient transfers for arriving guests and departing travelers.",
      am: "ለሚመጡ እና ለሚወጡ እንግዶች ምቹ መጓጓዣ።",
      om: "Deebii fi gara gara deeggarsaaf."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "conference",
    iconKey: "conference",
    title: {en: "Conference Hall", am: "የኮንፈረንስ አዳራሽ", om: "Hoolaa Konferensii"},
    description: {
      en: "Flexible setups for theater, banquet, and boardroom arrangements.",
      am: "ለቲያትር፣ ለባንኬት እና ለቦርድ ሩም ቅንብሮች ተለዋዋጭ መዘጋጀት።",
      om: "Filannoo qindeessuu sagalee fi qophii."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  },
  {
    slug: "front-desk",
    iconKey: "desk",
    title: {en: "24/7 Front Desk", am: "24/7 የፊት ዴስክ", om: "Fulba’aa 24/7 Gorsa Hojii"},
    description: {
      en: "Friendly assistance anytime you need it.",
      am: "ሲፈልጉ ሁልጊዜ ተቀባይነት እና ድጋፍ።",
      om: "Deeggarsa sa'aatii hundaa."
    },
    image: "/assets/images/amenities/amenity-main.jpg"
  }
];

