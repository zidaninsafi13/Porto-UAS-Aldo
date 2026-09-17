import React from "react";
import { motion } from "motion/react";
import { REFLECTIONS, REFLECTION_DETAILS, TEACHER_DATA } from "@/data/portfolioData";

export const ReflectionSection: React.FC = () => (
  <section id="refleksi" className="relative overflow-hidden border-b border-[#D8D1C6] bg-[#F7F3EC] px-6 py-20 text-[#1C252C] sm:px-12 sm:py-28 lg:px-20">
    <img src="assets/aladona/reflection-paper-texture.webp" alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-multiply" />
    <div className="pointer-events-none absolute -right-8 top-10 select-none font-serif text-[clamp(10rem,24vw,20rem)] leading-none tracking-[-0.08em] text-[#1C252C]/[0.035]" aria-hidden="true">07</div>

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#B55E3B]">07 / Refleksi</span>
          <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] sm:text-7xl">Refleksi terhadap<br /><span className="italic text-[#B55E3B]">model guru yang dituju.</span></h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#6F746B]">{TEACHER_DATA.reflectionLead}</p>
        </motion.div>

        <motion.blockquote initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.65, delay: 0.08 }} className="relative overflow-hidden border border-[#D8D1C6] bg-[#E9DFD2]/80 px-6 py-6 sm:px-8 sm:py-7">
          <span className="pointer-events-none absolute -right-2 -top-8 font-serif text-9xl leading-none text-[#B55E3B]/15" aria-hidden="true">“</span>
          <p className="relative max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">“{TEACHER_DATA.reflectionQuote}”</p>
          <footer className="relative mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F746B]">— {TEACHER_DATA.name}</footer>
        </motion.blockquote>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-3">
        {REFLECTIONS.map((item) => (
          <motion.article key={item.number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} className="border border-[#D8D1C6] border-t-2 border-t-[#B55E3B] bg-[#F7F3EC]/80 p-6 sm:p-7">
            <div className="flex items-center justify-between"><span className="font-mono text-2xl text-[#B55E3B]">{item.number}</span><span className="h-2 w-2 rounded-full bg-[#7D8B7A]" aria-hidden="true" /></div>
            <h3 className="mt-8 font-serif text-2xl leading-tight sm:text-3xl">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#6F746B]">{item.body}</p>
          </motion.article>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.55 }} className="mt-16 border-t border-[#D8D1C6] pt-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#B55E3B]">Evaluasi diri / 07</span><h3 className="mt-2 font-serif text-3xl sm:text-4xl">Kekuatan, tantangan, dan langkah berikutnya.</h3></div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F746B]">Aladona Khairulloh Ibrahim</span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {REFLECTION_DETAILS.map((item, index) => (
            <motion.article key={item.number} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: index * 0.06 }} className="border-t border-[#D8D1C6] bg-[#E9DFD2]/55 p-5 sm:p-6">
              <div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">{item.label}</span><span className="font-mono text-sm text-[#7D8B7A]">{item.number}</span></div>
              <h4 className="mt-5 font-serif text-2xl leading-tight">{item.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
