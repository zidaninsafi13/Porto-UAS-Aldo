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

export const PracticeCard: React.FC<PracticeCardProps> = ({ number, title, badges, description, coverUrl, pages, duration, onOpen, delay = 0 }) => (
  <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} whileHover={{ y: -5 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.5, delay }} className="group relative overflow-hidden border border-[#D8D1C6] bg-[#F7F3EC] p-5 text-[#1C252C] shadow-[0_12px_30px_rgba(28,37,44,.12)] sm:p-7">
    <div className="relative flex h-full flex-col gap-7 sm:flex-row">
      <button type="button" onClick={onOpen} className="group/cover relative mx-auto w-40 shrink-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#1C252C] sm:mx-0 sm:w-44" aria-label={`Buka preview modul praktik ${number}`}>
        <div className="absolute -inset-2 translate-x-2 translate-y-2 border border-[#D8D1C6]" aria-hidden="true" />
        <div className="relative aspect-[3/4] overflow-hidden border border-[#1C252C] bg-[#EAE3D8]">
          <img src={coverUrl} alt={`Sampul modul ajar Aladona ${number}`} loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover/cover:scale-[1.03]" />
        </div>
        <span className="absolute -bottom-3 -right-3 bg-[#B55E3B] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#F7F3EC]">{pages}</span>
      </button>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-[#D8D1C6] pb-3 font-mono text-[10px] uppercase tracking-[0.18em]"><span className="text-[#B55E3B]">Praktik {number}</span><span className="text-[#6F746B]">{duration}</span></div>
        <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">{title}</h3>
        <div className="my-5 flex flex-wrap gap-2">{badges.map((tag) => <span key={tag} className="border border-[#D8D1C6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#6F746B]">{tag}</span>)}</div>
        <p className="text-sm leading-relaxed text-[#6F746B]">{description}</p>
        <button type="button" onClick={onOpen} className="mt-auto inline-flex items-center gap-2 self-start pt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B] transition hover:text-[#1C252C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]">Buka catatan <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
      </div>
    </div>
  </motion.article>
);
