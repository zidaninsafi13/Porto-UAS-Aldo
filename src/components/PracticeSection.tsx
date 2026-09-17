import React from "react";
import { motion } from "motion/react";
import { PracticeCard } from "@/components/PracticeCard";
import { PRACTICES, TEACHER_DATA } from "@/data/portfolioData";

interface PracticeSectionProps { onOpenPractice: (practiceId: string) => void; }

export const PracticeSection: React.FC<PracticeSectionProps> = ({ onOpenPractice }) => (
  <section id="praktik" className="relative overflow-hidden border-b border-[#D8D1C6] bg-[#F7F3EC] px-6 py-20 text-[#1C252C] sm:px-8 sm:py-28 lg:px-12">
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <img src="assets/aladona/practice-paper-texture.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-center opacity-55 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#F7F3EC]/45" />
    </div>
    <div className="relative z-10 mx-auto max-w-7xl space-y-12">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.45 }} className="max-w-2xl space-y-4">
          <div className="font-plex text-xs font-semibold uppercase tracking-[0.22em] text-[#B55E3B]">03 · Praktik mengajar</div>
          <h2 className="font-serif text-5xl leading-[.95] tracking-tight text-[#1C252C] sm:text-7xl">Praktik<br /><span className="italic text-[#B55E3B]">yang direkam.</span></h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#6F746B]">Dua modul ajar PJOK Aladona—bola basket dan gerak dasar—ditampilkan bersama perangkat PDF dan catatan analisisnya.</p>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="border-l-2 border-[#B55E3B] pl-5">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="font-plex text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Arsip perangkat</p>
              <p className="mt-2 max-w-[15rem] font-serif text-2xl leading-tight text-[#1C252C]">Dua fase, satu benang merah: bergerak untuk belajar.</p>
            </div>
            <span className="font-serif text-6xl leading-none text-[#1C252C]/10">03</span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[{ phase: "Fase C", grade: "Kelas VI", src: "assets/cover/cover-1.jpg" }, { phase: "Fase B", grade: "Kelas IV", src: "assets/cover/cover-2.jpg" }].map((item) => (
              <div key={item.phase} className="flex items-center gap-3 border-t border-[#D8D1C6] pt-3">
                <img src={item.src} alt={`Sampul modul ${item.phase} ${item.grade}`} loading="lazy" decoding="async" className="h-16 w-12 object-cover object-top" />
                <div className="font-plex text-[9px] uppercase leading-relaxed tracking-[0.12em] text-[#6F746B]"><span className="block text-[#1C252C]">{item.phase}</span><span>{item.grade}</span></div>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PRACTICES.map((practice, index) => (
          <PracticeCard key={practice.id} number={practice.number as "01" | "02"} title={practice.title} badges={[practice.phase, practice.grade]} description={practice.analysis.planning} coverUrl={`assets/cover/cover-${index + 1}.jpg`} pages={practice.pdfPages} duration={practice.timeAllocation} onOpen={() => onOpenPractice(practice.id)} delay={index * 0.12} />
        ))}
      </div>
      <div className="flex justify-between border-t border-[#D8D1C6] pt-6 font-plex text-[10px] uppercase tracking-[0.2em] text-[#6F746B]"><span>{TEACHER_DATA.name}</span><span>Portfolio PPL</span></div>
    </div>
  </section>
);
