// utils/firestoreUtils.ts - TEMPORARY VERSION
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  techStack: string[];
  isPublished: boolean;
  dateCreated: any;
}

export async function getPublishedProjects(): Promise<Project[]> {
  // TEMPORARY: Simple query without sorting
  const q = query(
    collection(db, 'projects'),
    where('isPublished', '==', true)
  );
  
  const querySnapshot = await getDocs(q);
  const projects: Project[] = [];
  
  querySnapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() } as Project);
  });
  
  return projects;
}