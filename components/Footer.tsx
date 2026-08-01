"use client";

import { navItems, personalInfo, siteContent } from "@/data/portfolioData";
import { MagneticButton } from "./effects/MagneticButton";
import { ArrowUp, Github, Linkedin, Code, Terminal, Mail } from "lucide-react";

export function Footer() {
  const { footer } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050811] text-white pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Logo & Intro */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-white text-slate-900 flex items-center justify-center font-extrabold text-xs shadow-md">
                {personalInfo.logoInitial}
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {personalInfo.logoText}<span className="text-brand-500 font-black">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {footer.bio}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-medium text-slate-400">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-brand-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back To Top */}
          <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start md:items-end justify-between gap-4">
            <div className="flex items-center gap-2">
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-xl bg-slate-900 hover:bg-brand-500 hover:text-white transition-colors border border-slate-800">
                <Github className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors border border-slate-800">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="p-2 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-white transition-colors border border-slate-800">
                <Code className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.socials.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces" className="p-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-white transition-colors border border-slate-800">
                <Terminal className="w-3.5 h-3.5" />
              </a>
              <a href={personalInfo.socials.email} aria-label="Email" className="p-2 rounded-xl bg-slate-900 hover:bg-rose-500 hover:text-white transition-colors border border-slate-800">
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

            <MagneticButton>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900 hover:bg-brand-500 text-slate-400 hover:text-white border border-slate-800 transition-all shadow-sm"
                aria-label="Back to Top"
              >
                <span>{footer.backToTop}</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>{footer.copyright}</p>
          <div className="flex items-center gap-1 font-mono">
            <span>{footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
