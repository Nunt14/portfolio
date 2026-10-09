import type { Metadata, Viewport } from "next";
// 1. เพิ่ม Prompt เข้ามาในบรรทัดนี้
import { Inter, Playfair_Display, JetBrains_Mono, Prompt } from "next/font/google";
import "./globals.css";
import ZoomLock from "./components/ZoomLock";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-jb" });

// 2. ตั้งค่าฟอนต์ Prompt
const prompt = Prompt({
  weight: ["300", "400", "500", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-prompt",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Nuntiya Plordppai — Portfolio",
  description:
    "Software Developer specializing in full-stack web and mobile application development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth"> 
      <body
        // 3. เพิ่ม ${prompt.variable} เข้าไปใน className ด้านล่างนี้
        className={`${inter.className} ${playfair.variable} ${mono.variable} ${prompt.variable} antialiased text-ink`}
      >
        <LanguageProvider>
          <ZoomLock />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}