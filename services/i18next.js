import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import  en from "../locales/en.json";
import sv from "../locales/sv.json";
import hi from "../locales/hi.json";
import gu from "../locales/gu.json";
import pu from "../locales/pu.json";
import bn from "../locales/bn.json";
import ma from "../locales/ma.json";
import tu from "../locales/tu.json";
import ta from "../locales/ta.json";
import ur from "../locales/ur.json";
import od from "../locales/od.json";
export const languageResources = {
    en: {translation: en},
    sv: {translation: sv},
    hi: {translation: hi},
    gu: {translation: gu},
    pu: {translation: pu},
    bn: {translation: bn},
    ma: {translation: ma},
    tu: {translation: tu},
    ta: {translation: ta},
    ur: {translation: ur},
    od: {translation: od},
  };

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources,
});


export default i18next;