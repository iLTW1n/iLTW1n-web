import { getLocaleFromNavigator, init, addMessages } from 'svelte-i18n';
import enUS from './lang/en.json'
import en from './lang/en.json'
import spa from './lang/spa.json'

let spanishOrEnglish = 'spa';

if (getLocaleFromNavigator().includes('spa')) {
  spanishOrEnglish = 'spa'
}

if (getLocaleFromNavigator().includes('en')) {
  spanishOrEnglish = 'en'
}

addMessages('en', en);
addMessages('en-US', enUS);
addMessages('spa', spa);

init({
  fallbackLocale: 'en',
  initialLocale: spanishOrEnglish,
});
