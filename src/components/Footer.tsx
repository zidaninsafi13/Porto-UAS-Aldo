import React from "react";
import { TEACHER_DATA } from "@/data/portfolioData";
import { ArrowUp } from "@/components/ui/icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-8 px-6 sm:px-8 lg:px-12 bg-[#040C0F] text-[#83969D] border-t border-[rgba(219,238,241,0.08)] font-plex text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Metadata lockup */}
        <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
          <span className="font-sans font-bold text-[#EEF4F2]">{TEACHER_DATA.name}</span>
          <span className="text-[#36BBD3]">•</span>
          <span>E-Portfolio PPL</span>
          <span className="text-[#36BBD3]">•</span>
          <span>PPG Prajabatan 2026</span>
        </div>

        {/* Center: Motto */}
        <div className="font-handwriting text-xl text-[#83969D]">
          Terus bergerak, terus belajar.
        </div>

        {/* Right: Scroll to Top button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#EEF4F2] hover:text-[#36BBD3] transition-colors font-sans text-xs font-medium cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#36BBD3]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

