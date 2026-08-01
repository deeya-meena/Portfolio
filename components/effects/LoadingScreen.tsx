"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerating progress curve
        const increment = prev < 60 ? 4 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    // Complete loading after window.onload or 2.5s max
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setLoading(false), 400);
    };

    if (document.readyState === "complete") {
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => setLoading(false), 400);
      }, 800);
    } else {
      window.addEventListener("load", handleLoad);
    }

    const maxTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 400);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(maxTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#080c14]"
        >
          {/* Logo Pulse */}
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-extrabold text-2xl shadow-2xl shadow-brand-500/20">
              {personalInfo.logoInitial}
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8"
          >
            {personalInfo.logoText}
            <span className="text-brand-500 font-black">.</span>
          </motion.p>

          {/* Progress Bar */}
          <div className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          {/* Progress Percentage */}
          <p className="mt-3 text-xs font-mono font-semibold text-slate-400">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
