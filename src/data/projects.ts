import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'simberkas',
    title: 'SimBerkas',
    tagline: 'SaaS Monitoring Berkas & Juru Ukur Real-Time',
    description:
      'Aplikasi web terintegrasi untuk manajemen dokumen pengukuran tanah, pelacakan progres tim lapangan, dan analisis bisnis real-time bagi KJSB. Berhasil diadopsi sebagai layanan SaaS berlangganan.',
    type: 'video-demo',
    videoId: 'R9KIeacKHWQ', // Ganti dengan YouTube Video ID asli kamu nanti
    thumbnail: '/images/projects/simberkas-screenshot.png',
    techStack: ['JavaScript', 'Bootstrap', 'Chart.js', 'Supabase', 'Batch Script'],
    highlights: [
      'Dashboard analitik real-time dengan KPI tracking',
      'Custom protocol handler (bukafolder://) untuk integrasi Windows',
      'Auto-generate dokumen resmi (Surat Tugas, Invoice, BA)',
      'Diadopsi sebagai layanan SaaS berlangganan',
    ],
    status: 'production',
  },
  {
    id: 'sidzaki',
    title: 'SiDzaki',
    tagline: 'Sistem Informasi Digital Permohonan Surveyor',
    description:
      'Aplikasi fullstack yang mendigitalisasi end-to-end workflow permohonan survei tanah untuk KJSB Dzaki Adzhan, Jambi. Mengubah proses manual (WhatsApp/Excel) menjadi sistem terpusat.',
    type: 'video-demo',
    videoId: 'Jlvmrq18uig', // Ganti dengan YouTube Video ID asli kamu nanti
    thumbnail: '/images/projects/sidzaki-screenshot.png',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Supabase', 'Nodemailer'],
    highlights: [
      'Formulir dinamis dengan validasi Zod',
      'Email tracking otomatis dengan kode unik',
      'Row Level Security (RLS) untuk proteksi data',
      'Auto-cleanup storage saat data dihapus',
    ],
    status: 'uat',
  },
  {
    id: 'webgis-jambi',
    title: 'WebGIS Kota Jambi',
    tagline: 'Platform Solusi Geospasial Berbasis Web',
    description:
      'Platform WebGIS interaktif untuk visualisasi data geospasial Kota Jambi. Dibangun ringan tanpa framework berat untuk performa maksimal, dengan standar keamanan web modern.',
    type: 'live-demo',
    liveUrl: 'https://webgis-kota-jambi.vercel.app/',
    thumbnail: '/images/projects/webgis-screenshot.png',
    techStack: ['Leaflet.js', 'PostGIS', 'Supabase', 'JavaScript ES6'],
    highlights: [
      'Peta interaktif multi-layer dengan toggle dinamis',
      'Alat ukur jarak & luas area langsung di peta',
      'Geocoding real-time untuk pencarian lokasi',
      'Open-source, menjadi referensi WebGIS modern',
    ],
    status: 'open-source',
    githubUrl: 'https://github.com/giskotajambi/leaflet-webgis-jambi-official',
  },
];