"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  // ✨ เพิ่ม language เข้ามาด้วยเพื่อเอาไว้เช็คฟอนต์ ✨
  const { dict, language } = useLanguage(); 

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    backend: ["Node.js", "Go", "Express", "REST API", "PostgreSQL"],
    tools: ["Git", "Figma", "Docker", "Firebase", "Vercel"],
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-white flex items-center overflow-hidden"
      // ✨ เพิ่ม style เปลี่ยนฟอนต์ตรงนี้ให้ครอบคลุมทั้งหน้า ✨
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
    >
      {/* =========================================
          ซ้าย — รูปคนนั่ง full height
      ========================================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden lg:block relative w-[42%] xl:w-[45%] h-screen flex-shrink-0"
      >
        <img
          src="/images/nuntiya2.png"
          alt="Nuntiya"
          className="absolute bottom-0 left-0 h-[95%] w-full object-contain object-bottom"
        />
      </motion.div>

      {/* =========================================
          ขวา — Content
      ========================================= */}
      <div className="flex-1 px-12 xl:px-20 py-16 flex flex-col justify-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-baseline gap-5 mb-10 flex-wrap"
        >
          <h2 className="text-[64px] xl:text-[80px] font-serif text-black tracking-tight leading-none">
            {dict.skills.title1}
          </h2>
          {/* ส่วนนี้ยังคงใช้ font-signature เพราะเป็นกิมมิคดีไซน์ */}
          <span 
            className="bg-[#FFE156] font-signature italic text-[64px] xl:text-[80px] leading-none tracking-tight px-5 pb-2 inline-block"
            // ถ้าเป็นภาษาไทย อาจจะอยากให้กลับมาใช้ฟอนต์ปกติ หรือจะปล่อยเป็น font-signature ก็ได้ (ถ้าอ่านยากแนะนำให้ปลด)
            style={language === 'th' ? { fontFamily: 'var(--font-prompt)', fontStyle: 'normal' } : {}}
          >
            {dict.skills.title2}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[18px] xl:text-[20px] text-gray-800 leading-relaxed max-w-[500px] mb-12"
        >
          {dict.skills.description}
        </motion.p>

        {/* Notes widget — iOS Notes style */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[480px] mb-10"
        >
          <div className="bg-[#F5EFE6] rounded-3xl shadow-md overflow-hidden">
            {/* Notes top bar */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3">
              <div className="flex items-center gap-1">
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none">
                  <path d="M7 1.5L2 6.5L7 11.5" stroke="#C8961A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* คำว่า Notes ในแถบด้านบน ปล่อยเป็นภาษาอังกฤษไว้เพื่อให้เนียนเป็น UI */}
                <span className="text-[14px] font-semibold text-[#C8961A] ml-1">Notes</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                {/* Share icon */}
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none">
                  <path d="M8.5 1V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M5 4.5L8.5 1L12 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 10v8a1 1 0 001 1h13a1 1 0 001-1v-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {/* More icon */}
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.4"/>
                  <circle cx="7" cy="11" r="1.3" fill="currentColor"/>
                  <circle cx="11" cy="11" r="1.3" fill="currentColor"/>
                  <circle cx="15" cy="11" r="1.3" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Notes body */}
            <div className="px-6 pb-8">
              <div className="flex items-center mb-5">
                <span className="font-bold text-[22px] leading-none mr-[2px]" style={{ color: "#C8961A" }}>|</span>
                <span
                  className="text-[17px] font-semibold text-gray-900 px-2 py-[3px] rounded-[4px]"
                  style={{ backgroundColor: "#E8B84B" }}
                >
                  {dict.skills.noteTitle}
                </span>
                <span className="font-bold text-[22px] leading-none ml-[2px]" style={{ color: "#C8961A" }}>|</span>
              </div>

              <p className="text-[15px] text-gray-600 leading-relaxed">
                {dict.skills.noteBody}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}