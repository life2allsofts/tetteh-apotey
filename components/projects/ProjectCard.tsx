'use client';

import { Project } from '@/types';
import { ProjectUtils } from '@/utils/projectUtils';
import ImageGallery from '../shared/ImageGallery';

interface ProjectCardProps {
  project: Project;
  onImageClick: (imageSrc: string) => void;
}

export default function ProjectCard({ project, onImageClick }: ProjectCardProps) {
  const projectType = ProjectUtils.getProjectType(project);
  const githubUrl = ProjectUtils.getValidGitHubUrl(project);
  const liveUrl = ProjectUtils.getValidLiveUrl(project);
  const statusBadge = ProjectUtils.getStatusBadge(project);
  
  const borderColor = projectType === 'malware-classifier' 
    ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-white'
    : projectType === 'cafe-fausse'
    ? 'border-amber-600 bg-gradient-to-br from-amber-50 to-white'
    : projectType === 'acme-policy-assistant'
    ? 'border-teal-600 bg-gradient-to-br from-teal-50 to-white'
    : project.status === 'private' 
    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white'
    : 'border-blue-500 bg-gradient-to-br from-blue-50 to-white';

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 ${borderColor}`}>
      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
          <span className={`${statusBadge.color} text-white text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-2`}>
            {statusBadge.text}
          </span>
        </div>

        {/* Image Gallery */}
        <ImageGallery 
          featuredImage={project.featuredImage}
          images={project.images}
          title={project.title}
          onImageClick={onImageClick}
        />
        
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                className={`text-sm px-3 py-1 rounded-full font-medium ${
                  ProjectUtils.getTechStackStyles(tech, projectType)
                }`}
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          {renderActionButtons(projectType, liveUrl, githubUrl, project)}
        </div>
      </div>
    </div>
  );
}

// Helper function to render action buttons based on project type
function renderActionButtons(projectType: string, liveUrl: string, githubUrl: string, project: Project) {
  // Malware Classifier - Show Live Demo + Private Repository
  if (projectType === 'malware-classifier') {
    return (
      <>
        <a 
          href={liveUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          Live Demo
        </a>
        <div className="flex-1 text-center py-2 px-4 text-gray-500 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
          <span className="text-xs">Private Repository</span>
        </div>
      </>
    );
  }

  // Café Fausse - Full-Stack Restaurant (Private Repository)
  if (projectType === 'cafe-fausse') {
    return (
      <>
        <a 
          href={liveUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          Live Demo
        </a>
        <div className="flex-1 text-center py-2 px-4 text-gray-500 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
          <span className="text-xs">Private Repository</span>
        </div>
      </>
    );
  }

  // Acme Policy Assistant - RAG Assistant (Private Repository)
  if (projectType === 'acme-policy-assistant') {
    return (
      <>
        <a 
          href={liveUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          Try Assistant
        </a>
        <div className="flex-1 text-center py-2 px-4 text-gray-500 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
          <span className="text-xs">Private Repository</span>
        </div>
      </>
    );
  }

  // Private Projects (ITA-Gh-Surveyor GPS style)
  if (projectType === 'private') {
    return (
      <>
        <a 
          href={`mailto:tettehapotey@gmail.com?subject=Inquiry: ${project.title}`}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          Request Demo
        </a>
        <div className="flex-1 text-center py-2 px-4 text-gray-500 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
          <span className="text-xs">Private Repository</span>
        </div>
      </>
    );
  }

  // Where In The Law - Special case (Request Demo + View Code)
  if (projectType === 'where-in-the-law') {
    return (
      <>
        <a 
          href={`mailto:tettehapotey@gmail.com?subject=Demo Request: ${project.title}`}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          Request Demo
        </a>
        {githubUrl ? (
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium hover:bg-gray-50"
          >
            View Code
          </a>
        ) : (
          <div className="flex-1 text-center py-2 px-4 text-gray-400 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
            <span className="text-xs">Code Private</span>
          </div>
        )}
      </>
    );
  }

  // Public Projects (ITA-COMPUTATIONS style)
  return (
    <>
      {liveUrl ? (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          Live Demo
        </a>
      ) : (
        <div className="flex-1 text-center py-2 px-4 text-gray-400 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
          <span className="text-xs">Demo Coming Soon</span>
        </div>
      )}
      
      {githubUrl ? (
        <a 
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
        >
          View Code
        </a>
      ) : (
        <div className="flex-1 text-center py-2 px-4 text-gray-400 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
          <span className="text-xs">Code Private</span>
        </div>
      )}
    </>
  );
}