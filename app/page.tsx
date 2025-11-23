// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { getPublishedProjects, Project } from '@/utils/firestoreUtils';

// Image descriptions helper function
function getImageDescription(filename: string): { title: string; description: string; shortTitle: string } {
  const descriptions: { [key: string]: { title: string; description: string; shortTitle: string } } = {
    'surveyor-gps-home.png': {
      title: 'Main Application Interface',
      description: 'Clean, professional home screen showing the 2-in-1 geospatial suite with Ghana Grid Converter and Control Points Locator',
      shortTitle: 'Home'
    },
    'surveyor-gps-manual-grid-entry.png': {
      title: 'Manual Grid to Geo Conversion',
      description: 'Input Ghana Grid coordinates manually and convert to geographic coordinates for mapping and verification',
      shortTitle: 'Grid→Geo'
    },
    'surveyor-gps-manual-geo-entry.png': {
      title: 'Manual Geo to Grid Conversion', 
      description: 'Input geographic coordinates and convert to Ghana Grid coordinates for site plans and documentation',
      shortTitle: 'Geo→Grid'
    },
    'surveyor-gps-csv-import.png': {
      title: 'Bulk CSV Processing',
      description: 'Import and convert multiple coordinates simultaneously between Ghana Grid and geographic systems for efficient workflow',
      shortTitle: 'CSV Import'
    },
    'surveyor-gps-dodowa-search.png': {
      title: 'Control Points Database Search',
      description: 'Search for official survey control points by ID or town name - featuring well-known Dodowa pillars recognized by Ghanaian surveyors',
      shortTitle: 'Dodowa Search'
    },
    'surveyor-gps-dodowa-map.png': {
      title: 'Dodowa Junction Navigation',
      description: 'Get precise directions to the famous Dodowa-Ashaiman junction control points using integrated Google Maps',
      shortTitle: 'Dodowa Map'
    },
    'surveyor-gps-tema-search.png': {
      title: 'Tema Motorway Control Points', 
      description: 'Search for control points along major infrastructure like the Tema Motorway for professional surveying work',
      shortTitle: 'Tema Search'
    },
    'surveyor-gps-tema-map.png': {
      title: 'Tema Motorway Navigation',
      description: 'Navigate to exact control point locations at the Tema Motorway roundabout for field verification',
      shortTitle: 'Tema Map'
    },
    'surveyor-gps-details-modal.png': {
      title: 'Control Point Details & Navigation',
      description: 'View comprehensive pillar information including coordinates and properties, then navigate directly to field locations',
      shortTitle: 'Details'
    }
  };

  return descriptions[filename] || { 
    title: 'App Feature', 
    description: 'Screenshot preview of application functionality',
    shortTitle: 'Feature' 
  };
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{src: string; title: string; description: string} | null>(null);
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

  const handleImageClick = (imageSrc: string) => {
    const filename = imageSrc.split('/').pop() || '';
    const imageInfo = getImageDescription(filename);
    setSelectedImage({
      src: imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`,
      title: imageInfo.title,
      description: imageInfo.description
    });
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Isaac Tetteh-Apotey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Geomatics Engineer | Quantic MSSE | Bridging Physical Infrastructure & Digital Solutions
        </p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Building practical software solutions for geospatial challenges, survey automation, 
          and digital transformation in infrastructure development.
        </p>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                project.status === 'private' 
                  ? 'border-l-4 border-orange-500 bg-gradient-to-br from-orange-50 to-white' 
                  : 'border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 to-white'
              }`}
            >
              <div className="p-6">
                {/* Project Header with Status Badge */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
                  {project.status === 'private' ? (
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      Private • {project.launchDate}
                    </span>
                  ) : (
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      Public • Live
                    </span>
                  )}
                </div>

                {/* Project Screenshot Gallery */}
                <div className="mb-4">
                  {/* Main Featured Image - Clickable */}
                  {project.featuredImage ? (
                    <div className="mb-3">
                      <img 
                        src={project.featuredImage.startsWith('/') ? project.featuredImage : `/${project.featuredImage}`}
                        alt={`${project.title} screenshot`}
                        className="w-full h-48 object-contain rounded-lg border border-gray-200 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => handleImageClick(project.featuredImage!)}
                      />
                      {/* ORANGE TITLE - UPDATED */}
                      <p className="text-xs font-medium text-orange-600 text-center mt-2">
                        {getImageDescription(project.featuredImage?.split('/').pop() || '').title}
                      </p>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center mb-3">
                      <span className="text-gray-400 text-sm">Screenshot coming soon</span>
                    </div>
                  )}

                  {/* Thumbnail Gallery - Show other images */}
                  {project.images && project.images.length > 1 && (
                    <div className="mt-3">
                      {/* ORANGE "More screenshots" - UPDATED */}
                      <p className="text-xs font-medium text-orange-600 mb-2">More screenshots:</p>
                      <div className="flex space-x-2 overflow-x-auto pb-2">
                        {project.images.filter((img: string) => img !== project.featuredImage).map((image: string, index: number) => (
                          <div 
                            key={index}
                            className="flex-shrink-0 w-20 cursor-pointer"
                            onClick={() => handleImageClick(image)}
                          >
                            <img 
                              src={image.startsWith('/') ? image : `/${image}`}
                              alt={`${project.title} feature ${index + 1}`}
                              className="w-20 h-16 object-cover rounded border border-gray-200 hover:border-orange-400 transition-colors"
                            />
                            {/* ORANGE THUMBNAIL TITLES - UPDATED */}
                            <p className="text-xs font-medium text-orange-600 text-center mt-1 truncate">
                              {getImageDescription(image.split('/').pop() || '').shortTitle}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className={`text-sm px-3 py-1 rounded-full font-medium ${
                          tech === 'First-in-Ghana' 
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : project.status === 'private'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                  {project.status === 'private' ? (
                    // Private project buttons (ITA-Gh-Surveyor GPS)
                    <>
                      <a 
                        href={`mailto:isaact19@gmail.com?subject=Inquiry: ${project.title}&body=Hello Isaac, I'm interested in learning more about ${project.title}. Please provide more information.`}
                        className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                      >
                        Request Demo
                      </a>
                      <div className="flex-1 text-center py-2 px-4 text-gray-500 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
                        <span className="text-xs">Private Repository</span>
                      </div>
                    </>
                  ) : (
                    // Public project buttons (ITA-COMPUTATIONS)
                    <>
                      {project.liveUrl && project.liveUrl.trim() !== "" ? (
                        <a 
                          href={project.liveUrl}
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
                      
                      {project.githubUrl && project.githubUrl.trim() !== "" ? (
                        <a 
                          href={project.githubUrl}
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
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects published yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-2xl max-h-[90vh] overflow-auto cursor-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {/* ORANGE MODAL TITLE - UPDATED */}
                  <h3 className="text-xl font-bold text-orange-600">{selectedImage.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedImage.description}</p>
                </div>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl ml-4"
                >
                  ×
                </button>
              </div>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full rounded-lg border border-gray-200"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}