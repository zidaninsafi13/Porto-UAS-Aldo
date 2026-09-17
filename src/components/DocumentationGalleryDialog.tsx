import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NON_TEACHING_ACTIVITIES } from "@/data/portfolioData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowUpRight, X } from "@/components/ui/icons";

interface DocumentationGalleryDialogProps { isOpen: boolean; onClose: () => void; initialActivityId: string; }

export const DocumentationGalleryDialog: React.FC<DocumentationGalleryDialogProps> = ({ isOpen, onClose, initialActivityId }) => {
  const [activeId, setActiveId] = useState(initialActivityId);
  useEffect(() => { if (isOpen) setActiveId(initialActivityId); }, [initialActivityId, isOpen]);
  const active = NON_TEACHING_ACTIVITIES.find((item) => item.id === activeId) ?? NON_TEACHING_ACTIVITIES[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showClose={false} srTitle={`Galeri dokumentasi — ${active.title}`} className="h-[92vh] w-[94vw] max-w-[1180px] gap-0 overflow-hidden rounded-xl border border-[#D8D1C6] bg-[#F7F3EC] p-0 text-[#1C252C] shadow-2xl">
        <header className="flex items-center justify-between border-b border-[#D8D1C6] px-4 py-3 sm:px-6"><div className="flex min-w-0 items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">05 / galeri nonmengajar</span><span className="hidden truncate text-xs text-[#6F746B] sm:block">Dokumentasi kegiatan Aladona</span></div><button type="button" onClick={onClose} aria-label="Tutup galeri dokumentasi" className="rounded border border-[#D8D1C6] p-2 text-[#6F746B] transition hover:border-[#B55E3B] hover:text-[#B55E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]"><X className="h-5 w-5" /></button></header>

        <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto] overflow-hidden lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)] lg:grid-rows-1">
          <div className="relative min-h-[300px] overflow-hidden bg-[#1C252C]">
            <AnimatePresence mode="wait">{active.image ? <motion.img key={active.id} src={active.image} alt={active.imageAlt ?? active.title} initial={{ opacity: 0, scale: 1.03 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center p-8 text-center font-mono text-xs uppercase tracking-[0.14em] text-[#F7F3EC]" style={{ backgroundImage: "url('assets/aladona/activities-paper-texture.webp')" }}>Foto dokumentasi belum tersedia</div>}</AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1C252C]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-[#F7F3EC] sm:p-8"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B86345]">Dokumentasi {active.number}</span><h2 className="mt-2 max-w-2xl font-serif text-3xl leading-none sm:text-5xl">{active.title}</h2></div>
          </div>

          <aside className="flex min-h-0 flex-col overflow-y-auto border-t border-[#D8D1C6] bg-[#F7F3EC] p-5 lg:border-l lg:border-t-0 lg:p-7"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">{active.date}</p><h3 className="mt-3 font-serif text-2xl">{active.role}</h3><p className="mt-3 text-sm leading-relaxed text-[#6F746B]">{active.learning}</p><div className="mt-5 flex flex-wrap gap-2">{active.highlights?.map((highlight) => <span key={highlight} className="border border-[#D8D1C6] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#6F746B]">{highlight}</span>)}</div>{active.isPlaceholder && <div className="mt-5 border-l-2 border-[#B55E3B] bg-[#EFE8DD] p-3 text-xs leading-relaxed text-[#6F746B]">Foto ini masih berupa referensi visual. Ganti dengan dokumentasi PPL asli sebelum dipublikasikan.{active.sourceUrl && <a href={active.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-1.5 text-[#B55E3B]">Sumber: {active.sourceLabel} <ArrowUpRight className="h-3.5 w-3.5" /></a>}</div>}</div><div className="mt-8 space-y-2 border-t border-[#D8D1C6] pt-5"><p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">Pilih dokumentasi</p>{NON_TEACHING_ACTIVITIES.map((item) => { const selected = item.id === active.id; return <button key={item.id} type="button" onClick={() => setActiveId(item.id)} className={`group flex w-full items-center gap-3 border p-2 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] ${selected ? "border-[#B55E3B] bg-[#EFE8DD]" : "border-[#D8D1C6] hover:border-[#B55E3B]/60"}`}>{item.image ? <img src={item.image} alt="" loading="lazy" decoding="async" className="h-14 w-16 object-cover" /> : <span className="flex h-14 w-16 items-center justify-center bg-[#E9E2D8] font-mono text-[8px] text-[#6F746B]">belum ada foto</span>}<span className="min-w-0 flex-1"><span className="block font-mono text-[9px] text-[#B55E3B]">{item.number}</span><span className="block truncate font-serif text-lg text-[#1C252C]">{item.title}</span></span><span className={`h-2 w-2 rounded-full ${selected ? "bg-[#B55E3B]" : "bg-[#D8D1C6]"}`} /></button>; })}</div></aside>
        </div>
      </DialogContent>
    </Dialog>
  );
};
