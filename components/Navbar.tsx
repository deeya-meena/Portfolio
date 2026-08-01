"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo, siteContent } from "@/data/portfolioData";
import { MagneticButton } from "./effects/MagneticButton";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const { navbar } = siteContent;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform duration-300">
            {personalInfo.logoInitial}
          </div>
          <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
            {personalInfo.logoText}<span className="text-brand-500 font-black">.</span>
          </span>
        </a>

        {/* Desktop Nav Pill with Animated Underline */}
        <nav className="hidden lg:flex items-center gap-1 glass-nav-pill px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navActiveUnderline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <MagneticButton>
            <a
              href={navbar.ctaHref}
              className="btn-vercel-primary inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white tracking-wide shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{navbar.ctaLabel}</span>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-brand-500 focus:outline-none"
            aria-label={navbar.mobileMenuAriaLabel}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 max-w-6xl mx-auto glass-card-premium rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800/80"
          >
            <nav className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      isActive
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
