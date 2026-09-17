import React from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "@/components/ui/icons";
import { TEACHER_DATA } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenPhoto?: (url: string, title: string, caption: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPhoto }) => {
  const paperTexture = "assets/aladona/hero-paper-texture.webp";
  const profilePhotoUrl = TEACHER_DATA.heroPhotoUrl || TEACHER_DATA.photoUrl || paperTexture;

  return (
    <section id="beranda" className="relative flex min-h-[92vh] w-full flex-col overflow-hidden border-b border-[#D8D1C6] bg-[#F7F3EC] px-6 pb-7 pt-28 text-[#1C252C] sm:px-8 lg:px-12 lg:pt-36">
      <img src={paperTexture} alt="" loading="eager" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F7F3EC]/95 via-[#F7F3EC]/65 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 top-8 select-none font-serif text-[clamp(7rem,18vw,16rem)] leading-none tracking-[-0.08em] text-[#1C252C]/[0.035]" aria-hidden="true">GERAK</div>
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-[#7D8B7A]/25 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-[22rem] w-[22rem] -translate-y-1/2 rounded-full border border-dashed border-[#B55E3B]/25 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-8 top-1/2 hidden h-56 w-px -translate-y-1/2 bg-[#B55E3B]/45 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right font-mono text-[9px] uppercase tracking-[0.28em] text-[#B55E3B]/70 lg:block" aria-hidden="true">PPL / PJOK / 2026</div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between">
        <div className="flex items-center justify-between border-b border-[#D8D1C6] pb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-[#6F746B]">
          <span>01 / pembuka</span>
          <span className="hidden sm:inline">{TEACHER_DATA.title}</span>
          <span>{TEACHER_DATA.year}</span>
        </div>

        <div className="grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.65 }}>
            <p className="mb-7 max-w-sm font-mono text-xs uppercase tracking-[0.2em] text-[#B55E3B]">E-portfolio / {TEACHER_DATA.field}</p>
            <h1 className="max-w-4xl font-serif text-[clamp(3.15rem,7vw,6.4rem)] leading-[0.9] tracking-[-0.04em]">
              {TEACHER_DATA.headline.line1}<br /><span className="text-[#B55E3B]">{TEACHER_DATA.headline.line2}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[#6F746B] sm:text-lg">Dokumentasi perjalanan praktik pengalaman lapangan Aladona—dari modul ajar, kegiatan sekolah, hingga refleksi yang terus berkembang.</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href="#praktik" className="inline-flex items-center gap-3 bg-[#1C252C] px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#F7F3EC] transition hover:bg-[#B55E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]">Jelajahi praktik <ArrowUpRight className="h-4 w-4" /></a>
              <a href="#profil" className="inline-flex items-center gap-2 border-b border-[#1C252C] pb-1 font-mono text-xs uppercase tracking-[0.16em] text-[#1C252C] transition hover:border-[#B55E3B] hover:text-[#B55E3B]">Tentang Aladona <ArrowDown className="h-3.5 w-3.5" /></a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-[#D8D1C6]">
              {[
                ["01", "Praktik", "#praktik"],
                ["02", "Bukti", "#kegiatan"],
                ["03", "Refleksi", "#refleksi"],
              ].map(([number, label, href]) => (
                <a key={number} href={href} className="group border-r border-[#D8D1C6] px-3 py-3 last:border-r-0 sm:px-4">
                  <span className="block font-mono text-[9px] tracking-[0.2em] text-[#B55E3B]">{number}</span>
                  <span className="mt-1 block font-serif text-lg text-[#1C252C] transition group-hover:text-[#B55E3B] sm:text-xl">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 border-l border-t border-[#B55E3B]/60" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-6 -right-5 h-32 w-32 bg-[#7D8B7A]/20" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-8 top-8 hidden -translate-y-1/2 rotate-90 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6F746B] sm:block" aria-hidden="true">figura / 01</div>
            <button type="button" onClick={() => onOpenPhoto?.(profilePhotoUrl, TEACHER_DATA.name, "Potret profil Aladona Khairulloh Ibrahim.")} disabled={!onOpenPhoto} className="group relative block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F3EC]">
              <div className="absolute -inset-3 -translate-x-3 translate-y-3 border border-[#D8D1C6]" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden border border-[#1C252C] bg-[#EAE3D8]">
                <img src={profilePhotoUrl} alt={TEACHER_DATA.name} className="h-full w-full object-cover grayscale-[0.1] transition duration-700 group-hover:scale-[1.03]" />
                {!TEACHER_DATA.photoUrl && <span className="absolute inset-x-4 bottom-4 border border-[#F7F3EC]/70 bg-[#1C252C]/85 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#F7F3EC]">Foto profil menunggu aset asli</span>}
              </div>
            </button>
            <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-start gap-3 border-t border-[#D8D1C6] pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6F746B]">
              <span className="text-[#B55E3B]">Fig. 01</span>
              <span className="leading-relaxed">Potret profil Aladona<br /><span className="text-[#6F746B]/70">Pendidik jasmani · Kota Kediri</span></span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#B55E3B]/60 text-[9px] text-[#B55E3B]">01</span>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.45 }} className="flex flex-wrap items-end justify-between gap-6 border-t border-[#D8D1C6] pt-4 text-xs text-[#6F746B]">
          <div><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]">Disusun untuk</span><p className="mt-1 text-sm text-[#1C252C]">{TEACHER_DATA.program} · {TEACHER_DATA.university}</p></div>
          <div className="max-w-xs text-right"><span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]">Catatan</span><p className="mt-1">Konten personal akan diaktifkan setelah aset terverifikasi.</p></div>
        </motion.div>
      </div>
    </section>
  );
};
