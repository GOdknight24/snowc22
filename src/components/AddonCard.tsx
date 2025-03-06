
import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AddonCardProps {
  title: string;
  description: string;
  price: string;
  onClick?: () => void;
}

const AddonCard: React.FC<AddonCardProps> = ({ title, description, price, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl p-5 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="text-lg font-bold text-snow-400">{price}</div>
      </div>
      
      <p className="text-sm text-gray-400 mb-4 flex-grow">{description}</p>
      
      <Button 
        variant="ghost" 
        className="mt-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10"
        onClick={onClick}
      >
        <PlusCircle className="h-4 w-4" />
        <span>Add to Order</span>
      </Button>
    </motion.div>
  );
};

export default AddonCard;
