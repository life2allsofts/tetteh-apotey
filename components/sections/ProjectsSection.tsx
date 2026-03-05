'use client';

import { Project } from '@/types';
import ProjectCard from '../projects/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
  onImageClick: (imageSrc: string) => void;
}

export default function ProjectsSection({ projects, onImageClick }: ProjectsSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onImageClick={onImageClick}
          />
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No projects published yet. Check back soon!</p>
        </div>
      )}
    </section>
  );
}