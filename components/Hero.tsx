"use client";

import { motion } from "framer-motion";
import { personalInfo, siteContent } from "@/data/portfolioData";
import { TypewriterEffect } from "./TypewriterEffect";
import { DeveloperIllustration } from "./DeveloperIllustration";
import {
  FileDown,
  ArrowRight,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Mail,
} from "lucide-react";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-36 pb-24 flex items-center justify-center overflow-hidden bg-grid-mesh"
    >
      {/* Background Animated Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-brand-500/15 rounded-full blur-[100px] animate-blob-spin pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] animate-blob-spin [animation-delay:3s] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] animate-blob-spin [animation-delay:6s] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-center lg:text-left"
          >
            {/* Status Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 border border-brand-200/80 dark:border-brand-800/80 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-mono">{hero.statusBadge}</span>
            </motion.div>

            {/* Main Greeting & Typography */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {hero.greeting}{" "}
                <span className="text-gradient-primary">
                  {personalInfo.name}
                </span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>{hero.preTypewriter}</span>
                <TypewriterEffect words={personalInfo.titles} />
              </div>
            </div>

            {/* Paragraph Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalInfo.resumeUrl}
                className="btn-vercel-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white shadow-xl tracking-wide"
              >
                <FileDown className="w-4 h-4" />
                <span>{hero.resumeButtonLabel}</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm transition-all"
              >
                <span>{hero.projectsButtonLabel}</span>
                <ArrowRight className="w-4 h-4 text-brand-500" />
              </a>
            </div>

            {/* Social Media Links Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {hero.socialLabel}
              </span>
              <div className="flex items-center gap-2.5">
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-brand-500 dark:hover:text-brand-400 hover:border-brand-500/50 transition-all shadow-sm">
                  <Github className="w-4 h-4" />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-amber-500 hover:border-amber-500/50 transition-all shadow-sm">
                  <Code2 className="w-4 h-4" />
                </a>
                <a href={personalInfo.socials.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces Profile" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-cyan-500 hover:border-cyan-500/50 transition-all shadow-sm">
                  <Terminal className="w-4 h-4" />
                </a>
                <a href={personalInfo.socials.email} aria-label="Email Me" className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 hover:text-rose-500 hover:border-rose-500/50 transition-all shadow-sm">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column Developer Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <DeveloperIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
