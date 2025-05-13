import { writable, derived } from 'svelte/store';
import en from './data/lang_en.json';
import id from './data/lang_id.json';

export const locales = {
  en,
  id
};

const getInitialLocale = () => {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('snakesystem_locale');
    if (stored === 'en' || stored === 'id') return stored;
  }
  return 'en'; // default
};

export const currentLocale = writable(getInitialLocale());

// Setiap kali berubah, simpan ke localStorage
currentLocale.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('snakesystem_locale', value);
  }
});

export const t = derived(currentLocale, $locale => {
  const dict = locales[$locale];
  return (/** @type {string | any} */ key) => dict[key] ?? key;
});
