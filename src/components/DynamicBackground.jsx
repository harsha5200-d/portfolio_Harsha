import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const DynamicBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-colors duration-700">
      {theme === 'dark' ? (
        /* Night / Space Theme */
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">
          {/* Twinkling Stars */}
          {[...Array(40)].map((_, i) => {
            const size = Math.random() * 2 + 0.8;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 2;
            
            return (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: size,
                  height: size,
                  top: `${top}%`,
                  left: `${left}%`,
                  boxShadow: size > 2 ? '0 0 4px rgba(255, 255, 255, 0.8)' : 'none',
                }}
                animate={{
                  opacity: [0.1, 0.9, 0.1],
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut"
                }}
              />
            );
          })}
          
          {/* Nebulae glows */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] bg-purple-650/10 rounded-full blur-[110px]"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] bg-blue-600/10 rounded-full blur-[110px]"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>
      ) : (
        /* Sunny Cloud Theme */
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50/50">
          {/* Warm Sunny Glow in Top Right */}
          <div className="absolute top-[-8vw] right-[-8vw] w-[35vw] h-[35vw] bg-amber-250/20 rounded-full blur-[70px]" />
          
          {/* Floating Clouds */}
          {[...Array(6)].map((_, i) => {
            const width = Math.random() * 200 + 150;
            const height = width * 0.45;
            const top = Math.random() * 75 + 5;
            const duration = Math.random() * 45 + 55; // 55s to 100s for a full drift
            const delay = -(Math.random() * duration); // Start mid-animation
            
            return (
              <motion.div
                key={i}
                className="absolute bg-white/60 rounded-full blur-[25px]"
                style={{
                  width: width,
                  height: height,
                  top: `${top}%`,
                  left: '-350px',
                }}
                animate={{
                  x: ['0vw', '135vw'],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "linear"
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DynamicBackground;
