import type {Translations} from "./rooms";

export type Offer = {
  slug: string;
  title: Translations;
  description: Translations;
  priceFromUSD: number;
  image: string;
  terms: Translations;
};

export const offers: Offer[] = [
  {
    slug: "seasonal-deal",
    title: {
      en: "Seasonal Deal",
      am: "የወቅት ቅናሽ",
      om: "Badii Yeroo"
    },
    description: {
      en: "Placeholder copy: Exclusive seasonal rates with breakfast and priority check-in.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ልዩ የወቅት ዋጋ ከቁርስ እና ቅድሚያ ማስገባት ጋር።",
      om: "Placeholder copy: Gatii yeroon addaa kan quraanaa fi check-in saffisaa dabalatee."
    },
    priceFromUSD: 110,
    image: "/assets/images/offers/offers-main.jpg",
    terms: {
      en: "Placeholder copy: Subject to availability. Limited rooms per day.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ተገኝነት ላይ ይመሰርታል። በቀን የተወሰኑ ክፍሎች።",
      om: "Placeholder copy: Filannoo irratti hundaa'a. Qolaa muraasa guyyaa keessatti."
    }
  },
  {
    slug: "honeymoon",
    title: {en: "Honeymoon Package", am: "የጉብኝት ጥቅል", om: "Pakeejii Hima"
    },
    description: {
      en: "Placeholder copy: A romantic stay with curated dining and in-room surprises.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ የፍቅር ቆይታ ከተመረጠ መመገቢያ እና የክፍል ውስጥ ስጦታዎች ጋር።",
      om: "Placeholder copy: Tajaajila jaalala—mana nyaataa filatamaa fi wantoota gara qofa keessatti yaadame."
    },
    priceFromUSD: 180,
    image: "/assets/images/offers/offers-main.jpg",
    terms: {
      en: "Placeholder copy: Available for couples. Setup included for first night.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ለጥንዶች ይገኛል። ለመጀመሪያ ማታ ዝግጅት ተካቷል።",
      om: "Placeholder copy: Fayyadamaa lamaaf. Qopheessaan yeroo jalqabaaf dabalame."
    }
  },
  {
    slug: "corporate-rate",
    title: {en: "Corporate Rate", am: "የኮርፖሬት ዋጋ", om: "Gatii Koorpooreetii"},
    description: {
      en: "Placeholder copy: Ideal for business travelers with flexible invoicing options.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ለንግድ ጉዞ ምቹ—ተጣጣሚ የሂሳብ አማራጮች ጋር።",
      om: "Placeholder copy: Daldalaa irratti mijataa—falmaa kaffaltii saffisaa fi mijataa ta'ee."
    },
    priceFromUSD: 125,
    image: "/assets/images/offers/offers-main.jpg",
    terms: {
      en: "Placeholder copy: Company approval required for invoicing.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ለሂሳብ ማፅደቅ ኩባንያ ያስፈልጋል።",
      om: "Placeholder copy: Piroojeektii fi akkaataa invoicing irratti murteessuu."
    }
  }
];

