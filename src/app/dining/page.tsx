import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import {Clock} from "lucide-react";
import Link from "next/link";

export default async function DiningPage() {
  const cuisine = [
    {
      key: "local",
      title: "Local Ethiopian",
      body: "Authentic Ethiopian cuisine featuring injera, flavorful wats, tibs, and kitfo — prepared with traditional spices by our experienced chefs."
    },
    {
      key: "international",
      title: "International Favorites",
      body: "A curated selection of international dishes — from hearty breakfasts to elegant dinners — served with attention to taste and presentation."
    },
    {
      key: "beverages",
      title: "Beverages",
      body: "Enjoy freshly brewed Ethiopian coffee, refreshing mocktails, juices, and a selection of soft drinks and bottled water."
    }
  ];

  return (
    <PageLayout>
      <Hero
        title="Dining"
        tagline="Savor the authentic flavors of Ethiopia alongside carefully prepared international dishes."
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
        primaryCta={{
          label: "Reservation Request",
          href: "/contact?purpose=restaurant"
        }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <Reveal>
          <h2 className="font-heading text-3xl">A restaurant you&apos;ll remember</h2>
          <p className="mt-4 text-foreground/90 leading-relaxed">
            Our on-site restaurant serves a delightful selection of traditional Ethiopian cuisine — including injera, wat, and kitfo — alongside continental breakfasts, fresh coffee, and refreshing beverages. Whether it&apos;s a quick breakfast before a meeting or a relaxed dinner, our kitchen is ready to impress.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cuisine.map((c) => (
            <Reveal key={c.key}>
              <div className="rounded-3xl border border-foreground/10 bg-surface/20 p-6 hover:border-accent transition-colors">
                <h3 className="font-heading text-xl">{c.title}</h3>
                <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{c.body}</p>
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
                      Hours of Operation
                    </h3>
                    <div className="mt-5 max-w-[340px]">
                      <div className="space-y-0 divide-y divide-foreground/10">
                        <div className="flex items-center justify-between gap-6 py-3">
                          <span className="text-sm font-semibold">Breakfast</span>
                          <span className="text-sm text-foreground/90">7:00 AM - 10:00 AM</span>
                        </div>
                        <div className="flex items-center justify-between gap-6 py-3">
                          <span className="text-sm font-semibold">Lunch</span>
                          <span className="text-sm text-foreground/90">12:00 PM - 3:00 PM</span>
                        </div>
                        <div className="flex items-center justify-between gap-6 py-3">
                          <span className="text-sm font-semibold">Dinner</span>
                          <span className="text-sm text-foreground/90">6:00 PM - 10:30 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact?purpose=restaurant"
                        className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition"
                      >
                        Reservation Request
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
