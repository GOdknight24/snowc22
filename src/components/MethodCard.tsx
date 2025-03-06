
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; type: 'network' | 'layer' | 'amplification' | 'connection' | 'application' | 'web' | 'encryption' | 'volume' }[];
  delay?: number;
}

const MethodCard: React.FC<MethodCardProps> = ({ icon, title, description, tags, delay = 0 }) => {
  const tagColors = {
    network: 'bg-blue-500/20 text-blue-300',
    layer: 'bg-purple-500/20 text-purple-300',
    amplification: 'bg-red-500/20 text-red-300',
    connection: 'bg-green-500/20 text-green-300',
    application: 'bg-yellow-500/20 text-yellow-300',
    web: 'bg-orange-500/20 text-orange-300',
    encryption: 'bg-indigo-500/20 text-indigo-300',
    volume: 'bg-pink-500/20 text-pink-300'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl p-5 h-full transition-all duration-300 hover:shadow-frost"
    >
      <div className="bg-white/5 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="outline" className={`text-xs py-0.5 ${tagColors[tag.type]}`}>
            {tag.text}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
};

export default MethodCard;
