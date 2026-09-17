import React from "react";
import { TEACHER_DATA } from "@/data/portfolioData";
import { motion } from "motion/react";
import { ArrowUpRight, TargetBullseye } from "@/components/ui/icons";

interface ProfileSectionProps {
  onOpenPhoto: (url: string, title: string, caption: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onOpenPhoto }) => {
  const profileImageUrl = TEACHER_DATA.photoUrl || "assets/aladona/profile-paper-texture.webp";

  return (
    <section id="profil" className="relative overflow-hidden border-b border-[#D8D1C6] bg-[#F7F3EC] px-6 py-20 text-[#1C252C] sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-45" aria-hidden="true">
        <img src="assets/aladona/profile-paper-texture.webp" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover mix-blend-multiply" />
      </div>
      <div className="pointer-events-none absolute -right-10 top-12 select-none font-serif text-[clamp(7rem,18vw,15rem)] leading-none tracking-[-0.08em] text-[#1C252C]/[0.035]" aria-hidden="true">PPL</div>
      <div className="pointer-events-none absolute -right-24 top-1/3 hidden h-[27rem] w-[27rem] rounded-full border border-[#7D8B7A]/25 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 top-1/3 hidden h-[20rem] w-[20rem] rounded-full border border-dashed border-[#B55E3B]/25 lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-8 left-8 hidden font-mono text-[9px] uppercase tracking-[0.24em] text-[#6F746B]/70 sm:block" aria-hidden="true">Setonopande · Kediri · 2026</div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.55 }} className="mb-12 flex items-end justify-between gap-6 border-b border-[#D8D1C6] pb-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B55E3B]">02 / identitas</p>
            <h2 className="mt-3 font-serif text-5xl leading-none tracking-tight sm:text-6xl">Tentang pendidik</h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-[#6F746B] sm:block">Catatan identitas dan arah refleksi Aladona. Detail personal akan dilengkapi dari dokumen asli.</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.8fr)_1.2fr] lg:items-start lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.22 }} transition={{ duration: 0.55 }} className="profile-figure-column">
            <div className="relative max-w-sm">
              <div className="pointer-events-none absolute -left-4 top-10 h-44 w-1 bg-[#B55E3B]" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 border-r border-t border-[#7D8B7A]/70" aria-hidden="true" />
            <button type="button" onClick={() => onOpenPhoto(profileImageUrl, TEACHER_DATA.name, `${TEACHER_DATA.name} — ${TEACHER_DATA.field}.`)} className="group relative block w-full max-w-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F3EC]">
              <div className="absolute -inset-3 translate-x-3 translate-y-3 border border-[#D8D1C6]" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden border border-[#1C252C] bg-[#EAE3D8]">
                <img src={profileImageUrl} alt={TEACHER_DATA.name} loading="lazy" decoding="async" className="h-full w-full object-cover grayscale-[0.15] transition duration-500 group-hover:scale-[1.02]" />
                {!TEACHER_DATA.photoUrl && <span className="absolute inset-x-4 bottom-4 border border-[#F7F3EC]/70 bg-[#1C252C]/80 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#F7F3EC]">Foto profil menunggu aset asli</span>}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1C252C]/80 via-[#1C252C]/10 to-transparent" aria-hidden="true" />
                <span className="pointer-events-none absolute left-5 top-5 max-w-[82%] text-[#F7F3EC]" aria-hidden="true">
                  <span className="block font-serif text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[0.88] tracking-[-0.03em]">Hadir<br />Menyimak<br /><em className="text-[#E5A184]">Bertumbuh.</em></span>
                  <span className="mt-3 block border-l border-[#E5A184] pl-3 font-mono text-[8px] uppercase tracking-[0.18em] text-[#F7F3EC]/80">Catatan praktik · PJOK</span>
                </span>
              </div>
            </button>
            <div className="mt-5 grid grid-cols-[auto_1fr] gap-4 border-t border-[#D8D1C6] pt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#6F746B]">
              <span className="text-[#B55E3B]">Fig. 02</span>
              <span className="leading-relaxed">Potret profil Aladona<br /><span className="text-[#6F746B]/70">Dokumentasi identitas untuk portofolio PPL</span></span>
            </div>
            <div className="relative mt-10 overflow-hidden border border-[#D8D1C6] border-l-4 border-l-[#7D8B7A] bg-[#E9DFD2] p-5 text-[#1C252C] shadow-sm sm:p-6">
              <span className="pointer-events-none absolute -right-2 -top-8 font-serif text-8xl leading-none text-[#B55E3B]/[0.12]" aria-hidden="true">02</span>
              <div className="relative flex items-center justify-between border-b border-[#1C252C]/15 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#B55E3B]"><span>Field note</span><span>PPL / PJOK</span></div>
              <p className="relative mt-5 font-serif text-2xl leading-tight">Ruang belajar yang aktif dimulai dari kehadiran yang utuh.</p>
              <dl className="relative mt-6 grid grid-cols-2 gap-4 border-t border-[#1C252C]/15 pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-[#6F746B]">
                <div><dt className="text-[#B55E3B]">Lokasi</dt><dd className="mt-1 leading-relaxed text-[#1C252C]/75">{TEACHER_DATA.school}</dd></div>
                <div><dt className="text-[#B55E3B]">Periode</dt><dd className="mt-1 text-[#1C252C]/75">{TEACHER_DATA.year}</dd></div>
              </dl>
            </div>
            </div>
            <p className="mt-5 max-w-sm font-mono text-[10px] uppercase tracking-[0.18em] text-[#6F746B]">Fig. 02 — potret profil Aladona</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.22 }} transition={{ duration: 0.55, delay: 0.08 }} className="space-y-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7D8B7A]">{TEACHER_DATA.field}</p>
              <h3 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.05] sm:text-5xl">{TEACHER_DATA.name}</h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#6F746B]">{TEACHER_DATA.bio}</p>
            </div>

            <dl className="grid gap-x-8 gap-y-5 border-y border-[#D8D1C6] py-6 sm:grid-cols-2">
              {[
                ["Program", TEACHER_DATA.program],
                ["NIM", TEACHER_DATA.nim],
                ["Universitas", TEACHER_DATA.university],
                ["Sekolah PPL", TEACHER_DATA.school],
                ["Periode", TEACHER_DATA.year],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">{label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-[#1C252C]">{value}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="profile-quote relative overflow-hidden border border-[#D8D1C6] bg-[#F7F3EC]/75 px-5 py-5 sm:px-6">
              <span className="absolute -right-2 -top-7 font-serif text-8xl leading-none text-[#B55E3B]/15" aria-hidden="true">“</span>
              <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#B55E3B] font-serif text-2xl text-[#F7F3EC]" aria-hidden="true">“</span>
              <p className="font-serif text-2xl leading-tight sm:text-3xl">“{TEACHER_DATA.pullQuote}”</p>
              <cite className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] not-italic text-[#6F746B]">{TEACHER_DATA.name}</cite>
            </blockquote>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-t border-[#D8D1C6] bg-[#F7F3EC]/55 pt-4 sm:px-4 sm:pb-4">
                <div className="mb-3 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7D8B7A] text-[#F7F3EC]"><TargetBullseye className="h-4 w-4" /></span><h4 className="font-serif text-xl">Filosofi</h4></div>
                <p className="text-sm leading-relaxed text-[#6F746B]">{TEACHER_DATA.philosophy}</p>
              </div>
              <div className="border-t border-[#D8D1C6] bg-[#F7F3EC]/55 pt-4 sm:px-4 sm:pb-4">
                <div className="mb-3 flex items-center gap-3"><span className="font-mono text-xs text-[#B55E3B]">→</span><h4 className="font-serif text-xl">Arah bertumbuh</h4></div>
                <p className="text-sm leading-relaxed text-[#6F746B]">{TEACHER_DATA.vision}</p>
                <a href="#refleksi" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]">Baca refleksi <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
