"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { dict, language } = useLanguage();

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat py-20"
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
    >
      <div className="relative z-20 w-full max-w-[1200px] mx-auto px-10 xl:px-16 flex flex-col md:flex-row items-start md:items-center gap-12 xl:gap-20">
        
        {/* =========================================
            ซ้าย — Heading "experience"
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/3 flex-shrink-0"
        >
          <h2 className="text-[52px] xl:text-[72px] font-normal text-black tracking-tight leading-none">
            {dict.experience.title}
          </h2>
        </motion.div>

        {/* =========================================
            ขวา — Timeline
        ========================================= */}
        <div className="md:w-2/3 relative w-full">
          {/* เส้นแกน Timeline (สีเหลืองเข้ม) */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-[9px] top-3 bottom-0 w-[4px] bg-[#E4B333] rounded-full origin-top"
          ></motion.div>

          {/* ----- Item 1: Landy Home ----- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative pl-12 xl:pl-16 mb-16"
          >
            {/* จุดวงกลมบนเส้น */}
            <div className="absolute left-0 top-1 w-[22px] h-[22px] bg-[#E4B333] rounded-full shadow-md"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-4">
              <div>
                <p className="text-[18px] xl:text-[20px] font-medium text-gray-800 uppercase tracking-wide">
                  {dict.experience.date1}
                </p>
                <div className="mt-1 mb-2">
                  <span className="bg-[#FFE156] text-[22px] xl:text-[26px] font-medium px-2 py-0.5 inline-block leading-tight">
                    {dict.experience.role1}
                  </span>
                </div>
                {/* ✨ สลับฟอนต์ชื่อบริษัทตรงนี้ ✨ */}
                <h3 
                  className="text-[28px] xl:text-[34px] font-serif italic text-black"
                  style={language === 'th' ? { fontFamily: 'var(--font-prompt)' } : { fontFamily: 'var(--font-playfair), serif' }}
                >
                  {dict.experience.company1}
                </h3>
              </div>

              <img
                src="/images/logo1.png"
                alt="Landy Home Logo"
                className="w-[120px] xl:w-[150px] object-contain flex-shrink-0"
              />
            </div>

            <p className="text-[16px] xl:text-[18px] text-gray-800 leading-relaxed max-w-[650px]">
              {dict.experience.desc1}
            </p>
          </motion.div>

          {/* ----- Item 2: Ideatrade ----- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-12 xl:pl-16"
          >
            {/* จุดวงกลมบนเส้น */}
            <div className="absolute left-0 top-1 w-[22px] h-[22px] bg-[#E4B333] rounded-full shadow-md"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-4">
              <div>
                <p className="text-[18px] xl:text-[20px] font-medium text-gray-800 uppercase tracking-wide">
                  {dict.experience.date2}
                </p>
                <div className="mt-1 mb-2">
                  <span className="bg-[#FFE156] text-[22px] xl:text-[26px] font-medium px-2 py-0.5 inline-block leading-tight">
                    {dict.experience.role2}
                  </span>
                </div>
                {/* ✨ สลับฟอนต์ชื่อบริษัทตรงนี้ ✨ */}
                <h3 
                  className="text-[28px] xl:text-[34px] font-serif italic text-black"
                  style={language === 'th' ? { fontFamily: 'var(--font-prompt)' } : { fontFamily: 'var(--font-playfair), serif' }}
                >
                  {dict.experience.company2}
                </h3>
              </div>

              <img
                src="/images/logo2.png"
                alt="Ideatrade Logo"
                className="w-[120px] xl:w-[150px] object-contain flex-shrink-0"
              />
            </div>

            <p className="text-[16px] xl:text-[18px] text-gray-800 leading-relaxed max-w-[650px]">
              {dict.experience.desc2}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}