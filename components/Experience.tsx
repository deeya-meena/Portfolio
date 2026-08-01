"use client";

import { motion } from "framer-motion";
import { experienceList, siteContent } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export function Experience() {
  const meta = siteContent.sectionMeta.experience;

  return (
    <section
      id="experience"
      className="py-32 relative bg-slate-50/40 dark:bg-slate-900/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-brand-500 via-indigo-500 to-slate-200 dark:to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experienceList.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-950 border-2 border-brand-500 shadow-md shadow-brand-500/40 z-20 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-brand-500"
                    />
                  </div>

                  {/* Card */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-card-premium p-7 sm:p-8 rounded-3xl relative group">
                      <div className="space-y-2 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[11px] font-mono font-bold px-3 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60 flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            <span>{exp.duration}</span>
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{exp.location}</span>
                          </span>
                        </div>

                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                          {exp.designation}
                        </h3>
                        <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
                          {exp.company}
                        </p>
                      </div>

                      <div className="pt-4 space-y-3">
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {exp.description}
                        </p>

                        <ul className="space-y-2 pt-1">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
