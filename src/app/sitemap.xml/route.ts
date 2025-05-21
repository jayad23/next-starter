import {locales as LocalesOptions } from "@/src/constants/locales";

export async function GET() {
  const locales = LocalesOptions;
  const pages = ['', '/about', '/contact'];

  const urls = locales.flatMap(locale =>
    pages.map(path =>
      `<url><loc>https://example.com/${locale}${path}</loc></url>`
    )
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
