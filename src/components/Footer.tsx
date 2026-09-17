import React from "react";
import { TEACHER_DATA } from "@/data/portfolioData";
import { ArrowUp } from "@/components/ui/icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#D8D1C6] bg-[#E9DFD2] px-6 py-8 font-plex text-xs text-[#6F746B] sm:px-8 lg:px-12">
      <div className="footer-inner mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        {/* Left: Metadata lockup */}
        <div className="footer-meta flex flex-wrap items-center gap-2 text-center md:text-left">
          <img src="assets/logo-kampus/LOGO-UNP-Kediri.png" alt="Logo Universitas Nusantara PGRI Kediri" loading="lazy" decoding="async" className="h-8 w-8 object-contain" />
          <span className="font-sans font-bold text-[#1C252C]">{TEACHER_DATA.name}</span>
          <span className="text-[#36BBD3]">•</span>
          <span>E-Portfolio PPL</span>
          <span className="text-[#36BBD3]">•</span>
          <span>{TEACHER_DATA.program} · {TEACHER_DATA.year}</span>
        </div>

        {/* Center: Motto */}
        <div className="footer-motto font-handwriting text-xl text-[#7D8B7A]">
          Terus bergerak, terus belajar.
        </div>

        {/* Right: Scroll to Top button */}
        <div className="footer-action flex items-center gap-2">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-[#1C252C] transition-colors hover:text-[#B55E3B]"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B55E3B]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

