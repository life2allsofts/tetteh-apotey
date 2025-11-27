//app\page.tsx
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
    },
    'ita-computations-home.png': {
      title: 'Web Application Interface',
      description: 'Professional geospatial web app for Ghanaian surveyors featuring coordinate processing, area calculations, bearing/distance computations, and CSV imports',
      shortTitle: 'Web App'
    },
    'where-in-the-law-home.png': {
      title: 'Main Law Library Interface',
      description: 'Clean, professional home screen showcasing multiple legal scenarios with Ghana-themed design and intuitive navigation',
      shortTitle: 'Home Screen'
    },
    'where-in-the-law-plain-explanations.png': {
      title: 'Dual-Text Law Explanations',
      description: 'Core feature showing original legal text alongside plain English explanations - making complex laws accessible to everyone',
      shortTitle: 'Law Explanations'
    },
    'where-in-the-law-categories.png': {
      title: 'Comprehensive Category System',
      description: 'Organized browsing across 13+ legal domains with law counts and intuitive categorization for easy navigation',
      shortTitle: 'Categories'
    },
    'where-in-the-law-selected-category.png': {
      title: 'Focused Legal Browsing',
      description: 'Practical use case showing child protection laws with real legal content and social impact focus',
      shortTitle: 'Category View'
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
        console.log('Loaded projects:', projectsData); // Debug log
        setProjects(projectsData);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  // FIXED: Safe handleImageClick function
  const handleImageClick = (imageSrc: string | null | undefined) => {
    // Safe check for valid image source
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

  // FIXED: Improved project type detection
  const getProjectType = (project: Project) => {
    const title = project.title?.toLowerCase() || '';
    const id = project.id?.toLowerCase() || '';
    
    if (project.status === 'private') return 'private';
    
    // Check both title and ID for "where-in-the-law"
    if (title.includes('where in the law') || 
        title.includes('where-in-the-law') ||
        id.includes('where-in-the-law') ||
        project.githubUrl?.includes('where_in_the_law')) {
      return 'where-in-the-law';
    }
    
    return 'public';
  };

  // FIXED: Helper function to validate and get GitHub URL
  const getValidGitHubUrl = (project: Project): string => {
    // If it's "Where In The Law" project, use the hardcoded URL from your Firestore data
    if (getProjectType(project) === 'where-in-the-law') {
      return "https://github.com/life2allsofts/where_in_the_law";
    }
    
    // For other projects, use the provided githubUrl if valid
    if (project.githubUrl && 
        typeof project.githubUrl === 'string' && 
        project.githubUrl.trim() !== '' && 
        project.githubUrl !== '#' &&
        project.githubUrl.startsWith('http')) {
      return project.githubUrl;
    }
    
    // Fallback - return empty string to disable the link
    return '';
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

      {/* Professional Tools Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🚀 Professional Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive applications solving real-world problems in geospatial engineering and software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Ghana Coordinate Converter Tool */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇬🇭</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Ghana Coordinate Converter</h3>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                      Live Production
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                Web companion to our successful mobile app. Convert between Ghana Grid coordinates and Geographic coordinates with survey-grade precision. Features DMS input and meets Ghana cadastral standards.
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                    Grid ↔ Geographic Conversion
                  </span>
                  <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                    DMS Input Support
                  </span>
                  <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                    Cadastral Accuracy
                  </span>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <a 
                  href="https://tetteh-apotey.vercel.app/tools/coordinate-converter"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                  Use Tool
                </a>
                <a 
                  href="https://github.com/life2allsofts/ita-ghana-coordinate-converter-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium hover:bg-gray-50"
                >
                  View Code
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Python Flask</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">JavaScript</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Geospatial</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Vercel</span>
              </div>
            </div>
          </div>

          {/* Coming Soon Tool */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🛠️</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">More Tools Coming Soon</h3>
                    <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-medium">
                      In Development
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                Building more professional tools for surveyors, geomatics engineers, and the Ghana land sector.
              </p>

              <div className="flex space-x-3 mt-6">
                <a 
                  href="mailto:tettehapotey@gmail.com?subject=Tool Suggestion&body=Hello Isaac, I'd like to suggest a tool for: [describe your tool idea]"
                  className="flex-1 border border-orange-300 hover:border-orange-400 text-orange-700 text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium hover:bg-orange-50"
                >
                  Suggest a Tool
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const projectType = getProjectType(project);
            const githubUrl = getValidGitHubUrl(project);
            
            // Debug logging to help identify the issue
            console.log('Project Details:', {
              title: project.title,
              id: project.id,
              type: projectType,
              githubUrl: project.githubUrl,
              validatedGithubUrl: githubUrl,
              status: project.status
            });
            
            return (
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

                  {/* Project Screenshot Gallery - ALL IMAGES CLICKABLE */}
                  <div className="mb-4">
                    {/* Main Featured Image - Always Clickable */}
                    {project.featuredImage ? (
                      <div className="mb-3">
                        <img 
                          src={project.featuredImage}
                          alt={`${project.title} screenshot`}
                          className="w-full h-48 object-contain rounded-lg border border-gray-200 shadow-sm bg-white cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => project.featuredImage && handleImageClick(project.featuredImage)}
                        />
                        {/* Click hint for main image */}
                        <p className="text-xs text-gray-500 text-center mt-1">
                          Click image to view details
                        </p>
                        {/* Image title */}
                        <p className="text-xs font-medium text-orange-600 text-center mt-1">
                          {typeof project.featuredImage === 'string' 
                            ? getImageDescription(project.featuredImage.split('/').pop() || '').title
                            : 'Application Screenshot'
                          }
                        </p>
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center mb-3">
                        <span className="text-gray-400 text-sm">Screenshot coming soon</span>
                      </div>
                    )}

                    {/* Thumbnail Gallery - Only show if multiple images exist */}
                    {project.images && Array.isArray(project.images) && project.images.length > 1 && (
                      <div className="mt-3">
                        <p className="text-xs font-medium text-orange-600 mb-2">More screenshots:</p>
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          {project.images
                            .filter((img: string) => img && typeof img === 'string' && img !== project.featuredImage)
                            .map((image: string, index: number) => (
                              <div 
                                key={index}
                                className="flex-shrink-0 w-20 cursor-pointer"
                                onClick={() => handleImageClick(image)}
                              >
                                <img 
                                  src={image}
                                  alt={`${project.title} feature ${index + 1}`}
                                  className="w-20 h-16 object-cover rounded border border-gray-200 hover:border-orange-400 transition-colors"
                                />
                                <p className="text-xs font-medium text-orange-600 text-center mt-1 truncate">
                                  {typeof image === 'string' 
                                    ? getImageDescription(image.split('/').pop() || '').shortTitle
                                    : 'Feature'
                                  }
                                </p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                    {/* Single image projects get a visual hint */}
                    {project.featuredImage && (!project.images || project.images.length <= 1) && (
                      <div className="text-center mt-2">
                        <p className="text-xs text-gray-500">
                          💡 <span className="font-medium">Click the image above</span> to view details
                        </p>
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

                  {/* FIXED: Action Buttons with proper GitHub URL handling */}
                  <div className="flex space-x-3 mt-6">
                    {projectType === 'private' ? (
                      // Private project buttons (ITA-Gh-Surveyor GPS)
                      <>
                        <a 
                          href={`mailto:tettehapotey@gmail.com?subject=Inquiry: ${project.title}&body=Hello Isaac, I'm interested in learning more about ${project.title}. Please provide more information.`}
                          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                        >
                          Request Demo
                        </a>
                        <div className="flex-1 text-center py-2 px-4 text-gray-500 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
                          <span className="text-xs">Private Repository</span>
                        </div>
                      </>
                    ) : projectType === 'where-in-the-law' ? (
                      // Where In The Law specific buttons - NOW PROPERLY FIXED
                      <>
                        <a 
                          href={`mailto:tettehapotey@gmail.com?subject=Demo Request: ${project.title}&body=Hello Isaac, I'm interested in requesting a demo for ${project.title}. Please provide more information.`}
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
                            title={`View code on GitHub: ${githubUrl}`}
                          >
                            View Code
                          </a>
                        ) : (
                          <div className="flex-1 text-center py-2 px-4 text-gray-400 text-sm flex items-center justify-center border border-gray-200 rounded-lg">
                            <span className="text-xs">Code Private</span>
                          </div>
                        )}
                      </>
                    ) : (
                      // Public project buttons (ITA-COMPUTATIONS)
                      <>
                        {project.liveUrl && project.liveUrl.trim() !== "" && project.liveUrl !== "#" ? (
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
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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