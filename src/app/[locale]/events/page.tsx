import {getTranslations} from "next-intl/server";

import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import EventsQuoteForm from "@/components/EventsQuoteForm";

import Image from "next/image";
import Link from "next/link";

export default async function EventsPage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";
  const tEvents = await getTranslations("pages.events");
  const tCommon = await getTranslations("common");

  const useCases = [
    {
      title: {
        en: "Weddings",
        am: "ሠርግ",
        om: "Himaawwan Aadaa"
      },
      body: {
        en: "Placeholder copy: Elegant ceremony flow and attentive coordination.",
        am: "ቅድመ-ሙከራ ጽሑፍ፡ ውብ የሥነ ሥርዓት ክንውን እና በጥንቃቄ መተዳደር።",
        om: "Placeholder copy: Akkamitti kabaja gaggeessu fi deggarsa."
      },
      image: "/assets/images/events/events-main.jpg"
    },
    {
      title: {
        en: "Corporate Events",
        am: "የኮርፖሬት ዝግጅቶች",
        om: "Sagantaa Koorpooreetii"
      },
      body: {
        en: "Placeholder copy: Boardroom to banquet setups with professional timing.",
        am: "ቅድመ-ሙከራ ጽሑፍ፡ ከቦርድሩም እስከ ባንኬት—በሙያዊ ሰዓት ይዘጋጃል።",
        om: "Placeholder copy: Qophii bakka marii fi banquet irratti."
      },
      image: "/assets/images/events/events-main.jpg"
    },
    {
      title: {
        en: "Private Parties",
        am: "ግል ዝግጅቶች",
        om: "Sagantaa Hafuuraa Dhuunfaa"
      },
      body: {
        en: "Placeholder copy: Tailored ambiance designed for your guest experience.",
        am: "ቅድመ-ሙከራ ጽሑፍ፡ በእንግዶችዎ ልምድ ላይ ተመስርቶ የተለየ አካባቢ።",
        om: "Placeholder copy: Akkaataa naannoo fi sochii daawwattootaa."
      },
      image: "/assets/images/events/events-main.jpg"
    }
  ];

  const setupImages = [
    "/assets/images/events/events-main.jpg",
    "/assets/images/hero/home-hero.jpg",
    "/assets/images/hero/secondary-hero.jpg",
    "/assets/images/rooms/standard-room.jpg",
    "/assets/images/rooms/deluxe-room.jpg",
    "/assets/images/about/about-main.jpg"
  ];

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={tEvents("hero.title")}
        tagline={tEvents("hero.tagline")}
        imageSrc="/assets/images/events/events-main.jpg"
        primaryCta={{label: tCommon("requestQuote"), href: `#quote-form`}}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="md:grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="font-heading text-3xl">{tEvents("requestTitle")}</h2>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                {tEvents("introBody")}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 bg-surface/20">
                <Image
                  src="/assets/images/events/events-main.jpg"
                  alt="Events hall placeholder"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/15 to-transparent" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {useCases.map((u) => (
            <Reveal key={u.title.en}>
              <div className="rounded-3xl border border-foreground/10 bg-surface/20 overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={u.image}
                    alt={u.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              <div className="p-6">
                  <h3 className="font-heading text-xl">{u.title[locale]}</h3>
                  <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{u.body[locale]}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div id="quote-form" className="mt-14">
          <Reveal>
            <EventsQuoteForm />
          </Reveal>
        </div>

        <section className="mt-14">
          <Reveal>
            <h2 className="font-heading text-2xl">Setup Gallery</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {setupImages.map((src, i) => (
              <Reveal key={src}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10 bg-surface/20">
                  <Image
                    src={src}
                    alt={`Event setup image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-sm text-foreground/70">
              Placeholder copy: Need a personalized proposal? Share your event details above.
            </p>
            <Link
              href={`/${params.locale}/contact?purpose=events`}
              className="inline-flex items-center justify-center rounded-full bg-background/30 border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-surface"
            >
              {tCommon("submitRequest")}
            </Link>
          </div>
        </section>
      </section>
    </PageLayout>
  );
}

