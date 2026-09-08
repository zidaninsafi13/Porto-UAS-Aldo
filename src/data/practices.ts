import { PracticeItem, PracticeSequence, MovementStation } from "@/types";

export const PRACTICES: PracticeItem[] = [
  {
    id: "praktik-01",
    number: "01",
    title: "Teknik Dasar Mengoper Bola dengan Kaki Bagian Dalam",
    kicker: "PRAKTIK MENGAJAR MANDIRI 01",
    phase: "Fase C",
    grade: "Kelas V",
    school: "SDN 1 Setonopande",
    approach: ["Direct Instruction", "Demonstrasi Gerak", "Latihan Terbimbing Berpasangan"],
    equipment: ["Lapangan Sekolah", "Bola Sepak Standar / Modifikasi", "Cone / Penanda", "Peluit", "Stopwatch"],
    pdfUrl: "assets/documents/modul-1.pdf",
    pdfTitle: "Modul Ajar PJOK Fase C — Mengoper Kaki Bagian Dalam",
    pdfPages: "9 Halaman",
    timeAllocation: "2 JP (2 × 15 menit)",
    analysis: {
      planning: "Modul disusun untuk satu pertemuan berdurasi 30 menit. Alurnya bergerak dari pemeriksaan kesiapan, permainan Estafet Terowongan Akurasi, demonstrasi empat tahap, latihan Berhenti dan Oper, hingga Tantangan Gerbang Cone.",
      material: "Fokus materi adalah passing kaki bagian dalam: posisi awal, kaki tumpu di samping bola, pergelangan kaki dikunci, perkenaan pada bagian tengah bola, ayunan terkontrol, dan gerak lanjutan menuju sasaran.",
      media: "Media utama berupa demonstrasi langsung, bola sepak atau bola plastik/spons modifikasi, cone sebagai target dan batas zona, ilustrasi urutan gerak, serta video gerak lambat yang bersifat opsional dengan memperhatikan privasi.",
      assessment: "Asesmen terdiri dari pertanyaan dan percobaan awal, observasi formatif teknik serta proses sosial, lalu unjuk kerja akhir. Bobot terbesar berada pada tahapan gerak 60% dan akurasi 25%, dilengkapi aspek sosial-keselamatan dan refleksi.",
      reflection: "Rancangan menempatkan keselamatan dan kesempatan mencoba ulang sebagai prioritas. Umpan balik dibuat singkat dan hanya berfokus pada satu perbaikan agar waktu aktif gerak tetap tinggi."
    }
  },
  {
    id: "praktik-02",
    number: "02",
    title: "Gerak Dasar Manipulatif melalui Aktivitas Empat Pos",
    kicker: "PRAKTIK MENGAJAR MANDIRI 02",
    phase: "Fase C",
    grade: "Kelas V",
    school: "SDN 1 Setonopande",
    approach: ["Sirkuit Pos Gerak", "Tingkat Tantangan Bertingkat", "Integrasi PSE"],
    equipment: ["Bola Tangan & Bola Modifikasi", "Keranjang / Sasaran Dinding", "Cone Lintasan", "Kartu Tantangan"],
    pdfUrl: "assets/documents/modul-2.pdf",
    pdfTitle: "Modul Ajar PJOK Fase C — 4 Pos Gerak Manipulatif & PSE",
    pdfPages: "18 Halaman",
    timeAllocation: "3 JP × 35 menit",
    analysis: {
      planning: "Pembelajaran 105 menit dirancang melalui check-in kesiapan, diagnostik pengetahuan dan keterampilan, demonstrasi, rotasi empat pos, permainan aplikasi, refleksi berpasangan, pendinginan, dan exit ticket.",
      material: "Materi mencakup melempar, menangkap, memantulkan, dan menendang. Setiap gerak dipelajari melalui prinsip arah, tenaga, perkenaan, keseimbangan, serta keputusan penggunaan ruang dan alat yang aman.",
      media: "Bola dengan ukuran dan tekstur berbeda, kerucut, sasaran kardus atau lingkaran, kartu kesiapan, kartu tingkat tantangan, kartu kalimat umpan balik, ilustrasi gerak, serta video gerak lambat opsional mendukung diferensiasi.",
      assessment: "Asesmen awal memetakan kesiapan dengan kode B-P-M. Proses dinilai melalui observasi, catatan anekdot, umpan balik teman dan LKPD pos. Penilaian akhir memadukan keterampilan 50%, pengetahuan 20%, proses personal-sosial 20%, dan refleksi 10%.",
      reflection: "Integrasi PSE hadir melalui pilihan tantangan, pengelolaan respons saat gagal, empati, komunikasi kelompok, dan pengambilan keputusan aman—bukan sebagai materi hafalan yang terpisah."
    }
  }
];

export const PRACTICE_01_SEQUENCES: PracticeSequence[] = [
  {
    step: "01",
    title: "Posisi Awal & Tumpuan",
    description: "Badan menghadap sasaran; kaki tumpu berada di samping bola, lutut sedikit ditekuk, dan tubuh tetap seimbang."
  },
  {
    step: "02",
    title: "Penguncian Pergelangan",
    description: "Pergelangan kaki dikunci dan bagian dalam kaki mengenai bagian tengah bola agar arah operan lebih stabil."
  },
  {
    step: "03",
    title: "Ayunan & Titik Kontak",
    description: "Kaki penendang diayunkan dari belakang ke depan secara terkontrol menuju sasaran."
  },
  {
    step: "04",
    title: "Gerak Lanjutan (Follow Through)",
    description: "Kaki terus bergerak searah sasaran dan tubuh mempertahankan keseimbangan setelah bola dilepas."
  }
];

export const MOVEMENT_STATIONS: MovementStation[] = [
  {
    id: "pos-1",
    number: "POS 01",
    title: "Melempar (Throwing)",
    focus: "Arah, Tenaga & Akurasi",
    description: "Lima lemparan ke lingkaran atau kardus dengan pilihan bola lunak, jarak 1–5 meter, dan ukuran sasaran bertingkat."
  },
  {
    id: "pos-2",
    number: "POS 02",
    title: "Menangkap (Catching)",
    focus: "Kesiapan Tangan & Rasa Aman",
    description: "Delapan lempar-tangkap berpasangan dengan variasi ukuran bola, jarak, tinggi, dan arah datang sesuai kesiapan."
  },
  {
    id: "pos-3",
    number: "POS 03",
    title: "Memantulkan (Bouncing)",
    focus: "Keseimbangan & Kontrol Pantulan",
    description: "Sepuluh pantulan berurutan, dilanjutkan zigzag tiga cone bagi murid yang siap meningkatkan tantangan."
  },
  {
    id: "pos-4",
    number: "POS 04",
    title: "Menendang (Kicking)",
    focus: "Kaki Tumpu, Arah & Kendali Tenaga",
    description: "Lima operan atau tendangan ke gawang kecil maupun pasangan dengan jarak 2–5 meter dan lebar sasaran yang dapat disesuaikan."
  }
];
