import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "@/components/ui/icons";

interface NavbarProps {
  scrollProgress: number;
}

const NAV_LINKS = [
  { href: "#beranda", number: "01", label: "Home" },
  { href: "#profil", number: "02", label: "Profil" },
  { href: "#praktik", number: "03", label: "Praktik" },
  { href: "#video", number: "04", label: "Video" },
  { href: "#nonmengajar", number: "05", label: "Nonmengajar" },
  { href: "#penilaian", number: "06", label: "Penilaian" },
  { href: "#refleksi", number: "07", label: "Refleksi" },
];

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 72);
      const marker = window.scrollY + Math.min(240, Math.max(140, window.innerHeight * 0.32));

      const visibleSections = NAV_LINKS.map((link) => {
        const id = link.href.slice(1);
        const element = document.getElementById(id);
        return {
          id,
          element,
          top: element ? element.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY,
        };
      }).filter((entry) => entry.element && entry.top <= marker);

      const latest = visibleSections.at(-1);
      if (!latest?.element) return;

      const tiedSections = visibleSections.filter(
        (entry) => Math.abs(entry.top - latest.top) < 8,
      );
      const hashTarget = window.location.hash.slice(1);
      const selected = tiedSections.find((entry) => entry.id === hashTarget) ?? tiedSections[0] ?? latest;
      setActiveSection(selected.id);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[2px] bg-transparent">
        <motion.div
          className="h-full origin-left bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.12, ease: "linear" }}
        />
      </div>

      <header className={`pointer-events-none fixed left-0 right-0 top-0 z-50 px-0 transition-all duration-500 ${isScrolled ? "pt-3 sm:px-4" : "pt-0"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 170, damping: 24 }}
          className={`pointer-events-auto mx-auto flex items-center justify-between transition-[max-width,border-radius,background-color,box-shadow,padding] duration-500 ${
            isScrolled
              ? "max-w-7xl rounded-2xl border border-[#36BBD3]/20 bg-[#06151A]/88 px-4 py-3 shadow-[0_16px_48px_rgba(0,0,0,.38),0_0_0_1px_rgba(255,255,255,.03)] backdrop-blur-xl sm:px-5"
              : "max-w-none border-b border-[#36BBD3]/15 bg-[#06151A]/88 px-4 py-3 backdrop-blur-md sm:px-8 lg:px-12"
          }`}
        >
          <a
            href="#beranda"
            aria-label="Kembali ke beranda"
            className="group flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <motion.img
              layout
              src="assets/images/school/LogoKampus.webp"
              alt="Logo Universitas Nusantara PGRI Kediri"
              className={`${isScrolled ? "h-10 w-10" : "h-10 w-10"} object-contain drop-shadow-[0_2px_10px_rgba(0,210,255,.24)] transition-all duration-500`}
            />
            <div className="hidden h-7 w-px bg-white/15 sm:block" />
            <div className="flex flex-col text-left">
              <span className="font-sans text-[11px] font-bold uppercase leading-none tracking-wider text-[#EEF4F2] sm:text-[13px]">
                PPG Prajabatan
              </span>
              <span className={`mt-0.5 font-sans text-[9px] leading-tight text-[#83969D] transition-all sm:text-[10.5px] ${isScrolled ? "max-w-0 overflow-hidden opacity-0 lg:max-w-xs lg:opacity-100" : "max-w-xs opacity-100"}`}>
                Universitas Nusantara PGRI Kediri
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => {
                    setActiveSection(link.href.slice(1));
                    setMobileMenuOpen(false);
                  }}
                    className={`group relative flex items-center gap-1.5 py-2.5 font-sans text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] ${
                    isActive ? "font-semibold text-[#6FE8F5]" : "text-[#EEF4F2]/72 hover:text-white"
                  }`}
                >
                  <span className={`font-plex text-[9px] ${isActive ? "text-[#00E5FF]" : "text-[#6F8790] group-hover:text-[#36BBD3]"}`}>
                    {link.number}
                  </span>
                  <span>{link.label}</span>
                  <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#00E5FF] via-[#36BBD3] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="absolute bottom-[-1px] left-0 h-[3px] w-[3px] -translate-x-1 rounded-full bg-[#00E5FF] opacity-0 shadow-[0_0_8px_#00E5FF] transition-all duration-500 group-hover:translate-x-[calc(100%+3.8rem)] group-hover:opacity-100" />
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-line"
                      className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#00E5FF] shadow-[0_0_9px_#00E5FF]"
                      transition={{ type: "spring", stiffness: 280, damping: 26 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 font-plex text-[9px] uppercase tracking-[0.18em] text-[#7FE8F5] lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
            PPL · 2026
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg border border-[#36BBD3]/25 bg-[#10232B] p-2 text-[#EEF4F2] transition-colors hover:border-[#36BBD3]/55 hover:text-[#00E5FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF] lg:hidden"
            aria-label={mobileMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 4%)" }}
            animate={{ opacity: 1, clipPath: "circle(145% at 92% 4%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#06151A]/98 px-7 pb-9 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <div>
              <div className="mb-6 flex items-center gap-3 border-b border-[#36BBD3]/15 pb-6">
                <img src="assets/images/school/LogoKampus.webp" alt="" className="h-12 w-12 object-contain" />
                <div>
                  <div className="font-sans text-sm font-bold uppercase tracking-wide text-[#EEF4F2]">PPG Prajabatan</div>
                  <div className="font-plex text-[9px] uppercase tracking-widest text-[#83969D]">Universitas Nusantara PGRI Kediri</div>
                </div>
              </div>

              <nav className="flex flex-col" aria-label="Navigasi mobile">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.045 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-baseline justify-between border-b border-[#36BBD3]/10 py-4 text-[#EEF4F2] transition-colors hover:text-[#00E5FF]"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-plex text-[10px] text-[#36BBD3]">{link.number}</span>
                      <span className="font-sans text-lg font-semibold uppercase tracking-wider">{link.label}</span>
                    </span>
                    <span className="text-[#36BBD3] transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="border-t border-[#36BBD3]/15 pt-5 text-xs text-[#83969D]">
              <div className="text-sm font-semibold text-[#EEF4F2]">Zidan Insafi, S.Pd.</div>
              <div className="mt-1 font-plex text-[10px] text-[#36BBD3]">PJOK · SDN 1 Setonopande</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
