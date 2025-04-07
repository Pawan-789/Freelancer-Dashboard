import { Project, FreelancerProfile } from '../types';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "E-commerce Website Development",
    budget: 75000,
    timeline: 30,
    skills: ["React", "Node.js", "TailwindCSS", "MongoDB"],
    description: "Build a modern e-commerce platform with user authentication, product management, and payment integration."
  },
  {
    id: 2,
    name: "Mobile App UI Design",
    budget: 45000,
    timeline: 15,
    skills: ["UI/UX", "Figma", "React Native"],
    description: "Design a user-friendly mobile app interface for a fitness tracking application."
  },
  {
    id: 3,
    name: "Blockchain Smart Contract",
    budget: 120000,
    timeline: 45,
    skills: ["Solidity", "Ethereum", "Web3.js"],
    description: "Develop and deploy smart contracts for a decentralized finance (DeFi) platform."
  }
];

export const mockProfile: FreelancerProfile = {
  name: "Pawan Kumar",
  skills: ["React", "TypeScript", "Node.js", "TailwindCSS", "MongoDB", "AWS"],
  experience: {
    years: 5,
    description: "Full-stack developer specializing in React and Node.js ecosystems. Passionate about building scalable web applications and mentoring junior developers."
  },
  portfolio: {
    github: "https://github.com/Pawan-789",
    linkedin: "https://linkedin.com/in/pawan-kumar-686993296/",
    website: "https://my-portfolio-s5mn.vercel.app/"
  },
  rating: 4.8,
  completedProjects: [
    {
      name: "Healthcare Management System",
      description: "Developed a comprehensive healthcare management system for a leading hospital chain",
      completionDate: "15-01-2024"
    },
    {
      name: "Real Estate Platform",
      description: "Built a modern real estate platform with virtual tour capabilities",
      completionDate: "20-11-2023"
    },
    {
      name: "NewsCraft:News & Blogs",
      description: "Built a modern platform for updated news and blogs writing",
      completionDate: "05-04-2025"
    },
  ]
};