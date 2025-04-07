export interface Project {
  id: number;
  name: string;
  budget: number;
  timeline: number;
  skills: string[];
  description: string;
}

export interface Bid {
  projectId: number;
  amount: number;
  timeline: number;
  proposal: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface FreelancerProfile {
  name: string;
  skills: string[];
  experience: {
    years: number;
    description: string;
  };
  portfolio: {
    github: string;
    linkedin: string;
    website: string;
  };
  rating: number;
  completedProjects: {
    name: string;
    description: string;
    completionDate: string;
  }[];
}