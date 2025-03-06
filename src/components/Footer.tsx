
import React from 'react';
import { Link } from 'react-router-dom';
import { Snowflake, ShieldCheck, Zap, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black/50 backdrop-blur-md border-t border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <Snowflake className="h-6 w-6 text-snow-400 transition-transform group-hover:scale-110 duration-300" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-snow-200">
                SnowC2
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Advanced network security solutions with cutting-edge technology and unmatched performance.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Home</Link></li>
              <li><Link to="/methods" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Methods</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Pricing</Link></li>
              <li><Link to="/proof" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Power Proof</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-snow-400" />
                <span className="text-gray-400 text-sm">Robust Protection</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-snow-400" />
                <span className="text-gray-400 text-sm">Fast Performance</span>
              </li>
              <li className="flex items-center gap-2">
                <Github className="h-4 w-4 text-snow-400" />
                <span className="text-gray-400 text-sm">Reliable Infrastructure</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Snow Security. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            For security testing purposes only. Unauthorized use is prohibited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
