import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ruTanslations from './translations/ru.json';
import enTranslations from './translations/en.json';

export const resources = {
  ru: ruTanslations,
  en: enTranslations,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      lookupLocalStorage: 'lang-voice-training',
      order: ['localStorage'],
      caches: ['localStorage'],
    },
    fallbackLng: 'en',
    nonExplicitSupportedLngs: true,
    supportedLngs: ['ru', 'en'],
    resources,
  });

export default i18n;
