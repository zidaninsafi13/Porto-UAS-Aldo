import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NON_TEACHING_ACTIVITIES } from "@/data/portfolioData";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowUpRight, X } from "@/components/ui/icons";

interface DocumentationGalleryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialActivityId: string;
}

export const DocumentationGalleryDialog: React.FC<DocumentationGalleryDialogProps> = ({
  isOpen,
  onClose,
  initialActivityId,
}) => {
  const [activeId, setActiveId] = useState(initialActivityId);

  useEffect(() => {
    if (isOpen) setActiveId(initialActivityId);
  }, [initialActivityId, isOpen]);

  const active = NON_TEACHING_ACTIVITIES.find((item) => item.id === activeId) ?? NON_TEACHING_ACTIVITIES[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showClose={false}
        srTitle={`Galeri dokumentasi - ${active.title}`}
        className="h-[92vh] w-[94vw] max-w-[1180px] gap-0 overflow-hidden rounded-2xl border border-[#36BBD3]/25 bg-[#06151A] p-0 text-[#EEF4F2] shadow-[0_34px_100px_rgba(0,0,0,.65)]"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-[#081B22] px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <span className="rounded-full border border-[#36BBD3]/30 bg-[#36BBD3]/10 px-2.5 py-1 font-plex text-[9px] uppercase tracking-[0.18em] text-[#36BBD3]">
              Galeri Nonmengajar
            </span>
            <span className="hidden truncate text-xs text-white/55 sm:block">Dokumentasi pengalaman di lingkungan sekolah</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup galeri dokumentasi"
            className="rounded-lg border border-white/10 p-2 text-white/65 transition hover:border-[#36BBD3]/45 hover:bg-[#36BBD3]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_auto] overflow-hidden lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,.65fr)] lg:grid-rows-1">
          <div className="relative min-h-[300px] overflow-hidden bg-[#030C0F]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.imageAlt ?? active.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030C0F]/90 via-transparent to-[#030C0F]/15" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <span className="font-plex text-[10px] uppercase tracking-[0.28em] text-[#00E5FF]">Dokumentasi {active.number}</span>
              <h3 className="mt-2 max-w-2xl font-serif text-3xl leading-none sm:text-5xl">{active.title}</h3>
            </div>
            {active.isPlaceholder && (
              <span className="absolute left-4 top-4 rounded-full border border-amber-300/30 bg-black/55 px-3 py-1.5 font-plex text-[9px] uppercase tracking-[0.18em] text-amber-100 backdrop-blur-md sm:left-6 sm:top-6">
                Foto referensi sementara
              </span>
            )}
          </div>

          <aside className="flex min-h-0 flex-col overflow-y-auto border-t border-white/10 bg-[#0A181E] p-5 lg:border-l lg:border-t-0 lg:p-7">
            <div className="mb-6">
              <p className="font-plex text-[9px] uppercase tracking-[0.24em] text-white/45">{active.date}</p>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">{active.role}</p>
              <p className="mt-3 text-xs leading-6 text-[#A8BBC2] sm:text-sm">{active.learning}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.highlights?.map((highlight) => (
                  <span key={highlight} className="rounded-full border border-[#36BBD3]/25 bg-[#36BBD3]/8 px-3 py-1 font-plex text-[9px] uppercase tracking-wider text-[#7FE8F5]">
                    {highlight}
                  </span>
                ))}
              </div>

              {active.isPlaceholder && (
                <div className="mt-5 rounded-xl border border-amber-200/15 bg-amber-100/[0.06] p-3 text-[11px] leading-relaxed text-amber-50/75">
                  Gambar ini hanya referensi visual dan bukan dokumentasi PPL pribadi. Ganti ketika foto kegiatan asli sudah tersedia.
                  {active.sourceUrl && (
                    <a
                      href={active.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1.5 font-semibold text-[#7FE8F5] hover:text-white"
                    >
                      Sumber: {active.sourceLabel} <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="mt-auto space-y-2 border-t border-white/10 pt-5">
              <p className="mb-3 font-plex text-[9px] uppercase tracking-[0.24em] text-white/45">Pilih dokumentasi</p>
              {NON_TEACHING_ACTIVITIES.map((item) => {
                const selected = item.id === active.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`group flex w-full items-center gap-3 rounded-xl border p-2 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                      selected ? "border-[#36BBD3]/50 bg-[#36BBD3]/10" : "border-white/8 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <img src={item.image} alt="" className="h-14 w-16 rounded-lg object-cover" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-plex text-[9px] text-[#36BBD3]">{item.number}</span>
                      <span className="block truncate text-xs font-semibold text-white/85">{item.title}</span>
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full transition ${selected ? "bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]" : "bg-white/20 group-hover:bg-white/50"}`} />
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
};
