import React from "react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onOpenPhoto?: (url: string, title: string, caption: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPhoto }) => {
  const profilePhotoUrl = "assets/images/profile/profil-saya.jpeg";

  return (
    <section
      id="beranda"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-6 px-4 sm:px-8 lg:px-12 bg-[#041217] text-[#EEF4F2] overflow-hidden border-b border-[rgba(54,187,211,0.18)] select-none"
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img src="assets/backgrounds/bg-01-hero.png" alt="" className="w-full h-full object-cover object-center" />
      </div>

      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden flex justify-end items-center z-10" aria-hidden="true">
        <div
          className="relative w-full sm:w-[85%] lg:w-[62%] xl:w-[58%] 2xl:w-[55%] h-full ml-auto"
          style={{
            maskImage: "radial-gradient(ellipse 90% 88% at 75% 52%, black 42%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 78%, transparent 100%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 12%, rgba(0,0,0,0.9) 36%, black 60%), linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 90% 88% at 75% 52%, black 42%, rgba(0,0,0,0.85) 58%, rgba(0,0,0,0.3) 78%, transparent 100%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 12%, rgba(0,0,0,0.9) 36%, black 60%), linear-gradient(to bottom, transparent 0%, black 10%, black 88%, transparent 100%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <img
            src={profilePhotoUrl}
            alt="Zidan Insafi, S.Pd."
            className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[1.01] saturate-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041217] via-transparent to-[#041217]/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041217] via-transparent to-[#041217]/50" />
          <div className="absolute inset-0 bg-[#00D2FF]/[0.035] mix-blend-color" />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none select-none bg-gradient-to-r from-[#041217] via-[#041217]/75 lg:via-[#041217]/30 to-transparent z-10" />

      <div className="absolute left-[45%] sm:left-[47%] top-[41%] sm:top-[42%] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block z-20">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#00D2FF]/35" />
          <div className="w-8 h-8 rounded-full border-2 border-[#00D2FF]/80 flex items-center justify-center shadow-[0_0_12px_rgba(0,210,255,0.6)]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
          </div>
        </div>
      </div>

      <div className="absolute left-4 sm:left-6 lg:left-8 top-[46%] -translate-y-1/2 hidden md:flex flex-col gap-2 pointer-events-none select-none z-20">
        <div className="h-6 w-[1px] bg-white/20 mb-1 ml-0.5" />
        <span className="font-plex text-[9px] uppercase tracking-[0.35em] text-white/45 leading-[2.2] font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]">
          DISIPLIN<br />GERAK<br />KARAKTER<br />PRESTASI
        </span>
        <div className="h-6 w-[1px] bg-white/20 mt-1 ml-0.5" />
      </div>

      <div className="absolute left-6 sm:left-8 lg:left-10 bottom-14 sm:bottom-16 hidden sm:block pointer-events-none select-none z-20">
        <span className="font-handwriting text-2xl sm:text-3xl text-white/50 -rotate-12 block drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Satu<br />Langkah Lebih Baik
        </span>
      </div>

      <div className="absolute left-[20%] sm:left-[22%] lg:left-[24%] bottom-10 hidden xl:flex items-center gap-3 pointer-events-none select-none z-20">
        <div className="w-8 h-[1px] bg-white/20" />
        <span className="font-plex text-[8.5px] uppercase tracking-[0.28em] text-white/45 font-medium leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          PENDIDIKAN<br />JASMANI OLAHRAGA<br />DAN KESEHATAN
        </span>
      </div>

      <div className="absolute right-4 sm:right-6 lg:right-8 top-[52%] -translate-y-1/2 hidden lg:flex flex-col items-end gap-2 text-right pointer-events-none select-none z-20">
        <div className="w-5 h-[1px] bg-white/20 mb-1" />
        <span className="font-plex text-[9.5px] uppercase tracking-[0.32em] text-white/55 leading-[2.1] font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          SEHAT<br />AKTIF<br />KARAKTER
        </span>
        <div className="w-5 h-[1px] bg-white/20 mt-1" />
      </div>

      <div className="absolute right-6 sm:right-8 lg:right-10 bottom-10 hidden lg:flex flex-col text-right pointer-events-none select-none z-20">
        <span className="font-plex text-[8.5px] uppercase tracking-[0.28em] text-white/50 leading-snug font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          GERAK<br />BELAJAR<br />MASA DEPAN
        </span>
        <div className="flex items-center justify-end gap-2 mt-2">
          <span className="font-plex text-[8px] uppercase tracking-widest text-white/35">SDN 1 SETONOPANDE</span>
          <div className="w-3 h-[1px] bg-white/25" />
          <span className="font-plex text-[8px] uppercase tracking-widest text-white/35">KEDIRI</span>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7 z-10 pl-4 sm:pl-16 md:pl-20 lg:pl-24 xl:pl-28 max-w-2xl"
        >
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#00D2FF] font-semibold tracking-wider">
            <span>01.</span><span>BERGERAK</span><span>•</span><span>BELAJAR</span><span>•</span><span>BERTUMBUH</span>
          </div>

          <div>
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl xl:text-[68px] text-[#EEF4F2] tracking-tight leading-[1.02]">
              Belajar<br />Mengajar.
            </h1>
            <div className="font-serif italic text-3xl sm:text-5xl xl:text-[58px] text-[#00D2FF] tracking-tight leading-[1.05] mt-1 drop-shadow-[0_0_20px_rgba(0,210,255,0.25)]">
              Mengajar untuk<br />Belajar.
            </div>
          </div>

          <p className="text-sm sm:text-[15px] text-[#EEF4F2]/85 font-normal leading-relaxed max-w-lg">
            Sebuah dokumentasi perjalanan PPL saya di SDN 1 Setonopande, tentang bagaimana gerak, pembelajaran, dan manusia bertemu di ruang kelas.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <a href="#praktik" className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#00D2FF] hover:bg-[#38BDF8] text-[#041217] font-sans font-bold text-sm rounded-[3px] transition-all duration-200 shadow-[0_0_20px_rgba(0,210,255,0.45)] hover:shadow-[0_0_28px_rgba(0,210,255,0.7)] hover:scale-[1.02] active:scale-[0.98] group cursor-pointer">
              <span>Lihat Praktik</span><span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">→</span>
            </a>
            <a href="#profil" className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#EEF4F2] hover:text-[#00D2FF] transition-colors py-2 cursor-pointer group">
              <span>Tentang Saya</span><span className="transition-transform duration-200 group-hover:translate-y-0.5 text-[#00D2FF]">↓</span>
            </a>
          </div>
        </motion.div>

        <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col justify-start lg:justify-between items-end h-[360px] sm:h-[420px] lg:h-[480px]">
          <div className="pointer-events-none select-none transform rotate-2 pt-2 sm:pt-4 pr-2 sm:pr-6 z-20">
            <span className="font-handwriting text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-[0.95] block drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              PJOK<br /><span className="text-2xl sm:text-3xl font-light italic">lebih dari</span><br />Olahraga
            </span>
          </div>
          <button
            type="button"
            onClick={() => onOpenPhoto?.(profilePhotoUrl, "Zidan Insafi, S.Pd.", "Zidan Insafi, S.Pd. — Mahasiswa PPG Prajabatan Bidang Studi PJOK di SDN 1 Setonopande, Kediri.")}
            className="absolute inset-0 cursor-pointer z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00D2FF] disabled:cursor-default"
            title="Klik untuk melihat foto profil penuh"
            aria-label="Lihat foto profil Zidan Insafi dalam ukuran penuh"
            disabled={!onOpenPhoto}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[rgba(54,187,211,0.18)] text-[11px] text-[#83969D] font-mono">
        <div className="flex items-center gap-2">
          <span className="text-[#EEF4F2]">Universitas Nusantara PGRI Kediri</span><span className="text-[#00D2FF]">•</span><span>Fase C · Kelas V PJOK</span>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-[#83969D]/80 hidden sm:block">Scroll untuk Eksplorasi ↓</div>
      </div>
    </section>
  );
};
