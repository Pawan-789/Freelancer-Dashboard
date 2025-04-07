import { Github, Linkedin, Globe, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { FreelancerProfile } from '../data/mockData';


interface ProfileCardProps {
  profile: FreelancerProfile;
  onRatingChange: (rating: number) => void;
}

function formatCustomDate(dateString: string) {
  const [month, day, year] = dateString.split('-');
  return new Date(`${month}/${day}/${year}`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function ProfileCard({ profile, onRatingChange }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
    >
      {/* Header with name and rating */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{profile.name}</h2>
        
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button 
              key={star}
              onClick={() => onRatingChange(star)}
              aria-label={`Rate ${star} star`}
            >
              <Star
                className={`w-5 h-5 cursor-pointer transition-colors ${
                  star <= profile.rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
              />
            </button>
          ))}
          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
            ({profile.rating.toFixed(1)})
          </span>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Experience section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Experience</h3>
        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-medium">{profile.experience.years} years</span> • {profile.experience.description}
        </p>
      </div>

      {/* Portfolio links */}
      <div className="flex gap-4 mb-8">
        <motion.a
          whileHover={{ y: -2 }}
          href={profile.portfolio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="GitHub profile"
        >
          <Github className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          href={profile.portfolio.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="LinkedIn profile"
        >
          <Linkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          whileHover={{ y: -2 }}
          href={profile.portfolio.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          aria-label="Personal website"
        >
          <Globe className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Completed projects */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Completed Projects
        </h3>
        <div className="space-y-4">
          {profile.completedProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-r transition-colors"
            >
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">{project.name}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{project.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                Completed: {formatCustomDate(project.completionDate)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}