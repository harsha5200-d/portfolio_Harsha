import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const DynamicBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden transition-colors duration-700">
      {theme === 'dark' ? (
        /* Night / Space Theme */
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Twinkling Stars (with a slow drifting container) */}
          <motion.div 
            className="absolute inset-[-10%]"
            animate={{
              x: ['-2%', '2%', '-2%'],
              y: ['-2%', '2%', '-2%'],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(50)].map((_, i) => {
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
          </motion.div>

          {/* Shooting Stars / Meteors */}
          {[...Array(3)].map((_, i) => {
            const startTop = Math.random() * 30 + 5;
            const startLeft = Math.random() * 40 + 50;
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
                  transform: 'rotate(-35deg)',
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
                  repeatDelay: Math.random() * 12 + 10,
                  delay: delay,
                  ease: "easeOut"
                }}
              />
            );
          })}
          
          {/* Nebulae glows */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-purple-650/10 rounded-full blur-[120px]"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
              x: ['-3%', '3%', '-3%']
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px]"
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.05, 1],
              y: ['-3%', '3%', '-3%']
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </motion.div>
      ) : (
        /* Sunny Cloud Theme */
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-sky-50 to-blue-50/50">
          {/* Ambient Sunny Sky Glow */}
          <div className="absolute top-[-5vw] right-[-5vw] w-[50vw] h-[50vw] bg-amber-250/15 rounded-full blur-[90px]" />
          
          {/* Floating Clouds */}
          {[...Array(8)].map((_, i) => {
            const width = Math.random() * 180 + 170;
            const height = width * 0.45;
            const top = Math.random() * 75 + 5;
            const duration = Math.random() * 40 + 50; // 50s to 90s for a full drift
            const delay = -(Math.random() * duration); // Start mid-animation
            
            return (
              <motion.div
                key={`cloud-${i}`}
                className="absolute bg-white/65 rounded-full blur-[25px]"
                style={{
                  width: width,
                  height: height,
                  top: `${top}%`,
                  left: '-350px',
                }}
                animate={{
                  x: ['-25vw', '125vw'],
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
