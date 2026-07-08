import Image from "next/image";
import Link from "next/link";

import type {Offer} from "@/data/offers";

export default function OfferCard({
  offer,
  locale,
}: {
  offer: Offer;
  locale: "en" | "am" | "om";
}) {
  return (
    <article className="rounded-2xl border border-foreground/10 bg-surface/20 overflow-hidden hover:border-accent transition-colors">
      <div className="relative h-44">
        <Image
          src={offer.image}
          alt={offer.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          quality={80}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-lg text-foreground">{offer.title[locale]}</h3>
          <p className="text-sm font-semibold text-accent shrink-0">
            from ${offer.priceFromUSD}
          </p>
        </div>
        <p className="mt-3 text-sm text-foreground/85 leading-relaxed">
          {offer.description[locale]}
        </p>

        <div className="mt-5">
          <Link
            href={`/${locale}/contact?purpose=offer&offer=${encodeURIComponent(offer.slug)}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:brightness-110 w-full"
          >
            Claim Offer
          </Link>
        </div>
      </div>
    </article>
  );
}

