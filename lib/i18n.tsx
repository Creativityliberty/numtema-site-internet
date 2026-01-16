import { fr } from '../locales/fr';
import { en } from '../locales/en';

export type Language = 'fr' | 'en';

type Translations = typeof fr;

const translations: Record<Language, Translations> = {
    fr,
    en
};

class TranslationService {
    private currentLanguage: Language = 'fr';

    constructor() {
        // Load from localStorage
        const saved = localStorage.getItem('language') as Language;
        if (saved && (saved === 'fr' || saved === 'en')) {
            this.currentLanguage = saved;
        }
    }

    getLanguage(): Language {
        return this.currentLanguage;
    }

    setLanguage(lang: Language): void {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        // Trigger page reload to apply translations
        window.location.reload();
    }

    t(key: string): string {
        const keys = key.split('.');
        let value: any = translations[this.currentLanguage];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    }

    // Get all translations for a section
    getSection(section: keyof Translations): any {
        return translations[this.currentLanguage][section];
    }
}

// Export singleton instance
export const i18n = new TranslationService();

// Helper function for quick access
export const t = (key: string) => i18n.t(key);
