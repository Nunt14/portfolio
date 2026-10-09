"use client";

import { useEffect } from "react";

export default function ZoomLock() {
  useEffect(() => {
    // บล็อกการซูมด้วย Ctrl + ลูกกลิ้งเมาส์
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // บล็อกการซูมด้วยปุ่มคีย์บอร์ด (Ctrl + บวกลบ)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "=" || e.key === "-" || e.key === "0" || e.key === "+")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}