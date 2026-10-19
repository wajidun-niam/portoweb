export type ProjectType = 'live-demo' | 'video-demo';
export type ProjectStatus = 'production' | 'uat' | 'open-source';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  type: ProjectType;
  liveUrl?: string;
  videoId?: string;
  thumbnail: string;
  techStack: string[];
  highlights: string[];
  status: ProjectStatus;
  githubUrl?: string;
}