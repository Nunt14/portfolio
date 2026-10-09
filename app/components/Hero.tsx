"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      // ล็อคความสูงหน้าจอด้วย h-screen เหมือนเดิม
      className="relative w-full h-screen flex items-center justify-center bg-[url('/images/bg.png')] bg-cover bg-center bg-fixed bg-no-repeat text-gray-900 overflow-hidden"
    >
      <div className="relative w-full max-w-[1400px] h-full mx-auto flex items-center justify-center">

        {/* =========================================
            ซ้าย — nuntiya.jpg (ลอยแบบเดิม แต่ย่อขนาดในมือถือ)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          // ใช้ absolute เหมือนเดิม ปรับขนาด w-[...] ตามขนาดจอ
          className="absolute left-[-5%] sm:left-[2%] lg:left-[3%] top-[8%] sm:top-[10%] z-10 lg:z-20 w-[150px] sm:w-[200px] lg:w-[280px] xl:w-[320px] opacity-70 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        >
          <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden w-full">
            <div className="px-2 lg:px-3 py-1.5 lg:py-2 border-b border-gray-100">
              <span className="text-[9px] lg:text-[12px] text-gray-500 font-medium">nuntiya.jpg</span>
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
            กลาง — Main text (ให้อยู่บนสุด z-30)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-30 flex flex-col items-center px-4"
        >
          {/* "Nuntiya" */}
          <h1 className="text-[75px] sm:text-[100px] md:text-[130px] lg:text-[160px] xl:text-[180px] leading-[0.88] font-serif text-black tracking-tighter select-none">
            Nuntiya
          </h1>

          {/* "profile" yellow + cursor */}
          <div className="relative inline-flex items-center mt-2 sm:mt-4">
            <span className="bg-[#FFE156] font-signature italic text-[75px] sm:text-[100px] md:text-[130px] lg:text-[160px] xl:text-[180px] leading-[0.88] tracking-tighter px-4 md:px-6 pb-2 md:pb-3 inline-block">
              profile
            </span>
            {/* Cursor arrow (ปรับสเกลให้เล็กลงในมือถือ) */}
            <span className="absolute -right-6 sm:-right-10 md:-right-14 bottom-1 sm:bottom-2 scale-[0.6] sm:scale-[0.8] md:scale-100 pointer-events-none select-none">
              <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L4 36L13 27L19 40L24 37.5L18 24.5L29 24.5L4 2Z" fill="white" stroke="#222" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          {/* Subtitle */}
          <p className="mt-8 md:mt-10 text-[15px] sm:text-[18px] md:text-[20px] xl:text-[22px] font-medium text-black max-w-[560px] leading-relaxed text-center drop-shadow-md lg:drop-shadow-none bg-white/40 lg:bg-transparent px-4 py-2 rounded-xl backdrop-blur-sm lg:backdrop-blur-none">
            Software Developer seeking {" "}
            <span className="bg-[#B9E0FF] px-1.5 rounded-sm">new opportunities</span>{" "}
            in Web and Mobile Application Development.
          </p>
          <div className="mt-4 w-[260px] sm:w-[320px] md:w-[420px] border-b-2 border-dashed border-red-400"></div>
        </motion.div>

        {/* =========================================
            ขวาล่าง — portfolio.ts (ลอยแบบเดิม แต่ย่อขนาด)
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          // ย่อขนาดในมือถือ และให้อยู่ด้านหลัง (z-20) 
          className="absolute right-[-8%] sm:right-[2%] bottom-[12%] sm:bottom-[8%] z-20 lg:z-30 w-[220px] sm:w-[280px] lg:w-[340px] xl:w-[370px] rounded-lg lg:rounded-xl overflow-hidden shadow-2xl opacity-90 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
        >
          {/* Title bar */}
          <div className="bg-[#2D2D2D] h-7 lg:h-9 flex items-center px-3 lg:px-4 gap-1.5">
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#27C93F]"></div>
            <span className="text-[10px] lg:text-[12px] text-gray-400 ml-2 font-mono">portfolio.ts</span>
          </div>
          {/* Code */}
          <div className="bg-[#1E1E1E] px-4 md:px-5 py-3 lg:py-4 text-[9px] sm:text-[11px] xl:text-[13px] font-mono leading-[1.8] text-gray-300">
            <p><span className="text-gray-500">{"// Developer Profile"}</span></p>
            <p><span className="text-[#569CD6]">const</span> <span className="text-[#9CDCFE]">dev</span> <span className="text-white">= {"{"}</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">name</span><span className="text-white">:</span> <span className="text-[#CE9178]">"Nuntiya K."</span><span className="text-white">,</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">role</span><span className="text-white">:</span> <span className="text-[#CE9178]">"Web Developer"</span><span className="text-white">,</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">stack</span><span className="text-white">: [</span></p>
            <p>{"    "}<span className="text-[#CE9178]">"React"</span><span className="text-white">,</span> <span className="text-[#CE9178]">"Node.js"</span><span className="text-white">,</span></p>
            <p>{"    "}<span className="text-[#CE9178]">"TypeScript"</span><span className="text-white">,</span> <span className="text-[#CE9178]">"JavaScript"</span></p>
            <p>{"  "}<span className="text-white">],</span></p>
            <p>{"  "}<span className="text-[#9CDCFE]">isAvailable</span><span className="text-white">: () </span><span className="text-[#569CD6]">=&gt;</span> <span className="text-[#569CD6]">true</span></p>
            <p><span className="text-white">{"}"}</span></p>
            <p className="hidden sm:block">&nbsp;</p>
            <p><span className="text-[#DCDCAA]">console</span><span className="text-white">.</span><span className="text-[#DCDCAA]">log</span><span className="text-white">(</span><span className="text-[#CE9178]">"Let's build!"</span><span className="text-white">)</span></p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}