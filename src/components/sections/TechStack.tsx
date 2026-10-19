'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'Next.js', level: 'Advanced' },
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'JavaScript ES6+', level: 'Advanced' },
      { name: 'HTML5/CSS3', level: 'Expert' },
    ],
  },
  {
    title: 'Backend & Database',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Node.js', level: 'Intermediate' },
      { name: 'Supabase', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'PostGIS', level: 'Intermediate' },
      { name: 'REST API', level: 'Advanced' },
      { name: 'Row Level Security', level: 'Advanced' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Vercel', level: 'Advanced' },
      { name: 'VS Code', level: 'Expert' },
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'Linux CLI', level: 'Intermediate' },
    ],
  },
  {
    title: 'Specialized',
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'Leaflet.js', level: 'Advanced' },
      { name: 'Chart.js', level: 'Intermediate' },
      { name: 'Geospatial Data', level: 'Intermediate' },
      { name: 'SaaS Architecture', level: 'Intermediate' },
      { name: 'PWA', level: 'Intermediate' },
      { name: 'SEO Optimization', level: 'Advanced' },
    ],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Teknologi yang Saya Kuasai
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stack modern yang saya gunakan untuk membangun aplikasi web production-grade 
            dengan performa, keamanan, dan skalabilitas optimal.
          </p>
        </motion.div>

        {/* Tech categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Category header with gradient */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Technologies list */}
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <span className="font-medium text-foreground">{tech.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            💡 Selalu belajar teknologi baru untuk mengikuti perkembangan industri dan memberikan solusi terbaik.
          </p>
        </motion.div>
      </div>
    </section>
  );
}