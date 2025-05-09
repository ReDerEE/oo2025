import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'nav':{
        'decathlon': "Decathlon",
        'players': 'Players',
        'points': 'Points',
        'manage-player': 'Manage players',
        'manage-results': 'Manage results',
        'map': 'Map',
        'lang': 'Language'
      },
      'main':{
        'name': 'Name',
        'country': 'Country',
        'age': 'Age',
        'more-details': 'More details',
        'all-countries': 'All countries',
        'full-points': 'Full points',
        'change': 'Change',
        'active': 'Active',
        'point-id': 'Point ID'
      }
    }
  },
  et: {
    translation: {
      'nav':{
        'decathlon': "Kümnevõistlus",
        'players': 'Võistlejad',
        'points': 'Tulemused',
        'manage-player': 'Halda võistlejaid',
        'manage-results': 'Halda tulemusi',
        'map': 'Map',
        'lang': 'Keel'
      }
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;