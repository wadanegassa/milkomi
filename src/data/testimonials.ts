import type {Translations} from "./rooms";

export type Testimonial = {
  id: string;
  name: string;
  location?: string;
  ratingOutOf5: number;
  quote: Translations;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aster M.",
    location: "Addis Ababa",
    ratingOutOf5: 5,
    quote: {
      en: "Placeholder copy: Everything felt premium—quiet rooms, attentive staff, and meals that made mornings special.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ሁሉም ነገር ቅንጦት ይመስላል—ዝም ያለ ክፍል፣ ተ శናፊ ሰራተኞች እና ማለዳን የሚያደርጉ ምግቦች።",
      om: "Placeholder copy: Hundaaf ulfaatina qabataniif—qolaa aarii, tajaajiltoota ariifachiisan, fi quraanaa gammachiisaa."
    }
  },
  {
    id: "t2",
    name: "Daniel K.",
    location: "London",
    ratingOutOf5: 4.8,
    quote: {
      en: "Placeholder copy: A beautiful hotel with a calm atmosphere. The conference setup was flawless and on time.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ቆንጆ ሆቴል ከእርጋታ አከባቢ ጋር። የኮንፈረንስ ዝግጅቱ በፍጹም እና በሰዓት ተጠናቀቀ።",
      om: "Placeholder copy: Hotel baay’ee gaariidha, bakka dallansaa. Qindeessii konferensii sirrii ta'ee yeroo irratti raawwatame."
    }
  },
  {
    id: "t3",
    name: "Selam W.",
    location: "Bole",
    ratingOutOf5: 4.7,
    quote: {
      en: "Placeholder copy: The food was excellent and the spa experience helped me rest after a busy week.",
      am: "ቅድመ-ሙከራ ጽሑፍ፡ ምግቡ ጥሩ ነበር እና የስፓ ልምድ በሳምንት ጫና ከነበረ በኋላ እንድተኛ አገዘ።",
      om: "Placeholder copy: Nyaanni gaarii ture; spa keessatti gammachuu naaf kenne."
    }
  }
];

