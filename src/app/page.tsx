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

const categoryLabels: Record<string, string> = {
  exterior: "Exterior",
  rooms: "Rooms",
  restaurant: "Restaurant",
  events: "Events",
  amenities: "Amenities",
};

export default async function HomePage() {
  const featuredRooms = rooms.slice(0, 3);
  const highlights = amenities.slice(0, 8);
  const offersTeaser = offers.slice(0, 3);
  const testimonialItems = testimonials.slice(0, 3);
  const galleryPreview = galleryItems.slice(0, 8);

  return (
    <PageLayout>
      <Hero
        title="Mersimoy International Hotel"
        tagline="Experience the warmth of Oromia at Nekemte's finest hotel — where modern comfort meets genuine Ethiopian hospitality."
        images={[
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85",
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85"
        ]}
        primaryCta={{label: "Book Now", href: "/contact"}}
        secondaryCta={{
          label: "Rooms & Suites",
          href: "/rooms",
        }}
      />

      <div className="bg-background">
        {/* Welcome */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <div className="grid gap-10 md:grid-cols-12 items-center">
              <div className="md:col-span-7">
                <h2 className="font-heading text-3xl">Welcome to Mersimoy International Hotel</h2>
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  Nestled in the heart of Nekemte, East Welega, Mersimoy International Hotel offers a perfect blend of contemporary elegance and authentic Oromo hospitality. Whether you are visiting for business or leisure, every detail of your stay is crafted to make you feel at home.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 bg-surface/20">
                  <Image
                    src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=85"
                    alt="Mersimoy International Hotel interior"
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
                <h2 className="font-heading text-3xl">Featured Rooms</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Choose from our range of comfortable rooms and suites, each designed for a restful stay in Nekemte.
                </p>
              </div>
              <Link
                href="/rooms"
                className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-semibold hover:bg-surface"
              >
                View All Rooms
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredRooms.map((room) => (
              <Reveal key={room.slug}>
                <RoomCard room={room} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Amenities highlights */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">Amenities & Facilities</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  From high-speed Wi-Fi to on-site dining — every service is designed for your comfort.
                </p>
              </div>
              <Link
                href="/amenities"
                className="rounded-full bg-background/30 border border-foreground/15 px-5 py-2.5 text-sm font-semibold hover:bg-surface"
              >
                Amenities
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((amenity) => (
              <Reveal key={amenity.slug}>
                <AmenityCard amenity={amenity} />
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
                    src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=85"
                    alt="Mersimoy International Hotel events and conference hall"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-2xl">Events & Conferences</h2>
                  <p className="mt-3 text-sm text-foreground/75">
                    Weddings, corporate meetings, and private celebrations — our event spaces are ready to host your special occasion.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/events"
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110"
                    >
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-surface/20">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                    alt="Mersimoy International Hotel restaurant and dining"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-2xl">Dining Experience</h2>
                  <p className="mt-3 text-sm text-foreground/75">
                    Enjoy authentic Ethiopian dishes, international favorites, and freshly brewed coffee in our elegant restaurant.
                  </p>
                  <div className="mt-5">
                    <Link
                      href="/dining"
                      className="inline-flex items-center justify-center rounded-full bg-background/30 border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-surface"
                    >
                      Dining
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
                <h2 className="font-heading text-3xl">Guest Reviews</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Hear what our guests say about their experience at Mersimoy International Hotel.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-8">
            <TestimonialsCarousel testimonials={testimonialItems} />
          </div>
        </section>

        {/* Gallery preview */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">Gallery Preview</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Browse photos of our rooms, restaurant, event spaces, and the welcoming ambiance of Mersimoy International Hotel.
                </p>
              </div>
              <Link
                href="/gallery"
                className="rounded-full border border-foreground/15 bg-background/60 px-5 py-2.5 text-sm font-semibold hover:bg-surface transition-colors"
              >
                Gallery
              </Link>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryPreview.map((item, idx) => {
              const categoryLabel = categoryLabels[item.category] ?? item.category;
              return (
                <Reveal key={item.id}>
                  <Link
                    href="/gallery"
                    className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/15 bg-surface/15 hover:border-accent transition-colors shadow-sm block"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={90}
                      loading={idx < 4 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="inline-block rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground backdrop-blur">
                        {categoryLabel}
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Offers */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl">Offers & Packages</h2>
                <p className="mt-3 text-sm text-foreground/70">
                  Find the perfect package for your stay — message us to book and confirm availability.
                </p>
              </div>
              <Link
                href="/offers"
                className="rounded-full bg-background/30 border border-foreground/15 px-5 py-2.5 text-sm font-semibold hover:bg-surface"
              >
                Offers & Packages
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {offersTeaser.map((offer) => (
              <Reveal key={offer.slug}>
                <OfferCard offer={offer} />
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
                  <h2 className="font-heading text-3xl">Ready to experience Mersimoy International Hotel?</h2>
                  <p className="mt-4 text-foreground/80 leading-relaxed">
                    Contact us today to reserve your room or plan your event. We look forward to welcoming you to Nekemte.
                  </p>
                </div>
                <div className="md:col-span-5 md:flex md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow hover:brightness-110"
                  >
                    Book Now
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
