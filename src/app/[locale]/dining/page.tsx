import {getTranslations} from "next-intl/server";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import {Clock} from "lucide-react";
import Link from "next/link";

export default async function DiningPage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";
  const tDining = await getTranslations("pages.dining");
  const tCommon = await getTranslations("common");

  const cuisine = [
    {
      key: "local",
      title: {
        en: "Local Ethiopian",
        am: "የኢትዮጵያ ባህላዊ",
        om: "Biyya Itoophiyaa",
      },
      body: {
        en: "Placeholder copy: Injera favorites, stews, and signature spices.",
        am: "ቅድመ-ሙከራ ጽሑፍ፡ ኢንጀራ ተወዳጆች፣ ሾርባ እና ልዩ ቅመሞች።",
        om: "Placeholder copy: Injera fi korma sirrii, hamsa."
      }
    },
    {
      key: "international",
      title: {
        en: "International Favorites",
        am: "የዓለም ቅርጾች",
        om: "Filannoo Addunyaa"
      },
      body: {
        en: "Placeholder copy: Elevated classics with careful presentation.",
        am: "ቅድመ-ሙከራ ጽሑፍ፡ በጥንቃቄ እና በአስደሳች አቀራረብ የተሻሻሉ ክላሲክ ምግቦች።",
        om: "Placeholder copy: Qabeenya olaanaa fi dhiyeessii sirrii."
      }
    },
    {
      key: "beverages",
      title: {en: "Beverages", am: "መጠጦች", om: "Dhugaatii"},
      body: {
        en: "Placeholder copy: Curated coffee, mocktails, and refreshing drinks.",
        am: "ቅድመ-ሙከራ ጽሑፍ፡ የተመረጠ ቡና፣ ማስመሰል ኮክቴሎች እና የሚያድስ መጠጦች።",
        om: "Placeholder copy: Qorqi filatamaa, mocktails, fi dhugaatii haaromsaa."
      }
    }
  ];

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={tDining("hero.title")}
        tagline={tDining("hero.tagline")}
        imageSrc="/assets/images/dining/dining-main.jpg"
        primaryCta={{
          label: tCommon("reserveTable"),
          href: `/${params.locale}/contact?purpose=restaurant`
        }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <h2 className="font-heading text-3xl">{tDining("introTitle")}</h2>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            {tDining("introBody")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cuisine.map((c) => (
            <Reveal key={c.key}>
              <div className="rounded-3xl border border-foreground/10 bg-surface/20 p-6 hover:border-accent transition-colors">
                <h3 className="font-heading text-xl">{c.title[locale]}</h3>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{c.body[locale]}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/20 p-6 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(176,141,87,0.35),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(176,141,87,0.22),transparent_50%)]" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex items-start gap-5 max-w-[720px]">
                  <div className="relative h-16 w-16 rounded-full bg-background/20 border border-foreground/10 flex items-center justify-center flex-shrink-0 text-accent">
                    <Clock className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl leading-tight">
                      Hours
                      <span className="block">of Operation</span>
                    </h3>
                    <div className="mt-5 max-w-[340px]">
                      <div className="space-y-0 divide-y divide-foreground/10">
                        <div className="flex items-center justify-between gap-6 py-3">
                          <span className="text-sm font-semibold">Breakfast</span>
                          <span className="text-sm text-foreground/90">7:00 AM – 10:00 AM</span>
                        </div>
                        <div className="flex items-center justify-between gap-6 py-3">
                          <span className="text-sm font-semibold">Lunch</span>
                          <span className="text-sm text-foreground/90">12:00 PM – 3:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between gap-6 py-3">
                          <span className="text-sm font-semibold">Dinner</span>
                          <span className="text-sm text-foreground/90">6:00 PM – 10:30 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/${params.locale}/contact?purpose=restaurant`}
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
                      >
                        {tCommon("reserveTable")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

