import { ImageInfo } from '@/types';

export function getImageDescription(filename: string): ImageInfo {
  const descriptions: { [key: string]: ImageInfo } = {
    // Surveyor GPS Images
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
    
    // ITA Computations
    'ita-computations-home.png': {
      title: 'Web Application Interface',
      description: 'Professional geospatial web app for Ghanaian surveyors featuring coordinate processing, area calculations, bearing/distance computations, and CSV imports',
      shortTitle: 'Web App'
    },
    
    // Where in the Law
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
    },
    
    // Malware Classifier
    'malware-classifier-home.png': {
      title: 'Main Application Interface',
      description: 'Clean, professional interface for PE file malware detection with XGBoost model achieving 98.03% accuracy',
      shortTitle: 'Home'
    },
    'malware-classifier-processing.png': {
      title: 'Real-time Analysis Progress',
      description: 'Live PE header extraction and analysis progress showing the technical depth of the classification process',
      shortTitle: 'Processing'
    },
    'malware-classifier-results.png': {
      title: 'Classification Results',
      description: 'Detailed results showing malware/benign prediction with confidence scores and SHA-256 hash verification',
      shortTitle: 'Results'
    },
    'malware-classifier-batch.png': {
      title: 'Batch Processing',
      description: 'Upload CSV files for bulk analysis with automatic predictions download - processes thousands of samples efficiently',
      shortTitle: 'Batch'
    },
    'malware-classifier-manual.png': {
      title: 'Manual Feature Input',
      description: 'Expert mode for entering all 17 PE header features manually, ideal for testing and validation',
      shortTitle: 'Manual'
    },
    'malware-classifier-model-info.png': {
      title: 'Model Information Dashboard',
      description: 'Comprehensive model metrics including 99.59% AUC-ROC, confusion matrix, and bias correction configuration',
      shortTitle: 'Model Info'
    }
  };

  return descriptions[filename] || { 
    title: 'App Feature', 
    description: 'Screenshot preview of application functionality',
    shortTitle: 'Feature' 
  };
}