'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, Award, TrendingUp } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Fullstack Development',
    description: 'Membangun aplikasi web end-to-end dari database hingga UI yang responsif dan performant.',
  },
  {
    icon: Briefcase,
    title: 'Real Client Projects',
    description: 'Pengalaman langsung bekerja dengan klien nyata, memahami requirement bisnis, dan deliver solusi.',
  },
  {
    icon: Award,
    title: 'SaaS & Production-Grade',
    description: 'Proyek yang dibangun bukan sekadar demo, tapi diadopsi sebagai layanan SaaS berlangganan.',
  },
  {
    icon: TrendingUp,
    title: 'Business Impact',
    description: 'Fokus pada dampak bisnis: efisiensi operasional, penghematan waktu, dan revenue tracking.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Tentang Saya
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Fullstack Developer dengan Fokus Bisnis
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Saya bukan hanya menulis kode, tapi membangun solusi yang menyelesaikan masalah nyata 
            dan menghasilkan dampak bisnis yang terukur.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Narasi dengan max-width untuk readability */}
            <div className="max-w-2xl space-y-4">
              <p className="text-muted-foreground leading-relaxed text-base">
                Saya adalah <span className="text-foreground font-semibold">Fullstack Developer</span> yang 
                berfokus pada pembangunan aplikasi web production-grade. Pengalaman saya mencakup 
                digitalisasi operasional bisnis, pengembangan platform SaaS, dan solusi geospasial 
                berbasis web.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-base">
                Proyek-proyek yang saya bangun bukan sekadar portfolio piece, tapi{' '}
                <span className="text-foreground font-semibold">sistem nyata yang digunakan oleh klien</span> untuk 
                operasional harian mereka. Dari sistem monitoring berkas yang diadopsi sebagai layanan 
                SaaS berlangganan, hingga platform WebGIS yang menjadi referensi standar untuk wilayah 
                Kota Jambi.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-base">
                Saya percaya bahwa{' '}
                <span className="text-foreground font-semibold">kode yang baik adalah kode yang menghasilkan nilai bisnis</span>. 
                Setiap fitur yang saya implementasikan selalu mempertimbangkan dampak terhadap efisiensi 
                operasional, keamanan data, dan skalabilitas sistem.
              </p>
            </div>

            {/* Stats dengan border-top untuk pemisahan visual */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Proyek Production</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Real Client Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">SaaS</div>
                <div className="text-sm text-muted-foreground">Business Model</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}