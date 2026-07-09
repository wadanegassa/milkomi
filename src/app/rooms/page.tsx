import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import RoomCard from "@/components/RoomCard";

import {rooms} from "@/data/rooms";

import Link from "next/link";
import Image from "next/image";

export default async function RoomsPage() {
  return (
    <PageLayout>
      <Hero
        title="Rooms & Suites"
        tagline="Comfortably appointed rooms designed for restful sleep, productive work, and genuine relaxation."
        imageSrc="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1920&q=85"
        primaryCta={{label: "Book Now", href: "/contact"}}
        secondaryCta={{
          label: "Explore Gallery",
          href: "/gallery",
        }}
      />

      <section id="rooms-list" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-7">
              <h2 className="font-heading text-3xl">Explore your stay</h2>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                Each room at Mersimoy International Hotel is thoughtfully furnished with your comfort in mind. Choose from our range of rooms and suites — all featuring en-suite bathrooms, reliable Wi-Fi, and dedicated workspace areas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                >
                  Book Now
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-full border border-foreground/15 bg-background/30 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-surface"
                >
                  View Gallery
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 bg-surface/20">
                <Image
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85"
                  alt="Rooms placeholder"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {rooms.map((room) => (
            <Reveal key={room.slug}>
              <RoomCard room={room} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-foreground/10 bg-surface/25 p-6 md:p-8">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
              <h3 className="font-heading text-2xl">Ready to book?</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  Tell us your preferred dates and room type — we will confirm availability and send you the best rate.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
              >
                Book Now
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
