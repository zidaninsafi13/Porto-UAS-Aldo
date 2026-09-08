import React from "react";
import { TEACHER_DATA } from "@/data/portfolioData";
import { motion } from "motion/react";
import { Runner, TargetBullseye } from "@/components/ui/icons";

interface ProfileSectionProps {
  onOpenPhoto: (url: string, title: string, caption: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onOpenPhoto }) => {
  return (
    <section
      id="profil"
      className="relative py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 text-[#132027] border-b border-[rgba(16,35,43,0.12)] overflow-hidden"
    >
      {/* VISUAL FOUNDATION: bg-02-profil.png */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img
          src="assets/backgrounds/bg-02-profil.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* GRAFFITI & WALL ATHLETIC OVERLAYS (Street / Chalk / Gym Wall Aesthetics) */}
      {/* 1. Large Faint Wall Stencil Graffiti in Background */}
      <div className="absolute -top-6 right-12 lg:right-32 pointer-events-none select-none opacity-[0.07] font-black text-7xl sm:text-9xl tracking-tighter uppercase transform rotate-1 text-[#0288D1]">
        MOVEMENT
      </div>
      <div className="absolute bottom-4 left-6 lg:left-24 pointer-events-none select-none opacity-[0.06] font-black text-6xl sm:text-8xl tracking-tighter uppercase -rotate-2 text-[#006064]">
        DEDIKASI
      </div>

      {/* 2. Top-Left Street Chalk Tag & Coordinates */}
      <div className="absolute top-6 left-6 lg:left-14 hidden sm:flex flex-col pointer-events-none select-none z-10">
        <span className="font-handwriting text-xl sm:text-2xl text-[#0288D1]/70 -rotate-6 block font-bold drop-shadow-sm">
          #JiwaRagaSehat
        </span>
        <span className="font-plex text-[9px] uppercase tracking-[0.25em] text-[#132027]/40 mt-0.5">
          SETONOPANDE · KEDIRI [07°49'S 112°01'E]
        </span>
      </div>

      {/* 3. Top-Right Street Callout & Arrow */}
      <div className="absolute top-8 right-6 lg:right-16 hidden md:flex items-center gap-2 pointer-events-none select-none z-10 transform rotate-2">
        <span className="font-handwriting text-2xl lg:text-3xl text-[#00838F] font-bold">
          "Bukan sekadar lari, tapi nilai diri!"
        </span>
        <span className="font-plex text-xs text-[#0288D1]/60 font-bold">↗</span>
      </div>

      {/* 4. Marginal Left Vertical Athletic Graffiti Stamp */}
      <div className="absolute left-3 lg:left-5 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 pointer-events-none select-none z-10">
        <span className="font-plex text-[8.5px] uppercase tracking-[0.35em] text-[#132027]/40 leading-[2.2] font-bold border-l-2 border-[#0288D1]/30 pl-2">
          GURU·PENGGERAK<br />
          EDUKASI·JASMANI<br />
          SPORTIF·DISIPLIN
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid: Left Portrait + Right Editorial Content + Right Side Micro Labels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Portrait with Custom Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 xl:col-span-4 flex justify-center"
          >
            <button
              type="button"
              onClick={() =>
                onOpenPhoto(
                  TEACHER_DATA.photoUrl,
                  TEACHER_DATA.name,
                  "Zidan Insafi, S.Pd. — Guru PJOK SDN 1 Setonopande Kediri, PPG Prajabatan 2026."
                )
              }
              className="group relative isolate block w-full max-w-[360px] overflow-visible rounded-2xl border-2 border-[#36BBD3]/60 bg-[#0c242c] text-left shadow-[0_24px_55px_rgba(4,18,23,.24),0_0_0_1px_rgba(0,229,255,.16)] transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F3]"
              aria-label={`Perbesar foto profil ${TEACHER_DATA.name}`}
            >
              <span aria-hidden="true" className="pointer-events-none absolute -inset-3 -z-10 rounded-[26px] border border-[#36BBD3]/35 bg-[#0c242c]/10 shadow-[0_22px_42px_rgba(4,18,23,.18)]" />
              <span aria-hidden="true" className="pointer-events-none absolute -inset-1 z-20 rounded-[18px] border border-white/45 opacity-80" />
              <span aria-hidden="true" className="pointer-events-none absolute left-4 top-4 z-30 h-8 w-8 border-l border-t border-[#00E5FF]/80" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 z-30 h-8 w-8 border-b border-r border-[#00E5FF]/80" />
              <img
                src={TEACHER_DATA.photoUrl}
                alt={TEACHER_DATA.name}
                className="relative z-10 aspect-[4/5] w-full rounded-[14px] object-cover object-center filter contrast-[1.04] transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />

              <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 rounded-[14px] bg-gradient-to-tr from-[#031017]/18 via-transparent to-[#00D2FF]/10 opacity-80" />

              {/* Handwritten Badge on Left-Center of Image */}
              <div className="absolute left-4 top-1/2 z-30 -translate-y-1/2 pointer-events-none transform -rotate-6 select-none">
                <span className="font-handwriting text-3xl sm:text-4xl text-white font-bold leading-tight block drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                  Gerak<br />
                  Membentuk<br />
                  Karakter
                </span>
              </div>

              {/* Bottom Left Micro Label */}
              <div className="absolute bottom-4 left-4 z-30 pointer-events-none select-none">
                <span className="font-plex text-[9px] uppercase tracking-widest text-white/80 block leading-tight font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  SEHAT<br />
                  AKTIF<br />
                  KARAKTER<br />
                  PRESTASI
                </span>
              </div>
            </button>
          </motion.div>

          {/* Right Column: Editorial Narrative, Quote Box & 2 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 xl:col-span-8 flex flex-col space-y-6"
          >
            {/* Header Title Block with Graffiti Accent */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="font-plex text-xs font-bold text-[#0288D1] tracking-widest uppercase flex items-center gap-2">
                  <span>02.</span>
                  <span className="text-[#132027]/70 font-semibold tracking-widest">PROFIL GURU</span>
                  <span className="text-[#0288D1]">•</span>
                  <span className="text-[#00838F] font-mono text-[11px]">PJOK SPECIALIST</span>
                </div>
                {/* Micro street sticker */}
                <div className="hidden sm:inline-block px-2.5 py-0.5 rounded-full border border-[#0288D1]/40 bg-white/70 font-handwriting text-sm text-[#006064] font-bold transform -rotate-1 shadow-sm">
                  Semangat Mengajar! ✌
                </div>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#132027] tracking-tight leading-[1.12] mb-4">
                Guru PJOK yang{" "}
                <span className="italic font-normal text-[#0288D1]">belajar</span>{" "}
                melalui praktik.
              </h2>
              <p className="text-sm sm:text-[15px] lg:text-base text-[#132027]/85 font-normal leading-relaxed max-w-2xl">
                Lulusan S1 Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) yang sedang menempuh PPG Prajabatan di Universitas Nusantara PGRI Kediri. Saya percaya bahwa pembelajaran gerak yang bermakna dapat membentuk anak yang lebih sehat, percaya diri, dan siap menghadapi kehidupan.
              </p>
            </div>

            {/* Highlighted Quote Box matching reference */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-[#36BBD3]/40 shadow-sm flex items-start gap-4 overflow-hidden">
              {/* Background graffiti stamp */}
              <div className="absolute -right-4 -bottom-4 font-black text-6xl text-[#0288D1]/[0.06] select-none pointer-events-none uppercase">
                MOTTO
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#36BBD3]/15 flex items-center justify-center shrink-0 text-[#0288D1]">
                <svg className="w-7 h-7 fill-current opacity-85" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <div className="space-y-1">
                <p className="font-sans font-medium text-sm sm:text-[15px] text-[#132027]/90 leading-relaxed pt-1.5">
                  “Guru bukan hanya memberikan contoh gerakan, tetapi juga menciptakan lingkungan belajar yang aman, aktif, menyenangkan, dan menghargai perbedaan.”
                </p>
                <div className="font-handwriting text-base text-[#0288D1] font-bold text-right pt-0.5">
                  — Zidan Insafi, S.Pd.
                </div>
              </div>
            </div>

            {/* Bottom 2 Pillars Row (Esensi Gerak PJOK & Visi Pendidik) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 pt-2">
              {/* Pillar 1: Esensi Gerak PJOK */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B2EBF2] text-[#006064] flex items-center justify-center shrink-0 shadow-sm">
                  <Runner className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#132027] mb-1 leading-snug">
                    Esensi Gerak PJOK
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#132027]/80 leading-relaxed font-normal">
                    Gerak adalah bahasa universal yang menghubungkan tubuh, pikiran, dan nilai-nilai kehidupan. Melalui PJOK, saya ingin membantu peserta didik menemukan potensi terbaiknya, bukan hanya di lapangan, tetapi juga dalam kehidupan sehari-hari.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Visi Pendidik */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B2EBF2] text-[#006064] flex items-center justify-center shrink-0 shadow-sm">
                  <TargetBullseye className="w-6 h-6 text-[#00838F]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#132027] mb-1 leading-snug">
                    Visi Pendidik
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#132027]/80 leading-relaxed font-normal">
                    Menjadi guru PJOK yang adaptif, reflektif, dan inspiratif, serta terus belajar untuk menciptakan pengalaman belajar yang bermakna bagi setiap peserta didik, demi generasi yang lebih sehat, aktif, dan berkarakter.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
