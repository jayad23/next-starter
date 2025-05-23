import {routing} from './routing';
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!routing.locales.includes(locale as any)) notFound();

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = (await import(`../../messages/${locale}.json`)).default
  
  return {
    locale,
    messages: messages
  };
});