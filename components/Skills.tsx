"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories, siteContent } from "@/data/portfolioData";
import {
  Code,
  Cpu,
  Layers,
  Server,
  Brain,
  Wrench,
  Database,
  Cloud,
  Sparkles,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-3.5 h-3.5 text-brand-500" />,
  "Frameworks & Meta-Frameworks": <Cpu className="w-3.5 h-3.5 text-purple-500" />,
  "Frontend Development": <Layers className="w-3.5 h-3.5 text-cyan-500" />,
  "Backend & APIs": <Server className="w-3.5 h-3.5 text-emerald-500" />,
  "Machine Learning & AI": <Brain className="w-3.5 h-3.5 text-pink-500" />,
  "Developer Tools": <Wrench className="w-3.5 h-3.5 text-amber-500" />,
  Databases: <Database className="w-3.5 h-3.5 text-blue-500" />,
  "Cloud & Infrastructure": <Cloud className="w-3.5 h-3.5 text-indigo-500" />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const meta = siteContent.sectionMeta.skills;
  const { allLabel } = siteContent.skills;

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.category }))
  );

  const displayedSkills =
    activeCategory === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === "All"
                ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-105"
                : "bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800/80 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            {allLabel} ({allSkills.length})
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat.category
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 scale-105"
                  : "bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800/80 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {categoryIcons[cat.category]}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, idx) => {
              const floatClass = `floating-card-${(idx % 3) + 1}`;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.25, delay: idx * 0.015 }}
                  key={`${skill.name}-${idx}`}
                  className={`glass-card-premium p-5 rounded-3xl flex flex-col items-center justify-center text-center group relative overflow-hidden ${floatClass}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-900 text-brand-500 flex items-center justify-center mb-3 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Code className="w-5 h-5" />
                  </div>

                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {skill.name}
                  </h3>

                  {skill.proficiency && (
                    <div className="w-full bg-slate-200/80 dark:bg-slate-800/80 h-1 rounded-full mt-3 overflow-hidden">
                      <div
                        className="bg-brand-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
