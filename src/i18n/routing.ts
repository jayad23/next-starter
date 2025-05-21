import {defineRouting} from 'next-intl/routing';
import {aboutRoute} from '../constants/routing/about';
import {createNavigation} from 'next-intl/navigation';
import {locales, localesPrefixes} from '../constants/locales';

export const routing = defineRouting({
  locales: locales,
  defaultLocale: 'es',
  localePrefix: {
    mode: 'always',
    prefixes: localesPrefixes
  },
  pathnames: {
    '/': '/',
    '/about': aboutRoute
  }
});

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);