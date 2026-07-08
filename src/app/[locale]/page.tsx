import {getTranslations} from "next-intl/server";

import Hero from "@/components/Hero";
import PageLayout from "@/components/PageLayout";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";
import AmenityCard from "@/components/AmenityCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import OfferCard from "@/components/OfferCard";

import {rooms} from "@/data/rooms";
import {amenities} from "@/data/amenities";
import {testimonials} from "@/data/testimonials";
import {offers} from "@/data/offers";
import {galleryItems} from "@/data/gallery";

import Image from "next/image";
import Link from "next/link";

export default async function HomePage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";

  // Server-side translations.
  const tHome = await getTranslations("pages.home");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("nav");
  const heroTitle = tHome("hero.title");
  const heroTagline = tHome("hero.tagline");

  const featuredRooms = rooms.slice(0, 3);
  const highlights = amenities.slice(0, 8);
  const offersTeaser = offers.slice(0, 3);
  const testimonialItems = testimonials.slice(0, 3);
  const galleryPreview = galleryItems.slice(0, 8);

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={heroTitle}
        tagline={heroTagline}
        images={[
          "/assets/images/hero/home-hero.jpg",
          "/assets/images/hero/secondary-hero.jpg"
        ]}
        primaryCta={{label: tCommon("bookNow"), href: `/${params.locale}/contact`}}
        secondaryCta={{
          label: tNav("rooms"),
          href: `/${params.locale}/rooms`,
        }}
      />

      <div className="bg-background">
        {/* Welcome */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <h2 className="font-heading text-3xl">{tHome("welcome.title")}</h2>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  {tHome("welcome.body")}
                </p>
                <div className="mt-8">
                  <Link
                    href={`/${params.locale}/about`}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                  >
                    {tCommon("learnMore")}
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 bg-surface/20">
                  <Image
                    src="/assets/images/about/about-main.jpg"
                    alt="Milkomi interior placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/75 via-background/20 to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Featured Rooms */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
          <Reveal className="block">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">{tHome("featuredRooms.title")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Placeholder copy: Three room categories selected for first-time visitors.
                </p>
              </div>
              <Link
                href={`/${params.locale}/rooms`}
                className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold hover:bg-surface"
              >
                {tCommon("viewAllRooms")}
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredRooms.map((room) => (
              <Reveal key={room.slug}>
                <RoomCard room={room} locale={locale} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Amenities highlights */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">{tHome("amenities.title")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Placeholder copy: Explore the services that make Milkomi feel effortless.
                </p>
              </div>
              <Link
                href={`/${params.locale}/amenities`}
                className="rounded-full bg-background/30 border border-foreground/15 px-5 py-2.5 text-sm font-semibold hover:bg-surface"
              >
                {tNav("amenities")}
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((amenity) => (
              <Reveal key={amenity.slug}>
                <AmenityCard amenity={amenity} locale={locale} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Events teaser + Dining teaser */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/20">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/assets/images/events/events-main.jpg"
                    alt="Events and conference placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-2xl">{tHome("events.title")}</h2>
                  <p className="mt-3 text-sm text-foreground/75">
                    Placeholder copy: Weddings, corporate meetings, and private gatherings with elegant setups.
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/${params.locale}/events`}
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                    >
                      {tCommon("requestQuote")}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/20">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/assets/images/dining/dining-main.jpg"
                    alt="Dining placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-2xl">{tHome("dining.title")}</h2>
                  <p className="mt-3 text-sm text-foreground/75">
                    Placeholder copy: Ethiopian specialties, international favorites, and curated beverages.
                  </p>
                  <div className="mt-5">
                    <Link
                      href={`/${params.locale}/dining`}
                      className="inline-flex items-center justify-center rounded-full bg-background/30 border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-surface"
                    >
                      {tNav("dining")}
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">{tHome("testimonials.title")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Placeholder copy: Real impressions from recent guests.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-8">
            <TestimonialsCarousel testimonials={testimonialItems} locale={locale} />
          </div>
        </section>

        {/* Gallery preview */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">{tHome("gallery.title")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Placeholder copy: A quick look at Milkomi’s atmosphere.
                </p>
              </div>
              <Link
                href={`/${params.locale}/gallery`}
                className="rounded-full border border-foreground/15 bg-background/60 px-5 py-2.5 text-sm font-semibold hover:bg-surface transition-colors"
              >
                {tNav("gallery")}
              </Link>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPreview.map((item, idx) => (
              <Reveal key={item.id}>
                <Link
                  href={`/${params.locale}/gallery`}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/15 bg-surface/15 hover:border-accent transition-colors shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                    loading={idx < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Offers */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">{tHome("offers.title")}</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Placeholder copy: Choose a package and message us to confirm.
                </p>
              </div>
              <Link
                href={`/${params.locale}/offers`}
                className="rounded-full bg-background/30 border border-foreground/15 px-5 py-2.5 text-sm font-semibold hover:bg-surface"
              >
                {tNav("offers")}
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {offersTeaser.map((offer) => (
              <Reveal key={offer.slug}>
                <OfferCard offer={offer} locale={locale} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/25">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(176,141,87,0.35),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(176,141,87,0.25),transparent_50%)]" />
              <div className="relative p-8 md:p-10 grid gap-6 md:grid-cols-12 items-center">
                <div className="md:col-span-7">
                  <h2 className="font-heading text-3xl">{tHome("finalCta.title")}</h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    {tHome("finalCta.body")}
                  </p>
                </div>
                <div className="md:col-span-5 md:flex md:justify-end">
                  <Link
                    href={`/${params.locale}/contact`}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow hover:brightness-110"
                  >
                    {tCommon("bookNow")}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </PageLayout>
  );
}

