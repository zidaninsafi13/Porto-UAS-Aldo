import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TEACHER_DATA } from "@/data/portfolioData";

export const IntroLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLeaving(true), reducedMotion ? 40 : 1580);
    const removeTimer = window.setTimeout(() => setVisible(false), reducedMotion ? 120 : 2000);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: leaving ? 0 : 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0.01 : 0.24, ease: "easeOut" }} className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-[#F7F3EC] text-[#1C252C]" aria-hidden="true">
          <img src="assets/aladona/hero-paper-texture.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7F3EC]/90 via-transparent to-[#E9DFD2]/70" />
          <div className="relative flex h-full flex-col justify-between px-6 py-7 sm:px-10 sm:py-9 lg:px-16">
            <div className="flex items-center justify-between border-b border-[#D8D1C6] pb-4 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6F746B]">
              <span>E-Portfolio / {TEACHER_DATA.field}</span>
              <span>{TEACHER_DATA.year}</span>
            </div>

            <div className="relative mx-auto w-full max-w-5xl">
              <span className="pointer-events-none absolute -right-2 -top-20 font-serif text-[clamp(9rem,25vw,22rem)] leading-none tracking-[-0.1em] text-[#1C252C]/[0.035]">01</span>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: leaving ? 0 : 1, y: leaving ? -8 : 0 }} transition={{ duration: reducedMotion ? 0.01 : 0.5 }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#B55E3B]">Praktik pengalaman lapangan</p>
                <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.86] tracking-[-0.05em]">Belajar dengan<br /><em className="text-[#B55E3B]">hadir.</em></h1>
                <div className="mt-8 flex items-center gap-4"><span className="h-px w-16 bg-[#B55E3B]" /><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F746B]">{TEACHER_DATA.name}</span></div>
              </motion.div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-[#6F746B]"><span>Memuat portofolio</span><span className="text-[#B55E3B]">{TEACHER_DATA.program}</span></div>
              <div className="h-1 overflow-hidden bg-[#D8D1C6]"><motion.div initial={{ scaleX: 0 }} animate={{ scaleX: leaving ? 1 : 0.82 }} transition={{ duration: reducedMotion ? 0.01 : 0.85, ease: "easeInOut" }} className="h-full origin-left bg-[#B55E3B]" /></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
