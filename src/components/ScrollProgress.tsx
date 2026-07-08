"use client";

import {motion, useScroll, useSpring} from "framer-motion";

export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {stiffness: 120, damping: 20, mass: 0.25});

  return (
    <motion.div
      style={{scaleX}}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-[linear-gradient(90deg,#b08d57,#e8cf9a,#b08d57)]"
      aria-hidden="true"
    />
  );
}

