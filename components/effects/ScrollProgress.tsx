"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number;

    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      setProgress(Math.min(scrolled, 1));
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-brand-500 via-indigo-500 to-purple-500 origin-left will-change-transform shadow-[0_0_12px_rgba(79,110,247,0.5)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
