import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/project/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Proyek Nyata untuk Klien Nyata
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tiga proyek yang telah saya bangun untuk menyelesaikan masalah bisnis nyata, 
            dari digitalisasi operasional hingga platform SaaS berlangganan.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}