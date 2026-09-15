import React, { createContext, useContext, useEffect, useState } from "react";
import { dictionaries } from "@/data/dictionary";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: dictionaries.en,
  dir: "ltr",
});

const STORAGE_KEY = "vithai-lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(STORAGE_KEY) || "en";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = {
    lang,
    setLang,
    t: dictionaries[lang] || dictionaries.en,
    dir: "ltr",
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  return useContext(LanguageContext);
}