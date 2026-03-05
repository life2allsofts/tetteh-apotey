'use client';

import { useState, useEffect } from 'react';
import { getPublishedProjects, Project } from '@/utils/firestoreUtils';
import { SelectedImage } from '@/types';
import { getImageDescription } from '@/utils/imageUtils';

// Components
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import HeroSection from '@/components/sections/HeroSection';
import ResearchSection from '@/components/sections/ResearchSection';
import ToolsSection from '@/components/sections/ToolsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ImageModal from '@/components/shared/ImageModal';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<SelectedImage | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Load projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projectsData = await getPublishedProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  // Safe image click handler
  const handleImageClick = (imageSrc: string | null | undefined) => {
    if (!imageSrc || typeof imageSrc !== 'string') {
      console.warn('Invalid image source:', imageSrc);
      return;
    }
    
    const filename = imageSrc.split('/').pop() || '';
    const imageInfo = getImageDescription(filename);
    setSelectedImage({
      src: imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`,
      title: imageInfo.title,
      description: imageInfo.description
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <HeroSection />
      <ResearchSection />
      <ToolsSection />
      <ProjectsSection 
        projects={projects} 
        onImageClick={handleImageClick}
      />
      <ImageModal 
        selectedImage={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </main>
  );
}