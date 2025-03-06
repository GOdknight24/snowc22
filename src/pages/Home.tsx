
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Snowflake, ArrowRight, Shield, Zap, Clock, Server } from 'lucide-react';
import SnowfallEffect from '@/components/SnowfallEffect';
import { motion } from 'framer-motion';
import PurchaseModal from '@/components/PurchaseModal';

const Home = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="h-5 w-5 text-snow-400" />,
      title: 'Advanced Protection',
      description: 'Cutting-edge security methods to protect your infrastructure.'
    },
    {
      icon: <Zap className="h-5 w-5 text-snow-400" />,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with minimal resource usage.'
    },
    {
      icon: <Clock className="h-5 w-5 text-snow-400" />,
      title: 'Rapid Response',
      description: 'Fast activation times and immediate results when you need them.'
    },
    {
      icon: <Server className="h-5 w-5 text-snow-400" />,
      title: 'Robust Infrastructure',
      description: 'Built on a reliable network designed for maximum uptime.'
    }
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col starfield">
        <SnowfallEffect />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 flex-grow flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-pulse-subtle">
              <Snowflake className="h-4 w-4 text-snow-400" />
              <span className="text-sm font-medium text-gray-300">Next-Gen Network Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Snow Security <span className="text-snow-400">C2</span> Platform
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Advanced network protection with cutting-edge technology. Secure your infrastructure with our powerful and intuitive platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsPurchaseModalOpen(true)}
                className="bg-snow-500 hover:bg-snow-600 text-white rounded-full px-8 shadow-frost transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
              
              <Link to="/methods">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-8 border-white/10 text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  Explore Methods
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(12,17,24,0.8)] to-transparent"></div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-[#0c1118] relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Snow Security</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our platform offers the most advanced security solutions with exceptional reliability and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-frost"
                >
                  <div className="bg-white/5 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0c1118] to-[#131d29]">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-snow-500/5 filter blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-card rounded-2xl p-8 md:p-12 backdrop-blur-lg border border-white/10 overflow-hidden relative">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Secure Your Network?</h2>
                <p className="text-gray-300 mb-8">
                  Get started with Snow Security today and experience the difference. Choose from our flexible pricing plans to find the perfect fit for your needs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pricing">
                    <Button 
                      size="lg"
                      className="bg-snow-500 hover:bg-snow-600 text-white rounded-full px-8 shadow-frost transition-all duration-300 transform hover:scale-105"
                    >
                      View Pricing
                    </Button>
                  </Link>
                  
                  <Link to="/methods">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="rounded-full px-8 border-white/10 text-white bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <PurchaseModal open={isPurchaseModalOpen} onOpenChange={setIsPurchaseModalOpen} />
    </>
  );
};

export default Home;
