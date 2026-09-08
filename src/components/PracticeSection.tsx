import React from "react";
import { motion } from "motion/react";
import { PracticeCard } from "@/components/PracticeCard";

interface PracticeSectionProps {
  onOpenPractice: (practiceId: string) => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({ onOpenPractice }) => {
  return (
    <section
      id="praktik"
      className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-[#030C0F] text-[#EEF4F2] border-b border-[rgba(219,238,241,0.1)] overflow-hidden"
    >
      {/* VISUAL FOUNDATION: bg-03-praktik.png EXACT MATCH FROM REFERENCE IMAGE */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img
          src="assets/backgrounds/bg-03-praktik.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Vignette Layer */}
        <div className="absolute inset-0 bg-[#030C0F]/25 backdrop-blur-[0.5px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-[5%] top-[24%] hidden select-none lg:block">
        <div className="font-sans text-[clamp(10rem,20vw,19rem)] font-black leading-none tracking-[-0.14em] text-transparent opacity-20" style={{ WebkitTextStroke: "1px rgba(0,229,255,.38)" }}>03</div>
        <div className="-mt-4 mr-3 text-right font-plex text-[10px] uppercase tracking-[0.7em] text-[#00D2FF]/35">PRAKTIK · GERAK · KARAKTER</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* SECTION HEADER & TITLE ROW MATCHING REFERENCE IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          <motion.div
            initial={{ y: 15, scale: 0.985 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            {/* Tagline / Section Number */}
            <div className="font-plex text-xs text-[#36BBD3] font-semibold tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#36BBD3]" />
              <span>03 . PRAKTIK MENGAJAR</span>
            </div>

            {/* Giant Title with Handwriting Accent in middle */}
            <div className="relative">
              <h2 className="font-sans font-bold text-4xl sm:text-6xl text-[#EEF4F2] tracking-tight leading-[0.98]">
                Praktik<br />
                Mengajar.
              </h2>

              {/* Editorial Handwriting Accent Overlay matching reference */}
              <div className="absolute left-[240px] sm:left-[310px] top-[10px] sm:top-[18px] pointer-events-none transform -rotate-6 hidden sm:block">
                <span className="font-handwriting text-2xl sm:text-3xl text-[#EEF4F2] leading-tight block drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] opacity-95">
                  Dari<br />
                  Pembelajaran<br />
                  Menuju<br />
                  Perubahan
                </span>
              </div>
            </div>

            {/* Sub-description matching reference */}
            <p className="text-xs sm:text-sm text-[#83969D] font-light leading-relaxed max-w-xl">
              Dua rancangan pembelajaran yang saya gunakan selama praktik mengajar mandiri di SDN 1 Setonopande.
            </p>
          </motion.div>

          {/* Right Micro Watermark / Accent Text matching Reference Image */}
          <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-between self-stretch text-right font-plex text-[10px] text-[#83969D] tracking-widest uppercase space-y-2">
            <div className="space-y-1">
              <div>GERAK</div>
              <div>DISIPLIN</div>
              <div>KERJASAMA</div>
              <div>PRESTASI</div>
            </div>

            {/* Bottom Left Corner Graphic Accent Text inside Background */}
            <div className="font-handwriting text-xl text-white/40 leading-none transform -rotate-3 text-left w-full pt-12 pointer-events-none select-none">
              Olahraga<br />
              Membangun<br />
              Karakter
            </div>
          </div>
        </div>

        {/* 2-COLUMN CARDS GRID MATCHING REFERENCE FRAME & BADGES */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-4">
          {/* Card 01 */}
          <PracticeCard
            number="01"
            title="Teknik Dasar Mengoper Bola dengan Kaki Bagian Dalam"
            badges={["PJOK", "Fase C", "Kelas V"]}
            description="Pembelajaran teknik passing kaki bagian dalam yang dirancang untuk meningkatkan kualitas gerak siswa melalui demonstrasi, latihan berpasangan, dan asesmen bertahap."
            coverUrl="assets/covers/cover-praktik-01.png"
            pages="9 halaman"
            duration="2 JP · 30 menit"
            onOpen={() => onOpenPractice("praktik-01")}
            delay={0}
          />

          {/* Card 02 */}
          <PracticeCard
            number="02"
            title="Gerak Dasar Manipulatif melalui Aktivitas Empat Pos"
            badges={["PJOK", "Fase C", "Kelas V", "PSE"]}
            description="Pembelajaran gerak manipulatif melalui empat pos aktivitas dengan pendekatan bermain dan asesmen yang dilaksanakan secara bertahap."
            coverUrl="assets/covers/cover-praktik-02.png"
            pages="18 halaman"
            duration="3 JP · 105 menit"
            onOpen={() => onOpenPractice("praktik-02")}
            delay={0.15}
          />
        </div>

        {/* BOTTOM METADATA FOOTER persis di gambar acuan */}
        <div className="pt-8 border-t border-[rgba(219,238,241,0.08)] flex justify-end">
          <div className="font-plex text-[10px] text-[#83969D] tracking-widest uppercase flex items-center gap-3">
            <span>SDN 1 SETONOPANDE</span>
            <span>—</span>
            <span>KEDIRI</span>
          </div>
        </div>
      </div>
    </section>
  );
};
