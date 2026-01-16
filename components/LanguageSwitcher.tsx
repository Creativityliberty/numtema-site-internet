import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { i18n, Language } from '../lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = i18n.getLanguage();

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'en', label: 'English', flag: '🇬🇧' }
    ];

    const handleLanguageChange = (lang: Language) => {
        i18n.setLanguage(lang);
        setIsOpen(false);
    };

    const currentLanguage = languages.find(l => l.code === currentLang);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full glass border border-white/10 hover:border-[#16C60C]/30 transition-all text-sm font-bold"
            >
                <Globe size={16} />
                <span className="hidden sm:inline">{currentLanguage?.flag} {currentLanguage?.label}</span>
                <span className="sm:hidden">{currentLanguage?.flag}</span>
                <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 right-0 glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl min-w-[160px] z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full px-4 py-3 text-left hover:bg-white/5 transition-all flex items-center gap-3 text-sm font-bold ${currentLang === lang.code ? 'bg-[#16C60C]/10 text-[#16C60C]' : ''
                                    }`}
                            >
                                <span className="text-lg">{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
