import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './Locales/en.json'
import ka from './Locales/ka.json'
import hi from './Locales/hi.json'

i18n
  .use(initReactI18next)
  .init({
    resources:{
        en:{
            translation:en
        },
        ka:{
            translation:ka
        },
        hi:{
            translation:hi
        }
    },
    lng:"en",
    fallbackLng:"en",
    interpolation:{
        escapeValue:false
    },
  });

export default i18n;