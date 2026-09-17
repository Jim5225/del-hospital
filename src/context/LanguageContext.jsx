import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Default is 'bn' (Bangla) as requested
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('del_hospital_lang') || 'bn';
  });

  useEffect(() => {
    localStorage.setItem('del_hospital_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const t = (key) => {
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    // Fallback to Bengali if missing
    if (translations.bn[key] !== undefined) {
      return translations.bn[key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
