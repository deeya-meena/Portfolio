"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
}

export function TypewriterEffect({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <span className="inline-block relative min-w-[280px] text-brand-500 dark:text-brand-400 font-extrabold">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span className="animate-pulse inline-block ml-1 text-brand-500">|</span>
    </span>
  );
}
