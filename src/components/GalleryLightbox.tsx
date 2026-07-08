"use client";

import Image from "next/image";
import {useMemo, useState} from "react";
import type {GalleryCategory, GalleryItem} from "@/data/gallery";

export default function GalleryLightbox({
  items,
  locale,
  labels,
}: {
  items: GalleryItem[];
  locale: "en" | "am" | "om";
  labels: Record<GalleryCategory, string>;
}) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | "all">("all");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === "all" ? items : items.filter((i) => i.category === activeCategory)),
    [activeCategory, items]
  );

  const showPrev = () => setOpenIdx((v) => (v === null ? 0 : (v - 1 + filtered.length) % filtered.length));
  const showNext = () => setOpenIdx((v) => (v === null ? 0 : (v + 1) % filtered.length));

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full px-4 py-2 text-sm border transition-colors ${
            activeCategory === "all"
              ? "bg-accent text-accent-foreground border-accent"
              : "border-foreground/15 bg-background/30 hover:bg-surface"
          }`}
        >
          All
        </button>
        {(Object.keys(labels) as GalleryCategory[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActiveCategory(c)}
            className={`rounded-full px-4 py-2 text-sm border transition-colors ${
              activeCategory === c ? "bg-accent text-accent-foreground border-accent" : "border-foreground/15 bg-background/30 hover:bg-surface"
            }`}
          >
            {labels[c]}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenIdx(idx)}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-foreground/10 bg-surface/10 text-left transition-all hover:border-accent hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
          >
            <Image
              src={item.image}
              alt={item.alt[locale]}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      {openIdx !== null && filtered[openIdx] && (
        <div className="fixed inset-0 z-[70] bg-black/90 p-4 md:p-8">
          <div className="h-full w-full flex items-center justify-center">
            <button onClick={() => setOpenIdx(null)} className="absolute top-6 right-6 rounded-full border border-white/30 text-white px-3 py-1">
              Close
            </button>
            <button onClick={showPrev} className="absolute left-6 rounded-full border border-white/30 text-white px-3 py-2">
              ‹
            </button>
            <div className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/30">
              <Image
                src={filtered[openIdx].image}
                alt={filtered[openIdx].alt[locale]}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <button onClick={showNext} className="absolute right-6 rounded-full border border-white/30 text-white px-3 py-2">
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}

