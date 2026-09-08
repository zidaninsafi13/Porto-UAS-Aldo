import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@/components/ui/icons";

interface PracticeCardProps {
  number: "01" | "02";
  title: string;
  badges: string[];
  description: string;
  coverUrl: string;
  pages: string;
  duration: string;
  onOpen: () => void;
  delay?: number;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({
  number,
  title,
  badges,
  description,
  coverUrl,
  pages,
  duration,
  onOpen,
  delay = 0,
}) => (
  <motion.article
    initial={{ opacity: 0, y: 38, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className="group relative overflow-hidden rounded-2xl border border-[#36BBD3]/35 bg-[#05151C]/88 p-5 shadow-[0_24px_60px_rgba(0,0,0,.42)] backdrop-blur-md transition-colors duration-500 hover:border-[#00E5FF]/70 sm:p-6"
  >
    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00D2FF]/0 blur-3xl transition-colors duration-700 group-hover:bg-[#00D2FF]/10" />
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent transition-transform duration-700 group-hover:scale-x-100" />

    <div className="relative flex h-full flex-col gap-6 sm:flex-row sm:items-stretch">
      <button
        type="button"
        onClick={onOpen}
        className="group/cover relative mx-auto w-40 shrink-0 overflow-visible rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] sm:mx-0 sm:w-44"
        aria-label={`Buka preview modul praktik ${number}`}
      >
        <span className="absolute -inset-2 translate-x-2 translate-y-2 rounded-lg border border-[#36BBD3]/18 bg-[#10232B]/60 transition-transform duration-500 group-hover/cover:translate-x-3 group-hover/cover:translate-y-3" />
        <span className="absolute -inset-1 translate-x-1 translate-y-1 rounded-lg border border-[#36BBD3]/25 bg-[#0A181E]" />
        <img
          src={coverUrl}
          alt={`Sampul asli modul Praktik ${number}`}
          className="relative aspect-[3/4] w-full rounded-lg border border-white/10 bg-white object-cover object-top shadow-2xl transition-transform duration-700 ease-out group-hover/cover:-translate-y-1 group-hover/cover:rotate-[-1.2deg]"
        />
        <span className="absolute -bottom-2 -right-2 rounded-full border border-[#36BBD3]/35 bg-[#06151A]/95 px-2.5 py-1 font-plex text-[8px] uppercase tracking-wider text-[#7FE8F5] shadow-lg">
          {pages}
        </span>
      </button>

      <div className="flex min-w-0 flex-1 flex-col">
        <div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <span className="font-plex text-[10px] font-bold uppercase tracking-[0.2em] text-[#36BBD3]">Praktik {number}</span>
            <span className="font-plex text-[8px] uppercase tracking-wider text-[#83969D]">{duration}</span>
          </div>
          <h3 className="font-sans text-xl font-bold leading-snug text-[#EEF4F2] transition-colors duration-300 group-hover:text-white sm:text-2xl">
            {title}
          </h3>
          <div className="my-4 flex flex-wrap gap-2">
            {badges.map((tag) => (
              <span key={tag} className="rounded-full border border-[#36BBD3]/30 bg-[#36BBD3]/[0.06] px-3 py-1 font-plex text-[9px] font-medium text-[#D6F5F7]">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs font-light leading-relaxed text-[#9CB0B7]">{description}</p>
        </div>

        <div className="mt-auto flex justify-end pt-5">
          <button
            type="button"
            onClick={onOpen}
            className="button-sweep group/button relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#36BBD3] px-5 py-2.5 text-xs font-bold text-[#07171D] shadow-[0_0_18px_rgba(54,187,211,.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06151A]"
          >
            <span className="relative z-10">Eksplorasi Modul</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </motion.article>
);
