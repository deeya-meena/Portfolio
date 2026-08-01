"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTopProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let rafId: number;

    const update = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setProgress(Math.min(scrolled, 1));
      setVisible(window.scrollY > 400);
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle math
  const size = 48;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-8 z-50 group"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Background circle */}
            <svg
              className="absolute inset-0 -rotate-90"
              width={size}
              height={size}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-slate-200 dark:text-slate-800"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="text-brand-500 transition-all duration-150"
              />
            </svg>

            {/* Inner button */}
            <div className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center shadow-lg group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-200">
              <ArrowUp className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
