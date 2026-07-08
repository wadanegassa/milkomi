import {getTranslations} from "next-intl/server";
import {notFound} from "next/navigation";

import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

import {rooms} from "@/data/rooms";
import Image from "next/image";
import Link from "next/link";

export default async function RoomDetailPage({
  params,
}: {
  params: {locale: string; slug: string};
}) {
  const locale = params.locale as "en" | "am" | "om";
  const tCommon = await getTranslations("common");

  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  return (
    <PageLayout locale={params.locale}>
      <Hero
        title={room.name[locale]}
        tagline={room.description[locale]}
        images={room.galleryImages.slice(0, 2)}
        primaryCta={{
          label: tCommon("bookNow"),
          href: `/${params.locale}/contact?room=${encodeURIComponent(room.slug)}`,
        }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <h2 className="font-heading text-3xl">Room details</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Placeholder copy: Starting from ${room.startingPriceUSD}/night. Capacity:{" "}
                {room.capacity}.
              </p>
            </div>
            <Link
              href={`/${params.locale}/contact?room=${encodeURIComponent(room.slug)}`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
            >
              {tCommon("bookNow")}
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {room.galleryImages.map((src, idx) => (
            <Reveal key={src}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10 bg-surface/20">
                <Image
                  src={src}
                  alt={`${room.name[locale]} image ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  quality={85}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-heading text-2xl">Amenities</h3>
              <ul className="mt-4 space-y-2">
                {room.allAmenities.map((a, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl border border-foreground/10 bg-surface/20 px-4 py-3 text-sm text-foreground/85"
                  >
                    {a[locale]}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-foreground/10 bg-surface/25 p-6">
                <h4 className="font-heading text-xl">Booking note</h4>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                  Placeholder copy: When you submit your request, we’ll confirm availability and share the best rate for your dates.
                </p>
                <div className="mt-6">
                  <Link
                    href={`/${params.locale}/contact?room=${encodeURIComponent(room.slug)}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                  >
                    {tCommon("submitRequest")}
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

