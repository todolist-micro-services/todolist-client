import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import fr from "@core/translations/fr.json";
import en from "@core/translations/en.json";
import { Language } from "@core/translations/languages.ts";
import { retrieveData } from "@utils/storeData.ts";
import { appLanguage } from "@utils/constant.ts";

const savedLanguage = retrieveData(appLanguage);
const defaultLanguage = savedLanguage ? savedLanguage : Language.EN;

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,

    keySeparator: ".",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
