// lib/i18n-context.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { type Locale, translations, type T } from "./i18n";

type Ctx = { locale: Locale; t: T; setLocale: (l: Locale) => void };

const I18nCtx = createContext<Ctx>({
    locale: "es",
    t: translations.es,
    setLocale: () => { },
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("es");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("wb3l-locale") as Locale | null;
            if (saved === "es" || saved === "en") {
                setLocaleState(saved);
                document.documentElement.lang = saved;
            }
        } catch { }
    }, []);

    const setLocale = (l: Locale) => {
        setLocaleState(l);
        document.documentElement.lang = l;
        try { localStorage.setItem("wb3l-locale", l); } catch { }
    };

    return (
        <I18nCtx.Provider value={{ locale, t: translations[locale] as unknown as T, setLocale }}>
            {children}
        </I18nCtx.Provider>
    );
}

export const useI18n = () => useContext(I18nCtx);
