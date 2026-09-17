import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, Target } from "@/components/ui/icons";
import { TEACHER_DATA } from "@/data/portfolioData";
import { VIDEO_ANALYSIS_DATA, VIDEO_SOURCE_URL, VideoAnalysisPoint } from "@/data/videoAnalysis";

export const VideoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(VIDEO_ANALYSIS_DATA[0]?.id ?? "");
  const [driveReady, setDriveReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const source = VIDEO_SOURCE_URL.trim();
  const isDrive = source.includes("drive.google.com/file/d/");
  const activePoint: VideoAnalysisPoint | undefined = VIDEO_ANALYSIS_DATA.find((point) => point.id === activeTab) ?? VIDEO_ANALYSIS_DATA[0];

  const selectPoint = (point: VideoAnalysisPoint) => {
    setActiveTab(point.id);
    if (videoRef.current && !isDrive) {
      const [minutes, seconds] = point.timestamp.split(":").map(Number);
      videoRef.current.currentTime = (minutes || 0) * 60 + (seconds || 0);
    }
  };

  return (
    <section id="video" className="relative overflow-hidden border-b border-[#D8D1C6] bg-[#F7F3EC] px-6 py-20 text-[#1C252C] sm:px-8 lg:px-12 lg:py-28">
      <img src="assets/aladona/video-paper-texture.webp" alt="" loading="lazy" decoding="async" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-multiply" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.25 }} transition={{ duration: 0.55 }} className="mb-12 flex items-end justify-between gap-6 border-b border-[#D8D1C6] pb-5">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#B55E3B]">04 / tinjauan video</p><h2 className="mt-3 font-serif text-5xl leading-none sm:text-6xl">Membaca praktik</h2></div>
          <p className="hidden max-w-xs text-right text-xs leading-relaxed text-[#6F746B] sm:block">Analisis bertimestamp mengikuti adegan yang terlihat di rekaman praktik Aladona.</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }} className="order-2 lg:order-1">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]"><Target className="h-4 w-4" /> Catatan analisis</div>
            {activePoint && <div className="relative overflow-hidden border border-[#D8D1C6] border-l-2 border-l-[#B55E3B] bg-[#E9DFD2]/65 p-6 sm:p-8"><div className="relative"><div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]"><span>{activePoint.category}</span><span>{activePoint.timestamp}</span></div><p className="mt-7 font-serif text-3xl leading-tight sm:text-4xl">{activePoint.observation}</p><dl className="mt-8 space-y-5 border-t border-[#1C252C]/15 pt-5 text-sm leading-relaxed text-[#6F746B]"><div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]">Dampak</dt><dd className="mt-1">{activePoint.impact}</dd></div><div><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]">Langkah berikutnya</dt><dd className="mt-1">{activePoint.action}</dd></div></dl></div></div>}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }} className="order-1 lg:order-2">
            <div className="relative aspect-video overflow-hidden border border-[#1C252C]/20 bg-[#E9DFD2]">
              {source && isDrive ? (driveReady ? <iframe src={source.replace(/\/view(?:\?.*)?$/, "/preview")} title={`Video praktik ${TEACHER_DATA.name}`} className="h-full w-full" allow="autoplay; fullscreen" /> : <button type="button" onClick={() => setDriveReady(true)} className="group relative h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B55E3B]"><img src="assets/aladona/video-cover-aladona.webp" alt="Sampul video praktik PJOK Aladona" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" /><span className="absolute inset-0 bg-[#1C252C]/35 transition group-hover:bg-[#1C252C]/20" /><span className="absolute inset-0 flex flex-col items-center justify-center text-center"><span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F7F3EC] bg-[#B55E3B] text-[#F7F3EC] shadow-lg"><Play className="h-7 w-7" /></span><span className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[#F7F3EC]">Putar video di Google Drive</span></span></button>) : source ? <video ref={videoRef} src={source} poster="assets/aladona/video-cover-aladona.webp" controls className="h-full w-full object-contain" /> : <div className="flex h-full flex-col items-center justify-center px-6 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B55E3B] text-[#B55E3B]"><Play className="h-6 w-6" /></span><h3 className="mt-5 font-serif text-2xl">Video belum tersedia</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6F746B]">Tambahkan URL video publik atau file lokal setelah izin publikasi Aladona terverifikasi.</p></div>}
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#6F746B]"><span>{isDrive ? "Google Drive / navigasi waktu nonaktif" : source ? "Video lokal / direct URL" : "Fallback aman"}</span><span>Aladona</span></div>

            <div className="mt-10 space-y-2">
              {VIDEO_ANALYSIS_DATA.map((point) => <button key={point.id} type="button" onClick={() => selectPoint(point)} className={`group flex w-full items-center gap-4 border-b px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86345] ${activeTab === point.id ? "border-[#B86345] bg-[#E9DFD2]/75" : "border-[#D8D1C6] hover:border-[#B86345]/50"}`}><span className="font-mono text-xs text-[#B55E3B]">{point.timestamp}</span><span className="min-w-0 flex-1"><span className="block font-serif text-xl">{point.title}</span><span className="mt-1 block truncate text-xs text-[#6F746B]">{point.category}</span></span><ArrowRight className="h-4 w-4 text-[#7D8B7A] transition group-hover:translate-x-1 group-hover:text-[#B55E3B]" /></button>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
