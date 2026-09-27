import React, { useEffect, useState } from "react";
import { PRACTICE_REFLECTIONS } from "@/data/portfolioData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, ExternalLink, FileText, X } from "@/components/ui/icons";

interface PracticeReflectionPreviewDialogProps { isOpen: boolean; onClose: () => void; reflectionId: string; }

export const PracticeReflectionPreviewDialog: React.FC<PracticeReflectionPreviewDialogProps> = ({ isOpen, onClose, reflectionId }) => {
  const [activeTab, setActiveTab] = useState<"analysis" | "pdf">("analysis");
  const [activeSection, setActiveSection] = useState("ringkasan");
  const reflection = PRACTICE_REFLECTIONS.find((item) => item.id === reflectionId) ?? PRACTICE_REFLECTIONS[0];

  useEffect(() => { if (isOpen) { setActiveTab("analysis"); setActiveSection("ringkasan"); } }, [isOpen, reflectionId]);

  const navItems = [["ringkasan", "Ringkasan"], ["pembelajaran", "Yang dipelajari"], ["umpan-balik", "Umpan balik"], ["langkah-lanjut", "Langkah lanjut"]] as const;
  const scrollToSection = (id: string) => { setActiveSection(id); document.getElementById(`reflection-modal-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showClose={false} srTitle={`Pratinjau refleksi praktik ${reflection.number}`} className="flex h-[94vh] max-h-[94vh] w-[96vw] max-w-[1480px] flex-col gap-0 overflow-hidden rounded-xl border border-[#D8D1C6] bg-[#F7F3EC] p-0 text-[#1C252C] shadow-2xl">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#D8D1C6] px-5 py-4 sm:px-7">
          <div className="flex min-w-0 items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Refleksi {reflection.number}</span><span className="text-[#D8D1C6]">/</span><h2 className="truncate font-serif text-xl sm:text-2xl">{reflection.title}</h2></div>
          <div className="flex shrink-0 items-center gap-2"><a href={reflection.pdfUrl} download className="hidden items-center gap-2 border border-[#D8D1C6] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F746B] transition hover:border-[#B55E3B] hover:text-[#B55E3B] sm:inline-flex"><Download className="h-3.5 w-3.5" /> Unduh PDF</a><button type="button" onClick={onClose} aria-label="Tutup preview refleksi" className="rounded border border-[#D8D1C6] p-2 text-[#6F746B] transition hover:border-[#B55E3B] hover:text-[#B55E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]"><X className="h-5 w-5" /></button></div>
        </header>

        <div className="flex shrink-0 border-b border-[#D8D1C6] bg-[#EFE8DD] lg:hidden"><button type="button" onClick={() => setActiveTab("analysis")} className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${activeTab === "analysis" ? "border-b-2 border-[#B55E3B] text-[#B55E3B]" : "text-[#6F746B]"}`}>Analisis refleksi</button><button type="button" onClick={() => setActiveTab("pdf")} className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${activeTab === "pdf" ? "border-b-2 border-[#B55E3B] text-[#B55E3B]" : "text-[#6F746B]"}`}>LK 4 PDF</button></div>

        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <div className={`flex min-h-0 w-full flex-row border-[#D8D1C6] lg:w-[52%] lg:border-r ${activeTab === "pdf" ? "hidden lg:flex" : "flex"}`}>
            <aside className="hidden w-36 shrink-0 flex-col gap-1 overflow-y-auto border-r border-[#D8D1C6] bg-[#EFE8DD] p-3 sm:flex">{navItems.map(([id, label]) => <button key={id} type="button" onClick={() => scrollToSection(id)} className={`border-l-2 px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.08em] transition ${activeSection === id ? "border-[#B55E3B] bg-[#F7F3EC] text-[#B55E3B]" : "border-transparent text-[#6F746B] hover:border-[#D8D1C6] hover:text-[#1C252C]"}`}>{label}</button>)}</aside>
            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-5 sm:p-7">
              <section id="reflection-modal-ringkasan" className="scroll-mt-4 border-l-2 border-[#B55E3B] bg-[#EFE8DD] p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Ringkasan refleksi</p><h3 className="mt-3 font-serif text-3xl leading-tight">{reflection.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{reflection.summary}</p><div className="mt-5 flex flex-wrap gap-2"><span className="border border-[#D8D1C6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F746B]">{reflection.date}</span><span className="border border-[#D8D1C6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F746B]">{reflection.focus}</span></div></section>
              <section id="reflection-modal-pembelajaran" className="scroll-mt-4 border-t border-[#D8D1C6] pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">01 / Yang dipelajari</p><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{reflection.summary}</p></section>
              <section id="reflection-modal-umpan-balik" className="scroll-mt-4 border-t border-[#D8D1C6] pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">02 / Umpan balik Guru Pamong</p><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{reflection.feedback}</p></section>
              <section id="reflection-modal-langkah-lanjut" className="scroll-mt-4 border-t border-[#D8D1C6] pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">03 / Langkah lanjut</p><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{reflection.nextStep}</p></section>
            </div>
          </div>
          <div className={`min-h-0 w-full bg-[#E9E2D8] p-3 sm:p-5 lg:block lg:w-[48%] ${activeTab === "analysis" ? "hidden" : "block"}`}>
            <object data={`${reflection.pdfUrl}#toolbar=1&navpanes=0`} type="application/pdf" className="h-full w-full border border-[#D8D1C6] bg-white" aria-label={`LK 4 refleksi ${reflection.number}`}><div className="flex h-full flex-col items-center justify-center p-8 text-center"><FileText className="h-10 w-10 text-[#B55E3B]" /><p className="mt-4 font-serif text-2xl">PDF tidak tampil di browser</p><a href={reflection.pdfUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#B55E3B]">Buka PDF <ExternalLink className="h-4 w-4" /></a></div></object>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
