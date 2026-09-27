import React from "react";
import { motion } from "motion/react";
import { ReflectionCard } from "@/components/ReflectionCard";
import { PRACTICE_REFLECTIONS, TEACHER_DATA } from "@/data/portfolioData";

interface PracticeReflectionSectionProps { onOpenReflection: (reflectionId: string) => void; }

export const PracticeReflectionSection: React.FC<PracticeReflectionSectionProps> = ({ onOpenReflection }) => (
  <section id="refleksi-praktik" className="relative overflow-hidden border-b border-[#D8D1C6] bg-[#EFE8DD] px-6 py-20 text-[#1C252C] sm:px-8 sm:py-28 lg:px-12">
    <img src="assets/aladona/reflection-paper-texture.webp" alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-multiply" />
    <div className="pointer-events-none absolute -right-8 top-4 select-none font-serif text-[clamp(10rem,24vw,20rem)] leading-none tracking-[-0.08em] text-[#1C252C]/[0.035]" aria-hidden="true">07</div>

    <div className="relative z-10 mx-auto max-w-7xl space-y-12">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }} className="max-w-2xl space-y-4">
          <div className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#B55E3B]">07 · Refleksi praktik</div>
          <h2 className="font-serif text-5xl leading-[.95] tracking-tight sm:text-7xl">Belajar dari<br /><span className="italic text-[#B55E3B]">setiap praktik.</span></h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#6F746B]">Empat LK 4 merekam perubahan cara mengajar Aladona: dari memperjelas instruksi, memeratakan partisipasi, sampai memberi ruang bagi peserta didik untuk mengambil keputusan.</p>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="border-l-2 border-[#B55E3B] pl-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Arsip refleksi / LK 4</p>
          <p className="mt-2 max-w-[19rem] font-serif text-2xl leading-tight">Empat catatan kecil yang membentuk cara pandang lebih utuh terhadap pembelajaran PJOK.</p>
          <div className="mt-6 flex items-center gap-3 border-t border-[#D8D1C6] pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6F746B]"><span className="h-2 w-2 rounded-full bg-[#7D8B7A]" />{TEACHER_DATA.name} · PPL Mandiri</div>
        </motion.aside>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
        {PRACTICE_REFLECTIONS.map((reflection, index) => <ReflectionCard key={reflection.id} reflection={reflection} onOpen={() => onOpenReflection(reflection.id)} delay={index * 0.08} />)}
      </div>
      <div className="flex justify-between border-t border-[#D8D1C6] pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#6F746B]"><span>LK 4 / Praktik pembelajaran mandiri</span><span>Portfolio PPL</span></div>
    </div>
  </section>
);
