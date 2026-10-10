"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

// ==========================================
// 1. Component สำหรับโฟลเดอร์ติดต่อ (ปรับขนาดให้เล็กลงในมือถือ)
// ==========================================
const ContactFolder = ({ label, delay, href }: { label: string, delay: number, href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay, type: "spring" }}
    viewport={{ once: true }}
    className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
  >
    <div className="relative transition-transform duration-300 group-hover:scale-110">
      {/* ปรับขนาด SVG ไอคอนโฟลเดอร์ให้เล็กลงในมือถือ (w-20/h-16) และใหญ่ขึ้นในจอคอม (lg:w-[110px]) */}
      <svg className="w-16 h-12 sm:w-20 sm:h-16 lg:w-[110px] lg:h-[90px] drop-shadow-md" viewBox="0 0 24 24" fill="#7FA1D6" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V6C2 4.89543 2.89543 4 4 4H9.5C9.8465 4 10.1706 4.17478 10.3664 4.46845L11.6336 6.3705C11.8294 6.66418 12.1535 6.83896 12.5 6.83896H20C21.1046 6.83896 22 7.73439 22 8.83896V19Z" />
      </svg>
    </div>
    <span className="text-[12px] sm:text-[14px] lg:text-[16px] font-medium text-gray-700 bg-white/70 px-3 sm:px-4 py-1 rounded-full group-hover:bg-[#7FA1D6] group-hover:text-white transition-colors">
      {label}
    </span>
  </motion.a>
);

// ==========================================
// 2. Component หลักหน้า Contact
// ==========================================
export default function Contact() {
  const { dict, language } = useLanguage();

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen py-16 lg:py-24 overflow-hidden bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
    >
      <div className="relative z-20 w-full max-w-[1300px] mx-auto px-6 sm:px-10 xl:px-16 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-24">
        
        {/* =========================================
            ฝั่งซ้าย — ข้อความและโฟลเดอร์
        ========================================= */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            {/* ย่อฟอนต์หัวข้อ (text-[42px]) และปรับให้ไม่ล้นจอ */}
            <h2 
              className="text-[42px] sm:text-[54px] lg:text-[64px] xl:text-[82px] font-serif text-black leading-tight lg:leading-none mb-4 lg:mb-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4"
              style={language === 'th' ? { fontFamily: 'var(--font-prompt)' } : {}}
            >
              {dict.contact.title} 
              <span 
                className="bg-[#FFE156] font-signature italic text-black px-2 pb-1 inline-block whitespace-nowrap mt-2 sm:mt-0"
                style={{ fontFamily: 'var(--font-signature), cursive' }}
              >
                nuntiya
              </span>
            </h2>
            <p className="text-[15px] sm:text-[18px] lg:text-[20px] xl:text-[24px] text-gray-800 leading-relaxed font-medium max-w-[90%] sm:max-w-[450px] mb-10 lg:mb-12">
              {dict.contact.description}
            </p>
          </motion.div>

          {/* ปรับ gap ของโฟลเดอร์ให้ชิดกันขึ้นในมือถือ (gap-4) */}
          <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 xl:gap-16 relative w-full">
            <ContactFolder label={dict.contact.folderEmail} delay={0.2} href="mailto:nuntiya.plordppai@gmail.com" />
            <ContactFolder label={dict.contact.folderLinkedIn} delay={0.4} href="https://linkedin.com/in/nuntiyaplordpai" />
            <ContactFolder label={dict.contact.folderResume} delay={0.6} href="/Resume.pdf" />

            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              // ปรับตำแหน่งลูกศรในมือถือให้พอดีขึ้น (ซ่อนในจอมือถือเล็กมากๆ เพื่อไม่ให้รก)
              className="hidden sm:block absolute -right-4 -bottom-10 md:right-10 md:-bottom-8 pointer-events-none z-10"
            >
               <svg width="40" height="40" className="lg:w-[55px] lg:h-[55px]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 4L24 18L17.5 18.5L21 26L18 27.5L14.5 20L10 24V4Z" fill="white" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
               </svg>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            ฝั่งขวา — หน้าต่างรูปภาพ และ Note
        ========================================= */}
        <div className="w-full lg:w-1/2 relative flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#e5e5e5] rounded-t-xl rounded-b-md shadow-2xl overflow-hidden border border-gray-300 w-[85%] sm:w-[300px] lg:w-full max-w-[350px] xl:max-w-[420px]"
          >
            <div className="bg-[#e5e5e5] px-3 lg:px-4 py-1.5 lg:py-2 flex items-center border-b border-gray-300">
              <span className="text-[10px] lg:text-[12px] font-bold text-gray-700 font-sans tracking-wide">nuntiya.jpg</span>
            </div>
            <img src="/images/nuntiya.jpg" alt="Nuntiya" className="w-full h-auto object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            // ปรับกล่อง Notes ให้เป็น relative ในมือถือ (จะได้ไม่ไปซ้อนทับบังรูป) และกลับเป็น absolute ในจอคอม
            className="relative lg:absolute -mt-6 lg:-bottom-10 lg:-mt-0 lg:right-0 xl:-right-4 bg-[#FCFAF7] rounded-xl shadow-2xl p-4 lg:p-6 w-[85%] sm:w-[300px] xl:w-[340px] border border-gray-100 z-30"
          >
            <div className="flex justify-between items-center mb-3 lg:mb-4 text-[#E4B333]">
               <div className="flex items-center gap-1 text-[11px] lg:text-[13px] font-bold">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"></polyline></svg>
                  Notes
               </div>
               <div className="flex gap-1.5 lg:gap-2">
                  <svg width="12" height="12" className="lg:w-[14px] lg:h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline></svg>
                  <svg width="12" height="12" className="lg:w-[14px] lg:h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
               </div>
            </div>

            <h3 className="text-[14px] sm:text-[15px] xl:text-[19px] font-bold text-black mb-3 lg:mb-4 leading-tight">
               <span className="bg-[#FFE156] px-1">{dict.contact.focusing}</span>
            </h3>

            <ul className="space-y-2 lg:space-y-3">
               <li className="flex items-center gap-2 lg:gap-3 text-[13px] lg:text-[16px] font-medium text-gray-800">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-[1.5px] lg:border-2 border-[#E4B333] flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-[#E4B333] rounded-full"></div>
                  </div>
                  {dict.contact.web}
               </li>
               <li className="flex items-center gap-2 lg:gap-3 text-[13px] lg:text-[16px] font-medium text-gray-800">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-[1.5px] lg:border-2 border-[#E4B333] flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 bg-[#E4B333] rounded-full"></div>
                  </div>
                  {dict.contact.mobile}
               </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}