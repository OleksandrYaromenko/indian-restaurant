import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { UK } from './languages/uk.js';
import { EN } from './languages/en.js';

const resources = {
  en: {
    translation: EN
  },
  uk: {
    translation: UK
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'uk',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
