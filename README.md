# E-Portfolio PPL - Zidan Insafi, S.Pd.

Website one-page E-Portfolio Praktik Pengalaman Lapangan (PPL) PPG Prajabatan bidang Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK) di SDN 1 Setonopande, Universitas Nusantara PGRI Kediri.

## Konsep

- Format: static one-page academic portfolio
- Gaya: academic editorial, personal, sinematik, dan tetap berorientasi pada penilaian
- Konten: profil, dua praktik mengajar, analisis video, dokumentasi nonmengajar, instrumen penilaian, dan refleksi
- Interaksi: opening loader, floating navbar, reveal motion, modal galeri, preview modul PDF, lightbox, dan video Google Drive/HTML5

## Teknologi

- React 19 dan TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Radix UI Dialog

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

## Struktur penting

```text
src/
|- components/       Komponen halaman, opening, galeri, dan dialog
|- data/             Konten portofolio sebagai sumber data utama
|- lib/              Utilitas bersama
`- types/            Tipe data TypeScript

public/assets/
|- backgrounds/      Latar visual tiap section dan opening
|- covers/           Render sampul modul terbaru
|- documents/        Dokumen PDF yang dipratinjau di website
|- images/           Logo, foto profil, dan dokumentasi kegiatan
`- video/            Opsional jika memakai file video lokal
```

## Video

Video asli disimpan di `assets/video/` dan diabaikan Git karena ukurannya besar. Untuk publikasi, isi `VIDEO_SOURCE_URL` di `src/data/videoAnalysis.ts` dengan tautan Google Drive atau URL video langsung. Tautan Google Drive berbentuk `/file/d/.../view` otomatis diubah menjadi mode preview.

## Modul ajar

Preview praktik membaca file terbaru `modul-1.pdf` dan `modul-2.pdf` dari folder `assets/documents/`. Sampul preview dirender dari halaman pertama dokumen, sedangkan panel analisis disesuaikan dengan isi modul aktual: 9 halaman untuk Modul 1 dan 18 halaman untuk Modul 2.

## Dokumentasi nonmengajar

Foto senam pagi dan pendampingan lomba atletik memakai aset lokal dari `assets/images/nonmengajar/`. Foto Upacara Hari Pramuka ditandai sebagai referensi sementara dan memiliki atribusi sumber di dalam galeri. Ganti aset tersebut dengan dokumentasi asli saat sudah tersedia.
