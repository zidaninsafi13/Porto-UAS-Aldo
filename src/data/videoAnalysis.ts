export interface VideoAnalysisPoint {
  id: string;
  category: string;
  timestamp: string;
  title: string;
  observation: string;
  impact: string;
  action: string;
}

// Video publik Aladona yang ditinjau untuk catatan bertimestamp di bawah.
export const VIDEO_SOURCE_URL = "https://drive.google.com/file/d/1uVS_u-htLbxUnZZolEFfjNZEL1iZ_NmP/view";

export const VIDEO_ANALYSIS_DATA: VideoAnalysisPoint[] = [
  {
    id: "ana-01",
    category: "PEMBUKAAN KELAS",
    timestamp: "00:37",
    title: "Membangun fokus sebelum bergerak",
    observation: "Aladona berdiri di depan kelas sementara peserta didik duduk menghadap ke arah guru. Posisi ini memberi tanda bahwa instruksi awal dan kesiapan kelompok menjadi bagian penting sebelum kegiatan PJOK dimulai.",
    impact: "Peserta didik memiliki titik perhatian yang sama sehingga pembukaan tidak langsung berubah menjadi aktivitas yang terpencar.",
    action: "Pertahankan pembukaan yang terpusat, lalu sampaikan tujuan dan aturan keselamatan dalam kalimat singkat sebelum berpindah ruang."
  },
  {
    id: "ana-02",
    category: "RUTINITAS PEMBUKA",
    timestamp: "01:20",
    title: "Doa sebagai transisi",
    observation: "Tampilan video menunjukkan penanda ‘Berdoa’ ketika peserta didik masih berada di kelas dan Aladona berdiri di depan. Momen ini berfungsi sebagai rutinitas yang menyiapkan suasana sebelum kegiatan bergerak.",
    impact: "Transisi menjadi lebih tertib karena ada jeda bersama sebelum peserta didik menerima tantangan fisik di lapangan.",
    action: "Setelah rutinitas, hubungkan secara eksplisit dengan kesiapan tubuh: cek ruang, alat, dan posisi kelompok sebelum keluar kelas."
  },
  {
    id: "ana-03",
    category: "ORIENTASI LAPANGAN",
    timestamp: "05:00",
    title: "Mengatur barisan dan ruang",
    observation: "Di halaman sekolah, Aladona berhadapan dengan barisan peserta didik berseragam olahraga. Ia memberi arahan sebelum aktivitas dimulai, sementara kelompok menunggu dalam formasi yang cukup jelas.",
    impact: "Pengaturan awal membantu mengurangi waktu tunggu yang tidak terarah dan membuat jalur aktivitas lebih mudah dipahami.",
    action: "Tandai titik mulai dan titik tunggu dengan lebih tegas agar setiap kelompok mengetahui giliran tanpa harus bertanya ulang."
  },
  {
    id: "ana-04",
    category: "PRAKTIK GERAK",
    timestamp: "07:00",
    title: "Lintasan cone sebagai petunjuk visual",
    observation: "Peserta didik bergerak berurutan melewati penanda cone berwarna di halaman. Aladona berjalan di sisi lintasan sambil memantau alur gerak dan menjaga agar barisan tetap berjalan.",
    impact: "Penanda visual memberi struktur sederhana untuk latihan berpindah arah dan membantu peserta didik memahami urutan tanpa instruksi panjang.",
    action: "Berikan satu umpan balik spesifik pada setiap putaran, terutama tentang jarak aman, kontrol langkah, dan kesiapan peserta berikutnya."
  },
  {
    id: "ana-05",
    category: "DEMONSTRASI",
    timestamp: "09:00",
    title: "Mencontohkan tantangan gerak",
    observation: "Aladona berdiri di depan peserta didik yang berbaris dan memperagakan pola gerak di dekat cone serta rintangan rendah. Peserta didik mengamati sebelum mengambil giliran.",
    impact: "Demonstrasi membuat tuntutan gerak lebih konkret, terutama bagi anak yang membutuhkan contoh visual sebelum mencoba.",
    action: "Pecah demonstrasi menjadi beberapa tahap pendek dan minta satu peserta mengulang contoh untuk memastikan instruksi sudah dipahami."
  },
  {
    id: "ana-06",
    category: "PRAKTIK BERGILIRAN",
    timestamp: "11:00",
    title: "Belajar melalui contoh dan giliran",
    observation: "Aladona terlihat melewati penanda/rintangan di lapangan, sementara peserta didik menunggu dan mengikuti alur dari sisi lintasan. Adegan ini memperlihatkan guru menggunakan contoh gerak sebagai acuan praktik.",
    impact: "Peserta didik memperoleh referensi tempo dan arah gerak sebelum melakukan tugas secara mandiri.",
    action: "Atur jarak antar-giliran dan gunakan aba-aba yang konsisten agar kesempatan mencoba lebih merata untuk seluruh kelompok."
  },
  {
    id: "ana-07",
    category: "PENUTUP",
    timestamp: "14:10",
    title: "Mengumpulkan kembali perhatian",
    observation: "Menjelang akhir rekaman, peserta didik duduk berkumpul di halaman dan Aladona berada di dekat mereka. Aktivitas bergerak berhenti dan kelompok kembali pada posisi mendengarkan.",
    impact: "Penutupan mengembalikan fokus kelompok setelah rangkaian aktivitas dan memberi ruang untuk mengakhiri pembelajaran secara bersama.",
    action: "Tambahkan pertanyaan refleksi singkat tentang gerak yang paling menantang dan satu kebiasaan aman yang akan dibawa ke pertemuan berikutnya."
  }
];
