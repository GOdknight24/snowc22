
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  monthlyPrice: string;
  lifetimePrice: string;
  features: PricingFeature[];
  highlight?: boolean;
  index: number;
  onPurchase: (title: string, price: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  monthlyPrice,
  lifetimePrice,
  features,
  highlight = false,
  index,
  onPurchase
}) => {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'lifetime'>('monthly');
  
  const handlePurchase = () => {
    const currentPrice = billingCycle === 'monthly' ? monthlyPrice : lifetimePrice;
    onPurchase(title, currentPrice);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`glass-card rounded-xl px-6 py-8 flex flex-col h-full
        ${highlight ? 'border-snow-400/30 shadow-frost' : 'border-white/5'}
      `}
    >
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-snow-400 text-[#0c1118] text-xs font-semibold px-3 py-1 rounded-full">
          Recommended
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-2">
        <Snowflake className={`h-5 w-5 ${highlight ? 'text-snow-400' : 'text-white/70'}`} />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="mt-2 mb-6">
        <div className="inline-flex bg-white/5 rounded-full p-1 mb-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
              billingCycle === 'monthly'
                ? 'bg-snow-500/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('lifetime')}
            className={`text-xs px-3 py-1.5 rounded-full transition-all ${
              billingCycle === 'lifetime'
                ? 'bg-snow-500/20 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Lifetime
          </button>
        </div>
        
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-white">
            {billingCycle === 'monthly' ? monthlyPrice : lifetimePrice}
          </span>
          {billingCycle === 'monthly' && (
            <span className="text-gray-400 ml-1">/month</span>
          )}
        </div>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 ${highlight ? 'text-snow-400' : 'text-white/70'}`} />
            <span className="text-sm text-gray-300">{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Button 
          variant="default" 
          size="lg" 
          className={`w-full ${
            highlight 
              ? 'bg-snow-500 hover:bg-snow-600 text-white shadow-frost' 
              : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
          onClick={handlePurchase}
        >
          Purchase Now
        </Button>
      </div>
    </motion.div>
  );
};

export default PricingCard;
