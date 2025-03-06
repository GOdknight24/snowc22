
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SnowfallEffect from '@/components/SnowfallEffect';
import PricingCard from '@/components/PricingCard';
import AddonCard from '@/components/AddonCard';
import PurchaseModal from '@/components/PurchaseModal';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>();
  
  const handlePurchase = (title: string, price: string) => {
    setSelectedPlan(title);
    setSelectedPrice(price);
    setIsPurchaseModalOpen(true);
  };
  
  const plans = [
    {
      title: "Basic",
      monthlyPrice: "$9.99",
      lifetimePrice: "$34.99",
      features: [
        { text: "60 Seconds Attack Time" },
        { text: "60 Seconds Cooldown Time" },
        { text: "1 Concurrent" },
        { text: "Normal Methods" }
      ],
      highlight: false
    },
    {
      title: "Starter",
      monthlyPrice: "$12.99",
      lifetimePrice: "$44.99",
      features: [
        { text: "80 Seconds Attack Time" },
        { text: "60 Seconds Cooldown Time" },
        { text: "1 Concurrent" },
        { text: "Normal Methods" }
      ],
      highlight: false
    },
    {
      title: "VIP",
      monthlyPrice: "$22.99",
      lifetimePrice: "$54.99",
      features: [
        { text: "120 Seconds Attack Time" },
        { text: "60 Seconds Cooldown Time" },
        { text: "2 Concurrents" },
        { text: "Access To VIP Methods" }
      ],
      highlight: true
    },
    {
      title: "Elite",
      monthlyPrice: "$34.99",
      lifetimePrice: "$64.99",
      features: [
        { text: "120 Seconds Attack Time" },
        { text: "60 Seconds Cooldown Time" },
        { text: "2 Concurrents" },
        { text: "Access To VIP Methods" }
      ],
      highlight: false
    },
    {
      title: "API Access",
      monthlyPrice: "$45.00",
      lifetimePrice: "$120.00",
      features: [
        { text: "60 Seconds Attack Time" },
        { text: "1 Concurrent" },
        { text: "Access To All Methods" },
        { text: "API Integration" }
      ],
      highlight: false
    }
  ];
  
  const addons = [
    {
      title: "No Cooldown",
      description: "Remove cooldown restriction from any plan",
      price: "$25"
    },
    {
      title: "+25s Attack Time",
      description: "Extend your attack duration by 25 seconds",
      price: "$5"
    },
    {
      title: "+1 Concurrent",
      description: "Add one extra concurrent attack",
      price: "$10"
    },
    {
      title: "VIP Methods",
      description: "Gain access to exclusive VIP attack methods",
      price: "$15"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col starfield">
      <SnowfallEffect />
      
      {/* Header Section */}
      <section className="pt-32 pb-10 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Snow C2 Pricing</h1>
          <p className="text-gray-400 text-lg mb-0 max-w-2xl mx-auto">
            Choose the plan that fits your security needs. All plans include our core features with different attack capabilities.
          </p>
        </motion.div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.slice(0, 3).map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                monthlyPrice={plan.monthlyPrice}
                lifetimePrice={plan.lifetimePrice}
                features={plan.features}
                highlight={plan.highlight}
                index={index}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {plans.slice(3).map((plan, index) => (
              <PricingCard
                key={index + 3}
                title={plan.title}
                monthlyPrice={plan.monthlyPrice}
                lifetimePrice={plan.lifetimePrice}
                features={plan.features}
                highlight={plan.highlight}
                index={index + 3}
                onPurchase={handlePurchase}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Addons Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Snow Addons</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, index) => (
                <AddonCard 
                  key={index}
                  title={addon.title}
                  description={addon.description}
                  price={addon.price}
                  onClick={() => handlePurchase(`Addon: ${addon.title}`, addon.price)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Select your preferred plan and start using Snow C2 today. All purchases include Discord support and regular updates.
            </p>
            
            <Button 
              size="lg" 
              onClick={() => setIsPurchaseModalOpen(true)}
              className="bg-snow-500 hover:bg-snow-600 text-white rounded-full px-8 shadow-frost transition-all duration-300 transform hover:scale-105"
            >
              Purchase Now
            </Button>
          </motion.div>
        </div>
      </section>
      
      <PurchaseModal 
        open={isPurchaseModalOpen} 
        onOpenChange={setIsPurchaseModalOpen} 
        selectedPlan={selectedPlan}
        selectedPrice={selectedPrice}
      />
    </div>
  );
};

export default Pricing;
