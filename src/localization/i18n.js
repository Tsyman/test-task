import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./en/en.json";
import de from "./de/de.json";
import es from "./es/es.json";
import fr from "./fr/fr.json";
import ja from "./ja/ja.json";
import pt from "./pt/pt.json";

export const initI18n = () => {
  i18next.use(LanguageDetector).init({
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
    },
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      de: {
        translation: de,
      },
      es: {
        translation: es,
      },
      ja: {
        translation: ja,
      },
      pt: {
        translation: pt,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  }).then(() => {
    document.documentElement.lang = i18next.language;
  });
};