export type Translations = {
  en: string;
  am: string;
  om: string;
};

export type RoomType = {
  slug: string;
  name: Translations;
  description: Translations;
  capacity: number;
  keyAmenities: {iconKey: string; text: Translations}[];
  startingPriceUSD: number;
  coverImage: string;
  galleryImages: string[];
  allAmenities: Translations[];
};

export const rooms: RoomType[] = [
  {
    slug: "standard-room",
    name: {
      en: "Standard Room",
      am: "መደበኛ ክፍል",
      om: "Qolaa Filannoo Duraa",
    },
    description: {
      en: "Placeholder copy: A calm, beautifully appointed room with everything you need for a comfortable stay.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ለምቾት ቆይታ የሚያስፈልጉት ሁሉ የተሟላ የሆነ እርጋታ ክፍል።",
      om: "Placeholder copy: Qolaa miidhagaa fi deggarsa barbaachisaa hunda qabu siif qopheesse."
    },
    capacity: 2,
    keyAmenities: [
      {iconKey: "wifi", text: {en: "Free Wi‑Fi", am: "ነፃ Wi‑Fi", om: "Wi‑Fi bilisaa"}},
      {iconKey: "breakfast", text: {en: "Breakfast Options", am: "የቁርስ አማራጮች", om: "Filannoo Quraanaa"}},
      {iconKey: "parking", text: {en: "On-site Parking", am: "በቦታው መኪና ማቆሚያ", om: "Qixa Diideessuu bakka keessa jiru"}}
    ],
    startingPriceUSD: 95,
    coverImage: "/assets/images/rooms/standard-room.jpg",
    galleryImages: [
      "/assets/images/rooms/standard-room.jpg",
      "/assets/images/rooms/deluxe-room.jpg",
      "/assets/images/hero/secondary-hero.jpg"
    ],
    allAmenities: [
      {en: "AC & climate control", am: "AC እና የሙቀት ቁጥጥር", om: "AC fi sirreeffama qilleensaa"},
      {en: "Work desk & smart lighting", am: "የስራ ጠረጴዛ እና ብርሃን", om: "Meeshaalee hojii & ifa sirrii"},
      {en: "Private bathroom", am: "ግል መታጠቢያ", om: "Bakka quubsaa dhuunfaa"},
      {en: "Nightly turndown service", am: "የማታ ዝግጅት አገልግሎት", om: "Tajaajila yeroo halkan"}
    ]
  },
  {
    slug: "deluxe-room",
    name: {en: "Deluxe Room", am: "ዲሉክስ ክፍል", om: "Qolaa Deeluxe"},
    description: {
      en: "Placeholder copy: Spacious comfort with refined details and a relaxing view.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ የተሰፋ ምቾት ከተሟላ ዝርዝር ጋር—ለማረፍ ጥሩ እይታ።",
      om: "Placeholder copy: Gamtaan bal’inaan miidhaginaa fi ilaacha eeggannoo qabu qaba."
    },
    capacity: 3,
    keyAmenities: [
      {iconKey: "wifi", text: {en: "Fast Wi‑Fi", am: "ፈጣን Wi‑Fi", om: "Wi‑Fi dandeetti guddaa"}},
      {iconKey: "roomService", text: {en: "Room Service", am: "በክፍል አገልግሎት", om: "Tajaajila qofa keessa"}},
      {iconKey: "parking", text: {en: "Secure Parking", am: "ደህንነት ያለው ማቆሚያ", om: "Bakka nagaa deeggarsa park"}}
    ],
    startingPriceUSD: 120,
    coverImage: "/assets/images/rooms/deluxe-room.jpg",
    galleryImages: [
      "/assets/images/rooms/deluxe-room.jpg",
      "/assets/images/rooms/standard-room.jpg",
      "/assets/images/hero/home-hero.jpg"
    ],
    allAmenities: [
      {en: "Luxury linens", am: "የቅንጦት አልጋ ሽፋን", om: "Dafqee ulfaatina qabu"},
      {en: "Premium bedding & pillow selection", am: "ጥሩ አልጋ እና ትራስ ምርጫ", om: "Ulfaataa fi filannoo xiqaa"},
      {en: "Sound-insulated comfort", am: "የድምፅ መከላከያ", om: "Tishoo hin seenne of eeggannoo"}
    ]
  },
  {
    slug: "junior-suite",
    name: {en: "Junior Suite", am: "ጁኒየር ሱይት", om: "Junior Suite"},
    description: {
      en: "Placeholder copy: A separate lounge area with enhanced comfort for longer stays.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ለረዥም ቆይታ የተሻለ ምቾት—ተለያይ የቁጥጥር ክፍል ጋር።",
      om: "Placeholder copy: Kutaa boqonnaa adda addaa—waggoota dheeraa qopheesse."
    },
    capacity: 3,
    keyAmenities: [
      {iconKey: "lounge", text: {en: "Separate Lounge", am: "ተለያይ ማዕከል", om: "Kutaa Boqonnaa Adda"} },
      {iconKey: "wifi", text: {en: "Reliable Wi‑Fi", am: "ተመናጭ Wi‑Fi", om: "Wi‑Fi amanamaa"}},
      {iconKey: "breakfast", text: {en: "Included Breakfast", am: "የቁርስ ጥቅል ያለበት", om: "Quraanaa dabalamee"}}
    ],
    startingPriceUSD: 165,
    coverImage: "/assets/images/hero/secondary-hero.jpg",
    galleryImages: [
      "/assets/images/hero/secondary-hero.jpg",
      "/assets/images/rooms/deluxe-room.jpg",
      "/assets/images/about/about-main.jpg"
    ],
    allAmenities: [
      {en: "Lounge seating & workspace", am: "የመቀመጫ ቦታ እና የስራ ቦታ", om: "Kuta tursiisee fi hojii"},
      {en: "Premium bathroom amenities", am: "የቅንጦት የመታጠቢያ አገልግሎት", om: "Tajaajila vaayibaa premium"},
      {en: "Evening turndown", am: "የማታ ዝግጅት", om: "Qopheessa halkan"}
    ]
  },
  {
    slug: "executive-suite",
    name: {en: "Executive Suite", am: "ኤክስኪውቲቭ ሱይት", om: "Executive Suite"},
    description: {
      en: "Placeholder copy: Elevated luxury with a distinct living experience and premium finishing.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ የተሻለ የቅንጦት ልምድ—በምርጥ ዝግጅት እና ተለያይ ኑሮ።",
      om: "Placeholder copy: Ulfaataa ol’aanaa—haala jiraachuu adda ta’e."
    },
    capacity: 4,
    keyAmenities: [
      {iconKey: "lounge", text: {en: "Executive Lounge", am: "ኤክስኪውቲቭ ማዕከል", om: "Lounge Executive"}},
      {iconKey: "wifi", text: {en: "High-speed Wi‑Fi", am: "ፈጣን Wi‑Fi", om: "Wi‑Fi saffisaa"}},
      {iconKey: "breakfast", text: {en: "Breakfast Included", am: "ቁርስ ተካትቷል", om: "Quraanaa dabalamee"}}
    ],
    startingPriceUSD: 230,
    coverImage: "/assets/images/about/about-main.jpg",
    galleryImages: [
      "/assets/images/about/about-main.jpg",
      "/assets/images/rooms/standard-room.jpg",
      "/assets/images/hero/home-hero.jpg"
    ],
    allAmenities: [
      {en: "Dining area for meetings", am: "ለስብሰባ የምግብ ቦታ", om: "Akkataa nyaataa mariif"},
      {en: "Curated minibar selection", am: "የተመረጠ ሚኒባር", om: "Minibar filannoo qopheessine"},
      {en: "Premium bath experience", am: "የቅንጦት መታጠቢያ ልምድ", om: "Gaafata quubsaa premium"}
    ]
  },
  {
    slug: "family-suite",
    name: {en: "Family Suite", am: "የቤተሰብ ሱይት", om: "Family Suite"},
    description: {
      en: "Placeholder copy: Comfort for the whole family, with flexible space and thoughtful amenities.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ለቤተሰብ ሁሉ ምቾት—ተለዋዋጭ ቦታ እና አሳቢ አገልግሎት።",
      om: "Placeholder copy: Maaloo qooqaa—bakka mijataa fi tajaajila beekamaa qaba."
    },
    capacity: 5,
    keyAmenities: [
      {iconKey: "family", text: {en: "Flexible Living Space", am: "ተለዋዋጭ ቦታ", om: "Bakka jireenya mijataa"}},
      {iconKey: "wifi", text: {en: "Wi‑Fi for Everyone", am: "Wi‑Fi ለሁሉም", om: "Wi‑Fi nama hundaaaf"}},
      {iconKey: "parking", text: {en: "Easy Parking", am: "ቀላል ማቆሚያ", om: "Parkii salphaa"}}
    ],
    startingPriceUSD: 270,
    coverImage: "/assets/images/hero/home-hero.jpg",
    galleryImages: [
      "/assets/images/hero/home-hero.jpg",
      "/assets/images/rooms/standard-room.jpg",
      "/assets/images/rooms/deluxe-room.jpg"
    ],
    allAmenities: [
      {en: "Family-friendly layout", am: "ለቤተሰብ ተስማሚ መዋቅር", om: "Qabiyyee maatii ni mijata"},
      {en: "Extra towels & storage", am: "ተጨማሪ ፎጣ እና ማከማቻ", om: "Towel dabalataa fi bakka kuusaa"},
      {en: "Comfort seating", am: "ምቾት መቀመጫ", om: "Tursiisaa mijataa"}
    ]
  }
];

