import Image from "next/image";
import Link from "next/link";

import type {RoomType} from "@/data/rooms";
import AmenityIcon from "@/components/AmenityIcon";

export default function RoomCard({
  room,
  locale,
}: {
  room: RoomType;
  locale: "en" | "am" | "om";
}) {
  return (
    <article className="group rounded-2xl border border-foreground/10 bg-surface/20 overflow-hidden hover:border-accent transition-colors">
      <div className="relative h-44">
        <Image
          src={room.coverImage}
          alt={room.name[locale]}
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
          <div>
            <h3 className="font-heading text-lg text-foreground">{room.name[locale]}</h3>
            <p className="mt-2 text-sm text-foreground/85">
              {room.description[locale]}
            </p>
          </div>
          <p className="text-sm font-semibold text-accent shrink-0">
            ${room.startingPriceUSD}/night
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {room.keyAmenities.map((a, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/25 px-3 py-1 text-xs text-foreground/90"
            >
              <AmenityIcon iconKey={a.iconKey} className="h-4 w-4" />
              {a.text[locale]}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xs text-foreground/60">
            Capacity: {room.capacity} {room.capacity === 1 ? "guest" : "guests"}
          </p>
          <Link
            href={`/${locale}/contact?room=${encodeURIComponent(room.slug)}`}
            className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-110"
          >
            Book This Room
          </Link>
        </div>
      </div>
    </article>
  );
}

