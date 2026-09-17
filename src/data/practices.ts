import { PracticeItem, PracticeSequence, MovementStation } from "@/types";

const placeholderAnalysis = {
  planning: "Analisis perencanaan akan diisi dari modul ajar Aladona.",
  material: "Analisis materi akan diisi setelah materi praktik Aladona tersedia.",
  media: "Analisis media akan diisi berdasarkan alat dan sumber belajar yang benar-benar digunakan.",
  assessment: "Instrumen asesmen ditautkan ke PDF penilaian pada section Penilaian.",
  reflection: "Refleksi pelaksanaan akan ditulis dari pengalaman Aladona, bukan dari template generik."
};

export const PRACTICES: PracticeItem[] = [
  {
    id: "praktik-01",
    number: "01",
    title: "Modul Ajar PJOK — Bola Basket",
    kicker: "MODUL AJAR PJOK / PRAKTIK 01",
    phase: "Fase C",
    grade: "Kelas VI",
    school: "SDN Setonopande 1 Kota Kediri",
    approach: ["Pembelajaran sosial emosional (PSE)", "Pembelajaran berbasis permainan"],
    equipment: ["Bola basket", "Pos dribbling", "Pos passing", "Pos shooting"],
    pdfUrl: "assets/document/modul-1.pdf",
    pdfTitle: "Modul Praktik 01 Aladona",
    pdfPages: "Modul PDF tersedia",
    timeAllocation: "Lihat alokasi waktu pada modul",
    analysis: {
      ...placeholderAnalysis,
      planning: "Modul memuat rancangan pembelajaran PJOK Fase C untuk kelas VI dengan fokus teknik dasar bola basket.",
      material: "Materi yang tampak pada sampul meliputi dribbling, passing, dan shooting.",
      media: "Media dan urutan pos mengikuti perangkat asli pada PDF modul.",
    }
  },
  {
    id: "praktik-02",
    number: "02",
    title: "Modul Ajar PJOK — Gerak Dasar",
    kicker: "MODUL AJAR PJOK / PRAKTIK 02",
    phase: "Fase B",
    grade: "Kelas IV",
    school: "SDN Setonopande 1 Kota Kediri",
    approach: ["Deep learning berbasis PSE", "Teknik STOP"],
    equipment: ["Aktivitas berjalan dan berlari", "Melompat", "Membawa bola", "Melempar dan menangkap"],
    pdfUrl: "assets/document/modul-2.pdf",
    pdfTitle: "Modul Praktik 02 Aladona",
    pdfPages: "Modul PDF tersedia",
    timeAllocation: "Lihat alokasi waktu pada modul",
    analysis: {
      ...placeholderAnalysis,
      planning: "Modul memuat rancangan pembelajaran PJOK Fase B untuk kelas IV dengan fokus gerak dasar lokomotor dan manipulatif.",
      material: "Materi meliputi berjalan, berlari, melompat, membawa, melempar, dan menangkap bola.",
      media: "Media dan langkah pembelajaran mengikuti perangkat asli pada PDF modul.",
    }
  }
];

export const PRACTICE_01_SEQUENCES: PracticeSequence[] = [
  { step: "01", title: "Dribbling zigzag", description: "Latihan menggiring bola melewati lintasan secara terarah." },
  { step: "02", title: "Passing pasangan", description: "Latihan mengoper bola secara berpasangan dengan kontrol dan kerja sama." },
  { step: "03", title: "Shooting terarah", description: "Latihan menembak bola ke sasaran dengan teknik dasar yang tepat." }
];

export const MOVEMENT_STATIONS: MovementStation[] = [
  { id: "pos-1", number: "POS 01", title: "Berjalan / berlari", focus: "Lokomotor", description: "Mengombinasikan pola berjalan dan berlari dalam aktivitas gerak dasar." },
  { id: "pos-2", number: "POS 02", title: "Melompat", focus: "Lokomotor", description: "Melatih koordinasi dan keseimbangan melalui variasi lompatan." },
  { id: "pos-3", number: "POS 03", title: "Membawa bola", focus: "Manipulatif", description: "Mengontrol benda saat bergerak dan berpindah tempat." },
  { id: "pos-4", number: "POS 04", title: "Melempar / menangkap", focus: "Manipulatif", description: "Melatih koordinasi mata dan tangan melalui lempar-tangkap." }
];
