export function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Wajidun Niam',
    jobTitle: 'Fullstack Developer',
    description: 'Fullstack developer spesialis Next.js, TypeScript, dan Supabase. Membangun aplikasi web production-grade untuk klien nyata.',
    url: 'https://wajidunniam.vercel.app',
    email: 'wajidunniam@gmail.com',
    sameAs: [
      'https://github.com/wajidun-niam',
      'https://linkedin.com/in/wajidun-niam',
    ],
    knowsAbout: [
      'Next.js',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Supabase',
      'PostgreSQL',
      'Node.js',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}