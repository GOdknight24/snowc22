
import React from 'react';
import { motion } from 'framer-motion';
import SnowfallEffect from '@/components/SnowfallEffect';
import MethodCard from '@/components/MethodCard';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const Methods = () => {
  const layer4Normal = [
    {
      icon: <div className="text-2xl">HOME</div>,
      title: "HOME",
      description: "DNS Flood Built for Home Connections",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "DNS", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">OVH</div>,
      title: "OVH",
      description: "TCP Flood for OVH Servers [SYN|SYN-ACK|ACK]",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "TCP", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">HIGH</div>,
      title: "HIGH",
      description: "High Flow UDP Flood, Great for Most Targets",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "UDP", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">GAME</div>,
      title: "GAME",
      description: "Multi-Use Game Flood",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Gaming", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">TCP</div>,
      title: "TCPBYPASS",
      description: "Proxied TCP Flood to Bypass Harder Connections",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Bypass", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">DNS</div>,
      title: "DNS",
      description: "Mixed Amplification Flood, Large Byte Sizes",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Amplification", type: "amplification" as const }
      ]
    },
    {
      icon: <div className="text-2xl">SOCK</div>,
      title: "SOCKET",
      description: "TCP Attack Blocking a Port Connection",
      tags: [
        { text: "Network", type: "network" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Port Block", type: "connection" as const }
      ]
    }
  ];

  const layer4VIP = [
    {
      icon: <div className="text-2xl">OVH</div>,
      title: "OVH-TCP",
      description: "Universal TCP Method for OVH Targets",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "TCP", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">UDP</div>,
      title: "UDP-VIP",
      description: "UDP Specifically Optimized, Higher GBPS / PPS",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "High Power", type: "volume" as const }
      ]
    },
    {
      icon: <div className="text-2xl">DISC</div>,
      title: "DISCORD",
      description: "Global Data Flood for Discord VoIP Connections",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "VoIP", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">HOLD</div>,
      title: "HIOLD",
      description: "ICMP Flood with a Max Time of 86400 Seconds",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Extended", type: "volume" as const }
      ]
    },
    {
      icon: <div className="text-2xl">FIVE</div>,
      title: "FIVEM",
      description: "UDP Data Flood for a FiveM Game Connection",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Gaming", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">SUB</div>,
      title: "SUBNET",
      description: "Domain Name System Amplification Flood (DNS)",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Amplification", type: "amplification" as const }
      ]
    },
    {
      icon: <div className="text-2xl">SSH</div>,
      title: "SSH",
      description: "Legit SSH Socket Flood Using Multiple SSH Clients",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Multi-Client", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">R6S</div>,
      title: "RAINBOW6",
      description: "SYN / ACK + HIGH PPS & HIGH LEN Optimized for Siege",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "Gaming", type: "connection" as const }
      ]
    }
  ];

  const layer7Normal = [
    {
      icon: <div className="text-2xl">TLS</div>,
      title: "TLS",
      description: "High Rate TLS Flood for Non-Protected Targets",
      tags: [
        { text: "Application", type: "application" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "TLS", type: "encryption" as const }
      ]
    },
    {
      icon: <div className="text-2xl">HTTP</div>,
      title: "HTTP",
      description: "Node.js HTTP/2 / 1.1 Mass User Agents Flood",
      tags: [
        { text: "Application", type: "application" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "Web", type: "web" as const }
      ]
    }
  ];

  const layer7VIP = [
    {
      icon: <div className="text-2xl">HTTPS</div>,
      title: "HTTPS",
      description: "Node.js HTTP/2 Universal BYPASS Flood",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "Bypass", type: "web" as const }
      ]
    },
    {
      icon: <div className="text-2xl">CF</div>,
      title: "CLOUDFLARE",
      description: "Node.js HTTP/2 Cookie-Based Cloudflare Bypass",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "Bypass", type: "web" as const }
      ]
    },
    {
      icon: <div className="text-2xl">BRWS</div>,
      title: "BROWSER",
      description: "Node.js HTTP/2 Chrome Browser Emulation Flood",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "Emulation", type: "web" as const }
      ]
    },
    {
      icon: <div className="text-2xl">BTLS</div>,
      title: "BOGUSTLS",
      description: "High RPS Flood Using Bogus TLS Headers (GET & POST)",
      tags: [
        { text: "VIP", type: "encryption" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "Headers", type: "web" as const }
      ]
    }
  ];

  const rawMethods = [
    {
      icon: <div className="text-2xl">UDP</div>,
      title: "UDP-RAW",
      description: "Raw High Flow UDP Flood, Great for Most Targets",
      tags: [
        { text: "Raw", type: "volume" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "UDP", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">TCP</div>,
      title: "TCP-RAW",
      description: "Raw TCP Flood for OVH Servers",
      tags: [
        { text: "Raw", type: "volume" as const },
        { text: "Layer 4", type: "layer" as const },
        { text: "TCP", type: "connection" as const }
      ]
    },
    {
      icon: <div className="text-2xl">TLS</div>,
      title: "TLS-RAW",
      description: "Raw TLS Flood for Non-Protected Targets",
      tags: [
        { text: "Raw", type: "volume" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "TLS", type: "encryption" as const }
      ]
    },
    {
      icon: <div className="text-2xl">BYP</div>,
      title: "BYPASS-RAW",
      description: "Raw Bypass Method",
      tags: [
        { text: "Raw", type: "volume" as const },
        { text: "Layer 7", type: "layer" as const },
        { text: "Bypass", type: "web" as const }
      ]
    }
  ];

  const codeExample = `
  // Example API integration
  const attack = {
    target: "192.168.1.1",
    port: 80,
    duration: 60,
    method: "TCP_FLOOD"
  };

  fetch("https://api.snowc2.com/launch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify(attack)
  })
  .then(response => response.json())
  .then(data => console.log(data.taskId));
  `;

  return (
    <div className="min-h-screen flex flex-col starfield">
      <SnowfallEffect />
      
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Attack Methods</h1>
          <p className="text-gray-400 text-lg mb-0 max-w-2xl mx-auto">
            Our platform supports a wide range of sophisticated attack methods, designed for maximum efficiency and impact.
          </p>
        </motion.div>
      </section>
      
      {/* Layer 4 Normal Methods */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-snow-400 pl-4"
          >
            Layer 4 Attack Vectors (Normal)
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {layer4Normal.map((method, index) => (
              <MethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                tags={method.tags}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Layer 4 VIP Methods */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-snow-400 pl-4"
          >
            Layer 4 Attack Vectors (VIP Network)
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {layer4VIP.map((method, index) => (
              <MethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                tags={method.tags}
                delay={index * 0.1 + 0.3}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Layer 7 Normal Methods */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-snow-400 pl-4"
          >
            Layer 7 Attack Vectors (Normal)
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layer7Normal.map((method, index) => (
              <MethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                tags={method.tags}
                delay={index * 0.1 + 0.5}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Layer 7 VIP Methods */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-snow-400 pl-4"
          >
            Layer 7 Attack Vectors (VIP Network)
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {layer7VIP.map((method, index) => (
              <MethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                tags={method.tags}
                delay={index * 0.1 + 0.7}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Raw Methods */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-snow-400 pl-4"
          >
            Raw Methods
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rawMethods.map((method, index) => (
              <MethodCard
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                tags={method.tags}
                delay={index * 0.1 + 0.9}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* API Integration Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-2xl p-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Custom Attack Methods</h2>
                <p className="text-gray-400 mb-6">
                  Need something specific for your use case? Our team can develop custom attack vectors tailored to your specific requirements.
                </p>
                <p className="text-gray-400 mb-8">
                  With our API integration, you can automate your security testing and integrate our powerful methods directly into your existing workflow.
                </p>
                <Button className="bg-snow-500 hover:bg-snow-600 text-white rounded-full shadow-frost flex items-center gap-2 transition-transform hover:scale-105">
                  <MessageSquare className="h-4 w-4" />
                  <span>Contact Support</span>
                </Button>
              </div>
              
              <div>
                <div className="bg-[#1a2333] rounded-lg backdrop-blur-md border border-white/10 p-4 overflow-hidden">
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-500">api-example.js</div>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto font-mono">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methods;
