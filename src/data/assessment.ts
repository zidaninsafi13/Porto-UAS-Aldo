import { AssessmentCriterion, AssessmentPhase } from "@/types";

export const RUBRIC_PRACTICE_01: AssessmentCriterion[] = [
  {
    aspect: "Posisi Kaki Tumpu & Postur",
    expert: "Kaki tumpu 15–20 cm di samping bola menghadap target; lutut luwes dan tubuh condong seimbang.",
    proficient: "Kaki tumpu di samping bola namun jarak kadang kurang presisi; lutut agak kaku.",
    developing: "Kaki tumpu di belakang atau menyilang garis bola; postur tidak seimbang."
  },
  {
    aspect: "Perkenaan Kaki Bagian Dalam",
    expert: "Pergelangan terkunci keluar secara konsisten; kontak tepat di tengah bidang kaki dan titik tengah bola.",
    proficient: "Kontak kaki bagian dalam namun pergelangan belum terkunci konsisten sehingga bola melambung.",
    developing: "Kontak bola sering menggunakan ujung jari atau punggung kaki tanpa orientasi putaran yang benar."
  },
  {
    aspect: "Akurasi & Laju Operan",
    expert: "Minimal 4 dari 5 operan meluncur mendatar tepat ke penerima pada jarak 4 meter dengan kekuatan pas.",
    proficient: "2–3 operan tepat ke sasaran, laju bola kadang terlalu kencang atau melambat sebelum tiba.",
    developing: "Kurang dari 2 operan mencapai sasaran; arah bola melenceng jauh di luar jangkauan."
  },
  {
    aspect: "Gerakan Lanjutan (Follow Through)",
    expert: "Ayunan kaki konsisten mengarah ke sasaran dan berat badan berpindah mulus tanpa hilang tumpuan.",
    proficient: "Gerakan lanjutan dilakukan namun ayunan langsung terhenti seketika setelah kontak bola.",
    developing: "Tidak ada gerakan lanjutan; tubuh terhuyung ke belakang setelah menendang."
  }
];

export const ASSESSMENT_TIMELINE_PRACTICE_02: AssessmentPhase[] = [
  {
    step: "01",
    name: "Asesmen Awal (Diagnostik)",
    type: "Kesiapan Gerak & Minat",
    focus: "Identifikasi kesiapan gerak manipulatif dasar sebelum sirkuit dimulai.",
    description: "Pemanasan oper bola dan kartu kesiapan (siap/butuh bimbingan) untuk pemetaan kelompok yang berimbang."
  },
  {
    step: "02",
    name: "Asesmen Proses (Formatif)",
    type: "Observasi & Afirmasi Sejawat",
    focus: "Memantau keterlibatan aktif, keselamatan, dan kompetensi sosial emosional (PSE).",
    description: "Observasi berkeliling di 4 pos sembari memfasilitasi siswa saling memberi apresiasi suportif."
  },
  {
    step: "03",
    name: "Asesmen Akhir (Sumatif)",
    type: "Rubrik Unjuk Kerja Mandiri",
    focus: "Kelancaran koordinasi mekanika gerak pada pos tantangan pilihan siswa.",
    description: "Demonstrasi variasi gerak manipulatif dinilai berdasar konsistensi kontrol dan koordinasi motorik."
  },
  {
    step: "04",
    name: "Refleksi Terbimbing",
    type: "Lembar Refleksi Diri",
    focus: "Regulasi metakognitif mengenai pos menantang dan cara mengatasi hambatan.",
    description: "Sesi penutup melingkar di mana siswa mengekspresikan capaian rasa percaya diri dan apresiasi regu."
  }
];
