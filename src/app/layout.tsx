import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { JsonLd } from '@/components/seo/JsonLd'; // 👈 IMPORT JSON-LD DI SINI

// Setup Google Fonts dengan optimasi Next.js (tanpa request eksternal di runtime)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// Metadata untuk SEO & Social Media Sharing
export const metadata: Metadata = {
  title: {
    default: 'Wajidun Niam — Fullstack Developer',
    template: '%s | Wajidun Niam',
  },
  description:
    'Portfolio profesional fullstack developer spesialis Next.js, TypeScript, dan Supabase. Membangun aplikasi web production-grade untuk klien nyata.',
  keywords: [
    'fullstack developer',
    'next.js developer',
    'typescript',
    'supabase',
    'web developer indonesia',
    'portfolio',
    'wajidun niam',
  ],
  authors: [{ name: 'Wajidun Niam' }],
  creator: 'Wajidun Niam',
  metadataBase: new URL('https://wajidunniam.vercel.app'),
  
  // 👈 TAMBAHKAN CANONICAL URL UNTUK MENGHINDARI DUPLICATE CONTENT
  alternates: {
    canonical: 'https://wajidunniam.vercel.app',
  },
  
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://wajidunniam.vercel.app',
    title: 'Wajidun Niam — Fullstack Developer',
    description: 'Membangun aplikasi web production-grade untuk klien nyata.',
    siteName: 'Wajidun Niam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wajidun Niam — Fullstack Developer',
    description: 'Membangun aplikasi web production-grade untuk klien nyata.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        {/* 👈 TAMBAHKAN KOMPONEN JSON-LD DI SINI */}
        <JsonLd />
        
        {children}
      </body>
    </html>
  );
}