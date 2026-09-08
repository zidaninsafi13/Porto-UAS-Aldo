import React, { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { FileText, Download, ExternalLink, X } from "@/components/ui/icons";

export interface AssessmentPreviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocId?: "penilaian-1" | "penilaian-2";
}

interface AnalysisPoint {
  step: string;
  title: string;
  tag: string;
  summary: string;
  details: string;
}

const LK1_ANALYSIS: AnalysisPoint[] = [
  {
    step: "01",
    title: "Identitas & Arah Sekolah",
    tag: "VISI & MISI",
    summary: "Visi dan misi SDN Setonopande 1 sebagai fondasi budaya dan arah pendidikan sekolah.",
    details:
      "Visi sekolah menegaskan komitmen mencetak insan beriman, berkarakter, unggul prestasi, dan berwawasan lingkungan. Arah pendidikan diwujudkan lewat pembiasaan budi pekerti, disiplin belajar, dan penguatan profil pelajar berintegritas.",
  },
  {
    step: "02",
    title: "Tata Kelola Sekolah",
    tag: "TATA KELOLA & KOORDINASI",
    summary: "Struktur organisasi, pembagian tugas fungsional, tata tertib, dan koordinasi warga sekolah.",
    details:
      "Kepemimpinan kepala sekolah bersinergi harmonis dengan dewan guru, komite, dan tenaga administrasi. Alur koordinasi terbuka dan kepatuhan terhadap tata tertib menciptakan iklim kerja sekolah yang tertata dan produktif.",
  },
  {
    step: "03",
    title: "Sarana & Lingkungan Pendukung",
    tag: "FASILITAS & AREA PJOK",
    summary: "Ruang kelas, perpustakaan, UKS, mushola, lapangan olahraga, kantin, toilet, dan media belajar.",
    details:
      "Fasilitas terpelihara dengan baik untuk mendukung kegiatan akademik dan nonakademik. Ketersediaan lapangan olahraga yang aman dan memadai menjadi faktor kunci dalam kelancaran seluruh aktivitas pembelajaran PJOK.",
  },
  {
    step: "04",
    title: "Manajemen Pembelajaran",
    tag: "KURIKULUM & EVALUASI",
    summary: "Pengelolaan kurikulum, perangkat ajar, modul, asesmen, evaluasi, SDM, dan ketatalaksanaan.",
    details:
      "Penerapan Kurikulum Merdeka didukung penyusunan modul ajar kontekstual, asesmen diagnostik berkala, evaluasi pembelajaran antarpendidik, serta pemanfaatan sarana dan sistem informasi sekolah yang terintegrasi.",
  },
  {
    step: "05",
    title: "Refleksi Mahasiswa",
    tag: "REFLEKSI ORIENTASI PPL",
    summary: "Pendidik tidak hanya menyampaikan materi, melainkan membentuk karakter dan potensi siswa.",
    details:
      "Pengalaman orientasi memperlihatkan bahwa guru tidak hanya menyampaikan materi, tetapi juga membentuk karakter, kedisiplinan, sportivitas, kerja sama, serta menyesuaikan pembelajaran dengan kemampuan peserta didik.",
  },
];

const LK2_ANALYSIS: AnalysisPoint[] = [
  {
    step: "01",
    title: "Lingkungan Fisik Sekolah",
    tag: "LINGKUNGAN FISIK",
    summary: "Lingkungan bersih, hijau, tertata, terawat, dan mendukung suasana belajar yang kondusif.",
    details:
      "Penataan halaman, taman sekolah yang asri, serta sirkulasi udara yang terjaga menghadirkan kenyamanan belajar optimal. Budaya kebersihan harian menumbuhkan rasa kepedulian lingkungan pada seluruh warga sekolah.",
  },
  {
    step: "02",
    title: "Ruang Kelas & Fasilitas Pembelajaran",
    tag: "ENAM RUANG KELAS",
    summary: "Kondisi enam ruang kelas, ventilasi, pencahayaan, meja-kursi, papan tulis, dan display karya siswa.",
    details:
      "Kondisi enam ruang kelas (Kelas 1–6) memiliki ventilasi dan pencahayaan alami yang memadai. Penataan meja-kursi ergonomis, lemari kelas, sudut baca, serta pemajangan karya siswa menciptakan ruang belajar interaktif.",
  },
  {
    step: "03",
    title: "Perpustakaan & Laboratorium Komputer",
    tag: "LITERASI & DIGITAL",
    summary: "Perpustakaan dalam menumbuhkan budaya literasi dan lab komputer untuk literasi digital siswa.",
    details:
      "Perpustakaan menjadi pusat pembiasaan membaca dengan beragam koleksi bacaan edukatif. Laboratorium komputer melengkapi kompetensi peserta didik dengan wawasan dan kecakapan teknologi dasar sejak dini.",
  },
  {
    step: "04",
    title: "Lingkungan Sosial & Budaya Sekolah",
    tag: "BUDAYA 5S & INKLUSIF",
    summary: "Interaksi warga sekolah, budaya 5S, iklim aman inklusif, dan pembelajaran aktif komunikatif.",
    details:
      "Interaksi antarwarga sekolah dijiwai pembiasaan 5S (Senyum, Salam, Sapa, Sopan, Santun). Suasana yang ramah, aman, dan inklusif menstimulasi peserta didik untuk aktif berdialog dan berani mengemukakan ide.",
  },
  {
    step: "05",
    title: "Implikasi bagi PPL",
    tag: "FAKTOR PENDUKUNG PPL",
    summary: "Kondisi fisik, fasilitas, budaya sekolah, dan hubungan sosial menjadi modal sukses PPL Mandiri.",
    details:
      "Harmoni antara sarana fisik yang lengkap, fasilitas olahraga yang siap pakai, dan iklim sosial yang ramah menjadi faktor pendukung utama mahasiswa dalam merancang pembelajaran PJOK yang efektif dan bermakna.",
  },
];


export const AssessmentPreviewDialog: React.FC<AssessmentPreviewDialogProps> = ({
  isOpen,
  onClose,
  initialDocId = "penilaian-1",
}) => {
  const [selectedDocId, setSelectedDocId] = useState<"penilaian-1" | "penilaian-2">(initialDocId);
  const [activeTab, setActiveTab] = useState<"analysis" | "pdf">("analysis");

  useEffect(() => {
    if (isOpen) {
      setSelectedDocId(initialDocId);
    }
  }, [isOpen, initialDocId]);

  const isDoc1 = selectedDocId === "penilaian-1";

  const currentDoc = {
    id: selectedDocId,
    title: isDoc1
      ? "Orientasi & Observasi Manajemen Sekolah"
      : "Observasi Lingkungan Belajar",
    pdfUrl: `assets/documents/${selectedDocId}.pdf`,
    subtitle: isDoc1
      ? "Analisis lingkungan organisasi dan pengelolaan sekolah sebagai konteks pelaksanaan PPL Mandiri."
      : "Analisis kondisi fisik, fasilitas, budaya sekolah, dan proses pembelajaran di SDN Setonopande 1.",
    badge: isDoc1 ? "PENILAIAN 01 · LK1 ORIENTASI PPLM" : "PENILAIAN 02 · LK2 OBSERVASI PPLM",
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showClose={false}
        srTitle={`Pratinjau Instrumen Penilaian — ${currentDoc.title}`}
        className="max-w-[min(96vw,1440px)] w-[96vw] h-[94vh] max-h-[94vh] p-0 flex flex-col bg-[#07171D] text-[#EEF4F2] border border-[rgba(54,187,211,0.25)] rounded-[4px] overflow-hidden shadow-2xl"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-[rgba(54,187,211,0.18)] bg-[#0A181E] shrink-0">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="font-plex text-xs text-[#00D2FF] font-semibold px-2 py-0.5 bg-[#00D2FF]/10 border border-[#00D2FF]/30 rounded-[2px] shrink-0">
              {currentDoc.badge}
            </span>
            <span className="text-[#83969D] text-xs hidden sm:inline">•</span>
            <h3 className="font-sans font-semibold text-sm sm:text-base text-[#EEF4F2] truncate">
              {currentDoc.title}
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:flex items-center gap-1.5 p-1 bg-[#10232B] border border-[rgba(54,187,211,0.15)] rounded-[3px]">
              <button
                type="button"
                onClick={() => setSelectedDocId("penilaian-1")}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-[2px] transition-colors cursor-pointer ${
                  isDoc1 ? "bg-[#00D2FF] text-[#041217] font-bold" : "text-[#83969D] hover:text-[#EEF4F2]"
                }`}
              >
                Penilaian 01
              </button>
              <button
                type="button"
                onClick={() => setSelectedDocId("penilaian-2")}
                className={`px-2.5 py-1 text-[11px] font-mono rounded-[2px] transition-colors cursor-pointer ${
                  !isDoc1 ? "bg-[#00D2FF] text-[#041217] font-bold" : "text-[#83969D] hover:text-[#EEF4F2]"
                }`}
              >
                Penilaian 02
              </button>
            </div>

            <a
              href={currentDoc.pdfUrl}
              download
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-plex text-[#83969D] hover:text-[#EEF4F2] hover:bg-[#10232B] border border-[rgba(219,238,241,0.15)] rounded-[2px] transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-[#00D2FF]" />
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
            className={`flex-1 py-2.5 text-xs font-sans font-semibold transition-colors ${
              activeTab === "analysis" ? "text-[#00D2FF] border-b-2 border-[#00D2FF] bg-[#0A181E]" : "text-[#83969D]"
            }`}
          >
            Ringkasan Instrumen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pdf")}
            className={`flex-1 py-2.5 text-xs font-sans font-semibold transition-colors ${
              activeTab === "pdf" ? "text-[#00D2FF] border-b-2 border-[#00D2FF] bg-[#0A181E]" : "text-[#83969D]"
            }`}
          >
            Buka File PDF Penilaian
          </button>
        </div>

        {/* Split Container */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Side: Analytical Instrument Breakdown */}
          <div
            className={`w-full lg:w-[44%] h-full flex flex-col bg-[#07171D] border-r border-[rgba(54,187,211,0.15)] overflow-y-auto p-5 sm:p-7 space-y-5 ${
              activeTab === "pdf" ? "hidden lg:flex" : "flex"
            }`}
          >
            {/* Quick Switch Buttons for Mobile */}
            <div className="flex md:hidden items-center justify-between p-2 bg-[#0A181E] border border-[rgba(54,187,211,0.15)] rounded-[3px]">
              <span className="text-xs font-mono text-[#83969D]">Pilih Instrumen:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDocId("penilaian-1")}
                  className={`px-3 py-1 text-xs rounded ${
                    isDoc1 ? "bg-[#00D2FF] text-[#041217] font-bold" : "bg-[#10232B] text-[#83969D]"
                  }`}
                >
                  Penilaian 01
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDocId("penilaian-2")}
                  className={`px-3 py-1 text-xs rounded ${
                    !isDoc1 ? "bg-[#00D2FF] text-[#041217] font-bold" : "bg-[#10232B] text-[#83969D]"
                  }`}
                >
                  Penilaian 02
                </button>
              </div>
            </div>

            {/* Document Lockup Info */}
            <div className="space-y-1.5 border-b border-[rgba(54,187,211,0.12)] pb-4">
              <span className="font-plex text-xs text-[#00D2FF] font-semibold uppercase tracking-wider block">
                {isDoc1 ? "DOKUMEN PPL · LK1 ORIENTASI" : "DOKUMEN PPL · LK2 OBSERVASI"}
              </span>
              <h2 className="font-sans font-bold text-xl sm:text-2xl text-[#EEF4F2] leading-snug">
                {currentDoc.title}
              </h2>
              <p className="text-xs text-[#83969D] leading-relaxed">
                {currentDoc.subtitle}
              </p>
            </div>

            {/* Content Display: LK1 or LK2 Dimensional Analysis */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-xs font-bold text-[#00D2FF] tracking-wider uppercase block">
                  {isDoc1
                    ? "DIMENSI MANAJEMEN & ORIENTASI SEKOLAH"
                    : "ASPEK OBSERVASI LINGKUNGAN BELAJAR"}
                </span>
                <span className="font-plex text-[10px] text-[#83969D]">5 Dimensi Analisis</span>
              </div>

              <div className="space-y-3">
                {(isDoc1 ? LK1_ANALYSIS : LK2_ANALYSIS).map((item) => (
                  <div
                    key={item.step}
                    className="p-3.5 bg-[#0A181E] border border-[rgba(54,187,211,0.15)] rounded-[4px] space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-xs font-bold text-[#00D2FF] shrink-0">
                          {item.step}.
                        </span>
                        <h4 className="font-sans font-semibold text-xs sm:text-[13px] text-[#EEF4F2] truncate">
                          {item.title}
                        </h4>
                      </div>
                      <span className="font-plex text-[9.5px] px-2 py-0.5 bg-[#10232B] text-[#00D2FF] border border-[#00D2FF]/20 rounded shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#00D2FF]/90 font-medium">
                      {item.summary}
                    </div>
                    <p className="text-xs text-[#83969D] leading-relaxed font-light">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside Left Panel */}
            <div className="pt-4 border-t border-[rgba(54,187,211,0.12)] flex items-center justify-between text-xs text-[#83969D]">
              <span>Dokumen Penilaian PPL — SDN Setonopande 1</span>
              <a
                href={currentDoc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#00D2FF] hover:underline font-semibold"
              >
                <span>Buka PDF Penuh</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side: Native PDF Viewer */}
          <div
            className={`w-full lg:w-[56%] h-full bg-[#050E12] relative overflow-hidden ${
              activeTab === "analysis" ? "hidden lg:block" : "block"
            }`}
          >
            <object
              key={selectedDocId}
              data={`${currentDoc.pdfUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              className="w-full h-full border-none"
            >
              <iframe
                src={`${currentDoc.pdfUrl}#toolbar=1`}
                title={currentDoc.title}
                className="w-full h-full border-none"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-xs text-[#83969D]">
                  <FileText className="w-10 h-10 text-[#00D2FF] mb-3 opacity-70" />
                  <p className="text-[#EEF4F2] font-medium mb-1">Dokumen Asesmen PDF</p>
                  <a
                    href={currentDoc.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 bg-[#00D2FF] text-[#041217] rounded-[2px] font-semibold"
                  >
                    <span>Buka PDF di Tab Baru</span>
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
