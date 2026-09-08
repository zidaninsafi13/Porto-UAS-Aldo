import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Runner } from "@/components/ui/icons";
import { NON_TEACHING_ACTIVITIES } from "@/data/portfolioData";
import type { NonTeachingActivity } from "@/types";

interface NonTeachingProps { onOpenGallery: (activityId?: string) => void; }

const AlbumPhoto = ({ activity, featured = false, index, onOpen }: { activity: NonTeachingActivity; featured?: boolean; index: number; onOpen: () => void }) => (
  <motion.button
    type="button"
    initial={{ y: 16, rotate: featured ? -0.4 : index % 2 ? 0.7 : -0.7 }}
    whileInView={{ y: 0, rotate: featured ? -0.4 : index % 2 ? 0.7 : -0.7 }}
    viewport={{ once: false, amount: 0.22 }}
    whileHover={{ y: -6, rotate: 0, scale: 1.012 }}
    transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    onClick={onOpen}
    className={`group relative block w-full overflow-hidden rounded-[5px] border border-[#D5DEE0] bg-[#FFFDF9] p-2 text-left shadow-[0_12px_25px_rgba(19,32,39,.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0288D1] focus-visible:ring-offset-2 ${featured ? "h-[360px] sm:h-[382px]" : "h-[172px] sm:h-[181px]"}`}
    style={{ minHeight: featured ? 360 : 172, backgroundColor: "#fffdf9" }}
    aria-label={`Buka dokumentasi ${activity.title}`}
  >
    <div className="relative h-full overflow-hidden rounded-[2px] bg-[#10232B]">
      <img
        src={activity.image}
        alt={activity.imageAlt ?? activity.title}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: activity.id === "act-03" ? "center bottom" : featured ? "center 68%" : "center 72%" }}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] ${activity.id === "act-03" ? "scale-[1.1] origin-bottom" : ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031017]/55 via-transparent to-[#031017]/10" />
      {featured && (
        <div className="pointer-events-none absolute left-5 top-14 -rotate-6 text-white drop-shadow-[0_3px_12px_rgba(0,0,0,.85)] sm:left-7 sm:top-16">
          <span className="block font-handwriting text-2xl font-bold leading-[1.05] sm:text-3xl">
            Senam Pagi<br />Jaga Semangat<br />Bersama
          </span>
          <span className="mt-2 block h-px w-20 bg-white/80" />
        </div>
      )}
      <div
        className="absolute inset-x-0 bottom-0 min-h-[66px] border-t border-[#D5DEE0] px-3 py-2.5 text-[#132027] sm:px-4"
        style={{ backgroundColor: "#fffdf9" }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="font-plex text-[8px] uppercase tracking-[0.16em] text-[#0288D1]">{activity.date}</div>
            <h3 className={`${featured ? "text-sm sm:text-base" : "text-[11px] sm:text-xs"} mt-0.5 truncate font-serif font-bold leading-tight`}>{activity.title}</h3>
            <p className="mt-0.5 truncate font-sans text-[9px] text-[#132027]/60">{activity.role}</p>
          </div>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#36BBD3]/40 bg-[#E7F8FA] text-[#0288D1] transition-all duration-300 group-hover:bg-[#00D7EA] group-hover:text-[#041217]"><ArrowRight className="h-3.5 w-3.5" /></span>
        </div>
      </div>
    </div>
  </motion.button>
);

export const NonTeachingSection: React.FC<NonTeachingProps> = ({ onOpenGallery }) => {
  const [featured, ...secondary] = NON_TEACHING_ACTIVITIES;
  return (
    <div id="nonmengajar" className="flex h-full scroll-mt-24 flex-col justify-between space-y-7">
      <motion.div initial={{ y: 16 }} whileInView={{ y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6 }}>
        <div className="mb-3 flex items-center gap-4 font-plex text-xs font-bold uppercase tracking-widest text-[#0288D1]"><span>05.</span><span className="font-semibold text-[#132027]/70">Nonmengajar</span><div className="h-px flex-1 bg-[#36BBD3]/25" /></div>
        <div className="flex items-end justify-between gap-5">
          <div>
            <h2 className="font-serif text-4xl font-bold leading-[1.02] tracking-tight text-[#132027] sm:text-5xl">Jejak Kegiatan <br /><span className="font-normal italic text-[#006D7A]">di Luar Kelas</span></h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#132027]/75">Dokumentasi kegiatan nonmengajar sebagai ruang belajar, kontribusi, dan pembentukan karakter di lingkungan sekolah.</p>
          </div>
          <span className="hidden pb-2 font-handwriting text-2xl leading-none text-[#0288D1]/70 sm:block -rotate-6">album<br />kegiatan</span>
        </div>
      </motion.div>
      <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-5">
        <div aria-hidden="true" className="pointer-events-none absolute -inset-x-2 top-1/2 hidden h-px bg-[#36BBD3]/15 sm:block" />
        <div className="relative z-10 sm:col-span-7"><AlbumPhoto activity={featured} featured index={0} onOpen={() => onOpenGallery(featured.id)} /></div>
        <div className="relative z-10 flex flex-col gap-4 sm:col-span-5 sm:pt-5">{secondary.map((activity, index) => <AlbumPhoto key={activity.id} activity={activity} index={index + 1} onOpen={() => onOpenGallery(activity.id)} />)}</div>
      </div>
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button type="button" onClick={() => onOpenGallery(featured.id)} className="button-sweep group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-[#00D7EA] px-5 py-3 font-sans text-xs font-bold text-[#041217] shadow-[0_10px_30px_rgba(0,183,211,.24)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0288D1] focus-visible:ring-offset-2 sm:text-sm"><span className="relative z-10">Lihat Galeri Dokumentasi</span><ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></button>
        <div className="flex items-center gap-2 font-plex text-[9px] uppercase tracking-[0.16em] text-[#132027]/55"><Runner className="h-4 w-4 text-[#0288D1]" />Album kegiatan · pembelajaran bermakna</div>
      </div>
    </div>
  );
};
