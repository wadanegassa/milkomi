import {getTranslations} from "next-intl/server";
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import OfferCard from "@/components/OfferCard";
import {offers} from "@/data/offers";

export default async function OffersPage({params}: {params: {locale: string}}) {
  const locale = params.locale as "en" | "am" | "om";
  const tOffers = await getTranslations("pages.offers");

  return (
    <PageLayout locale={params.locale}>
      <Hero title={tOffers("hero.title")} tagline={tOffers("hero.tagline")} imageSrc="/assets/images/offers/offers-main.jpg" />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <Reveal key={offer.slug}>
              <OfferCard offer={offer} locale={locale} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 rounded-2xl border border-foreground/10 bg-surface/25 p-5">
            <h3 className="font-heading text-xl">{tOffers("termsTitle")}</h3>
            <p className="mt-3 text-sm text-foreground/75">{tOffers("termsBody")}</p>
          </div>
        </Reveal>
      </section>
    </PageLayout>
  );
}

