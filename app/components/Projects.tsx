"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { dict, language } = useLanguage();

  return (
    <div 
      id="projects" 
      className="w-full"
      // สลับฟอนต์หลัก (Body) ระหว่าง Inter และ Prompt
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
    > 
      
      {/* ============================================================
          PROJECT 1: Harnty App (Mobile1) 
      ============================================================ */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg2.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center justify-between gap-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[380px] xl:w-[480px] z-10"
          >
            {/* Title (All of My / My) - สลับฟอนต์ Playfair (EN) และ Prompt (TH) */}
            <h2 className="text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleAll}
            </h2>
            <div className="mb-3">
              {/* ✨ เฉพาะตรง Subtitle (project) - บังคับใช้ Serif ตัวเอียงสุดคลาสสิกเสมอ ✨ */}
              <span 
                className="bg-[#FFE156] font-serif italic text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }} // บังคับใช้ Playfair ตลอด
              >
                {dict.projects.subtitle}
              </span>
            </div>
            {/* Type & Desc - สลับฟอนต์ Inter (EN) และ Prompt (TH) */}
            <p className="text-[22px] xl:text-[28px] font-medium text-gray-800 mb-8">
              {dict.projects.typeMobile}
            </p>
            <p className="text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px]">
              {dict.projects.desc1}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-end relative -mr-16 xl:-mr-[120px] 2xl:-mr-[160px]"
            style={{ minHeight: "580px" }}
          >
            <img src="/images/Mobile1.png" alt="Harnty App Mockup" className="w-full max-w-[880px] xl:max-w-[1024px] object-contain object-right drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 2: Local Discovery App (Mobile2)
      ============================================================ */}
      <section id="project-2" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg2.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center justify-between gap-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[380px] xl:w-[480px] z-10"
          >
            <h2 className="text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[22px] xl:text-[28px] font-medium text-gray-800 mb-8">
              {dict.projects.typeMobile}
            </p>
            <p className="text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px]">
              {dict.projects.desc2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-end relative -mr-16 xl:-mr-[120px] 2xl:-mr-[160px]"
            style={{ minHeight: "580px" }}
          >
            <img src="/images/Mobile2.png" alt="Discovery App Mockup" className="w-full max-w-[880px] xl:max-w-[1024px] object-contain object-right drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 3: Sales Quest (Web1)
      ============================================================ */}
      <section id="project-3" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg2.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center justify-between flex-row-reverse gap-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[380px] xl:w-[480px] z-10"
          >
            <h2 className="text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[22px] xl:text-[28px] font-medium text-gray-800 mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px]">
              {dict.projects.desc3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-start relative -ml-16 xl:-ml-[120px] 2xl:-ml-[160px]"
            style={{ minHeight: "580px" }}
          >
            <img src="/images/web1.png" alt="Sales Quest Web Mockup" className="w-full max-w-[880px] xl:max-w-[1024px] object-contain object-left drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 4: ISO Document System (Web2)
      ============================================================ */}
      <section id="project-4" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg2.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center justify-between flex-row-reverse gap-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[380px] xl:w-[480px] z-10"
          >
            <h2 className="text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[22px] xl:text-[28px] font-medium text-gray-800 mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px]">
              {dict.projects.desc4}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-start relative -ml-16 xl:-ml-[120px] 2xl:-ml-[160px]"
            style={{ minHeight: "580px" }}
          >
            <img src="/images/web2.png" alt="ISO System Web Mockup" className="w-full max-w-[880px] xl:max-w-[1024px] object-contain object-left drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 5: The Last Train Home (Web App)
      ============================================================ */}
      <section id="project-5" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg2.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center justify-between gap-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[380px] xl:w-[480px] z-10"
          >
            <h2 className="text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[22px] xl:text-[28px] font-medium text-gray-800 mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px]">
              {/* อย่าลืมเพิ่ม desc5 ในไฟล์ context dictionary ของคุณด้วยนะครับ */}
              {dict.projects.desc5} 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-end relative -mr-16 xl:-mr-[120px] 2xl:-mr-[160px]"
            style={{ minHeight: "580px" }}
          >
            {/* เพิ่มแท็ก <a> ครอบรูปภาพ */}
            <a href="https://thelast-trainhome.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <img src="/images/web3.png" alt="The Last Train Home Mockup" className="w-full max-w-[880px] xl:max-w-[1024px] object-contain object-right drop-shadow-2xl" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 6: The Last Train Home - Mobile View (Web App)
      ============================================================ */}
      <section id="project-6" className="relative w-full min-h-screen flex items-center overflow-hidden bg-[url('/images/bg2.png')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-10 xl:px-16 flex items-center justify-between flex-row-reverse gap-6 py-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-[380px] xl:w-[480px] z-10"
          >
            <h2 className="text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[22px] xl:text-[28px] font-medium text-gray-800 mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px]">
              {/* อย่าลืมเพิ่ม desc6 ในไฟล์ context dictionary ของคุณด้วยนะครับ */}
              {dict.projects.desc6}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-start relative -ml-16 xl:-ml-[120px] 2xl:-ml-[160px]"
            style={{ minHeight: "580px" }}
          >
            {/* เพิ่มแท็ก <a> ครอบรูปภาพ */}
            <a href="https://thelasttrain-journey.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-[1.02] transition-transform duration-300">
              <img src="/images/web4.png" alt="The Last Train Home Mobile Interface" className="w-full max-w-[880px] xl:max-w-[1024px] object-contain object-left drop-shadow-2xl" />
            </a>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}