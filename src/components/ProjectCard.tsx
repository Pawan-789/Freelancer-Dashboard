import { motion } from 'framer-motion';
import { Project, Bid } from '../types';
import { Clock, DollarSign, CheckCircle, XCircle, Clock3 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onBid: (bid: Omit<Bid, 'status'>) => void;
  existingBid?: Bid;
}

export default function ProjectCard({ project, onBid, existingBid }: ProjectCardProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    const bid = {
      projectId: project.id,
      amount: Number(formData.get('amount')),
      timeline: Number(formData.get('timeline')),
      proposal: formData.get('proposal') as string,
    };
  
    onBid(bid);
  
    const storedBids = JSON.parse(localStorage.getItem('bids') || '{}');
    delete storedBids[project.id];
    localStorage.setItem('bids', JSON.stringify(storedBids));
  
    form.reset();
    setTimeout(() => {
      const input = form.querySelector('input');
      if (input) (input as HTMLInputElement).blur();
    }, 0);
  };
  
  
  const getBidStatusIcon = () => {
    if (!existingBid) return null;
    switch (existingBid.status) {
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <Clock3 className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
        {getBidStatusIcon()}
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

      <div className="flex gap-4 mb-4">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <DollarSign className="w-5 h-5 mr-1" />
          <span>₹{project.budget.toLocaleString()}</span>
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Clock className="w-5 h-5 mr-1" />
          <span>{project.timeline} days</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {!existingBid && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Bid Amount (₹)
            </label>
            <input
              type="number"
              name="amount"
              required
              min={1}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Timeline (days)
            </label>
            <input
              type="number"
              name="timeline"
              required
              min={1}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Proposal
            </label>
            <textarea
              name="proposal"
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Submit Bid
          </button>
        </form>
      )}

      {existingBid && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Your Bid</h4>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p>Amount: ₹{existingBid.amount.toLocaleString()}</p>
            <p>Timeline: {existingBid.timeline} days</p>
            <p>Status: {existingBid.status.charAt(0).toUpperCase() + existingBid.status.slice(1)}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}