"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, siteContent } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const meta = siteContent.sectionMeta.contact;
  const content = siteContent.contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="py-32 relative bg-slate-50/40 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/80 border border-brand-200/80 dark:border-brand-800/80">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{meta.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {meta.title} <span className="text-brand-500">{meta.titleAccent}</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {meta.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Status Card */}
            <div className="glass-card-premium p-6 rounded-3xl space-y-2 flex items-center gap-4">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {content.availabilityTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {content.availabilitySubtitle}
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card-premium p-6 rounded-3xl flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-500 flex items-center justify-center shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {content.emailLabel}
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card-premium p-6 rounded-3xl flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-500 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {content.phoneLabel}
                </p>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white hover:text-brand-500 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card-premium p-6 rounded-3xl flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 dark:bg-purple-950/80 text-purple-500 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  {content.locationLabel}
                </p>
                <p className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card-premium p-8 sm:p-10 rounded-3xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {content.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                    {content.successMessage}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-vercel-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white shadow-md"
                  >
                    {content.successButtonLabel}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        {content.formLabels.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={content.formPlaceholders.name}
                        className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 text-sm transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                        {content.formLabels.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={content.formPlaceholders.email}
                        className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 text-sm transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {content.formLabels.subject}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={content.formPlaceholders.subject}
                      className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 text-sm transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {content.formLabels.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={content.formPlaceholders.message}
                      className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-brand-500 text-sm transition-all resize-none shadow-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-vercel-primary w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white shadow-xl disabled:opacity-50"
                  >
                    {loading ? (
                      <span>{content.loadingLabel}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{content.submitLabel}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
