import {Locale} from "./locales";

export const onGetSEO = (t: any, locale: Locale) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const ogImageUrl = `${BASE_URL}/og.png`;

  return {
    metadataBase: BASE_URL,
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${BASE_URL}/${locale}`,
      siteName: 'Alfred MG',
      images: [ogImageUrl],
      locale: locale,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [ogImageUrl],
    }
  };
}