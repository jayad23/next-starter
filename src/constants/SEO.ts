import { Locale } from "./locales";
import ogImage from "../../public/kz-logo.png";

export const onGetSEO = (t: any, locale: Locale) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const ogImageUrl = ogImage;

  return {
    metadataBase: new URL(BASE_URL),
    title: t("seo-title"),
    description: t("seo-profile-description"),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: t("seo-title"),
      description: t("seo-profile-description"),
      url: `${BASE_URL}/${locale}`,
      siteName: "Frontend Developer Kike Vanegas",
      images: [ogImageUrl],
      locale: locale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: t("seo-title"),
      description: t("seo-profile-description"),
      images: [ogImageUrl],
    }
  };
}