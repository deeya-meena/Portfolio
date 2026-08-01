"use client";

import { motion } from "framer-motion";
import { codingProfiles, siteContent } from "@/data/portfolioData";
import { CountUp } from "./effects/CountUp";
import { MagneticButton } from "./effects/MagneticButton";
import {
  Github,
  Linkedin,
  Code,
  Terminal,
  Award,
  Cpu,
  BookOpen,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const profileIcons: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5 text-emerald-500" />,
  linkedin: <Linkedin className="w-5 h-5 text-blue-500" />,
  code: <Code className="w-5 h-5 text-amber-500" />,
  terminal: <Terminal className="w-5 h-5 text-cyan-500" />,
  award: <Award className="w-5 h-5 text-rose-500" />,
  cpu: <Cpu className="w-5 h-5 text-teal-500" />,
  "book-open": <BookOpen className="w-5 h-5 text-green-500" />,
};

export function CodingProfiles() {
  const meta = siteContent.sectionMeta.profiles;
  const content = siteContent.profiles;

  return (
    <section id="profiles" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80">
            <Terminal className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {codingProfiles.map((profile, idx) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="glass-card-premium p-6 rounded-3xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-900 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform">
                    {profileIcons[profile.iconName] || <Sparkles className="w-5 h-5 text-brand-500" />}
                  </div>
                  {profile.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60">
                      {profile.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {profile.platform}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-slate-400">
                    {profile.username}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs">
                  {profile.rating && (
                    <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                      <span className="text-slate-400">{content.ratingLabel}</span>
                      <span className="font-bold">{profile.rating}</span>
                    </div>
                  )}
                  {profile.ranking && (
                    <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                      <span className="text-slate-400">{content.rankLabel}</span>
                      <span className="font-bold">{profile.ranking}</span>
                    </div>
                  )}
                  {profile.solvedCount && (
                    <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                      <span className="text-slate-400">{content.solvedLabel}</span>
                      <span className="font-bold text-brand-500">
                        <CountUp value={profile.solvedCount} suffix={content.solvedSuffix} />
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-5">
                <MagneticButton className="w-full">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-900 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all shadow-sm"
                  >
                    <span>{content.visitLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
