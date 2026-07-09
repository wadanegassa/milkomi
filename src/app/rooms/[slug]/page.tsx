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
  params: {slug: string};
}) {
  const room = rooms.find((r) => r.slug === params.slug);
  if (!room) notFound();

  return (
    <PageLayout>
      <Hero
        title={room.name}
        tagline={room.description}
        images={room.galleryImages.slice(0, 2)}
        primaryCta={{
          label: "Book Now",
          href: `/contact?room=${encodeURIComponent(room.slug)}`,
        }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
            <div>
              <h2 className="font-heading text-3xl">Room details</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Rates start from ${room.startingPriceUSD} per night. Accommodates up to{" "}
                {room.capacity}.
              </p>
            </div>
            <Link
              href={`/contact?room=${encodeURIComponent(room.slug)}`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
            >
              Book Now
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {room.galleryImages.map((src, idx) => (
            <Reveal key={src}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10 bg-surface/20">
                <Image
                  src={src}
                  alt={`${room.name} image ${idx + 1}`}
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
                    {a}
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
                  Submit your booking request and our front desk team will confirm availability and share the best rate for your selected dates.
                </p>
                <div className="mt-6">
                  <Link
                    href={`/contact?room=${encodeURIComponent(room.slug)}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                  >
                    Submit Request
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
