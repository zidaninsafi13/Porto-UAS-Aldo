# E-Portfolio PPL — Aladona Khairulloh Ibrahim

Portfolio akademik satu halaman untuk mendokumentasikan praktik, asesmen, kegiatan, dan refleksi Aladona Khairulloh Ibrahim.

## Teknologi

- React 19, TypeScript, Vite
- Tailwind CSS 4
- Motion dan Radix Dialog untuk interaksi yang diperlukan
- GitHub Pages melalui workflow di `.github/workflows/deploy.yml`

## Menjalankan lokal

```bash
npm install
npm run dev
```

Build produksi:

```bash
npm run build
npm run preview
```

## Mengisi konten Aladona

Konten utama berada di `src/data/teacher.ts`, `src/data/practices.ts`, `src/data/videoAnalysis.ts`, dan `src/data/activities.ts`. Isi hanya dari dokumen dan dokumentasi asli Aladona. Konten yang belum tersedia ditampilkan sebagai placeholder agar tidak terjadi klaim palsu.

Asset Aladona yang dipakai aplikasi berada di `public/assets/profile/`, `public/assets/cover/`, `public/assets/document/`, `public/assets/praktek-non-mengajar/`, dan `public/assets/logo-kampus/`. Path-nya sudah dihubungkan ke data terpusat; tambahkan file baru di folder tersebut bila diperlukan.

Foto yang menampilkan peserta didik hanya ditampilkan sebagai dokumentasi yang diberikan pengguna. Pastikan izin publikasi sudah dimiliki sebelum deployment.

## Catatan video dan PDF

`VIDEO_SOURCE_URL` menerima URL video langsung atau tautan Google Drive. Timestamp hanya dapat melakukan seek pada elemen video langsung; tautan Drive menggunakan mode embed tanpa seek. PDF modul dan instrumen penilaian tersedia melalui modal terkait.
