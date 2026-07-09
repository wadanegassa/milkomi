import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import OfferCard from "@/components/OfferCard";
import {offers} from "@/data/offers";

export default async function OffersPage() {
  return (
    <PageLayout>
      <Hero title="Offers & Packages" tagline="Exclusive rates and curated packages designed to make your stay at Mersimoy International Hotel even more memorable." imageSrc="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=85" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <Reveal key={offer.slug}>
              <OfferCard offer={offer} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 rounded-2xl border border-foreground/10 bg-surface/25 p-5">
            <h3 className="font-heading text-xl">Terms & conditions</h3>
            <p className="mt-3 text-sm text-foreground/75">Availability is subject to room inventory. Prices shown are starting rates and may vary during peak seasons. Advance booking is recommended.</p>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}
