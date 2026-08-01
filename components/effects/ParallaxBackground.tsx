"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxBackground({
  children,
  speed = 0.15,
  className = "",
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-speed * 100}px`, `${speed * 100}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative z-0">
        {children}
      </motion.div>
    </div>
  );
}
