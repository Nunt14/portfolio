"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { dict, language } = useLanguage();

  return (
    <div 
      id="projects" 
      className="w-full"
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
    > 
      
      {/* ============================================================
          PROJECT 1: Harnty App (Mobile1) 
      ============================================================ */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bg2.png')] bg-[length:100%_100%] lg:bg-cover bg-center bg-no-repeat py-20 lg:py-0">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-[380px] xl:w-[480px] z-10 text-center lg:text-left mt-10 lg:mt-0"
          >
            <h2 className="text-[48px] sm:text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleAll}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[48px] sm:text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] xl:text-[28px] font-medium text-gray-800 mb-4 lg:mb-8">
              {dict.projects.typeMobile}
            </p>
            <p className="text-[15px] sm:text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {dict.projects.desc1}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex items-center justify-center lg:justify-end relative lg:-mr-16 xl:-mr-[120px] 2xl:-mr-[160px] min-h-[300px] lg:min-h-[580px]"
          >
            <img src="/images/Mobile1.png" alt="Harnty App Mockup" className="w-full max-w-[400px] lg:max-w-[880px] xl:max-w-[1024px] object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 2: Local Discovery App (Mobile2)
      ============================================================ */}
      <section id="project-2" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bg2.png')] bg-[length:100%_100%] lg:bg-cover bg-center bg-no-repeat py-20 lg:py-0">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-[380px] xl:w-[480px] z-10 text-center lg:text-left mt-10 lg:mt-0"
          >
            <h2 className="text-[48px] sm:text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[48px] sm:text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] xl:text-[28px] font-medium text-gray-800 mb-4 lg:mb-8">
              {dict.projects.typeMobile}
            </p>
            <p className="text-[15px] sm:text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {dict.projects.desc2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex items-center justify-center lg:justify-end relative lg:-mr-16 xl:-mr-[120px] 2xl:-mr-[160px] min-h-[300px] lg:min-h-[580px]"
          >
            <img src="/images/Mobile2.png" alt="Discovery App Mockup" className="w-full max-w-[400px] lg:max-w-[880px] xl:max-w-[1024px] object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 3: Sales Quest (Web1)
      ============================================================ */}
      <section id="project-3" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bg2.png')] bg-[length:100%_100%] lg:bg-cover bg-center bg-no-repeat py-20 lg:py-0">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-[380px] xl:w-[480px] z-10 text-center lg:text-left mt-10 lg:mt-0"
          >
            <h2 className="text-[48px] sm:text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[48px] sm:text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] xl:text-[28px] font-medium text-gray-800 mb-4 lg:mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[15px] sm:text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {dict.projects.desc3}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex items-center justify-center lg:justify-start relative lg:-ml-16 xl:-ml-[120px] 2xl:-ml-[160px] min-h-[300px] lg:min-h-[580px]"
          >
            <img src="/images/web1.png" alt="Sales Quest Web Mockup" className="w-full max-w-[500px] lg:max-w-[880px] xl:max-w-[1024px] object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 4: ISO Document System (Web2)
      ============================================================ */}
      <section id="project-4" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bg2.png')] bg-[length:100%_100%] lg:bg-cover bg-center bg-no-repeat py-20 lg:py-0">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-[380px] xl:w-[480px] z-10 text-center lg:text-left mt-10 lg:mt-0"
          >
            <h2 className="text-[48px] sm:text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[48px] sm:text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] xl:text-[28px] font-medium text-gray-800 mb-4 lg:mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[15px] sm:text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {dict.projects.desc4}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex items-center justify-center lg:justify-start relative lg:-ml-16 xl:-ml-[120px] 2xl:-ml-[160px] min-h-[300px] lg:min-h-[580px]"
          >
            <img src="/images/web2.png" alt="ISO System Web Mockup" className="w-full max-w-[500px] lg:max-w-[880px] xl:max-w-[1024px] object-contain drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 5: The Last Train Home (Web App)
      ============================================================ */}
      <section id="project-5" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bg2.png')] bg-[length:100%_100%] lg:bg-cover bg-center bg-no-repeat py-20 lg:py-0">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-[380px] xl:w-[480px] z-10 text-center lg:text-left mt-10 lg:mt-0"
          >
            <h2 className="text-[48px] sm:text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[48px] sm:text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] xl:text-[28px] font-medium text-gray-800 mb-4 lg:mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[15px] sm:text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {dict.projects.desc5} 
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex items-center justify-center lg:justify-end relative lg:-mr-16 xl:-mr-[120px] 2xl:-mr-[160px] min-h-[300px] lg:min-h-[580px]"
          >
            <a href="https://thelast-trainhome.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-[1.02] transition-transform duration-300 block w-full max-w-[500px] lg:max-w-[1024px]">
              <img src="/images/web3.png" alt="The Last Train Home Mockup" className="w-full object-contain drop-shadow-2xl" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          PROJECT 6: The Last Train Home - Mobile View (Web App)
      ============================================================ */}
      <section id="project-6" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[url('/images/bg2.png')] bg-[length:100%_100%] lg:bg-cover bg-center bg-no-repeat py-20 lg:py-0">
        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-[380px] xl:w-[480px] z-10 text-center lg:text-left mt-10 lg:mt-0"
          >
            <h2 className="text-[48px] sm:text-[68px] xl:text-[84px] font-serif text-black tracking-tight leading-[1.0] mb-2">
              {dict.projects.titleMy}
            </h2>
            <div className="mb-3">
              <span 
                className="bg-[#FFE156] font-serif italic text-[48px] sm:text-[68px] xl:text-[84px] leading-none px-4 pb-2 inline-block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {dict.projects.subtitle}
              </span>
            </div>
            <p className="text-[18px] sm:text-[22px] xl:text-[28px] font-medium text-gray-800 mb-4 lg:mb-8">
              {dict.projects.typeWeb}
            </p>
            <p className="text-[15px] sm:text-[18px] xl:text-[22px] text-gray-700 leading-relaxed max-w-[420px] mx-auto lg:mx-0">
              {dict.projects.desc6}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full lg:flex-1 flex items-center justify-center lg:justify-start relative lg:-ml-16 xl:-ml-[120px] 2xl:-ml-[160px] min-h-[300px] lg:min-h-[580px]"
          >
            <a href="https://thelasttrain-journey.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:scale-[1.02] transition-transform duration-300 block w-full max-w-[500px] lg:max-w-[1024px]">
              <img src="/images/web4.png" alt="The Last Train Home Mobile Interface" className="w-full object-contain drop-shadow-2xl" />
            </a>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}