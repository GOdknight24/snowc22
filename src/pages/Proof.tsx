
import React from 'react';
import { motion } from 'framer-motion';
import SnowfallEffect from '@/components/SnowfallEffect';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';

const Proof = () => {
  const performanceData = [
    { name: 'Kodachi Botnet', performance: 250, color: '#64748b' },
    { name: 'TracerC2', performance: 310, color: '#94a3b8' },
    { name: 'LoneC2', performance: 390, color: '#cbd5e1' },
    { name: 'Snow C2', performance: 800, color: '#38bdf8' },
  ];
  
  const reliabilityData = [
    { name: 'Day 1', competitor: 95, snow: 99 },
    { name: 'Day 2', competitor: 93, snow: 99.5 },
    { name: 'Day 3', competitor: 88, snow: 99.8 },
    { name: 'Day 4', competitor: 90, snow: 99.9 },
    { name: 'Day 5', competitor: 85, snow: 99.9 },
    { name: 'Day 6', competitor: 92, snow: 99.7 },
    { name: 'Day 7', competitor: 89, snow: 99.9 },
  ];
  
  const loadTestData = [
    { time: '0s', competitors: 10, snow: 20 },
    { time: '10s', competitors: 30, snow: 80 },
    { time: '20s', competitors: 45, snow: 150 },
    { time: '30s', competitors: 60, snow: 320 },
    { time: '40s', competitors: 75, snow: 500 },
    { time: '50s', competitors: 85, snow: 720 },
    { time: '60s', competitors: 90, snow: 820 },
  ];
  
  const testimonials = [
    {
      id: 1,
      content: "Snow C2's performance exceeded all expectations. The throughput and reliability are unmatched in the industry.",
      author: "Security Expert, Fortune 500 Company"
    },
    {
      id: 2,
      content: "We've tested multiple solutions and Snow consistently delivered the most impressive results. Their methods are incredibly effective.",
      author: "Chief Security Officer, Tech Firm"
    },
    {
      id: 3,
      content: "The metrics don't lie - Snow C2 outperforms the competition by a significant margin. Worth every penny.",
      author: "Network Engineer, Cybersecurity Company"
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Power Proof</h1>
          <p className="text-gray-400 text-lg mb-0 max-w-2xl mx-auto">
            Real-world performance metrics that demonstrate Snow C2's superior capabilities compared to competitors.
          </p>
        </motion.div>
      </section>
      
      {/* Benchmark Images Section */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Attack Benchmarks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">TLS vs. ArguS C2</h3>
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://media.discordapp.net/attachments/1345885876655358152/1347218944385089597/image.png?ex=67cb06ea&is=67c9b56a&hm=e9f111900241b3390b7e8128b80ebfa72493eed51fcb4575ccec9e16afe982fe&=&format=webp&quality=lossless" 
                  alt="TLS Attack Benchmark" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 text-sm">1x TLS attack benchmark against ArguS C2 showing Snow C2's superior performance.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">HTTP vs. BaddiesHub</h3>
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://media.discordapp.net/attachments/1345885876655358152/1347218944641073182/image.png?ex=67cb06ea&is=67c9b56a&hm=23814abe987def04c5f04baddb1599574a7a5194f2b7dcb55289cf635b84b933&=&format=webp&quality=lossless" 
                  alt="HTTP Attack Benchmark" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 text-sm">1x HTTP attack benchmark against baddieshub.com demonstrating Snow C2's effectiveness.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">HTTPS vs. AlsoDoxBin</h3>
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://media.discordapp.net/attachments/1345885876655358152/1347218945253310514/image.png?ex=67cb06ea&is=67c9b56a&hm=f6e4aa73b1636f208726e664a4e27de43d301ddab07099d62d3890bd0ad33a9b&=&format=webp&quality=lossless" 
                  alt="HTTPS Attack Benchmark" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 text-sm">1x HTTPS attack benchmark against alsodoxbin.net showing Snow C2's attack capability.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Performance Comparison */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-xl p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-6">Performance Comparison</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={performanceData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a3649" />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                  <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a2333', border: '1px solid #38bdf8', borderRadius: '0.5rem' }} 
                    labelStyle={{ color: 'white' }}
                    itemStyle={{ color: '#cbd5e1' }}
                  />
                  <Bar dataKey="performance" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-400 text-sm">
                Packets per second throughput comparison against leading competitors
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reliability Chart */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Uptime Reliability</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={reliabilityData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a3649" />
                    <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} domain={[80, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a2333', border: '1px solid #38bdf8', borderRadius: '0.5rem' }} 
                      labelStyle={{ color: 'white' }}
                      itemStyle={{ color: '#cbd5e1' }}
                    />
                    <Line type="monotone" dataKey="competitor" stroke="#94a3b8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Industry Average" />
                    <Line type="monotone" dataKey="snow" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Snow C2" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">
                  Percentage uptime over a 7-day period
                </p>
              </div>
            </div>
            
            {/* Load Test Chart */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Load Test Results</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={loadTestData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a3649" />
                    <XAxis dataKey="time" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a2333', border: '1px solid #38bdf8', borderRadius: '0.5rem' }} 
                      labelStyle={{ color: 'white' }}
                      itemStyle={{ color: '#cbd5e1' }}
                    />
                    <Area type="monotone" dataKey="competitors" stackId="1" stroke="#64748b" fill="#64748b" fillOpacity={0.6} name="Competitors" />
                    <Area type="monotone" dataKey="snow" stackId="1" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.6} name="Snow C2" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">
                  Request handling capacity over time (thousands)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="mb-4 text-snow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.content}</p>
                <p className="text-sm text-gray-500">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Experience the Snow Difference</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              The numbers don't lie. Snow C2 consistently outperforms the competition in all key metrics. Try it for yourself and see the difference.
            </p>
            
            <Link to="/pricing">
              <Button 
                size="lg"
                className="bg-snow-500 hover:bg-snow-600 text-white rounded-full px-8 shadow-frost transition-all duration-300 transform hover:scale-105"
              >
                View Pricing Plans
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Proof;
