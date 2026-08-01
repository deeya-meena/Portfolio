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
  Terminal,
  Shield,
  Users,
  MessageSquare,
  Zap,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Programming Languages": <Code className="w-3.5 h-3.5 text-brand-500" />,
  "Technologies & Frameworks": <Cpu className="w-3.5 h-3.5 text-purple-500" />,
  "Cloud & Certifications": <Cloud className="w-3.5 h-3.5 text-indigo-500" />,
  "Developer Tools": <Wrench className="w-3.5 h-3.5 text-amber-500" />,
  "Soft Skills & Core Competencies": <Brain className="w-3.5 h-3.5 text-pink-500" />,
};

const skillLogos: Record<
  string,
  { src?: string; icon?: React.ReactNode; invertInDark?: boolean }
> = {
  cpp: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  c: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  javascript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  html: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  css: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  react: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  nextjs: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invertInDark: true,
  },
  nodejs: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  tailwind: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  typescript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  gcp: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  kubernetes: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  },
  git: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  github: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    invertInDark: true,
  },
  vscode: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },

  // Custom tool fallbacks
  cloud: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  },
  ai: { icon: <Brain className="w-6 h-6 text-purple-500" /> },
  data: { icon: <Database className="w-6 h-6 text-blue-500" /> },
  shield: { icon: <Shield className="w-6 h-6 text-emerald-500" /> },
  terminal: { icon: <Terminal className="w-6 h-6 text-cyan-500" /> },

  // Soft skills
  brain: { icon: <Brain className="w-6 h-6 text-pink-500" /> },
  users: { icon: <Users className="w-6 h-6 text-indigo-500" /> },
  message: { icon: <MessageSquare className="w-6 h-6 text-amber-500" /> },
  zap: { icon: <Zap className="w-6 h-6 text-yellow-500" /> },
};

function SkillLogo({ skill }: { skill: { name: string; icon: string } }) {
  const [imgError, setImgError] = useState(false);

  const iconKey = skill.icon ? skill.icon.toLowerCase() : skill.name.toLowerCase();
  const matched = skillLogos[iconKey] || skillLogos[skill.name.toLowerCase()];

  if (matched?.icon && !matched.src) {
    return <div className="group-hover:scale-110 transition-transform duration-300">{matched.icon}</div>;
  }

  const srcUrl =
    matched?.src ||
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconKey}/${iconKey}-original.svg`;

  if (!imgError) {
    return (
      <img
        src={srcUrl}
        alt={skill.name}
        onError={() => setImgError(true)}
        className={`w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300 ${
          matched?.invertInDark ? "dark:invert" : ""
        }`}
      />
    );
  }

  return <Code className="w-6 h-6 text-brand-500 group-hover:scale-110 transition-transform duration-300" />;
}

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
              {categoryIcons[cat.category] || <Code className="w-3.5 h-3.5 text-brand-500" />}
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
                  <div className="w-12 h-12 rounded-2xl bg-slate-100/80 dark:bg-slate-900/80 flex items-center justify-center mb-3 group-hover:bg-brand-500/10 dark:group-hover:bg-brand-500/20 group-hover:border-brand-500/30 border border-transparent transition-all duration-300 shadow-sm">
                    <SkillLogo skill={skill} />
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

