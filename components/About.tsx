"use client";

import { motion } from "framer-motion";
import { personalInfo, educationList, siteContent } from "@/data/portfolioData";
import {
  User,
  GraduationCap,
  Target,
  Heart,
  CheckCircle2,
  BookOpen,
  Award,
} from "lucide-react";

export function About() {
  const meta = siteContent.sectionMeta.about;
  const about = siteContent.about;

  return (
    <section id="about" className="py-32 relative bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80">
            <User className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Overview Card */}
            <div className="glass-card-premium p-7 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2.5">
                <User className="w-5 h-5 text-brand-500" />
                <span>{about.overviewTitle}</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutLeft.intro}
              </p>
            </div>

            {/* Objective & Passion */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="glass-card-premium p-6 rounded-3xl space-y-2">
                <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-500 flex items-center justify-center">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{about.objectiveTitle}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {personalInfo.aboutLeft.objective}
                </p>
              </div>

              <div className="glass-card-premium p-6 rounded-3xl space-y-2">
                <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-500 flex items-center justify-center">
                  <Heart className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{about.passionTitle}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {personalInfo.aboutLeft.passion}
                </p>
              </div>
            </div>

            {/* Core Interests */}
            <div className="glass-card-premium p-7 sm:p-8 rounded-3xl space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>{about.interestsTitle}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {personalInfo.aboutLeft.interests.map((interest) => (
                  <div
                    key={interest}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-brand-500 text-white flex items-center justify-center shadow-md shadow-brand-500/25">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {about.educationTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {about.educationSubtitle}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="glass-card-premium p-6 sm:p-7 rounded-3xl relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-slate-800/60">
                    <div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60">
                        {edu.duration}
                      </span>
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white mt-2">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60 text-xs font-extrabold w-fit">
                      <span>{edu.scoreLabel}:</span>
                      <span>{edu.score}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 pt-3">
                    {edu.institution}
                  </p>

                  {edu.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 italic">
                      {edu.details}
                    </p>
                  )}

                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
                      <BookOpen className="w-3.5 h-3.5 text-brand-500" />
                      <span>{about.courseworkLabel}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
