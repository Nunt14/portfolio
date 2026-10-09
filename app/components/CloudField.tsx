"use client";

import { motion } from "framer-motion";

function Cloud({
  className,
  delay = 0,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  scale?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ scale }}
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg width="180" height="80" viewBox="0 0 180 80" fill="none">
        <ellipse cx="50" cy="50" rx="50" ry="28" fill="white" fillOpacity="0.55" />
        <ellipse cx="95" cy="35" rx="40" ry="32" fill="white" fillOpacity="0.55" />
        <ellipse cx="135" cy="50" rx="45" ry="26" fill="white" fillOpacity="0.55" />
        <ellipse cx="90" cy="58" rx="80" ry="22" fill="white" fillOpacity="0.55" />
      </svg>
    </motion.div>
  );
}

export default function CloudField() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <Cloud className="top-[5%] left-[2%]" delay={0} scale={1.2} />
      <Cloud className="top-[18%] right-[5%]" delay={1.2} scale={0.8} />
      <Cloud className="top-[32%] left-[10%]" delay={0.6} scale={1} />
      <Cloud className="top-[48%] right-[12%]" delay={2} scale={1.3} />
      <Cloud className="top-[62%] left-[3%]" delay={0.3} scale={0.9} />
      <Cloud className="top-[75%] right-[6%]" delay={1.6} scale={1.1} />
      <Cloud className="top-[90%] left-[15%]" delay={1} scale={0.85} />
    </div>
  );
}
