import React, { useEffect, useState } from "react";
import { PRACTICES, PRACTICE_01_SEQUENCES, MOVEMENT_STATIONS } from "@/data/portfolioData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, ExternalLink, FileText, X } from "@/components/ui/icons";

interface PracticePreviewDialogProps { isOpen: boolean; onClose: () => void; practiceId: string; }

export const PracticePreviewDialog: React.FC<PracticePreviewDialogProps> = ({ isOpen, onClose, practiceId }) => {
  const [activeTab, setActiveTab] = useState<"analysis" | "pdf">("analysis");
  const [activeSection, setActiveSection] = useState("ringkasan");
  const practice = PRACTICES.find((item) => item.id === practiceId) ?? PRACTICES[0];
  const isPractice01 = practice.id === "praktik-01";

  useEffect(() => { if (isOpen) { setActiveTab("analysis"); setActiveSection("ringkasan"); } }, [isOpen, practiceId]);

  const navItems = [
    ["ringkasan", "Ringkasan"], ["perencanaan", "Perencanaan"], ["materi", "Materi"], ["media", "Media"], ["asesmen", "Asesmen"], ["detail", isPractice01 ? "Tahapan gerak" : "Empat pos gerak"], ["refleksi", "Refleksi"],
  ] as const;
  const scrollToSection = (id: string) => { setActiveSection(id); document.getElementById(`modal-sec-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }); };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showClose={false} srTitle={`Pratinjau modul ajar — ${practice.title}`} className="flex h-[94vh] max-h-[94vh] w-[96vw] max-w-[1480px] flex-col gap-0 overflow-hidden rounded-xl border border-[#D8D1C6] bg-[#F7F3EC] p-0 text-[#1C252C] shadow-2xl">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-[#D8D1C6] px-5 py-4 sm:px-7">
          <div className="flex min-w-0 items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Praktik {practice.number}</span><span className="text-[#D8D1C6]">/</span><h2 className="truncate font-serif text-xl sm:text-2xl">{practice.title}</h2></div>
          <div className="flex shrink-0 items-center gap-2"><a href={practice.pdfUrl} download className="hidden items-center gap-2 border border-[#D8D1C6] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F746B] transition hover:border-[#B55E3B] hover:text-[#B55E3B] sm:inline-flex"><Download className="h-3.5 w-3.5" /> Unduh PDF</a><button type="button" onClick={onClose} aria-label="Tutup preview modul" className="rounded border border-[#D8D1C6] p-2 text-[#6F746B] transition hover:border-[#B55E3B] hover:text-[#B55E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]"><X className="h-5 w-5" /></button></div>
        </header>

        <div className="flex shrink-0 border-b border-[#D8D1C6] bg-[#EFE8DD] lg:hidden"><button type="button" onClick={() => setActiveTab("analysis")} className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${activeTab === "analysis" ? "border-b-2 border-[#B55E3B] text-[#B55E3B]" : "text-[#6F746B]"}`}>Analisis</button><button type="button" onClick={() => setActiveTab("pdf")} className={`flex-1 py-3 font-mono text-[10px] uppercase tracking-[0.16em] ${activeTab === "pdf" ? "border-b-2 border-[#B55E3B] text-[#B55E3B]" : "text-[#6F746B]"}`}>Modul PDF</button></div>

        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <div className={`flex min-h-0 w-full flex-row border-[#D8D1C6] lg:w-[52%] lg:border-r ${activeTab === "pdf" ? "hidden lg:flex" : "flex"}`}>
            <aside className="hidden w-36 shrink-0 flex-col gap-1 overflow-y-auto border-r border-[#D8D1C6] bg-[#EFE8DD] p-3 sm:flex">{navItems.map(([id, label]) => <button key={id} type="button" onClick={() => scrollToSection(id)} className={`border-l-2 px-3 py-2 text-left font-mono text-[10px] uppercase tracking-[0.08em] transition ${activeSection === id ? "border-[#B55E3B] bg-[#F7F3EC] text-[#B55E3B]" : "border-transparent text-[#6F746B] hover:border-[#D8D1C6] hover:text-[#1C252C]"}`}>{label}</button>)}</aside>
            <div className="min-h-0 flex-1 space-y-6 overflow-y-auto p-5 sm:p-7">
              <section id="modal-sec-ringkasan" className="scroll-mt-4 border-l-2 border-[#B55E3B] bg-[#EFE8DD] p-5"><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Ringkasan modul</p><h3 className="mt-3 font-serif text-3xl leading-tight">{practice.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{isPractice01 ? "Pembelajaran teknik dasar bola basket melalui dribbling, passing, dan shooting dengan aktivitas berpos." : "Pembelajaran gerak dasar lokomotor dan manipulatif melalui kombinasi berjalan, berlari, melompat, membawa, melempar, dan menangkap bola."}</p><div className="mt-5 flex flex-wrap gap-2">{[practice.phase, practice.grade, practice.school].map((item) => <span key={item} className="border border-[#D8D1C6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F746B]">{item}</span>)}</div></section>
              {[ ["perencanaan", "01 / Perencanaan", practice.analysis.planning], ["materi", "02 / Materi", practice.analysis.material], ["media", "03 / Media", practice.analysis.media], ["asesmen", "04 / Asesmen", practice.analysis.assessment] ].map(([id, label, body]) => <section id={`modal-sec-${id}`} key={id} className="scroll-mt-4 border-t border-[#D8D1C6] pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">{label}</p><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{body}</p></section>)}
              <section id="modal-sec-detail" className="scroll-mt-4 border-t border-[#D8D1C6] pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">05 / {isPractice01 ? "Tahapan gerak" : "Empat pos gerak"}</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{(isPractice01 ? PRACTICE_01_SEQUENCES : MOVEMENT_STATIONS).map((item) => <div key={"id" in item ? item.id : item.step} className="border border-[#D8D1C6] bg-[#EFE8DD] p-4"><p className="font-serif text-lg">{"step" in item ? `${item.step}. ${item.title}` : `${item.number} · ${item.title}`}</p><p className="mt-2 text-xs leading-relaxed text-[#6F746B]">{item.description}</p></div>)}</div></section>
              <section id="modal-sec-refleksi" className="scroll-mt-4 border-t border-[#D8D1C6] pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#B55E3B]">06 / Refleksi pelaksanaan</p><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{practice.analysis.reflection}</p></section>
            </div>
          </div>

          <div className={`min-h-0 w-full bg-[#E9E2D8] p-3 sm:p-5 lg:block lg:w-[48%] ${activeTab === "analysis" ? "hidden" : "block"}`}>
            {practice.pdfUrl ? <object data={`${practice.pdfUrl}#toolbar=1&navpanes=0`} type="application/pdf" className="h-full w-full border border-[#D8D1C6] bg-white" aria-label={practice.title}><a href={practice.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-[#B55E3B]">Buka PDF <ExternalLink className="inline h-4 w-4" /></a></object> : <div className="flex h-full flex-col items-center justify-center border border-dashed border-[#B55E3B]/50 p-8 text-center"><FileText className="h-10 w-10 text-[#B55E3B]" /><p className="mt-4 font-serif text-2xl">Modul Aladona belum tersedia</p><p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6F746B]">Tambahkan PDF asli pada data praktik sebelum dipublikasikan.</p></div>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
