import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { mockProjects } from '../data/mockData';
import { useLocalStorage } from '../storage/useLocalStorage';
import type { Bid } from '../types';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
  const [bids, setBids] = useLocalStorage<Bid[]>('bids', []);
  const navigate = useNavigate();

  const handleBid = (newBid: Omit<Bid, 'status'>) => {
    const bid: Bid = { ...newBid, status: 'pending' };
    setBids(prevBids => [...prevBids.filter(b => b.projectId !== newBid.projectId), bid]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Profile
        </button>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" mr-10 text-center text-3xl font-bold text-gray-900 dark:text-white"
        >
          Available Projects
        </motion.h1>
      </div>
      

      <div className="max-w-3xl mx-auto space-y-6">
        {mockProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onBid={handleBid}
            existingBid={bids.find((bid) => bid.projectId === project.id)}
          />
        ))}
      </div>
    </div>
  );
}