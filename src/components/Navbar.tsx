import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "@/components/ui/icons";
import { TEACHER_DATA } from "@/data/portfolioData";

interface NavbarProps {
  scrollProgress: number;
}

type NavLink = { href: string; number: string; label: string; children?: Array<{ href: string; label: string }> };

const NAV_LINKS: NavLink[] = [
  { href: "#beranda", number: "01", label: "Home" },
  { href: "#profil", number: "02", label: "Profil" },
  { href: "#praktik", number: "03", label: "Praktik" },
  { href: "#video", number: "04", label: "Video" },
  { href: "#nonmengajar", number: "05", label: "Nonmengajar" },
  { href: "#penilaian", number: "06", label: "Penilaian" },
  { href: "#refleksi-praktik", number: "07", label: "Refleksi", children: [{ href: "#refleksi-praktik", label: "Refleksi praktik" }, { href: "#refleksi", label: "Refleksi akhir" }] },
];

export const Navbar: React.FC<NavbarProps> = ({ scrollProgress }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 72);
      const marker = window.scrollY + Math.min(240, Math.max(140, window.innerHeight * 0.32));

      const sectionLinks = NAV_LINKS.flatMap((link) => link.children ?? [{ href: link.href, label: link.label }]);
      const visibleSections = sectionLinks.map((link) => {
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
          className="h-full origin-left bg-[#B55E3B]"
          animate={{ scaleX: scrollProgress }}
          transition={{ duration: 0.12, ease: "linear" }}
        />
      </div>

      <header className={`pointer-events-none fixed left-0 right-0 top-0 z-50 px-0 transition-all duration-500 ${isScrolled ? "pt-2 sm:px-4 sm:pt-3" : "pt-0"}`}>
        <motion.div
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto mx-auto flex w-full items-center justify-between transition-[max-width,border-radius,background-color,box-shadow,padding] duration-500 ${
            isScrolled
              ? "max-w-7xl rounded-2xl border border-[#D8D1C6] bg-[#F7F3EC]/95 px-4 py-3 shadow-[0_16px_48px_rgba(28,37,44,.12)] backdrop-blur-xl sm:px-5"
              : "max-w-none border-b border-[#D8D1C6] bg-[#F7F3EC]/95 px-4 py-3 backdrop-blur-md sm:px-8 lg:px-12"
          }`}
        >
          <a
            href="#beranda"
            aria-label="Kembali ke beranda"
            className="group flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E5FF]"
          >
            <img src="assets/logo-kampus/LOGO-UNP-Kediri.png" alt="Logo Universitas Nusantara PGRI Kediri" loading="lazy" decoding="async" className="h-10 w-10 shrink-0 rounded-full border border-[#B86345]/60 bg-[#F6F0E6] object-contain p-0.5" />
            <div className="hidden h-7 w-px bg-[#D8D1C6] sm:block" />
            <div className="flex flex-col text-left">
              <span className="font-sans text-[11px] font-bold uppercase leading-none tracking-wider text-[#1C252C] sm:text-[13px]">
                {TEACHER_DATA.program}
              </span>
              <span className="mt-0.5 max-w-[15rem] font-sans text-[9px] leading-tight text-[#6F746B] sm:max-w-xs sm:text-[10.5px]">
                {TEACHER_DATA.university}
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Navigasi utama">
            {NAV_LINKS.map((link) => {
              const childLinks = link.children ?? [];
              const isActive = activeSection === link.href.slice(1) || childLinks.some((child) => activeSection === child.href.slice(1));
              if (!childLinks.length) return <a key={link.href} href={link.href} aria-current={isActive ? "location" : undefined} onClick={() => setActiveSection(link.href.slice(1))} className={`group relative flex items-center gap-1.5 py-2.5 font-sans text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] ${isActive ? "font-semibold text-[#B55E3B]" : "text-[#1C252C]/72 hover:text-[#B55E3B]"}`}><span className={`font-plex text-[9px] ${isActive ? "text-[#B55E3B]" : "text-[#6F746B] group-hover:text-[#B55E3B]"}`}>{link.number}</span><span>{link.label}</span><span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#B55E3B] via-[#7D8B7A] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />{isActive && <motion.span layoutId="active-nav-line" className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#B55E3B]" transition={{ type: "spring", stiffness: 280, damping: 26 }} />}</a>;
              return <div key={link.href} className="group relative"><button type="button" className={`relative flex items-center gap-1.5 py-2.5 font-sans text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] ${isActive ? "font-semibold text-[#B55E3B]" : "text-[#1C252C]/72 hover:text-[#B55E3B]"}`}><span className={`font-plex text-[9px] ${isActive ? "text-[#B55E3B]" : "text-[#6F746B] group-hover:text-[#B55E3B]"}`}>{link.number}</span><span>{link.label}</span><span className="text-[11px]">⌄</span>{isActive && <motion.span layoutId="active-nav-line" className="absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-[#B55E3B]" transition={{ type: "spring", stiffness: 280, damping: 26 }} />}</button><div className="invisible absolute right-0 top-full z-20 mt-2 w-48 translate-y-1 border border-[#D8D1C6] bg-[#F7F3EC] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">{childLinks.map((child) => <a key={child.href} href={child.href} onClick={() => setActiveSection(child.href.slice(1))} className={`block px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] transition hover:bg-[#E9DFD2] hover:text-[#B55E3B] ${activeSection === child.href.slice(1) ? "text-[#B55E3B]" : "text-[#6F746B]"}`}>{child.label}</a>)}</div></div>;
            })}
          </nav>

          <div className="hidden items-center gap-2 font-plex text-[9px] uppercase tracking-[0.18em] text-[#B55E3B] lg:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7D8B7A]" />
            PPL · {TEACHER_DATA.year}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-lg border border-[#D8D1C6] bg-[#E9DFD2] p-2 text-[#1C252C] transition-colors hover:border-[#B55E3B] hover:text-[#B55E3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B55E3B] lg:hidden"
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
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#F7F3EC]/98 px-7 pb-9 pt-28 text-[#1C252C] backdrop-blur-2xl lg:hidden"
          >
            <div>
              <div className="mb-6 flex items-center gap-3 border-b border-[#D8D1C6] pb-6">
                <img src="assets/logo-kampus/LOGO-UNP-Kediri.png" alt="Logo Universitas Nusantara PGRI Kediri" loading="lazy" decoding="async" className="h-12 w-12 rounded-full border border-[#B86345]/60 bg-[#F6F0E6] object-contain p-0.5" />
                <div>
                  <div className="font-sans text-sm font-bold uppercase tracking-wide text-[#1C252C]">{TEACHER_DATA.program}</div>
                  <div className="font-plex text-[9px] uppercase tracking-widest text-[#6F746B]">{TEACHER_DATA.university}</div>
                </div>
              </div>

              <nav className="flex flex-col" aria-label="Navigasi mobile">
                {NAV_LINKS.map((link, index) => {
                  const childLinks = link.children ?? [];
                  if (!childLinks.length) return <motion.a key={link.href} href={link.href} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.045 }} onClick={() => setMobileMenuOpen(false)} className="group flex items-baseline justify-between border-b border-[#D8D1C6] py-4 text-[#1C252C] transition-colors hover:text-[#B55E3B]"><span className="flex items-baseline gap-4"><span className="font-plex text-[10px] text-[#B55E3B]">{link.number}</span><span className="font-sans text-lg font-semibold uppercase tracking-wider">{link.label}</span></span><span className="text-[#B55E3B] transition-transform duration-300 group-hover:translate-x-1">→</span></motion.a>;
                  return <motion.div key={link.href} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 + index * 0.045 }} className="border-b border-[#D8D1C6] py-4"><div className="flex items-baseline gap-4"><span className="font-plex text-[10px] text-[#B55E3B]">{link.number}</span><span className="font-sans text-lg font-semibold uppercase tracking-wider">{link.label}</span></div><div className="mt-3 space-y-1 pl-8">{childLinks.map((child) => <a key={child.href} href={child.href} onClick={() => setMobileMenuOpen(false)} className="group flex items-center justify-between py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#6F746B] transition-colors hover:text-[#B55E3B]"><span>{child.label}</span><span className="text-[#B55E3B] transition-transform duration-300 group-hover:translate-x-1">→</span></a>)}</div></motion.div>;
                })}
              </nav>
            </div>

            <div className="border-t border-[#D8D1C6] pt-5 text-xs text-[#6F746B]">
              <div className="text-sm font-semibold text-[#1C252C]">{TEACHER_DATA.name}</div>
              <div className="mt-1 font-plex text-[10px] text-[#36BBD3]">{TEACHER_DATA.field} · {TEACHER_DATA.school}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
