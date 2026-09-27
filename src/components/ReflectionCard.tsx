import React from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText } from "@/components/ui/icons";
import type { PracticeReflection } from "@/types";

interface ReflectionCardProps {
  reflection: PracticeReflection;
  onOpen: () => void;
  delay?: number;
}

export const ReflectionCard: React.FC<ReflectionCardProps> = ({ reflection, onOpen, delay = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.5, delay }}
    className="group border border-[#D8D1C6] bg-[#F7F3EC] p-4 shadow-[0_12px_30px_rgba(28,37,44,.1)] sm:p-5"
  >
    <div className="flex h-full flex-col gap-5 sm:flex-row">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Buka preview refleksi praktik ${reflection.number}`}
        className="relative mx-auto w-full max-w-[13rem] shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F3EC] sm:mx-0 sm:w-40"
      >
        <div className="absolute -inset-2 translate-x-2 translate-y-2 border border-[#D8D1C6]" aria-hidden="true" />
        <div className="relative aspect-[3/4] overflow-hidden border border-[#1C252C] bg-[#E9DFD2]">
          <img src={reflection.coverUrl} alt={`Sampul refleksi praktik ${reflection.number}`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover/cover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C252C]/80 via-transparent to-[#1C252C]/10" />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[#F7F3EC]"><span>LK 4</span><span>{reflection.number}</span></div>
          <div className="absolute inset-x-2 bottom-2 bg-[#F7F3EC]/95 p-3 text-[#1C252C] backdrop-blur-sm"><div className="flex items-center gap-2"><FileText className="h-4 w-4 text-[#B55E3B]" /><span className="font-mono text-[8px] uppercase tracking-[0.13em] text-[#B55E3B]">Refleksi praktik</span></div><p className="mt-2 font-serif text-lg leading-[.95]">Praktik {reflection.number}</p><p className="mt-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-[#6F746B]">PPL Mandiri · PJOK</p></div>
        </div>
        <span className="absolute -bottom-3 -right-3 bg-[#B55E3B] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#F7F3EC]">Buka PDF</span>
      </button>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-[#D8D1C6] pb-3 font-mono text-[10px] uppercase tracking-[0.16em]"><span className="text-[#B55E3B]">Refleksi {reflection.number}</span><span className="text-[#6F746B]">{reflection.date}</span></div>
        <h3 className="mt-5 font-serif text-2xl leading-tight sm:text-3xl">{reflection.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{reflection.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2"><span className="border border-[#D8D1C6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F746B]">{reflection.focus}</span></div>
        <button type="button" onClick={onOpen} className="mt-auto inline-flex items-center gap-2 self-start pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B] transition hover:text-[#1C252C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]">Buka refleksi <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
      </div>
    </div>
  </motion.article>
);
