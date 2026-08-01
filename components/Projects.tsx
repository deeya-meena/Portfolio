"use client";

import { motion } from "framer-motion";
import { projectList, siteContent } from "@/data/portfolioData";
import { TiltCard } from "./effects/TiltCard";
import { MagneticButton } from "./effects/MagneticButton";
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export function Projects() {
  const meta = siteContent.sectionMeta.projects;
  const content = siteContent.projects;

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="glass-card-premium no-lift rounded-3xl overflow-hidden flex flex-col justify-between h-full group">
                  <div>
                    {/* Visual Header Banner */}
                    <div className="relative min-h-[190px] bg-[#050811] p-6 flex flex-col justify-between overflow-hidden border-b border-slate-800/80">
                      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30 flex items-center gap-1.5 backdrop-blur-md">
                          <Sparkles className="w-3 h-3" />
                          <span>{project.featured ? content.featuredLabel : content.openSourceLabel}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View Source Code" className="p-2 rounded-xl bg-slate-900/90 text-slate-300 hover:text-white hover:bg-brand-500 transition-all border border-slate-800">
                            <Github className="w-4 h-4" />
                          </a>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo Link" className="p-2 rounded-xl bg-brand-500 text-white hover:bg-brand-600 transition-all shadow-md shadow-brand-500/30">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      <div className="relative z-10 pt-6">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-brand-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 sm:p-7 space-y-5">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-2 gap-3 pt-1">
                          {project.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2.5">
                              <div className="p-1.5 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-500">
                                <TrendingUp className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</p>
                                <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">{metric.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="space-y-2 pt-1">
                        <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          {content.highlightsLabel}
                        </h4>
                        <ul className="space-y-1.5">
                          {project.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 sm:p-7 pt-0 space-y-4">
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-300 border border-brand-200/50 dark:border-brand-800/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                        <Github className="w-3.5 h-3.5" />
                        <span>{content.sourceLabel}</span>
                      </a>
                      <MagneticButton>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-vercel-primary w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>{content.demoLabel}</span>
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
