import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import { mockProfile } from '../data/mockData';
import { useLocalStorage } from '../storage/useLocalStorage';

export default function ProfilePage() {
  const [profile, setProfile] = useLocalStorage('profile', mockProfile);
  const navigate = useNavigate();

  const handleRatingChange = (rating: number) => {
    setProfile({ ...profile, rating });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
      >
        Freelancer Profile
      </motion.h1>

      <div className="max-w-3xl mx-auto">
        <ProfileCard profile={profile} onRatingChange={handleRatingChange} />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => navigate('/projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
          >
            View Available Projects
          </button>
        </motion.div>
      </div>
    </div>
  );
}