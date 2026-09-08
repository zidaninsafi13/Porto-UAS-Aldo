import React, { useEffect, useState } from "react";
import { PRACTICES, PRACTICE_01_SEQUENCES, MOVEMENT_STATIONS } from "@/data/portfolioData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, Download, ExternalLink, X } from "@/components/ui/icons";

interface PracticePreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  practiceId: string;
}

export const PracticePreviewDialog: React.FC<PracticePreviewDialogProps> = ({
  isOpen,
  onClose,
  practiceId,
}) => {
  const [activeTab, setActiveTab] = useState<"analysis" | "pdf">("analysis");
  const [activeAnalysisNav, setActiveAnalysisNav] = useState("ringkasan");

  const practice = PRACTICES.find((p) => p.id === practiceId) || PRACTICES[0];
  const isPractice01 = practice.id === "praktik-01";

  useEffect(() => {
    if (!isOpen) return;
    setActiveTab("analysis");
    setActiveAnalysisNav("ringkasan");
  }, [isOpen, practiceId]);

  const navItems = [
    { id: "ringkasan", label: "Ringkasan" },
    { id: "perencanaan", label: "Perencanaan" },
    { id: "materi", label: "Materi" },
    { id: "media", label: "Media" },
    { id: "asesmen", label: "Asesmen" },
    { id: "detail", label: isPractice01 ? "Tahapan Gerak" : "Empat Pos Gerak" },
    { id: "refleksi", label: "Refleksi" },
  ];

  const scrollToSection = (id: string) => {
    setActiveAnalysisNav(id);
    const element = document.getElementById(`modal-sec-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showClose={false}
        srTitle={`Pratinjau Modul Ajar — ${practice.title}`}
        className="max-w-[min(96vw,1480px)] w-[96vw] h-[94vh] max-h-[94vh] p-0 flex flex-col bg-[#07171D] text-[#EEF4F2] border border-[rgba(54,187,211,0.28)] rounded-2xl overflow-hidden shadow-[0_36px_110px_rgba(0,0,0,.7)]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 border-b border-[rgba(54,187,211,0.18)] bg-[#0A181E] shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="font-plex text-xs text-[#36BBD3] font-semibold px-2 py-0.5 bg-[#36BBD3]/10 border border-[#36BBD3]/30 rounded-[2px] shrink-0">
              PRAKTIK {practice.number}
            </span>
            <span className="text-[#83969D] text-xs hidden sm:inline">•</span>
            <h3 className="font-sans font-semibold text-sm sm:text-base text-[#EEF4F2] truncate">
              {practice.title}
            </h3>
            <span className="hidden rounded-full border border-white/10 px-2 py-1 font-plex text-[8px] uppercase tracking-wider text-white/45 md:inline">
              {practice.pdfPages} · {practice.timeAllocation}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={practice.pdfUrl}
              download
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-plex text-[#83969D] hover:text-[#EEF4F2] hover:bg-[#10232B] border border-[rgba(219,238,241,0.15)] rounded-[2px] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#36BBD3]" />
              <span>Unduh PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-[2px] text-[#83969D] hover:text-[#EEF4F2] hover:bg-[#10232B] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="lg:hidden flex border-b border-[rgba(54,187,211,0.15)] bg-[#07171D] shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("analysis")}
            className={`flex-1 py-2.5 text-xs font-sans font-bold tracking-wide transition-colors ${
              activeTab === "analysis"
                ? "text-[#36BBD3] border-b-2 border-[#36BBD3] bg-[#36BBD3]/5"
                : "text-[#83969D]"
            }`}
          >
            Analisis
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pdf")}
            className={`flex-1 py-2.5 text-xs font-sans font-bold tracking-wide transition-colors ${
              activeTab === "pdf"
                ? "text-[#36BBD3] border-b-2 border-[#36BBD3] bg-[#36BBD3]/5"
                : "text-[#83969D]"
            }`}
          >
            Modul PDF
          </button>
        </div>

        {/* Main Body: Desktop Split View */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row overflow-hidden">
          {/* Left Side: Sub-sidebar + Content Pane */}
          <div
            className={`w-full lg:w-[48%] flex flex-row lg:border-r border-[rgba(54,187,211,0.2)] bg-[#07171D] overflow-hidden ${
              activeTab === "pdf" ? "hidden lg:flex" : "flex"
            }`}
          >
            {/* Desktop Inner Left Vertical Sidebar */}
            <div className="hidden sm:flex flex-col w-32 shrink-0 border-r border-[rgba(54,187,211,0.15)] bg-[#081B22] p-3 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-[2px] text-xs font-sans transition-all cursor-pointer ${
                    activeAnalysisNav === item.id
                      ? "bg-[#102B36] text-[#36BBD3] font-bold border-l-2 border-[#36BBD3]"
                      : "text-[#83969D] hover:text-[#EEF4F2]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Scrollable Analysis Narrative Pane */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-xs text-[#EEF4F2]">
              {/* Ringkasan */}
              <div id="modal-sec-ringkasan" className="relative space-y-3 scroll-mt-4 rounded-xl border border-[#36BBD3]/18 bg-[#36BBD3]/[0.055] p-4 overflow-hidden">
                <span className="absolute -right-2 -top-7 font-sans text-7xl font-black text-white/[0.035]">{practice.number}</span>
                <span className="font-plex text-[10px] font-bold text-[#63D9E8] tracking-[0.2em] uppercase block">
                  Ringkasan Modul
                </span>
                <p className="text-xs text-[#83969D] leading-relaxed font-light">
                  {isPractice01
                    ? "Pembelajaran teknik passing kaki bagian dalam yang dirancang untuk meningkatkan kualitas gerak siswa melalui demonstrasi, latihan berpasangan, dan asesmen bertahap."
                    : "Pembelajaran gerak manipulatif melalui empat pos aktivitas dengan pilihan tingkat tantangan dan asesmen yang dilakukan secara bertahap."}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-plex text-[8px] uppercase tracking-wider text-white/55">{practice.phase} · {practice.grade}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-plex text-[8px] uppercase tracking-wider text-white/55">{practice.pdfPages}</span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 font-plex text-[8px] uppercase tracking-wider text-white/55">{practice.timeAllocation}</span>
                </div>
              </div>

              {/* 01 Perencanaan */}
              <div id="modal-sec-perencanaan" className="analysis-panel space-y-2 scroll-mt-4">
                <div className="font-sans text-xs font-bold text-[#EEF4F2] tracking-wider uppercase flex items-center gap-2">
                  <span>01</span>
                  <span>PERENCANAAN</span>
                </div>
                <p className="text-xs text-[#83969D] leading-relaxed font-light">
                  {practice.analysis.planning}
                </p>
              </div>

              {/* 02 Materi */}
              <div id="modal-sec-materi" className="analysis-panel space-y-2 scroll-mt-4">
                <div className="font-sans text-xs font-bold text-[#EEF4F2] tracking-wider uppercase flex items-center gap-2">
                  <span>02</span>
                  <span>MATERI</span>
                </div>
                <p className="text-xs text-[#83969D] leading-relaxed font-light">
                  {practice.analysis.material}
                </p>
              </div>

              {/* 03 Media */}
              <div id="modal-sec-media" className="analysis-panel space-y-2 scroll-mt-4">
                <div className="font-sans text-xs font-bold text-[#EEF4F2] tracking-wider uppercase flex items-center gap-2">
                  <span>03</span>
                  <span>MEDIA</span>
                </div>
                <p className="text-xs text-[#83969D] leading-relaxed font-light">
                  {practice.analysis.media}
                </p>
              </div>

              {/* 04 Asesmen */}
              <div id="modal-sec-asesmen" className="analysis-panel space-y-2 scroll-mt-4">
                <div className="font-sans text-xs font-bold text-[#EEF4F2] tracking-wider uppercase flex items-center gap-2">
                  <span>04</span>
                  <span>ASESMEN</span>
                </div>
                <p className="text-xs text-[#83969D] leading-relaxed font-light">
                  {practice.analysis.assessment}
                </p>
              </div>

              {/* Detail Gerak / Pos */}
              <div id="modal-sec-detail" className="analysis-panel space-y-3 scroll-mt-4">
                <span className="font-sans text-xs font-bold text-[#36BBD3] tracking-wider uppercase block">
                  {isPractice01 ? "TAHAPAN GERAK" : "EMPAT POS GERAK"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {isPractice01
                    ? PRACTICE_01_SEQUENCES.map((seq) => (
                        <div key={seq.step} className="p-3 bg-[#10232B] border border-[rgba(219,238,241,0.08)] rounded-[2px]">
                          <span className="font-plex text-xs text-[#36BBD3] font-semibold block mb-1">
                            {seq.step}. {seq.title}
                          </span>
                          <p className="text-[11px] text-[#83969D] leading-relaxed font-light">{seq.description}</p>
                        </div>
                      ))
                    : MOVEMENT_STATIONS.map((st) => (
                        <div key={st.id} className="p-3 bg-[#10232B] border border-[rgba(219,238,241,0.08)] rounded-[2px]">
                          <span className="font-plex text-xs text-[#36BBD3] font-semibold block mb-1">
                            {st.number} · {st.title}
                          </span>
                          <p className="text-[11px] text-[#83969D] leading-relaxed font-light">{st.description}</p>
                        </div>
                      ))}
                </div>
              </div>

              {/* Refleksi */}
              <div id="modal-sec-refleksi" className="analysis-panel space-y-2 scroll-mt-4 border-[#36BBD3]/22 bg-[#36BBD3]/[0.05]">
                <span className="font-sans text-xs font-bold text-[#36BBD3] tracking-wider uppercase block">
                  REFLEKSI PELAKSANAAN
                </span>
                <p className="text-xs text-[#83969D] leading-relaxed font-light">
                  {practice.analysis.reflection}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Native PDF Viewer */}
          <div
            className={`w-full lg:w-[52%] h-full bg-[#050E12] relative overflow-hidden ${
              activeTab === "analysis" ? "hidden lg:block" : "block"
            }`}
          >
            <object
              data={`${practice.pdfUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              className="w-full h-full border-none"
            >
              <iframe
                src={`${practice.pdfUrl}#toolbar=1`}
                title={practice.title}
                className="w-full h-full border-none"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-xs text-[#83969D]">
                  <FileText className="w-10 h-10 text-[#36BBD3] mb-3 opacity-70" />
                  <p className="text-[#EEF4F2] font-medium mb-1">Dokumen Modul PDF</p>
                  <a
                    href={practice.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 bg-[#36BBD3] text-[#07171D] rounded-[2px] font-semibold"
                  >
                    <span>Buka Modul PDF di Tab Baru</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
