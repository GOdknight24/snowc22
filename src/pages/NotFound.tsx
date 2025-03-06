
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Snowflake } from "lucide-react";
import SnowfallEffect from "@/components/SnowfallEffect";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center starfield">
      <SnowfallEffect />
      
      <div className="glass-card rounded-xl p-12 text-center max-w-lg mx-auto">
        <div className="flex justify-center mb-6">
          <Snowflake className="h-16 w-16 text-snow-400 animate-pulse-subtle" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-8">Oops! Page not found</p>
        
        <Link to="/">
          <Button 
            className="bg-snow-500 hover:bg-snow-600 text-white rounded-full px-8 shadow-frost transition-all duration-300 transform hover:scale-105"
          >
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
