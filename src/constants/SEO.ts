import { Metadata } from "next";
import { Locale } from "./locales";

const DEFAULT_BASE_URL = "http://localhost:3000";
const OG_IMAGE_PATH = "/kz-logo-social.jpg";

const getBaseUrl = () => {
  const configuredBaseUrl = process.env.NEXT_PUBLIC_BASE_URL?.trim();

  return configuredBaseUrl?.replace(/\/$/, "") || DEFAULT_BASE_URL;
};

export const onGetSEO = (t: any, locale: Locale): Metadata => {
  const baseUrl = getBaseUrl();
  const ogImageUrl = new URL(OG_IMAGE_PATH, baseUrl).toString();

  return {
    metadataBase: new URL(baseUrl),
    title: t("seo-title"),
    description: t("seo-profile-description"),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: t("seo-title"),
      description: t("seo-profile-description"),
      url: `${baseUrl}/${locale}`,
      siteName: "Frontend Developer Kike Vanegas",
      images: [
        {
          url: ogImageUrl,
          alt: t("seo-title"),
        },
      ],
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
};