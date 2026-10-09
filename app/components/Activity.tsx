"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"; // 1. นำเข้าระบบภาษา

// ==========================================
// 1. Component ย่อยสำหรับทำ "หน้าต่างรูปภาพ"
// ==========================================
const ImageWindow = ({ src, className, delay }: { src: string, className?: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className={`bg-[#e5e5e5] rounded-t-lg rounded-b-md shadow-2xl overflow-hidden border border-gray-300 ${className}`}
  >
    {/* แถบด้านบนของรูป (Title bar) */}
    <div className="bg-[#e5e5e5] px-3 py-1 flex items-center border-b border-gray-300">
      <span className="text-[10px] font-bold text-gray-700 font-sans tracking-wide">slay.png</span>
    </div>
    {/* ตัวรูปภาพ */}
    <img src={src} alt="Activity" className="w-full h-auto object-cover" />
  </motion.div>
);

// ==========================================
// 2. Component หลัก (Activity Section)
// ==========================================
export default function Activity() {
  const { dict, language } = useLanguage(); // 2. เรียกใช้งานระบบภาษา

  return (
    <section
      id="activity"
      className="relative w-full min-h-screen py-24 overflow-hidden bg-[url('/images/bg3.jpg')] bg-cover bg-center bg-no-repeat"
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }} // 3. สลับฟอนต์
    >
      {/* 🔴 แก้ไข 1: ปรับ Overlay ให้ทึบขึ้นเป็น bg-white/80 เพื่อให้พื้นหลังจางลงคลีนๆ */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-20 w-full max-w-[1300px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row gap-12 xl:gap-20 items-center lg:items-start">
        
        {/* =========================================
            ฝั่งซ้าย — หน้าต่างรูปภาพซ้อนกัน
        ========================================= */}
        <div className="w-full lg:w-1/2 flex flex-col relative pt-10 pb-16">
          <ImageWindow 
            src="/images/act1.jpg" 
            delay={0.1} 
            className="w-[280px] xl:w-[340px] z-10 relative -rotate-2" 
          />
          {/* 🔴 แก้ไข 2: ลดค่า -mt เพื่อยืดรูปให้ไหลลงมา */}
          <ImageWindow 
            src="/images/act2.jpg" 
            delay={0.3} 
            className="w-[320px] xl:w-[400px] z-20 relative -mt-12 ml-16 xl:ml-32 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rotate-1" 
          />
          <ImageWindow 
            src="/images/act3.jpg" 
            delay={0.5} 
            className="w-[260px] xl:w-[320px] z-30 relative -mt-14 ml-4 xl:-ml-4 shadow-[0_15px_40px_rgba(0,0,0,0.25)] -rotate-3" 
          />
          {/* 🔴 เพิ่มรูปที่ 4 ตามภาพดีไซน์เพื่อให้เชนมันยาวลงมาอีก */}
          <ImageWindow 
            src="/images/act4.jpg" 
            delay={0.7} 
            className="w-[290px] xl:w-[360px] z-40 relative -mt-16 ml-12 xl:ml-24 shadow-[0_25px_50px_rgba(0,0,0,0.4)] rotate-2" 
          />
        </div>

        {/* =========================================
            ฝั่งขวา — หน้าต่างแอป Notes
        ========================================= */}
        <div className="w-full lg:w-1/2 flex flex-col gap-12 relative pt-6">
          
          {/* Note 1 (ด้านบน) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#FCFAF7] rounded-2xl shadow-xl p-8 xl:p-10 w-full max-w-[550px] ml-auto border border-gray-100"
          >
            {/* Header แอป Notes */}
            <div className="flex justify-between items-center mb-6 text-[#E4B333]">
              <div className="flex items-center gap-1 font-medium cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <span className="text-[17px]">Notes</span>
              </div>
              <div className="flex gap-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </div>
            </div>

            {/* เนื้อหา Note 1 */}
            <h2 className="text-[48px] xl:text-[56px] font-serif text-black leading-none mb-6">
              {/* ตรวจสอบภาษาเพื่อแสดงคำว่า "my" หรือไม่ */}
              {language === 'en' ? 'my ' : ''} 
              <span className="bg-[#FFE156] italic px-2 pb-1 inline-block">{dict.activity.title}</span>
            </h2>
            <p className="text-[17px] xl:text-[19px] text-gray-800 leading-relaxed font-medium">
              {dict.activity.note1_part1}
              {/* ✨ เปลี่ยนคำว่า Digital Hackathon ให้เป็นสีเหลือง ✨ */}
              <strong className="text-[#E4B333]">Digital Hackathon</strong>
              {dict.activity.note1_part2}
            </p>
          </motion.div>

          {/* ไอคอนโฟลเดอร์ลอยๆ (อยู่ระหว่าง 2 Note) */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="absolute right-4 top-[40%] xl:top-[35%] flex flex-col items-center gap-1 z-10 drop-shadow-md hidden md:flex"
          >
            {/* วาดรูปโฟลเดอร์แบบง่ายๆ */}
            <svg width="70" height="55" viewBox="0 0 24 24" fill="#7FA1D6" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V6C2 4.89543 2.89543 4 4 4H9.5C9.8465 4 10.1706 4.17478 10.3664 4.46845L11.6336 6.3705C11.8294 6.66418 12.1535 6.83896 12.5 6.83896H20C21.1046 6.83896 22 7.73439 22 8.83896V19Z" />
            </svg>
            <span className="text-[13px] font-medium text-gray-700 bg-white/70 px-2 rounded-full">Hackathon</span>
          </motion.div>

          {/* Note 2 (ด้านล่าง) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#FCFAF7] rounded-2xl shadow-xl p-8 xl:p-10 w-full max-w-[550px] border border-gray-100"
          >
            {/* Header แอป Notes */}
            <div className="flex justify-between items-center mb-6 text-[#E4B333]">
              <div className="flex items-center gap-1 font-medium cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <span className="text-[17px]">Notes</span>
              </div>
              <div className="flex gap-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </div>
            </div>

            {/* เนื้อหา Note 2 */}
            <div className="mb-6">
              <span className="bg-[#FFE156] font-serif italic font-bold text-[22px] px-2 py-0.5 inline-block">
                {dict.activity.note2_date}
              </span>
            </div>
            
            <div className="space-y-4 text-[15px] xl:text-[16px] text-gray-800 leading-relaxed">
              <p>{dict.activity.note2_content1}</p>
              <p>{dict.activity.note2_content2}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}