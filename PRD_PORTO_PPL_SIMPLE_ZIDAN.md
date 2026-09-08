# PRD — E-PORTFOLIO PPL ZIDAN INSAFI

**Versi:** 1.0  
**Produk:** E-Portfolio Praktik Pengalaman Lapangan  
**Pemilik:** Zidan Insafi, S.Pd.  
**Bidang:** Pendidikan Jasmani, Olahraga, dan Kesehatan (PJOK)  
**Lokasi PPL:** SDN 1 Setonopande  
**Program:** PPG Prajabatan — Universitas Nusantara PGRI Kediri  
**Tipe Website:** Static One-Page Portfolio  
**Target Utama:** Dosen penilai PPL  
**Status:** Greenfield / dibuat dari awal

---

## 1. Tujuan Produk

Membuat E-Portfolio PPL yang sederhana, rapi, modern, dan mudah dinilai.

Website ini **bukan web app**, bukan dashboard, bukan produk Seminar, bukan SaaS, dan bukan platform portofolio kompleks.

Tujuan utamanya:

> Dosen dapat melihat seluruh komponen E-Portfolio PPL dengan cepat, jelas, dan nyaman dalam satu halaman.

Website harus menunjukkan:
- profil guru,
- analisis perencanaan pembelajaran,
- analisis materi,
- analisis media,
- analisis video praktik,
- kegiatan nonmengajar,
- instrumen penilaian beserta analisisnya,
- refleksi diri.

---

## 2. Prinsip Utama

Website harus terasa:

**Clean · Academic · Personal · Modern · Professional**

Bukan:

**AI-looking · SaaS · Dashboard · Template generik · Terlalu ramai**

Prinsip desain:
1. Konten lebih penting daripada efek.
2. Foto dan artefak asli lebih penting daripada ilustrasi dekoratif.
3. Semua poin penilaian dosen harus mudah ditemukan.
4. Navigasi harus sederhana.
5. Tidak ada fitur yang tidak membantu penilaian portofolio.

---

## 3. Format Website

Website dibuat sebagai **ONE-PAGE PORTFOLIO**.

Struktur:

```text
/
├── Hero / Identitas
├── Profil Guru
├── Praktik Mengajar Mandiri
├── Analisis Video
├── Kegiatan Nonmengajar
├── Instrumen Penilaian
├── Refleksi Diri
└── Footer
```

Tidak perlu halaman terpisah untuk setiap bagian.

---

## 4. Navigasi

Navbar:

```text
Profil
Praktik
Video
Nonmengajar
Penilaian
Refleksi
```

Semua menggunakan anchor:
`#profil`, `#praktik`, `#video`, `#nonmengajar`, `#penilaian`, `#refleksi`.

Navbar:
- sticky,
- ringan,
- mobile-friendly,
- active state subtle.

---

## 5. Hero / Identitas

Konten:

```text
E-PORTFOLIO
PRAKTIK PENGALAMAN LAPANGAN

Belajar Mengajar.
Mengajar untuk Belajar.

Zidan Insafi, S.Pd.
PPG Prajabatan
Pendidikan Jasmani, Olahraga, dan Kesehatan
SDN 1 Setonopande
```

CTA: **Lihat Portofolio**

Visual utama:
- foto dokumentasi praktik asli,
- still frame video praktik,
- atau foto sekolah/lapangan.

Jangan menggunakan gambar kelas hasil AI.

---

## 6. Profil Guru

Isi:
- foto profil,
- nama,
- bidang PJOK,
- profil singkat,
- filosofi mengajar,
- visi sebagai guru.

Target:
- profil: 80–120 kata,
- filosofi: 80–120 kata,
- visi: 60–100 kata.

Tidak perlu CV panjang.

---

## 7. Praktik Mengajar Mandiri

Hanya ada **dua praktik mengajar**.

### Praktik 01 — Teknik Dasar Mengoper Bola dengan Kaki Bagian Dalam

Metadata:
- PJOK
- Fase C
- Kelas V
- SDN 1 Setonopande

Materi:
1. Posisi Awal
2. Perkenaan
3. Ayunan
4. Gerakan Lanjutan

Pendekatan:
- instruksi langsung,
- demonstrasi gerak,
- latihan terbimbing berpasangan.

Media:
- lapangan,
- bola sepak / bola modifikasi,
- cone,
- peluit,
- alat pengukur waktu,
- demonstrasi langsung.

Asesmen:
- tahapan gerak,
- akurasi.

Kategori:
- Mahir,
- Cukup,
- Perlu Bimbingan.

Tampilan:
```text
Ringkasan
Perencanaan
Materi
Media
Asesmen
Lihat Modul
```

### Praktik 02 — Gerak Dasar Manipulatif melalui Aktivitas Empat Pos

Metadata:
- PJOK
- Fase C
- Kelas V
- Pembelajaran Sosial Emosional (PSE)

Materi:
```text
Melempar
Menangkap
Memantulkan
Menendang
```

Fokus:
- aktivitas empat pos,
- pilihan tingkat tantangan,
- kerja sama,
- keselamatan,
- umpan balik,
- refleksi.

Media:
- ilustrasi gerakan,
- kartu kesiapan,
- kartu tingkat tantangan,
- bola dan sasaran,
- kartu umpan balik,
- video/slow motion jika digunakan.

Asesmen:
```text
Asesmen Awal
↓
Asesmen Proses
↓
Asesmen Akhir
↓
Refleksi
```

Tampilan:
```text
Ringkasan
Perencanaan
Materi
Media
Asesmen
Lihat Modul
```

---

## 8. Pola Analisis

Setiap analisis menggunakan pola sederhana:

```text
Apa yang dirancang?
Mengapa digunakan?
Bagaimana diterapkan?
Apa yang perlu diperbaiki?
```

Target:
- 80–150 kata per analisis,
- natural,
- akademik,
- tidak seperti artikel jurnal,
- tidak seperti copy marketing.

Dilarang mengarang hasil belajar, persentase keberhasilan, respons siswa, dan statistik.

---

## 9. Analisis Video

Hanya **satu video praktik**.

Struktur:

```text
ANALISIS VIDEO PRAKTIK MENGAJAR

[ VIDEO / THUMBNAIL 16:9 ]

Tentang Pelaksanaan
Pengorganisasian Peserta Didik
Komunikasi dan Instruksi
Pengelolaan Ruang dan Peralatan
Kekuatan Praktik
Hal yang Perlu Ditingkatkan
```

Analisis harus berdasarkan hal yang benar-benar terlihat atau terdengar dalam video.

Target total: **350–600 kata**.

---

## 10. Kegiatan Nonmengajar

Gunakan galeri atau timeline sederhana.

Setiap item:

```text
[Foto]
Nama Kegiatan
Tanggal
Peran Saya
Apa yang Saya Pelajari
```

Tidak perlu halaman detail.

Jika data belum ada, jangan membuat kegiatan palsu.

---

## 11. Instrumen Penilaian

### Praktik 01
Tampilkan:
- Tahapan Gerak
- Akurasi
- Mahir
- Cukup
- Perlu Bimbingan

### Praktik 02
Tampilkan:
- Asesmen Awal
- Asesmen Proses
- Asesmen Akhir
- Refleksi

Tambahkan analisis singkat tentang:
- fungsi instrumen,
- alasan pemilihan,
- cara penggunaan,
- hal yang dapat diperbaiki.

Tidak perlu dashboard atau chart jika data nyata belum ada.

---

## 12. Refleksi Diri

Judul: **Refleksi Perjalanan PPL**

Isi:
### Apa yang Saya Pelajari
### Perkembangan Saya sebagai Guru
### Hal yang Akan Saya Tingkatkan

Target total: **300–500 kata**.

Refleksi personal harus berasal dari Zidan.

---

## 13. Footer

Isi:

```text
Zidan Insafi, S.Pd.
E-Portfolio Praktik Pengalaman Lapangan
PPG Prajabatan
Universitas Nusantara PGRI Kediri
2026
```

Tambahkan **Kembali ke Atas ↑**.

---

## 14. Visual Direction

Style: **Academic Editorial**

Arah:
- tipografi kuat,
- whitespace,
- foto dokumentasi,
- garis tipis,
- layout rapi,
- modern tanpa futuristik.

---

## 15. Color System

```text
Ink Navy       #142033
Warm Paper     #F5F2EB
White          #FFFFFF
Academic Blue  #3E6FA8
Muted Gray     #747B86
Border         #D7D6D0
```

Academic Blue hanya sebagai accent.

---

## 16. Typography

Display:
- Instrument Serif / DM Serif Display / Libre Baskerville

Body:
- Inter

Aturan:
- body 16–18 px,
- reading width 720–780 px,
- headline besar tapi tidak berlebihan.

---

## 17. Layout

- max-width: 1200–1280 px
- section spacing: 80–120 px desktop
- 48–64 px mobile
- separator garis tipis
- jangan membungkus semua section dalam card

---

## 18. Card Policy

Card hanya untuk:
- Praktik 01 / Praktik 02
- Kegiatan nonmengajar
- Dokumen

Border radius 6–12 px.

Jangan semua elemen jadi card.

---

## 19. Foto dan Dokumentasi

Prioritas:
1. dokumentasi asli PPL
2. foto profil
3. screenshot modul
4. thumbnail video
5. foto kegiatan nonmengajar

Jangan gunakan stock photo atau gambar AI sebagai pengganti dokumentasi.

---

## 20. Privasi Siswa

- jangan tampilkan nama lengkap siswa,
- jangan tampilkan nilai individu,
- jangan tampilkan informasi pribadi,
- blur/crop wajah jika izin publikasi belum jelas.

---

## 21. Interaction

Boleh:
- smooth scroll,
- hover kecil,
- underline link,
- active nav,
- fade ringan.

Tidak boleh:
- particles,
- custom cursor,
- parallax berat,
- scroll-jacking,
- animation per kata.

---

## 22. Responsive

Target:
- 1920×1080
- 1366×768
- 768×1024
- 390×844
- 360×800

Mobile:
- navbar sederhana,
- praktik 1 kolom,
- video full width,
- tidak ada horizontal overflow.

---

## 23. Tech Stack

Karena ini hanya portfolio statis:

```text
HTML5
CSS3
JavaScript
```

Tidak perlu:
- Next.js
- React
- TypeScript
- Tailwind
- backend
- database
- CMS

Alasan:
- ringan,
- mudah diedit,
- mudah deploy,
- cocok GitHub Pages,
- tidak overengineering.

---

## 24. Struktur File

```text
porto-ppl/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── profile/
│   │   ├── praktik-1/
│   │   ├── praktik-2/
│   │   ├── nonmengajar/
│   │   └── school/
│   ├── documents/
│   │   ├── modul-praktik-1.pdf
│   │   └── modul-praktik-2.pdf
│   ├── video/
│   │   └── praktik.mp4
│   └── brand/
└── README.md
```

---

## 25. Document Handling

Tombol: **Lihat Modul ↗**

PDF dibuka tab baru.

Tidak perlu PDF viewer custom.

Jika PDF belum tersedia, tombol tidak ditampilkan.

---

## 26. Video Handling

Gunakan `<video>` jika file lokal aman dipublikasi.

Jika privasi belum clear, gunakan thumbnail/placeholder sampai keputusan publikasi selesai.

Tidak perlu video library.

---

## 27. SEO Dasar

Title:
`E-Portfolio PPL | Zidan Insafi, S.Pd.`

Description:
`E-Portfolio Praktik Pengalaman Lapangan Zidan Insafi, S.Pd. sebagai calon Guru PJOK.`

Tambahkan favicon, Open Graph sederhana, semantic HTML, alt image.

---

## 28. Accessibility

Minimal:
- semantic heading,
- alt text,
- contrast cukup,
- focus state,
- keyboard-friendly,
- video controls.

---

## 29. Performance

- foto WebP/AVIF bila memungkinkan,
- lazy load image,
- JavaScript minimal,
- tidak ada library besar.

Target Lighthouse:
- Performance ≥ 90
- Accessibility ≥ 90
- Best Practices ≥ 90
- SEO ≥ 90

---

## 30. Hard No

Dilarang menambahkan:
- web app features,
- dashboard,
- login,
- database,
- CMS,
- dark mode,
- chatbot,
- AI feature,
- chart palsu,
- statistik palsu,
- multi-page case study,
- route kompleks,
- schema data,
- animation library,
- glassmorphism,
- neon glow,
- purple SaaS gradient,
- bento dashboard,
- floating UI tidak berguna,
- ilustrasi kelas AI,
- fitur project Seminar,
- fitur project lain.

Project ini berdiri sendiri.

---

## 31. Content Integrity

Semua konten harus berasal dari:
- modul PPL,
- video praktik,
- dokumentasi asli,
- pengalaman nyata,
- refleksi Zidan.

Dilarang mengarang:
- data hasil siswa,
- nilai,
- jumlah keberhasilan,
- aktivitas sekolah,
- respons siswa,
- refleksi personal,
- dampak pembelajaran.

---

## 32. Roadmap

### M0 — Setup & Asset
- buat project,
- struktur file,
- kumpulkan dua modul,
- video,
- foto profil,
- dokumentasi praktik,
- kegiatan nonmengajar.

### M1 — Layout Dasar
Bangun:
- navbar,
- hero,
- seluruh section,
- footer.

### M2 — Praktik Mengajar
Isi Praktik 01 dan Praktik 02:
- perencanaan,
- materi,
- media,
- asesmen,
- modul.

### M3 — Video + Nonmengajar + Penilaian
Isi:
- analisis video,
- kegiatan nonmengajar,
- instrumen penilaian.

### M4 — Profil + Refleksi
Isi:
- profil,
- filosofi,
- visi,
- refleksi.

### M5 — Polish & Deploy
- responsive,
- hover,
- smooth scroll,
- optimasi gambar,
- accessibility,
- link check,
- mobile QA,
- deploy GitHub Pages.

---

## 33. Urutan Implementasi

```text
SETUP
↓
LAYOUT
↓
PRAKTIK 01
↓
PRAKTIK 02
↓
VIDEO
↓
NONMENGAJAR
↓
PENILAIAN
↓
PROFIL
↓
REFLEKSI
↓
RESPONSIVE
↓
POLISH
↓
DEPLOY
```

Jangan mulai dari animasi.

---

## 34. Definition of Done

- [ ] website one-page berjalan
- [ ] navbar anchor bekerja
- [ ] profil guru tersedia
- [ ] dua praktik mengajar tersedia
- [ ] analisis perencanaan tersedia
- [ ] analisis materi tersedia
- [ ] analisis media tersedia
- [ ] satu analisis video tersedia
- [ ] kegiatan nonmengajar tersedia
- [ ] instrumen penilaian tersedia
- [ ] analisis instrumen tersedia
- [ ] refleksi diri tersedia
- [ ] dua modul dapat dibuka
- [ ] tidak ada data palsu
- [ ] tidak ada broken link
- [ ] desktop responsive
- [ ] mobile responsive
- [ ] tampilan konsisten
- [ ] privacy siswa aman

---

## 35. Final Product Principle

### SIMPLE
Dosen langsung paham struktur website.

### CLEAR
Setiap poin penilaian mudah ditemukan.

### AUTHENTIC
Konten menggunakan pengalaman dan dokumentasi asli.

### PROFESSIONAL
Tampilan modern tanpa efek berlebihan.

---

## Final Direction

Website akhir harus terasa seperti:

> **portofolio akademik seorang calon guru yang rapi dan profesional**

bukan seperti:

> **produk teknologi yang sedang mencoba terlihat canggih.**

Prioritas:

**Isi → Kejelasan → Visual → Interaksi.**
