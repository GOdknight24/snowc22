
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Snowflake, ExternalLink, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Snowflake className="h-6 w-6 text-snow-400 transition-transform group-hover:scale-110 duration-300" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-snow-200">
              SnowC2
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" active={location.pathname === "/"}>Home</NavLink>
            <NavLink to="/methods" active={location.pathname === "/methods"}>Methods</NavLink>
            <NavLink to="/pricing" active={location.pathname === "/pricing"}>Pricing</NavLink>
            <NavLink to="/proof" active={location.pathname === "/proof"}>Power Proof</NavLink>
          </nav>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#0088cc] hover:text-[#0088cc]/90 hover:bg-[#0088cc]/10 rounded-full"
              onClick={() => window.open('https://t.me/snowc2', '_blank')}
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="default" 
              size="sm" 
              className="bg-primary/90 hover:bg-primary flex items-center gap-1.5 rounded-full transition-all duration-300 hover:shadow-frost px-4"
              onClick={() => window.open('https://discord.gg/Re3qX65NRH', '_blank')}
            >
              <span>Join Discord</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ to, active, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={`relative px-3 py-2 rounded-full transition-all duration-300 
        ${active 
          ? 'text-white font-medium' 
          : 'text-gray-400 hover:text-white'
        }
      `}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse-subtle" />
      )}
    </Link>
  );
};

export default Navbar;
