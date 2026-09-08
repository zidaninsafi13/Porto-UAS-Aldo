export interface VideoAnalysisPoint {
  id: string;
  category: string;
  timestamp: string;
  title: string;
  observation: string;
  impact: string;
  action: string;
}

// Video praktik mengajar dibuka melalui Google Drive agar tidak membebani halaman.
export const VIDEO_SOURCE_URL = "https://drive.google.com/file/d/19wlIDBFUyTzUzu5uj9wGl4HcsJ5h_cWa/view?usp=sharing";

export const VIDEO_ANALYSIS_DATA: VideoAnalysisPoint[] = [
  {
    id: "ana-01",
    category: "PENGORGANISASIAN PESERTA DIDIK",
    timestamp: "00:45",
    title: "Formasi Semisirkular Aktivasi Awal",
    observation: "Siswa diposisikan dalam formasi setengah lingkaran terbuka saat guru menyampaikan apersepsi. Seluruh pandangan siswa berpusat pada peragaan guru tanpa ada yang saling membelakangi.",
    impact: "Memaksimalkan kontak mata (eye-contact), meminimalkan distraksi lingkungan luar, dan memastikan seluruh siswa mendengar instruksi dengan artikulasi yang jelas.",
    action: "Mempercepat transisi dari formasi ke aktivitas inti dengan penataan posisi siswa yang lebih efisien.",
  },
  {
    id: "ana-02",
    category: "KOMUNIKASI & INSTRUKSI",
    timestamp: "01:20",
    title: "Demonstrasi Gerak Kontak & Penguncian Engkel",
    observation: "Guru memperagakan posisi kaki tumpu sejajar bola, kemudian memutar pergelangan kaki penendang keluar dengan penguncian sendi engkel secara perlahan.",
    impact: "Siswa memperoleh gambaran mental (mental-model) mekanika perkenaan bola yang presisi sebelum mempraktikkannya langsung dalam latihan berpasangan.",
    action: "Memberikan panduan visual titik perkenaan bola sebelum siswa memulai latihan drill mandiri.",
  },
  {
    id: "ana-03",
    category: "KEKUATAN PRAKTIK",
    timestamp: "02:15",
    title: "Drill Pasangan dengan Target Gerbang Cone",
    observation: "Latihan berpasangan memanfaatkan dua cone sebagai gerbang sasaran. Siswa saling menghitung berapa kali operan mendatar berhasil meluncur mulus melintasi celah gerbang.",
    impact: "Menghadirkan umpan balik objektif seketika (instant visual feedback), meningkatkan motivasi intrinsik siswa, dan melatih ketepatan akurasi arah passing.",
    action: "Meningkatkan variasi jarak target gerbang kerucut secara bertahap bagi pasangan yang telah konsisten.",
  },
  {
    id: "ana-04",
    category: "HAL YANG PERLU DITINGKATKAN",
    timestamp: "03:40",
    title: "Rotasi Pengambilan Bola & Manajemen Waktu Aktif",
    observation: "Ketika bola terlepas terlalu jauh dari jangkauan penerima, siswa memerlukan waktu beberapa detik untuk mengambil bola kembali ke lintasan latihannya.",
    impact: "Perlu penambahan bola cadangan di setiap koridor drill dan pembatasan zona tangkap agar waktu aktif belajar (Active Learning Time) peserta didik tetap optimal.",
    action: "Menyediakan bola cadangan di sisi lintasan latihan untuk memperkecil waktu jeda saat bola keluar area.",
  },
];
