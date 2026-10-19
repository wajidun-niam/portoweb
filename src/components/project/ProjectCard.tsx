'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Play, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { VideoModal } from '@/components/ui/VideoModal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const statusConfig = {
    production: {
      label: 'Production',
      color: 'bg-green-500/10 text-green-400 border-green-500/20',
    },
    uat: {
      label: 'UAT Phase',
      color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    },
    'open-source': {
      label: 'Open Source',
      color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    },
  };

  const status = statusConfig[project.status];

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Thumbnail / Video Preview */}
        <div className="relative aspect-video overflow-hidden bg-secondary">
          <img
          src={project.thumbnail}
          alt={`Thumbnail ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

          {/* Overlay dengan tombol */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {project.type === 'video-demo' ? (
              <button
                onClick={() => setIsVideoOpen(true)}
                className="p-4 bg-primary hover:bg-primary/90 rounded-full text-primary-foreground transition-all hover:scale-110 shadow-lg"
                aria-label={`Tonton video demo ${project.title}`}
              >
                <Play size={28} fill="currentColor" />
              </button>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-full text-primary-foreground font-medium transition-all hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${status.color}`}>
              {status.label}
            </span>
          </div>

          {/* Type badge */}
          {project.type === 'video-demo' && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm bg-purple-500/10 text-purple-400 border-purple-500/20">
                Video Demo
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {project.tagline}
            </p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2">
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5 font-bold">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between pt-2">
            {project.type === 'video-demo' ? (
              <button
                onClick={() => setIsVideoOpen(true)}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                Tonton Demo
                <ArrowUpRight size={14} />
              </button>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                Kunjungi Live Demo
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Source code ${project.title}`}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.article>

      {/* Video Modal */}
      {project.type === 'video-demo' && project.videoId && (
        <VideoModal
          videoId={project.videoId}
          title={project.title}
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      )}
    </>
  );
}