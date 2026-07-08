import {getTranslations} from "next-intl/server";

import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";

import {rooms} from "@/data/rooms";

import Link from "next/link";
import Image from "next/image";

export default async function RoomsPage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";
  const tRooms = await getTranslations("pages.rooms");
  const tCommon = await getTranslations("common");
  const heroTitle = tRooms("hero.title");
  const heroTagline = tRooms("hero.tagline");

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={heroTitle}
        tagline={heroTagline}
        imageSrc="/assets/images/rooms/standard-room.jpg"
        primaryCta={{label: tCommon("bookNow"), href: `/${params.locale}/contact`}}
        secondaryCta={{
          label: "Explore Gallery",
          href: `/${params.locale}/gallery`,
        }}
      />

      <section id="rooms-list" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <h2 className="font-heading text-3xl">{tRooms("introTitle")}</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                {tRooms("introBody")}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${params.locale}/contact`}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                >
                  {tCommon("bookNow")}
                </Link>
                <Link
                  href={`/${params.locale}/gallery`}
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-background/30 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-surface"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 bg-surface/20">
                <Image
                  src="/assets/images/rooms/deluxe-room.jpg"
                  alt="Rooms placeholder"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {rooms.map((room) => (
            <Reveal key={room.slug}>
              <RoomCard room={room} locale={locale} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-foreground/10 bg-surface/25 p-6 md:p-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-heading text-2xl">Ready to book?</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Placeholder copy: Tell us your dates and we’ll confirm availability promptly.
                </p>
              </div>
              <Link
                href={`/${params.locale}/contact`}
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                {tCommon("bookNow")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}

