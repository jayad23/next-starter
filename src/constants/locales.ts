export const localesPrefixes = {
  'es': '/es',
  'en': '/en',
  'fr': '/fr',
  'pt': '/pt',
};
export const locales = Object.keys(localesPrefixes);
export type Locale = typeof locales[number];