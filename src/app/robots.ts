import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Berlaku untuk semua bot (Google, Bing, dll)
      allow: '/',     // Izinkan crawl semua halaman
      // disallow: '/admin', // Contoh: jika nanti ada halaman admin, tambahkan ini
    },
    sitemap: 'https://wajidunniam.vercel.app/sitemap.xml', // Arahkan bot ke sitemap
  };
}