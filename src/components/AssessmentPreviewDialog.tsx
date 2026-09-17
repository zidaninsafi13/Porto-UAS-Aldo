import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink, FileText, X } from "@/components/ui/icons";

export interface AssessmentPreviewDialogProps { isOpen: boolean; onClose: () => void; initialDocId?: "penilaian-1" | "penilaian-2"; }

const DOCUMENTS = {
  "penilaian-1": {
    title: "LK1 — Orientasi PPLM",
    label: "PRAKTIK 01",
    summary: "Lembar kerja orientasi yang menjadi catatan awal Aladona sebelum pelaksanaan praktik mengajar.",
    pdfUrl: "assets/document/penilaian-1.pdf",
    points: [
      ["Fokus dokumen", "LK1 menjadi catatan pembuka sebelum praktik mengajar dimulai. Isinya membantu menempatkan kegiatan PPLM pada konteks sekolah, program studi, dan peran mahasiswa yang sedang menjalankan praktik."],
      ["Identitas", "Lembar ini mengikat dokumen pada Aladona Khairulloh Ibrahim, NIM 2625030020, bidang studi PJOK, dan sekolah PPL. Informasi tersebut penting agar catatan orientasi tidak terlepas dari pemilik dan lokasi praktiknya."],
      ["Bukti yang dicatat", "Catatan orientasi berfungsi sebagai pijakan untuk membaca lingkungan sekolah sebelum menyusun atau melaksanakan pembelajaran. Bagian ini bukan hasil penilaian peserta didik, melainkan rekaman awal untuk memahami konteks PPLM."],
    ],
  },
  "penilaian-2": {
    title: "LK2 — Observasi Lingkungan Belajar",
    label: "PRAKTIK 02",
    summary: "Lembar kerja observasi lingkungan belajar Aladona di SDN Setonopande 1 Kota Kediri.",
    pdfUrl: "assets/document/penilaian-2.pdf",
    points: [
      ["Fokus dokumen", "LK2 memusatkan perhatian pada lingkungan fisik sekolah sebagai bagian dari konteks belajar. Tabel observasi memisahkan aspek yang dilihat, hasil orientasi di lapangan, dan interpretasi atas temuan tersebut."],
      ["Waktu observasi", "Observasi tercatat pada 7 Agustus 2026. Penanda waktu ini membantu pembaca memahami kapan kondisi lingkungan yang ditulis pada lembar kerja diamati."],
      ["Hasil yang dicatat", "Pada bagian hasil orientasi, SDN Setonopande 1 digambarkan memiliki lingkungan yang bersih, hijau, dan tertata dengan baik. Catatan tersebut juga mengaitkan kondisi fisik sekolah dengan rasa aman dan nyaman bagi warga sekolah."],
      ["Interpretasi", "Kolom interpretasi tidak hanya mengulang hasil pengamatan, tetapi memberi makna awal terhadap kondisi lingkungan belajar. Dari sini pembaca dapat melihat bagaimana Aladona mulai menghubungkan ruang fisik sekolah dengan pengalaman belajar peserta didik."],
    ],
  },
} as const;

const SUPPORTING_DOCUMENTS = [
  { label: "LK1 · Orientasi PPLM", href: "assets/document/penilaian-1.pdf" },
  { label: "LK2 · Observasi PPLM", href: "assets/document/penilaian-2.pdf" },
];

export const AssessmentPreviewDialog: React.FC<AssessmentPreviewDialogProps> = ({ isOpen, onClose, initialDocId = "penilaian-1" }) => {
  const [selectedDocId, setSelectedDocId] = useState<"penilaian-1" | "penilaian-2">(initialDocId);
  useEffect(() => { if (isOpen) setSelectedDocId(initialDocId); }, [isOpen, initialDocId]);
  const current = DOCUMENTS[selectedDocId];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showClose={false} srTitle={`Pratinjau ${current.title}`} className="flex h-[92vh] max-h-[92vh] w-[94vw] max-w-[1180px] flex-col gap-0 overflow-hidden rounded-xl border border-[#D8D1C6] bg-[#1C252C] p-0 text-[#F7F3EC] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#F7F3EC]/15 px-5 py-4"><div className="min-w-0"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B55E3B]">{current.label}</span><h2 className="mt-1 truncate font-serif text-2xl">{current.title}</h2></div><button type="button" onClick={onClose} aria-label="Tutup instrumen" className="rounded-lg p-2 text-[#F7F3EC]/70 transition hover:bg-[#F7F3EC]/10 hover:text-[#F7F3EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B]"><X className="h-5 w-5" /></button></div>
        <div className="flex gap-2 border-b border-[#F7F3EC]/15 p-3"><button type="button" onClick={() => setSelectedDocId("penilaian-1")} className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] ${selectedDocId === "penilaian-1" ? "bg-[#B55E3B] text-[#F7F3EC]" : "bg-[#F7F3EC]/5 text-[#F7F3EC]/60"}`}>Praktik 01</button><button type="button" onClick={() => setSelectedDocId("penilaian-2")} className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] ${selectedDocId === "penilaian-2" ? "bg-[#B55E3B] text-[#F7F3EC]" : "bg-[#F7F3EC]/5 text-[#F7F3EC]/60"}`}>Praktik 02</button></div>
        <div className="grid min-h-0 flex-1 lg:grid-cols-[.9fr_1.1fr]">
          <div className="overflow-y-auto p-6 sm:p-8"><p className="text-sm leading-relaxed text-[#F7F3EC]/70">{current.summary}</p><div className="mt-7 space-y-3">{current.points.map(([label, body]) => <div key={label} className="border-l-2 border-[#B55E3B] bg-[#F7F3EC]/5 p-4"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#B55E3B]">{label}</p><p className="mt-2 text-sm leading-relaxed text-[#F7F3EC]/75">{body}</p></div>)}</div><div className="mt-8 border-t border-[#F7F3EC]/15 pt-5"><p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7D8B7A]">Dokumen pendukung</p><div className="space-y-1">{SUPPORTING_DOCUMENTS.map((document) => <a key={document.href} href={document.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-b border-[#F7F3EC]/10 py-2 text-xs text-[#F7F3EC]/60 transition hover:text-[#B55E3B]"><span>{document.label}</span><ExternalLink className="h-3.5 w-3.5" /></a>)}</div></div></div>
          <div className="flex min-h-0 items-center justify-center bg-[#11181D] p-4 sm:p-6">{current.pdfUrl ? <object data={`${current.pdfUrl}#toolbar=1`} type="application/pdf" className="h-full w-full" aria-label={current.title}><a href={current.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-[#B55E3B]">Buka PDF <ExternalLink className="inline h-4 w-4" /></a></object> : <div className="max-w-sm text-center"><FileText className="mx-auto h-12 w-12 text-[#B55E3B]" /><h3 className="mt-4 font-serif text-2xl">Dokumen belum tersedia</h3></div>}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
