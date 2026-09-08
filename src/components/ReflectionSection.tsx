import React from "react";
import { motion } from "motion/react";
import { REFLECTIONS } from "@/data/portfolioData";

export const ReflectionSection: React.FC = () => {
  const developmentPoints = [
    {
      label: "KEKUATAN",
      title: "Hadir, adaptif, dan komunikatif",
      body: "Saya mampu membangun kedekatan dengan peserta didik, menyampaikan demonstrasi secara sederhana, serta menyesuaikan alat dan tantangan ketika kondisi lapangan berubah.",
      accent: "#00D2FF",
    },
    {
      label: "KELEMAHAN",
      title: "Konsistensi waktu dan asesmen",
      body: "Saya masih perlu lebih disiplin membagi waktu transisi dan mendokumentasikan hasil asesmen formatif agar umpan balik tidak berhenti pada pengamatan sesaat.",
      accent: "#6F9FB5",
    },
    {
      label: "RENCANA TINDAK LANJUT",
      title: "Mengembangkan praktik secara terukur",
      body: "Saya akan menggunakan time-boxing pada setiap fase pembelajaran, menyiapkan rubrik ringkas, meminta umpan balik, dan menulis refleksi mingguan sebagai dasar perbaikan berikutnya.",
      accent: "#8DE7F4",
    },
  ];

  return (
    <section
      id="refleksi"
      className="relative w-full overflow-hidden border-b border-[rgba(219,238,241,0.1)] bg-[#041217] px-6 py-16 text-[#EEF4F2] scroll-mt-20 sm:px-12 sm:py-24 lg:px-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <img
          src="assets/backgrounds/bg-07-refleksi-nw.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041217]/65 via-[#041217]/30 to-[#041217]/55" />
        <div className="absolute -right-8 top-8 font-sans text-[clamp(12rem,26vw,28rem)] font-black leading-none tracking-[-0.12em] text-transparent opacity-20" style={{ WebkitTextStroke: "1px rgba(0,210,255,.5)" }}>07</div>
        <div className="absolute bottom-24 left-8 font-plex text-[10px] uppercase tracking-[0.7em] text-[#00D2FF]/25 sm:left-16 sm:text-xs">PENGALAMAN · PEMBELAJARAN · MAKNA</div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ x: -20, scale: 0.985 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="font-plex text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">07. REFLEKSI</div>
            <h2 className="font-sans text-4xl font-extrabold leading-[1.06] tracking-tight text-[#EEF4F2] sm:text-5xl lg:text-[56px]">
              Refleksi terhadap<br />Model Guru yang Dituju
            </h2>
            <p className="max-w-md text-xs font-light leading-relaxed text-[#B5C4C9] sm:text-sm">
              Catatan mendalam tentang arah profesional, filosofi mengajar, evaluasi diri, dan langkah pengembangan yang akan saya jalankan.
            </p>
            <div className="h-[2.5px] w-12 rounded-full bg-[#00D2FF] shadow-[0_0_10px_rgba(0,210,255,0.7)]" />
          </motion.div>

          <motion.blockquote
            initial={{ y: 20, scale: 0.985 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-l border-[#00D2FF]/40 pl-6 font-serif text-2xl font-normal leading-[1.3] tracking-tight text-[#EEF4F2] sm:text-3xl lg:col-span-7 lg:text-[38px]"
          >
            “Setiap pengalaman mengajar adalah kesempatan untuk belajar menjadi{" "}
            <span className="font-bold italic text-[#00D2FF] drop-shadow-[0_0_14px_rgba(0,210,255,0.35)]">
              manusia yang lebih baik.
            </span>”
            <footer className="mt-4 font-plex text-xs not-italic text-[#93A5AD] sm:text-sm">— Zidan Insafi, S.Pd.</footer>
          </motion.blockquote>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[rgba(54,187,211,0.16)] bg-[rgba(54,187,211,0.16)] md:grid-cols-3">
          {REFLECTIONS.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ y: 16, scale: 0.985 }}
              whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="border border-[#36BBD3]/25 p-5 shadow-[0_18px_45px_rgba(0,0,0,.18)] backdrop-blur-xl sm:p-6"
              style={{ backgroundColor: "rgba(6,21,26,.46)" }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-plex text-2xl font-semibold text-[#00D2FF]">{item.number}</span>
                <span className="h-px w-10 bg-[#00D2FF]/35" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-bold leading-snug text-[#F4FBFB]">{item.title}</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-[#D2E0E3] sm:text-[13px]">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
          {developmentPoints.map((item, index) => (
            <motion.article
              key={item.label}
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-md border border-[rgba(54,187,211,0.2)] bg-[#061820]/70 p-5 backdrop-blur-md sm:p-6"
            >
              <div className="absolute inset-y-0 left-0 w-[2px]" style={{ backgroundColor: item.accent }} aria-hidden="true" />
              <div className="flex items-center justify-between gap-3">
                <span className="font-plex text-[10px] font-bold tracking-[0.2em]" style={{ color: item.accent }}>{item.label}</span>
                <span className="font-plex text-xs text-[#83969D]">0{index + 1}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-[#F4FBFB]">{item.title}</h3>
              <p className="mt-3 text-xs font-light leading-relaxed text-[#C2D1D5] sm:text-[13px]">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[rgba(219,238,241,0.1)] pt-7 sm:flex-row sm:items-end">
          <div>
            <span className="block -rotate-2 font-handwriting text-3xl leading-tight text-white/95 sm:text-4xl">Mengajar dengan hadir, refleksi dengan jujur.</span>
            <div className="mt-1 h-[1.5px] w-48 bg-gradient-to-r from-[#00D2FF] to-transparent sm:w-64" />
          </div>
          <div className="text-left font-plex text-[9px] uppercase tracking-[0.2em] text-[#83969D] sm:text-right sm:text-[10px]">
            <div>Pengalaman · Pembelajaran · Pertumbuhan · Makna</div>
            <div className="pt-1 font-semibold tracking-[0.25em] text-[#00D2FF]/80">PPL lebih dari sekadar praktik</div>
          </div>
        </div>
      </div>
    </section>
  );
};
