"use client";

import Image from "next/image";
import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Hero({
  title,
  tagline,
  imageSrc,
  images,
  primaryCta,
  secondaryCta,
}: {
  title: string;
  tagline: string;
  imageSrc?: string;
  images?: string[];
  primaryCta?: {label: string; href: string};
  secondaryCta?: {label: string; href: string};
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const slides = images?.length ? images : imageSrc ? [imageSrc] : [];
  const slideCount = slides.length;

  useEffect(() => {
    if (reduceMotion) return;
    if (slideCount <= 1) return;

    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % slideCount);
    }, 5500);

    return () => window.clearInterval(id);
  }, [reduceMotion, slideCount]);

  const activeSrc = slides[index] ?? slides[0];

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Offset content so the fixed navbar never covers it */}
      <div className="absolute inset-0 pt-20">
        <AnimatePresence mode="wait">
          {activeSrc && (
            <motion.div
              key={activeSrc}
              initial={{opacity: 0, scale: 1.02}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0}}
              transition={{duration: reduceMotion ? 0 : 0.6, ease: "easeOut"}}
              className="absolute inset-0"
            >
              <Image
                src={activeSrc}
                alt={`${title} hero image`}
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                style={{objectFit: "cover"}}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/5" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 h-full pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Mersimoy International Hotel
            </p>
            <h1 className="mt-4 font-heading text-4xl sm:text-6xl leading-[1.02] tracking-tight text-white">
              {title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/85 leading-relaxed">
              {tagline}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow hover:brightness-110"
                  >
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/20"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

