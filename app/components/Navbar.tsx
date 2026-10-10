"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useState, useEffect } from "react"; // 1. นำเข้า useState และ useEffect

export default function Navbar() {
  const { language, toggleLanguage, dict } = useLanguage();
  
  // 2. สร้าง State สำหรับเก็บว่าตอนนี้อยู่ Section ไหน
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.projects, href: "#projects" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.contact, href: "#contact" },
    { label: dict.nav.certificate, href: "#certificate" },
    { label: dict.nav.activity, href: "#activity" },
  ];

  // 3. ใช้ useEffect เพื่อดักจับการเลื่อนหน้าจอ
  useEffect(() => {
    // รายชื่อ ID ของ Section ทั้งหมดที่เรามี
    const sectionIds = ["skills", "projects", "experience", "contact", "certificate", "activity"];
    
    // ตั้งค่าตัวสังเกตการณ์ (Observer) ว่าส่วนไหนกำลังโชว์อยู่บนจอ
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // ถ้า Section นั้นเลื่อนเข้ามาในระยะมองเห็น
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // กำหนดระยะขอบจอที่จะให้เริ่ม Active (บนลงมา 30%, ล่างขึ้นไป 50%)
      { rootMargin: "-30% 0px -50% 0px" } 
    );

    // สั่งให้ Observer เริ่มจับตาดูทุกๆ Section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // คืนค่ากลับ (Cleanup) เมื่อ Component ถูกถอดออก
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl"
    >
      <ul 
        className="glass flex items-center justify-center gap-1 md:gap-3 rounded-full px-3 md:px-6 py-2.5 text-xs md:text-sm font-medium text-ink/80 overflow-x-auto whitespace-nowrap shadow-sm"
        style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
      >
        {links.map((link) => {
          // เช็คว่าเมนูนี้ตรงกับ Section ที่กำลัง Active อยู่หรือไม่
          const isActive = activeSection === link.href.substring(1);

          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-all duration-300 px-3 py-1.5 md:px-4 rounded-full ${
                  isActive 
                    ? "bg-[#B9E0FF]/60 text-black font-semibold" // สีฟ้าจางๆ + ตัวหนา ตอน Active
                    : "hover:text-ink hover:bg-gray-100/50" // สีพื้นหลังจางๆ ตอนเอาเมาส์ชี้ปกติ
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}

        <div className="w-[1px] h-4 bg-gray-300 mx-1 md:mx-2 hidden sm:block"></div>

        <li>
          <button
            onClick={toggleLanguage}
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            className="flex items-center justify-center bg-white/90 border border-gray-200/60 text-ink px-3 py-1 rounded-full font-bold text-[11px] md:text-[12px] hover:bg-[#FFE156] hover:border-[#FFE156] hover:text-black transition-all duration-300 shadow-sm"
          >
            {language === 'en' ? 'TH' : 'EN'}
          </button>
        </li>
      </ul>
    </motion.nav>
  );
}