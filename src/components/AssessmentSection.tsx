import React from "react";
import { FileText, BarChart3, ArrowRight } from "@/components/ui/icons";
import { motion } from "motion/react";

interface AssessmentProps {
  onOpenRubric?: (docId?: "penilaian-1" | "penilaian-2") => void;
}

export const AssessmentSection: React.FC<AssessmentProps> = ({ onOpenRubric }) => {
  return (
    <div id="penilaian" className="flex flex-col justify-between h-full space-y-6">
      {/* Section Header */}
      <div>
        <div className="font-plex text-xs font-bold text-[#0288D1] tracking-widest uppercase mb-3 flex items-center gap-4">
          <span>06.</span>
          <span className="text-[#132027]/70 font-semibold">PENILAIAN</span>
          <div className="flex-1 h-0.5 bg-[#36BBD3] rounded-full shadow-[0_0_8px_rgba(54,187,211,0.5)]" />
        </div>
        <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#132027] tracking-tight leading-[1.12] mb-3">
          Asesmen untuk <br />
          <span className="italic font-normal">Pembelajaran</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#132027]/80 font-normal leading-relaxed max-w-md">
          Lembar orientasi dan observasi yang membantu memahami tata kelola sekolah serta lingkungan belajar selama PPL.
        </p>
      </div>

      {/* Visual Mockup Collage matching Reference */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
        
        {/* Left Assessment Card: Rubrik Unjuk Kerja Clipboard */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onOpenRubric?.("penilaian-1")}
          className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[rgba(16,35,43,0.12)] bg-white/85 p-3 text-left shadow-md backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0288D1] focus-visible:ring-offset-2"
          aria-label="Buka LK1 Orientasi dan Observasi Manajemen Sekolah"
        >
          {/* Clipboard Preview Graphic */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#FAF9F5] border border-black/10 p-2.5 shadow-inner flex flex-col justify-between">
            {/* Top Clip */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-neutral-700 rounded-b-sm shadow-xs flex items-center justify-center">
              <div className="w-5 h-0.5 bg-neutral-400 rounded-full" />
            </div>

            <div className="pt-2 text-center">
              <span className="font-plex text-[8.5px] font-bold text-[#132027] tracking-wider uppercase block">
                LEMBAR KERJA 01
              </span>
              <span className="font-plex text-[7.5px] text-[#132027]/70 uppercase block">
                ORIENTASI & OBSERVASI
              </span>
            </div>

            {/* Rubric Matrix Mockup */}
            <div className="w-full border border-black/15 rounded text-[7.5px] font-plex overflow-hidden my-auto">
              <div className="grid grid-cols-5 bg-neutral-100 font-bold border-b border-black/10 p-0.5 text-center text-[7px]">
                <div className="col-span-2 text-left pl-1">Aspek Orientasi</div>
                <div className="col-span-3">Interpretasi</div>
              </div>
              <div className="grid grid-cols-5 border-b border-black/5 p-0.5 text-[6.5px] items-center">
                <div className="col-span-2 truncate pl-1 text-left">Visi & Misi</div>
                <div className="col-span-3 text-center text-[#0288D1]">Terpetakan</div>
              </div>
              <div className="grid grid-cols-5 border-b border-black/5 p-0.5 text-[6.5px] items-center bg-blue-50/40">
                <div className="col-span-2 truncate pl-1 text-left">Tata Kelola</div>
                <div className="col-span-3 text-center text-[#0288D1]">Teramati</div>
              </div>
              <div className="grid grid-cols-5 p-0.5 text-[6.5px] items-center">
                <div className="col-span-2 truncate pl-1 text-left">Sarana</div>
                <div className="col-span-3 text-center text-[#0288D1]">Terdokumentasi</div>
              </div>
            </div>

            {/* Handwriting annotation */}
            <div className="text-right pointer-events-none transform -rotate-3 select-none">
              <span className="font-handwriting text-xs text-[#006064] font-bold">
                Asesmen Menguatkan Potensi
              </span>
            </div>
          </div>

          {/* Bottom Card Bar */}
          <div className="flex items-start gap-2.5 pt-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#36BBD3]/15 text-[#0288D1] flex items-center justify-center shrink-0 mt-0.5">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="font-plex text-[9px] font-bold text-[#0288D1] uppercase tracking-wider block">
                Penilaian 01 · LK1
              </span>
              <h4 className="font-sans font-bold text-xs text-[#132027] leading-tight">
                Orientasi Manajemen Sekolah
              </h4>
              <p className="text-[9.5px] text-[#132027]/70 leading-tight mt-0.5">
                Konteks organisasi dan pengelolaan sekolah.
              </p>
            </div>
          </div>
        </motion.button>
        {/* Right Assessment Card: Booklet Asesmen Pembelajaran PJOK */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.52, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => onOpenRubric?.("penilaian-2")}
          className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-[rgba(16,35,43,0.12)] bg-white/85 p-3 text-left shadow-md backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0288D1] focus-visible:ring-offset-2"
          aria-label="Buka LK2 Observasi Lingkungan Belajar"
        >
          {/* Booklet Cover Mockup */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-[#E0F7FA] border border-black/10 p-2.5 shadow-inner flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="font-sans text-[8px] font-black text-[#D32F2F] tracking-tight">PPG</span>
                <span className="font-sans text-[7px] font-semibold text-[#0288D1]">Calon Guru</span>
              </div>
              <div className="text-[6px] font-plex text-[#132027]/60 text-right leading-tight">
                PRAKTIK<br />REFLEKSI<br />DAMPAK
              </div>
            </div>

            <div className="my-auto">
              <span className="font-sans font-black text-[11px] text-[#132027] uppercase tracking-tight block leading-tight">
                OBSERVASI<br />LINGKUNGAN BELAJAR
              </span>
            </div>

            {/* Silhouettes Graphic */}
            <div className="relative h-8 flex items-end justify-center gap-2 opacity-80">
              <div className="w-4 h-6 bg-[#006064]/80 rounded-t-full" />
              <div className="w-5 h-8 bg-[#00838F] rounded-t-full" />
              <div className="w-3.5 h-5 bg-[#0288D1]/70 rounded-t-full" />
            </div>
          </div>

          {/* Bottom Card Bar */}
          <div className="flex items-start gap-2.5 pt-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#36BBD3]/15 text-[#0288D1] flex items-center justify-center shrink-0 mt-0.5">
              <BarChart3 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-plex text-[9px] font-bold text-[#0288D1] uppercase tracking-wider block">
                Penilaian 02 · LK2
              </span>
              <h4 className="font-sans font-bold text-xs text-[#132027] leading-tight">
                Observasi Lingkungan Belajar
              </h4>
              <p className="text-[9.5px] text-[#132027]/70 leading-tight mt-0.5">
                Kondisi fisik, fasilitas, dan budaya sekolah.
              </p>
            </div>
          </div>
        </motion.button>
      </div>
      {/* Action CTA Button */}
      <div className="flex items-center gap-4 pt-2">
        <button
          type="button"
          onClick={() => onOpenRubric?.("penilaian-1")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00E5FF] hover:bg-[#00B0FF] text-[#041217] font-sans font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0288D1] focus-visible:ring-offset-2"
        >
          <span>Lihat Instrumen</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-[#132027]/60 font-plex text-[10px] tracking-wider uppercase">
          <div className="w-6 h-[1px] bg-[#132027]/30" />
          <span>ASESMEN HARI INI UNTUK PEMBELAJARAN LEBIH BAIK</span>
        </div>
      </div>
    </div>
  );
};
