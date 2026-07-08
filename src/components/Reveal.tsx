"use client";

import {motion, useReducedMotion} from "framer-motion";
import {type ReactNode} from "react";

export default function Reveal({
  children,
  className,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? undefined : {opacity: 0, y: 14}}
      whileInView={reduced ? undefined : {opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.22}}
      transition={{duration: 0.6, ease: "easeOut", delay: delayMs / 1000}}
    >
      {children}
    </motion.div>
  );
}

