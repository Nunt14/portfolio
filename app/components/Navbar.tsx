"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage, dict } = useLanguage();

  const links = [
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.contact, href: "#contact" },
    { label: dict.nav.certificate, href: "#certificate" },
    { label: dict.nav.activity, href: "#activity" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl"
    >
      <ul 
        className="glass flex items-center justify-center gap-3 md:gap-5 rounded-full px-4 md:px-8 py-3 text-xs md:text-sm font-medium text-ink/80 overflow-x-auto whitespace-nowrap"
        // ✨ เพิ่มบรรทัดนี้: เช็คว่าถ้าเป็นภาษาไทย ให้ใช้ฟอนต์ Prompt ✨
        style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="hover:text-ink transition-colors px-1"
            >
              {link.label}
            </a>
          </li>
        ))}

        <div className="w-[1px] h-4 bg-gray-300 mx-1 md:mx-2 hidden sm:block"></div>

        <li>
          <button
            onClick={toggleLanguage}
            // บังคับให้ปุ่ม EN/TH ใช้ฟอนต์เดิมเสมอ (จะได้ไม่เพี้ยน)
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            className="flex items-center justify-center bg-white/80 border border-gray-200/60 text-ink px-3 py-1 rounded-full font-bold text-[11px] md:text-[12px] hover:bg-[#FFE156] hover:border-[#FFE156] transition-all duration-300 shadow-sm"
          >
            {language === 'en' ? 'TH' : 'EN'}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}