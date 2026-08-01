"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { CodingProfiles } from "@/components/CodingProfiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MouseFollower } from "@/components/effects/MouseFollower";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { BackToTopProgress } from "@/components/effects/BackToTopProgress";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <MouseFollower />
      <ScrollProgress />
      <BackToTopProgress />

      <div className="min-h-screen bg-white dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 selection:bg-brand-500 selection:text-white transition-colors duration-300">
        <Navbar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero />
          <SectionDivider variant="wave" />
          <About />
          <SectionDivider variant="curve" flip />
          <Skills />
          <SectionDivider variant="slope" />
          <Experience />
          <SectionDivider variant="wave" flip />
          <Projects />
          <SectionDivider variant="curve" />
          <Achievements />
          <SectionDivider variant="slope" flip />
          <CodingProfiles />
          <SectionDivider variant="wave" />
          <Contact />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}
