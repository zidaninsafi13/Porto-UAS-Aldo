import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface IntroLoaderProps {
  onComplete: () => void;
}

const GRAVITY_WORDS = ["GERAK", "BELAJAR", "BERTUMBUH", "BERDAMPAK"];

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const prefersReducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const hasFinished = useRef(false);

  const finishIntro = useCallback(() => {
    if (hasFinished.current) return;
    hasFinished.current = true;
    setProgress(100);
    setIsLeaving(true);
    window.setTimeout(onComplete, prefersReducedMotion ? 80 : 650);
  }, [onComplete, prefersReducedMotion]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (prefersReducedMotion) {
      const reducedTimer = window.setTimeout(finishIntro, 350);
      return () => {
        window.clearTimeout(reducedTimer);
        document.body.style.overflow = previousOverflow;
      };
    }

    const startedAt = performance.now();
    const duration = 2600;
    let frame = 0;
    let completionTimer = 0;

    const update = (now: number) => {
      const elapsed = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        frame = window.requestAnimationFrame(update);
      } else {
        completionTimer = window.setTimeout(finishIntro, 420);
      }
    };

    frame = window.requestAnimationFrame(update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(completionTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [finishIntro, prefersReducedMotion]);

  return (
    <motion.div
      role="status"
      aria-label={`Memuat e-portfolio ${progress}%`}
      initial={{ opacity: 1 }}
      animate={isLeaving ? { opacity: 0, scale: 1.025 } : { opacity: 1, scale: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.08 : 0.62, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] overflow-hidden bg-[#031017] text-[#EEF4F2]"
    >
      <img
        src="assets/backgrounds/bg-loading.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,13,20,.94)_0%,rgba(3,18,28,.78)_42%,rgba(3,15,24,.62)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,210,255,.13),transparent_38%)]" />

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block" aria-hidden="true">
        {GRAVITY_WORDS.map((word, index) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: -160 - index * 35, rotate: index % 2 ? 8 : -7 }}
            animate={{ opacity: 0.07, y: 0, rotate: index % 2 ? 2 : -2 }}
            transition={{ delay: 0.18 + index * 0.12, type: "spring", stiffness: 75, damping: 15 }}
            className="absolute font-sans text-[clamp(5rem,10vw,11rem)] font-black tracking-[-0.09em] text-white"
            style={{ left: `${2 + index * 24}%`, top: `${8 + (index % 2) * 63}%` }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-7 sm:px-10 sm:py-9 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex items-center justify-between font-plex text-[9px] uppercase tracking-[0.3em] text-white/65 sm:text-[11px]"
        >
          <span>Calon Guru · PPG Prajabatan</span>
          <span className="hidden items-center gap-3 sm:flex">2026 <i className="h-px w-10 bg-[#00D2FF]" /></span>
        </motion.div>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.img
            src="assets/images/school/LogoKampus.webp"
            alt="Logo Universitas Nusantara PGRI Kediri"
            initial={{ opacity: 0, scale: 0.76, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 110, damping: 16 }}
            className="mb-5 h-24 w-24 object-contain drop-shadow-[0_0_28px_rgba(0,210,255,.3)] sm:h-28 sm:w-28"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.5 }}
            className="mb-3 font-plex text-[10px] uppercase tracking-[0.55em] text-white/75 sm:text-xs"
          >
            Selamat Datang di
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28, letterSpacing: "0.18em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
            transition={{ delay: 0.48, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[clamp(2.8rem,8vw,6.8rem)] font-black leading-none text-white"
          >
            <span className="text-[#00D2FF]">E</span>-PORTFOLIO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.82, duration: 0.65 }}
            className="mt-3 font-plex text-[10px] uppercase tracking-[0.65em] text-white/70 sm:text-sm"
          >
            PPG Prajabatan · PJOK
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-9 w-full max-w-md"
          >
            <div className="mb-2 flex items-end justify-between font-plex text-[9px] uppercase tracking-[0.24em] text-white/55">
              <span>Memuat pengalaman & refleksi</span>
              <span className="text-xs font-bold text-white">{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full border border-[#36BBD3]/35 bg-[#031017]/80 p-[2px]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#0288D1] to-[#00E5FF] shadow-[0_0_18px_rgba(0,229,255,.75)]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.12, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        <div className="flex items-end justify-between gap-5">
          <div className="font-plex text-[9px] uppercase leading-relaxed tracking-[0.28em] text-white/50 sm:text-[10px]">
            Belajar · Mengajar<br />Berdampak
          </div>
          <button
            type="button"
            onClick={finishIntro}
            className="animated-underline relative pb-1 font-plex text-[9px] uppercase tracking-[0.25em] text-white/65 transition-colors hover:text-[#00E5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] sm:text-[10px]"
          >
            Lewati intro
          </button>
        </div>
      </div>
    </motion.div>
  );
};
