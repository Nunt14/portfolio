"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      // 1. เปลี่ยน h-screen เป็น min-h-[100dvh] เพื่อแก้ปัญหาแถบเบราว์เซอร์ในมือถือ
      // 2. ใช้ md:bg-fixed แทน bg-fixed เพื่อป้องกันปัญหาภาพพื้นหลังหายบน iOS Safari
      className="relative w-full min-h-[100dvh] flex items-center justify-center bg-[url('/images/bg.png')] bg-cover bg-center md:bg-fixed bg-no-repeat text-gray-900 overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] h-full min-h-[100dvh] mx-auto flex items-center justify-center">

        {/* =========================================
            ซ้าย — nuntiya.jpg
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          // ปรับขนาด w-[100px] และดันขึ้นไปชิดขอบบน-ซ้ายมากขึ้นในมือถือ
          className="absolute left-[2%] md:left-[3%] top-[3%] sm:top-[10%] z-10 lg:z-20 w-[100px] sm:w-[150px] md:w-[200px] lg:w-[280px] xl:w-[320px] opacity-70 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        >
          <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden w-full">
            <div className="px-1.5 lg:px-3 py-1 lg:py-2 border-b border-gray-100">
              <span className="text-[7px] md:text-[9px] lg:text-[12px] text-gray-500 font-medium">nuntiya.jpg</span>
            </div>
            <img
              src="/images/nuntiya.jpg"
              alt="Nuntiya Profile"
              className="w-full object-cover object-top"
              style={{ aspectRatio: "3/4" }}
            />
          </div>
        </motion.div>

        {/* =========================================
            กลาง — Main text
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-30 flex flex-col items-center px-4"
        >
          {/* ปรับฟอนต์มือถือให้เล็กลงจาก 75px เหลือ 55px */}
          <h1 className="text-[55px] sm:text-[80px] md:text-[130px] lg:text-[160px] xl:text-[180px] leading-[0.88] font-serif text-black tracking-tighter select-none mt-10 md:mt-0">
            Nuntiya
          </h1>

          <div className="relative inline-flex items-center mt-2 sm:mt-4">
            <span className="bg-[#FFE156] font-signature italic text-[55px] sm:text-[80px] md:text-[130px] lg:text-[160px] xl:text-[180px] leading-[0.88] tracking-tighter px-4 md:px-6 pb-2 md:pb-3 inline-block">
              profile
            </span>
            <span className="absolute -right-4 sm:-right-10 md:-right-14 bottom-1 sm:bottom-2 scale-[0.5] sm:scale-[0.8] md:scale-100 pointer-events-none select-none">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L4 36L13 27L19 40L24 37.5L18 24.5L29 24.5L4 2Z" fill="white" stroke="#222" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          {/* Subtitle ปรับขนาดฟอนต์ให้พอดี */}
          <p className="mt-6 md:mt-10 text-[13px] sm:text-[16px] md:text-[20px] xl:text-[22px] font-medium text-black max-w-[560px] leading-relaxed text-center drop-shadow-md lg:drop-shadow-none bg-white/60 lg:bg-transparent px-4 py-2 rounded-xl backdrop-blur-sm lg:backdrop-blur-none">
            Software Developer seeking {" "}
            <span className="bg-[#B9E0FF] px-1.5 rounded-sm">new opportunities</span>{" "}
            in Web and Mobile Application Development.
          </p>
          <div className="mt-4 w-[200px] sm:w-[320px] md:w-[420px] border-b-2 border-dashed border-red-400"></div>
        </motion.div>

        {/* =========================================
            ขวาล่าง — portfolio.ts
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          // ดันลงไปด้านล่างขวาสุด และปรับขนาดให้เล็กลงในมือถือ (w-[150px])
          className="absolute right-[2%] sm:right-[2%] bottom-[2%] sm:bottom-[8%] z-20 lg:z-30 w-[150px] sm:w-[220px] md:w-[280px] lg:w-[340px] xl:w-[370px] rounded-lg lg:rounded-xl overflow-hidden shadow-2xl opacity-90 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        >
          {/* Title bar */}
          <div className="bg-[#2D2D2D] h-5 sm:h-7 lg:h-9 flex items-center px-2 sm:px-3 lg:px-4 gap-1 sm:gap-1.5">
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27C93F]"></div>
            <span className="text-[7px] sm:text-[10px] lg:text-[12px] text-gray-400 ml-1 sm:ml-2 font-mono">portfolio.ts</span>
          </div>
          {/* Code */}
          <div className="bg-[#1E1E1E] px-3 sm:px-4 md:px-5 py-2 sm:py-3 lg:py-4 text-[7px] sm:text-[9px] md:text-[11px] xl:text-[13px] font-mono leading-[1.6] sm:leading-[1.8] text-gray-300">
            <p><span className="text-gray-500">{"// Developer Profile"}</span></p>
            <p><span className="text-[#569CD6]">const</span> <span className="text-[#9CDCFE]">dev</span> <span className="text-white">= {"{"}</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">name</span><span className="text-white">:</span> <span className="text-[#CE9178]">"Nuntiya K."</span><span className="text-white">,</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">role</span><span className="text-white">:</span> <span className="text-[#CE9178]">"Web Dev"</span><span className="text-white">,</span></p>
            {/* ซ่อน Stack ไว้ในจอมือถือเล็กๆ จะได้ไม่กินพื้นที่แนวตั้ง */}
            <p className="hidden sm:block">{"  "}<span className="text-[#9CDCFE]">stack</span><span className="text-white">: [</span></p>
            <p className="hidden sm:block">{"    "}<span className="text-[#CE9178]">"React"</span><span className="text-white">,</span> <span className="text-[#CE9178]">"Node.js"</span><span className="text-white">,</span></p>
            <p className="hidden sm:block">{"    "}<span className="text-[#CE9178]">"TypeScript"</span><span className="text-white">,</span> <span className="text-[#CE9178]">"JavaScript"</span></p>
            <p className="hidden sm:block">{"  "}<span className="text-white">],</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">isAvailable</span><span className="text-white">: () </span><span className="text-[#569CD6]">=&gt;</span> <span className="text-[#569CD6]">true</span></p>
            <p><span className="text-white">{"}"}</span></p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}