"use client";

import {motion, AnimatePresence, useReducedMotion} from "framer-motion";
import {useEffect, useMemo, useState} from "react";
import type {Testimonial} from "@/data/testimonials";

function Stars({rating}: {rating: number}) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.45 && rating - full < 0.95;
  const total = 5;

  return (
    <div className="flex items-center gap-1" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({length: total}).map((_, i) => {
        const isFull = i < full;
        const isHalf = i === full && hasHalf;
        return (
          <span
            key={i}
            className={[
              "inline-block h-2.5 w-2.5 rounded-sm",
              isFull || isHalf ? "bg-accent" : "bg-foreground/15"
            ].join(" ")}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

export default function TestimonialsCarousel({
  testimonials,
  locale,
}: {
  testimonials: Testimonial[];
  locale: "en" | "am" | "om";
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const active = testimonials[index] ?? testimonials[0];
  const canRotate = testimonials.length > 1;

  useEffect(() => {
    if (reduceMotion || !canRotate) return;
    const id = window.setInterval(() => setIndex((v) => (v + 1) % testimonials.length), 6500);
    return () => window.clearInterval(id);
  }, [reduceMotion, canRotate, testimonials.length]);

  const prev = () => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((v) => (v + 1) % testimonials.length);

  const dots = useMemo(() => testimonials.map((t) => t.id), [testimonials]);

  return (
    <div className="rounded-2xl border border-foreground/10 bg-surface/25 p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <Stars rating={active?.ratingOutOf5 ?? 5} />
          <p className="mt-4 text-sm text-foreground/80 line-clamp-5">
            {active.quote[locale]}
          </p>
          <p className="mt-4 text-sm font-semibold">
            {active.name}
            {active.location ? <span className="text-foreground/60"> · {active.location}</span> : null}
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-foreground/15 w-10 h-10 flex items-center justify-center hover:bg-surface"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-foreground/15 w-10 h-10 flex items-center justify-center hover:bg-surface"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>

      {/* Mobile controls */}
      {testimonials.length > 1 && (
        <div className="mt-4 flex items-center justify-between gap-3 sm:hidden">
          <button
            type="button"
            onClick={prev}
            className="rounded-full border border-foreground/15 px-4 py-2 text-sm hover:bg-surface"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full border border-foreground/15 px-4 py-2 text-sm hover:bg-surface"
          >
            Next
          </button>
        </div>
      )}

      <div className="mt-4 flex items-center gap-2">
        {dots.map((id, i) => {
          const isActive = i === index;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "h-2 rounded-full transition-colors",
                isActive ? "w-10 bg-accent" : "w-3 bg-foreground/20 hover:bg-foreground/30"
              ].join(" ")}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>

      {/* subtle motion: change background on index */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
            className="sr-only"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

