"use client";

import { motion } from "framer-motion";
import { achievementList, siteContent } from "@/data/portfolioData";
import { CountUp } from "./effects/CountUp";
import { Trophy, Award, FileText, Code, Sparkles } from "lucide-react";

const achievementIcons: Record<string, React.ReactNode> = {
  trophy: <Trophy className="w-5 h-5 text-amber-500" />,
  award: <Award className="w-5 h-5 text-brand-500" />,
  "file-text": <FileText className="w-5 h-5 text-purple-500" />,
  code: <Code className="w-5 h-5 text-emerald-500" />,
};

export function Achievements() {
  const meta = siteContent.sectionMeta.achievements;

  return (
    <section
      id="achievements"
      className="py-32 relative bg-slate-50/40 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 border border-amber-200/80 dark:border-amber-800/80">
            <Trophy className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievementList.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-card-premium p-6 rounded-3xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform">
                    {achievementIcons[ach.icon] || <Sparkles className="w-5 h-5 text-brand-500" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60">
                    {ach.date}
                  </span>
                </div>

                {ach.counterValue && (
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-1">
                    <CountUp
                      value={ach.counterValue}
                      className="text-brand-500"
                    />
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {ach.counterSuffix}
                    </span>
                  </div>
                )}

                <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                  {ach.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
