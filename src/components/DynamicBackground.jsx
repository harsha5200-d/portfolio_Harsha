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
          {[...Array(45)].map((_, i) => {
            const size = Math.random() * 2 + 0.8;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 3 + 2;
            
            return (
              <motion.div
                key={`star-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: size,
                  height: size,
                  top: `${top}%`,
                  left: `${left}%`,
                  boxShadow: size > 1.8 ? '0 0 5px rgba(255, 255, 255, 0.8)' : 'none',
                }}
                animate={{
                  opacity: [0.15, 0.95, 0.15],
                  scale: [1, 1.2, 1],
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

          {/* Shooting Stars / Meteors */}
          {[...Array(3)].map((_, i) => {
            const startTop = Math.random() * 30 + 5;
            const startLeft = Math.random() * 40 + 50; // start from top-right region
            const delay = Math.random() * 12 + i * 4;
            const duration = Math.random() * 1.5 + 0.8;
            
            return (
              <motion.div
                key={`shooting-${i}`}
                className="absolute bg-gradient-to-l from-transparent via-white/80 to-white rounded-full"
                style={{
                  height: '1.5px',
                  width: '70px',
                  top: `${startTop}%`,
                  left: `${startLeft}%`,
                  transform: 'rotate(-35deg)', // diagonal downward shoot
                  transformOrigin: 'right center',
                  opacity: 0,
                  boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)'
                }}
                animate={{
                  x: [0, -400],
                  y: [0, 280],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 10 + 8,
                  delay: delay,
                  ease: "easeOut"
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
          {/* Ambient Sunny Glow in Top Right */}
          <div className="absolute top-[-8vw] right-[-8vw] w-[45vw] h-[45vw] bg-amber-250/20 rounded-full blur-[80px]" />
          
          {/* Pulsing Glowing Sun */}
          <motion.div
            className="absolute top-[8%] right-[12%] w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500"
            style={{
              boxShadow: '0 0 50px rgba(251, 191, 36, 0.4), 0 0 100px rgba(245, 158, 11, 0.2)'
            }}
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                '0 0 50px rgba(251, 191, 36, 0.4), 0 0 100px rgba(245, 158, 11, 0.2)',
                '0 0 70px rgba(251, 191, 36, 0.65), 0 0 130px rgba(245, 158, 11, 0.35)',
                '0 0 50px rgba(251, 191, 36, 0.4), 0 0 100px rgba(245, 158, 11, 0.2)'
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Sunbeams / Sunrays */}
          <motion.div
            className="absolute top-[8%] right-[12%] w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-yellow-250/20"
            animate={{
              scale: [1, 1.4, 1.8],
              opacity: [0.4, 0.15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Floating Clouds */}
          {[...Array(6)].map((_, i) => {
            const width = Math.random() * 200 + 150;
            const height = width * 0.45;
            const top = Math.random() * 75 + 5;
            const duration = Math.random() * 45 + 55; // 55s to 100s for a full drift
            const delay = -(Math.random() * duration); // Start mid-animation
            
            return (
              <motion.div
                key={`cloud-${i}`}
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
