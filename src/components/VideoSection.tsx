import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Target, Lightbulb, BarChart3, Play } from "@/components/ui/icons";
import { VIDEO_ANALYSIS_DATA, VIDEO_SOURCE_URL, VideoAnalysisPoint } from "@/data/videoAnalysis";

export const VideoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ana-01");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoSource = VIDEO_SOURCE_URL.trim();
  const usesGoogleDrive = videoSource.includes("drive.google.com/file/d/");

  const activePoint: VideoAnalysisPoint =
    VIDEO_ANALYSIS_DATA.find((p) => p.id === activeTab) || VIDEO_ANALYSIS_DATA[0];

  const parseSeconds = (timestamp: string): number => {
    const parts = timestamp.split(":").map(Number);
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    return 0;
  };

  const handleSelectTab = (item: VideoAnalysisPoint) => {
    setActiveTab(item.id);
    if (videoRef.current) {
      const timeInSec = parseSeconds(item.timestamp);
      videoRef.current.currentTime = timeInSec;
    }
  };

  return (
    <section
      id="video"
      className="relative py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-[#030C0F] text-[#EEF4F2] border-b border-[rgba(219,238,241,0.1)] overflow-hidden"
    >
      {/* Visual Foundation: bg-04-praktik.png */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img
          src="assets/backgrounds/bg-04-praktik.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#030C0F]/45 backdrop-blur-[0.5px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute left-[38%] top-[18%] hidden select-none lg:block">
        <div className="font-sans text-[clamp(8rem,18vw,16rem)] font-black leading-none tracking-[-0.12em] text-transparent opacity-20" style={{ WebkitTextStroke: "1px rgba(0,229,255,.42)" }}>04</div>
        <div className="-mt-5 ml-7 font-plex text-[10px] uppercase tracking-[0.7em] text-[#00D2FF]/35">GERAK · OBSERVASI · REFLEKSI</div>
      </div>

      {/* Top-Right Decorative Text matching screenshot */}
      <div className="absolute top-8 right-8 font-plex text-[10px] sm:text-xs tracking-[0.3em] text-[#83969D]/60 text-right font-medium leading-relaxed pointer-events-none select-none z-10 hidden sm:block uppercase">
        SEHAT<br />
        AKTIF<br />
        KARAKTER
      </div>

      {/* Bottom-Right Watermark matching screenshot */}
      <div className="absolute right-6 bottom-16 font-plex text-xs tracking-[0.4em] text-[#83969D]/25 flex flex-col items-center pointer-events-none select-none z-10 hidden lg:flex space-y-1 uppercase">
        <span>P</span>
        <span>J</span>
        <span>O</span>
        <span>K</span>
      </div>

      {/* Bottom-Left Handwriting matching screenshot */}
      <div className="absolute bottom-10 left-8 hidden lg:flex items-end gap-6 pointer-events-none select-none z-10">
        <span className="font-handwriting text-3xl xl:text-4xl text-[#EEF4F2]/80 -rotate-2 block max-w-xs leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Pendidikan Jasmani untuk Manusia yang Lebih Utuh
        </span>
        <div className="flex flex-col gap-0.5 font-plex text-[9px] text-[#83969D]/70 tracking-[0.25em] uppercase border-l border-[rgba(54,187,211,0.25)] pl-3">
          <span>DISIPLIN</span>
          <span>GERAK</span>
          <span>KARAKTER</span>
          <span>PRESTASI</span>
          <div className="w-8 h-[1px] bg-[#36BBD3]/40 mt-1" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: Header & 4 Interactive Tabs */}
          <motion.div
            initial={{ x: -24, scale: 0.985 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.18 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              {/* Category Tag */}
              <div className="flex items-center gap-3 font-plex text-xs text-[#00D2FF] font-semibold tracking-wider uppercase mb-2">
                <span>ANALISIS VIDEO MENGAJAR</span>
                <div className="h-[1px] w-12 bg-[#00D2FF]/40" />
              </div>

              {/* Main Heading matching image */}
              <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#EEF4F2] tracking-tight leading-[1.1] mb-3">
                Refleksi Observatif<br />
                <span className="font-serif italic font-normal text-[#00D2FF]">Pelaksanaan Pembelajaran</span>
              </h2>

              {/* Subheading text matching image */}
              <p className="text-xs sm:text-sm text-[#83969D] font-light leading-relaxed max-w-md">
                Menganalisis setiap momen pembelajaran untuk tumbuh menjadi pendidik yang lebih baik.
              </p>
            </div>

            {/* List of 4 Timestamp Cards */}
            <div className="space-y-3">
              {VIDEO_ANALYSIS_DATA.map((item) => {
                const isSelected = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectTab(item)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-[6px] border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? "bg-[#071B22]/90 border-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.2)] text-white"
                        : "bg-[#041217]/80 border-[rgba(54,187,211,0.18)] hover:border-[#00D2FF]/50 hover:bg-[#071B22]/60 text-[#EEF4F2]/80"
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                      <span
                        className={`font-plex text-xs font-bold px-2 py-1 rounded-[3px] shrink-0 ${
                          isSelected
                            ? "bg-[#00D2FF] text-[#041217]"
                            : "bg-[#0A222C] text-[#00D2FF] border border-[#00D2FF]/20 group-hover:bg-[#00D2FF]/20"
                        }`}
                      >
                        {item.timestamp}
                      </span>
                      <div className="min-w-0">
                        <span className="font-plex text-[9.5px] text-[#83969D] uppercase tracking-wider block font-semibold truncate mb-0.5">
                          {item.category}
                        </span>
                        <h4
                          className={`font-sans font-bold text-xs sm:text-sm leading-snug line-clamp-1 ${
                            isSelected ? "text-[#EEF4F2]" : "text-[#EEF4F2]/85 group-hover:text-white"
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? "text-[#00D2FF] translate-x-1" : "text-[#83969D]/40 group-hover:text-[#83969D]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Large Frame Card Container matching screenshot */}
          <motion.div
            initial={{ y: 28, scale: 0.985 }}
            whileInView={{ y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.14 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative flex flex-col justify-between space-y-4 rounded-[18px] border border-[rgba(54,187,211,0.42)] bg-[#041217]/95 p-4 shadow-[0_0_35px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,229,255,.08)] backdrop-blur-md sm:space-y-5 sm:p-6">
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-[18px] border border-[#00E5FF]/0"
                animate={{ borderColor: ["rgba(0,229,255,0)", "rgba(0,229,255,.52)", "rgba(0,229,255,0)"], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePoint.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Header inside Card */}
                  <div className="flex items-center justify-between gap-4 border-b border-[rgba(54,187,211,0.15)] pb-3.5">
                    <h3 className="font-sans font-bold text-lg sm:text-2xl text-[#EEF4F2] tracking-tight">
                      {activePoint.title}
                    </h3>
                    <span className="font-plex text-xs font-bold text-[#041217] bg-[#00D2FF] px-3 py-1 rounded-[3px] shrink-0 shadow-[0_0_12px_rgba(0,210,255,0.35)]">
                      @ {activePoint.timestamp}
                    </span>
                  </div>

                  {/* Video Player Container with annotations */}
                  <div className="relative rounded-[6px] overflow-hidden bg-black border border-[rgba(54,187,211,0.3)] aspect-video shadow-inner group">
                    {videoSource ? (
                      usesGoogleDrive ? (
                        <a
                          href={videoSource}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Buka rekaman praktik mengajar di Google Drive"
                          className="group absolute inset-0 block overflow-hidden bg-[#041217] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00D2FF]"
                        >
                          <img
                            src="assets/backgrounds/bg-04-praktik.png"
                            alt="Preview rekaman praktik mengajar PJOK"
                            className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-75"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-[#041217]/35 via-[#041217]/55 to-[#041217]/90" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#00D2FF]/70 bg-[#00D2FF]/15 text-[#00D2FF] shadow-[0_0_28px_rgba(0,210,255,.42)] transition duration-300 group-hover:scale-110 group-hover:bg-[#00D2FF]/25">
                              <Play className="ml-1 h-7 w-7 fill-current" />
                            </span>
                            <span className="font-sans text-sm font-bold text-[#EEF4F2]">Buka Video di Google Drive</span>
                            <span className="font-plex text-[10px] uppercase tracking-[0.2em] text-[#AFC1C7]">Klik untuk menonton rekaman lengkap</span>
                          </div>
                        </a>
                      ) : (
                        <video
                          ref={videoRef}
                          key="ppl-video-player"
                          src={videoSource}
                          poster="assets/backgrounds/bg-04-praktik.png"
                          controls
                          preload="metadata"
                          playsInline
                          aria-label="Rekaman praktik mengajar PJOK di SDN 1 Setonopande"
                          className="h-full w-full object-cover"
                        >
                          Browser Anda tidak mendukung pemutar video HTML5.
                        </video>
                      )
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#041217]/95 p-6 text-center">
                        <div className="max-w-sm">
                          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#00D2FF]/40 bg-[#00D2FF]/10 text-[#00D2FF]">
                            <Play className="ml-0.5 h-5 w-5" />
                          </span>
                          <p className="mt-4 font-sans text-sm font-semibold text-[#EEF4F2]">Rekaman video segera tersedia</p>
                          <p className="mt-2 text-xs leading-relaxed text-[#83969D]">
                            Tautan Google Drive akan ditempatkan di sini tanpa mengubah susunan analisis.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Overlaid Handwriting Text (Top Left) */}
                    <div className="absolute top-4 left-5 pointer-events-none select-none z-10 hidden sm:block">
                      <span className="font-handwriting text-2xl lg:text-3xl text-white font-bold block drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] opacity-90 -rotate-2">
                        PJOK<br />
                        <span className="text-xl font-normal italic">lebih dari</span><br />
                        Olahraga
                      </span>
                    </div>

                    {/* Overlaid Handwriting Text (Top Right) */}
                    <div className="absolute top-4 right-5 pointer-events-none select-none z-10 hidden sm:block text-right">
                      <span className="font-handwriting text-2xl lg:text-3xl text-white font-bold block drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] opacity-90 rotate-2 tracking-wide">
                        GERAK<br />
                        BELAJAR<br />
                        BERTUMBUH
                      </span>
                    </div>
                  </div>

                  {/* 2-Column Grid: Fakta Teramati & Dampak Analisis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {/* Box 1: Fakta Teramati */}
                    <div className="bg-[#061820]/90 border border-[rgba(54,187,211,0.2)] rounded-[4px] p-4 space-y-2">
                      <div className="flex items-center gap-2 font-plex text-xs text-[#00D2FF] font-semibold">
                        <Target className="w-4 h-4 text-[#00D2FF] shrink-0" />
                        <span>Fakta Teramati:</span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#EEF4F2]/90 leading-relaxed font-light">
                        "{activePoint.observation}"
                      </p>
                    </div>

                    {/* Box 2: Dampak & Analisis */}
                    <div className="bg-[#061820]/90 border border-[rgba(54,187,211,0.2)] rounded-[4px] p-4 space-y-2">
                      <div className="flex items-center gap-2 font-plex text-xs text-[#00D2FF] font-semibold">
                        <Lightbulb className="w-4 h-4 text-[#00D2FF] shrink-0" />
                        <span>Dampak & Analisis:</span>
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#EEF4F2]/90 leading-relaxed font-light">
                        {activePoint.impact}
                      </p>
                    </div>
                  </div>

                  {/* Box 3: Tindak Lanjut (Full Width) */}
                  <div className="bg-[#0A242D]/90 border border-[rgba(0,210,255,0.25)] rounded-[4px] p-4 space-y-2">
                    <div className="flex items-center gap-2 font-plex text-xs text-[#00D2FF] font-semibold">
                      <BarChart3 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                      <span>Tindak Lanjut:</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#EEF4F2]/90 leading-relaxed font-light">
                      {activePoint.action}
                    </p>
                  </div>

                  {/* Card Footer Bar */}
                  <div className="flex items-center justify-between font-plex text-[10px] text-[#83969D] pt-2 border-t border-[rgba(219,238,241,0.1)] uppercase">
                    <span>PPL DOKUMENTASI</span>
                    <span>SDN 1 SETONOPANDE · KEDIRI</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
