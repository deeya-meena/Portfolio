"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/portfolioData";
import { Code2, Terminal, Sparkles, Brain, Zap } from "lucide-react";

export function DeveloperIllustration() {
  const { illustration } = siteContent;

  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/25 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-90 animate-pulse-slow" />

      {/* Main Glass Code Editor */}
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full glass-card-premium p-5 sm:p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800/90 shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800/60 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/90" />
            <div className="w-3 h-3 rounded-full bg-amber-400/90" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
          </div>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-900/90 px-3 py-1 rounded-full border border-slate-200/60 dark:border-slate-800/60">
            <Terminal className="w-3.5 h-3.5 text-brand-500" />
            <span>{illustration.terminalTitle}</span>
          </div>
        </div>

        {/* Visual Code Window */}
        <div className="relative min-h-[270px] bg-[#050811] rounded-2xl p-5 text-slate-200 font-mono text-xs shadow-inner flex flex-col justify-between overflow-hidden border border-slate-800/80">
          {/* Grid background inside editor */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.25rem_1.25rem] opacity-25" />

          {/* Code Lines from Data */}
          <div className="relative z-10 space-y-2.5">
            {illustration.codeLines.map((line, idx) => (
              <div key={idx} className="text-slate-300">
                <span className="text-slate-500 mr-2 select-none">{idx + 1}</span>
                {line}
              </div>
            ))}
          </div>

          {/* Editor Status Footer */}
          <div className="relative z-10 pt-3 flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-emerald-400 font-semibold">{illustration.statusLeft}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>{illustration.statusRight}</span>
            </div>
          </div>
        </div>

        {/* Floating Micro Badges from Data */}
        {illustration.floatingBadges[0] && (
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 z-20 glass-card-premium px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white border border-brand-500/40"
          >
            <div className="p-1 rounded-lg bg-brand-500/10 text-brand-500">
              <Brain className="w-4 h-4" />
            </div>
            <span>{illustration.floatingBadges[0].label}</span>
          </motion.div>
        )}

        {illustration.floatingBadges[1] && (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-3 -left-3 z-20 glass-card-premium px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-semibold text-slate-900 dark:text-white border border-indigo-500/40"
          >
            <div className="p-1 rounded-lg bg-indigo-500/10 text-indigo-500">
              <Code2 className="w-4 h-4" />
            </div>
            <span>{illustration.floatingBadges[1].label}</span>
          </motion.div>
        )}

        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-4 z-20 glass-card-premium p-2.5 rounded-2xl shadow-xl text-amber-400 border border-amber-400/40"
        >
          <Sparkles className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </div>
  );
}
