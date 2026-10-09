// ไฟล์: context/LanguageContext.tsx
"use client";

import { createContext, useContext, useState } from "react";
import { dictionaries, Language } from "./dictionaries";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  dict: typeof dictionaries.en; // ดึง Type มาจากภาษาอังกฤษเป็นหลัก
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en'); // ค่าเริ่มต้นเป็นภาษาอังกฤษ

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'th' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dict: dictionaries[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};