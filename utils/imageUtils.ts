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
    },
    
    // Café Fausse - Public Facing
    'cafe-fausse-home.png': {
      title: 'Elegant Restaurant Homepage',
      description: 'Sophisticated landing page for Café Fausse featuring the restaurant ambiance and clear calls-to-action for menu viewing and reservations.',
      shortTitle: 'Home'
    },
    'cafe-fausse-menu.png': {
      title: 'Dynamic Menu with Categories',
      description: 'Interactive menu system with category filtering, displaying food items, descriptions, and prices with a clean, appetizing design.',
      shortTitle: 'Menu'
    },
    'cafe-fausse-reservation.png': {
      title: 'Real-Time Reservation System',
      description: 'Smart booking interface with date/time selection, party size options, and real-time availability checking powered by PostgreSQL.',
      shortTitle: 'Reservations'
    },
    'cafe-fausse-gallery.png': {
      title: 'Restaurant Image Gallery',
      description: 'Beautiful gallery showcasing restaurant interior, signature dishes, and dining experience to entice potential customers.',
      shortTitle: 'Gallery'
    },
    
    // Café Fausse - Admin Authentication & Dashboard
    'cafe-fausse-admin-login.png': {
      title: 'Secure Admin Authentication',
      description: 'JWT-based admin login portal with secure authentication for restaurant staff to access the management dashboard.',
      shortTitle: 'Admin Login'
    },
    'cafe-fausse-admin-dashboard.png': {
      title: 'Comprehensive Admin Dashboard',
      description: 'Centralized dashboard for managing all aspects of the restaurant including reservations, customers, and menu items.',
      shortTitle: 'Dashboard'
    },
    
    // Café Fausse - Admin Management Features
    'cafe-fausse-admin-reservations.png': {
      title: 'Reservation Management',
      description: 'Full CRUD interface for managing customer reservations with status tracking and smart table assignment.',
      shortTitle: 'Manage Bookings'
    },
    'cafe-fausse-admin-menu.png': {
      title: 'Menu Management System',
      description: 'Complete menu CRUD operations allowing staff to add, edit, or remove menu items with categories and pricing.',
      shortTitle: 'Menu Admin'
    },
    'cafe-fausse-admin-customers.png': {
      title: 'Customer Management',
      description: 'Comprehensive customer database with contact information, reservation history, and newsletter signup status for targeted marketing.',
      shortTitle: 'Customers'
    },
    'cafe-fausse-admin-user-management.png': {
      title: 'Admin User Management',
      description: 'Secure user administration with role-based access control, allowing management of staff accounts and permissions.',
      shortTitle: 'User Admin'
    },
    'cafe-fausse-admin-gallery.png': {
      title: 'Gallery Management',
      description: 'Full CRUD interface for managing restaurant images - upload, organize, and publish photos to the public gallery.',
      shortTitle: 'Gallery Admin'
    },
    'cafe-fausse-admin-tables.png': {
      title: 'Table Management',
      description: 'Smart table configuration system with capacity settings, table numbering, and availability tracking for optimized seating.',
      shortTitle: 'Tables'
    },

    // Acme Policy Assistant
    'acme-policy-home.png': {
      title: 'Main Assistant Interface',
      description: 'Clean chat interface for asking company policy questions with example prompts and welcome message.',
      shortTitle: 'Home'
    },
    'acme-policy-pto-question.png': {
      title: 'PTO Policy Query',
      description: 'Asking about paid time off with detailed response including accrual rates by tenure and PTO balance tracking information.',
      shortTitle: 'PTO Query'
    },
    'acme-policy-sources.png': {
      title: 'Source Citations',
      description: 'Retrieval-Augmented Generation showing exact policy documents and sections used to generate the answer for transparency and verification.',
      shortTitle: 'Sources'
    },
    'acme-policy-security-question.png': {
      title: 'Security Policy Query',
      description: 'Demonstrating the assistant\'s ability to answer different policy domains like security, remote work, or expenses.',
      shortTitle: 'Security Query'
    }
  };

  return descriptions[filename] || { 
    title: 'App Feature', 
    description: 'Screenshot preview of application functionality',
    shortTitle: 'Feature' 
  };
}