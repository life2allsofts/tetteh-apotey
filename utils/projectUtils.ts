import { Project } from '@/types';

export const ProjectUtils = {
  getProjectType: (project: Project): string => {
    const title = project.title?.toLowerCase() || '';
    const id = project.id?.toLowerCase() || '';
    
    // Handle undefined status
    if (project.status === 'private') return 'private';
    
    if (title.includes('where in the law') || 
        title.includes('where-in-the-law') ||
        id.includes('where-in-the-law') ||
        project.githubUrl?.includes('where_in_the_law')) {
      return 'where-in-the-law';
    }
    
    if (title.includes('malware') || 
        title.includes('classifier') ||
        id.includes('malware')) {
      return 'malware-classifier';
    }
    
    if (title.includes('café') || 
        title.includes('cafe') ||
        title.includes('restaurant') ||
        id.includes('cafe-fausse')) {
      return 'cafe-fausse';
    }
    
    return 'public';
  },

  getValidGitHubUrl: (project: Project): string => {
    const type = ProjectUtils.getProjectType(project);
    
    if (type === 'where-in-the-law') {
      return "https://github.com/life2allsofts/where_in_the_law";
    }
    
    // No GitHub override for malware-classifier or cafe-fausse - they use private repo badge
    
    if (project.githubUrl && 
        typeof project.githubUrl === 'string' && 
        project.githubUrl.trim() !== '' && 
        project.githubUrl !== '#' &&
        project.githubUrl.startsWith('http')) {
      return project.githubUrl;
    }
    
    return '';
  },

  getValidLiveUrl: (project: Project): string => {
    const type = ProjectUtils.getProjectType(project);
    
    if (type === 'malware-classifier') {
      return "https://tetteh-apotey-malware-classifier.hf.space/";
    }
    
    if (type === 'cafe-fausse') {
      return "https://tetteh-apotey-cafe-fausse.hf.space/";
    }
    
    if (project.liveUrl && 
        typeof project.liveUrl === 'string' && 
        project.liveUrl.trim() !== '' && 
        project.liveUrl !== '#' &&
        project.liveUrl.startsWith('http')) {
      return project.liveUrl;
    }
    
    return '';
  },

  getStatusBadge: (project: Project): { color: string; text: string } => {
    const type = ProjectUtils.getProjectType(project);
    
    if (type === 'malware-classifier') {
      return { color: 'bg-purple-500', text: 'ML Research • Live' };
    }
    
    if (type === 'cafe-fausse') {
      return { color: 'bg-amber-600', text: 'Full-Stack • Live' };
    }
    
    // Handle undefined status - default to public
    if (project.status === 'private') {
      return { color: 'bg-orange-500', text: `Private • ${project.launchDate || '2025'}` };
    }
    
    return { color: 'bg-blue-500', text: 'Public • Live' };
  },

  getTechStackStyles: (tech: string, projectType: string): string => {
    if (tech === 'First-in-Ghana') {
      return 'bg-green-100 text-green-700 border border-green-300';
    }
    
    if (projectType === 'malware-classifier') {
      return 'bg-purple-100 text-purple-700';
    }
    
    if (projectType === 'cafe-fausse') {
      return 'bg-amber-100 text-amber-700';
    }
    
    if (projectType === 'private') {
      return 'bg-orange-100 text-orange-700';
    }
    
    return 'bg-blue-100 text-blue-700';
  }
};