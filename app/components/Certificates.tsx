"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"; // 1. นำเข้าระบบภาษา

export default function Certificate() {
  const { dict, language } = useLanguage(); // 2. ดึงพจนานุกรมและเช็คภาษา

  // เพิ่ม cert4, cert5, cert6 เข้าไปใน Array
  const certificates = [
    { id: 1, src: "/images/cert1.png", alt: "Ideatrade Certificate" },
    { id: 2, src: "/images/cert2.png", alt: "SUT Certificate 1" },
    { id: 3, src: "/images/cert3.png", alt: "SUT Certificate 2" },
    { id: 4, src: "/images/cert4.png", alt: "Certificate 4" },
    { id: 5, src: "/images/cert5.png", alt: "Certificate 5" },
    { id: 6, src: "/images/cert6.png", alt: "Certificate 6" },
  ];

  return (
    <section
      id="certificate"
      className="relative w-full bg-white py-24" // พื้นหลังสีขาวคลีนๆ ตามภาพ
      // 3. สลับไปใช้ฟอนต์ Prompt เมื่อเป็นภาษาไทย
      style={{ fontFamily: language === 'th' ? 'var(--font-prompt)' : 'inherit' }}
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-10 xl:px-16">
        
        {/* =========================================
            หัวข้อ "certificate"
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* 4. เรียกใช้คำแปลตรงนี้ */}
          <span className="bg-[#FFE156] text-[48px] xl:text-[64px] font-medium text-black tracking-tight px-4 py-1 inline-block leading-none">
            {dict.certificate.title}
          </span>
        </motion.div>

        {/* =========================================
            รูปภาพ Certificate (Grid)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              // หน่วงเวลา (delay) ให้รูปเด้งขึ้นมาทีละรูปเรียงกัน
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-auto object-cover drop-shadow-xl rounded-sm transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}