import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wajidunniam.vercel.app'; // Ganti jika sudah pakai custom domain nanti

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Seberapa sering halaman ini update
      priority: 1, // Prioritas tertinggi (halaman utama)
    },
    // Nanti jika ada halaman dinamis (misal: /projects/simberkas), bisa ditambahkan di sini:
    // {
    //   url: `${baseUrl}/projects/simberkas`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}