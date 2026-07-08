import {getTranslations} from "next-intl/server";

import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import AmenityCard from "@/components/AmenityCard";

import {amenities} from "@/data/amenities";
import Image from "next/image";
import Link from "next/link";

export default async function AmenitiesPage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";
  const tAmenities = await getTranslations("pages.amenities");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");

  const spotlight = amenities.find((a) => a.slug === "spa") ?? amenities[0];

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={tAmenities("hero.title")}
        tagline={tAmenities("hero.tagline")}
        imageSrc="/assets/images/amenities/amenity-main.jpg"
        primaryCta={{label: tCommon("bookNow"), href: `/${params.locale}/contact`}}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <h2 className="font-heading text-3xl">{tAmenities("introTitle")}</h2>
          <p className="mt-4 text-foreground/80 leading-relaxed">
            {tAmenities("introBody")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a) => (
            <Reveal key={a.slug}>
              <AmenityCard amenity={a} locale={locale} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/20 p-6 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(176,141,87,0.35),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(176,141,87,0.22),transparent_50%)]" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex items-start gap-5 max-w-[720px]">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border border-foreground/10 bg-background/20 flex-shrink-0">
                    <Image
                      src={spotlight.image}
                      alt={spotlight.title[locale]}
                      fill
                      sizes="64px"
                      className="object-cover"
                      quality={90}
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="font-heading text-3xl md:text-4xl leading-tight">
                      {spotlight.title[locale]}
                    </h3>
                    <p className="mt-4 text-foreground/85 leading-relaxed max-w-[520px]">
                      {spotlight.description[locale]}
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/${params.locale}/contact?purpose=amenities`}
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
                      >
                        {tCommon("submitRequest")}
                      </Link>
                      <Link
                        href={`/${params.locale}/offers`}
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-foreground/90 hover:bg-surface/40 transition"
                      >
                        {tNav("offers")}
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

