import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import EventsQuoteForm from "@/components/EventsQuoteForm";

import Image from "next/image";
import Link from "next/link";

export default async function EventsPage() {
  const useCases = [
    {
      title: "Weddings",
      body: "A beautifully coordinated wedding experience with elegant decor, attentive service, and a celebration you and your guests will cherish.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=85"
    },
    {
      title: "Corporate Events",
      body: "Fully equipped conference facilities with flexible seating arrangements, audio-visual support, and professional coordination for your business meetings.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=85"
    },
    {
      title: "Private Parties",
      body: "Intimate and personalized — whether it&apos;s a birthday, anniversary, or reunion, we tailor the ambiance and menu to suit your celebration.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=85"
    }
  ];

  const setupImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=85",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=85",
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=85",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=85",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=85"
  ];

  return (
    <PageLayout>
      <Hero
        title="Events & Conferences"
        tagline="From intimate gatherings to corporate conferences, our versatile spaces are ready to host your next occasion."
        imageSrc="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1920&q=85"
        primaryCta={{label: "Request a Quote", href: "#quote-form"}}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <div className="md:grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="font-heading text-3xl">Request a Quote</h2>
              <p className="mt-4 text-foreground/90 leading-relaxed">
                Planning a wedding, business meeting, or private celebration? Share your event details and our team will respond promptly with a tailored proposal that fits your needs and budget.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-foreground/10 bg-surface/20">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=85"
                  alt="Milkomi Hotel events hall"
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
            <Reveal key={u.title}>
              <div className="rounded-3xl border border-foreground/10 bg-surface/20 overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={u.image}
                    alt={u.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              <div className="p-6">
                  <h3 className="font-heading text-xl">{u.title}</h3>
                  <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{u.body}</p>
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
                Ready to plan your event? Fill out the form above and our events team will craft a personalized proposal for you.
              </p>
            <Link
              href="/contact?purpose=events"
              className="inline-flex items-center justify-center rounded-full bg-background/30 border border-foreground/15 px-6 py-3 text-sm font-semibold text-foreground/90 hover:bg-surface"
            >
              Submit Request
            </Link>
          </div>
        </section>
      </section>
    </PageLayout>
  );
}
