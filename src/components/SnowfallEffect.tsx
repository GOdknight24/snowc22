
import React, { useEffect, useRef } from 'react';

interface Snowflake {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  element: HTMLDivElement;
}

const SnowfallEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number | null>(null);

  const createSnowflake = () => {
    if (!containerRef.current) return null;
    
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '❄';
    snowflake.className = 'snowflake';
    snowflake.style.position = 'fixed';
    snowflake.style.color = 'white';
    snowflake.style.pointerEvents = 'none';
    snowflake.style.zIndex = '1';
    
    const size = Math.random() * 1.5 + 0.5;
    snowflake.style.fontSize = `${size}rem`;
    
    const opacity = Math.random() * 0.6 + 0.2;
    snowflake.style.opacity = opacity.toString();
    
    const animationDuration = Math.random() * 30 + 15;
    snowflake.style.animation = `snowfall ${animationDuration}s linear infinite`;
    
    const left = Math.random() * window.innerWidth;
    snowflake.style.left = `${left}px`;
    snowflake.style.top = '-20px';
    
    // Add a random rotation to create variety
    const initialRotation = Math.random() * 360;
    snowflake.style.transform = `rotate(${initialRotation}deg)`;
    
    containerRef.current.appendChild(snowflake);
    
    return {
      x: left,
      y: -20,
      size,
      speed: Math.random() * 1 + 0.5,
      opacity,
      element: snowflake
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const SNOWFLAKE_COUNT = 15;
    
    for (let i = 0; i < SNOWFLAKE_COUNT; i++) {
      setTimeout(() => {
        const snowflake = createSnowflake();
        if (snowflake) {
          snowflakesRef.current.push(snowflake);
        }
      }, Math.random() * 5000);
    }
    
    const addSnowflakesPeriodically = setInterval(() => {
      if (snowflakesRef.current.length < 25) {
        const snowflake = createSnowflake();
        if (snowflake) {
          snowflakesRef.current.push(snowflake);
        }
      }
    }, 3000);
    
    return () => {
      clearInterval(addSnowflakesPeriodically);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      snowflakesRef.current = [];
    };
  }, []);

  return <div ref={containerRef} className="snowfall-container fixed inset-0 pointer-events-none z-0" />;
};

export default SnowfallEffect;
