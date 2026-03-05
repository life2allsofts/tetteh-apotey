// types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  status?: 'public' | 'private';  // Made optional with ?
  launchDate?: string;
  githubUrl?: string;
  liveUrl?: string;
  featuredImage?: string;
  images?: string[];
  techStack: string[];
  isPublished: boolean;
  featured?: boolean;
  dateCreated?: any;
}

export interface ImageInfo {
  title: string;
  description: string;
  shortTitle: string;
}

export interface SelectedImage {
  src: string;
  title: string;
  description: string;
}