import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLaptopCode, FaRobot, FaKeyboard } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const highlights = [
    {
      icon: <FaBrain className="text-blue-600 dark:text-blue-450" />,
      title: "Problem Solving",
      desc: "Strong analytical skills focused on writing clean, optimized algorithms."
    },
    {
      icon: <FaLaptopCode className="text-indigo-600 dark:text-indigo-400" />,
      title: "Full Stack Development",
      desc: "Hands-on experience building web systems using React, Node, and Express."
    },
    {
      icon: <FaRobot className="text-purple-600 dark:text-purple-400" />,
      title: "AI/ML Projects",
      desc: "Passionate about building smarter interfaces leveraging LLMs and Gemini API."
    },
    {
      icon: <FaKeyboard className="text-teal-600 dark:text-teal-400" />,
      title: "DSA Enthusiast",
      desc: "Active coder on LeetCode, CodeChef, and HackerRank solving complex problems."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:py-28 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Contents Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar Graphic Placeholder (Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer glowing rings */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Card Container */}
              <div className="absolute inset-0 rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 flex items-center justify-center p-4 shadow-xl overflow-hidden">
                <svg
                  className="w-full h-full text-slate-200 dark:text-slate-800"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Decorative circuit paths */}
                  <path d="M20 40H60V80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M180 160H140V120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="60" cy="80" r="3" fill="#3b82f6" />
                  <circle cx="140" cy="120" r="3" fill="#a855f7" />

                  {/* Avatar Center Graphic */}
                  <g transform="translate(50, 45)">
                    {/* Glowing Head Background */}
                    <circle cx="50" cy="40" r="28" className="fill-slate-100 dark:fill-slate-800/50" />
                    
                    {/* Head / Laptop graphic silhouette */}
                    <path
                      d="M26 85C26 68.4315 39.4315 55 56 55H56C72.5685 55 86 68.4315 86 85V95H26V85Z"
                      className="fill-blue-500/10 dark:fill-purple-500/10 stroke-blue-500/30 dark:stroke-purple-500/30"
                      strokeWidth="2"
                    />
                    
                    {/* Floating Tech symbols */}
                    <text x="38" y="47" className="font-mono text-[18px] fill-blue-600 dark:fill-blue-400 font-bold">&lt;/&gt;</text>
                    <circle cx="50" cy="80" r="6" className="fill-purple-600 dark:fill-purple-400" />
                  </g>
                </svg>

                {/* Corner Decors */}
                <div className="absolute top-3 left-3 font-mono text-[10px] text-slate-400 select-none">{"{"} Harsha {"}"}</div>
                <div className="absolute bottom-3 right-3 font-mono text-[10px] text-slate-450 dark:text-slate-500 select-none">B.Tech CSE</div>
              </div>
            </div>
          </motion.div>

          {/* Description & Key highlights (Right) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Professional Profile
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base">
                I am a B.Tech Computer Science and Engineering student at Sreyas Institute of Engineering and Technology. 
                With a strong academic foundation (CGPA 8.8) and a passion for engineering real-world solutions, I have focused 
                my study and hands-on coding on building scalable web interfaces and incorporating AI tools.
              </p>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base mt-4">
                My objective is to solve technical problems efficiently, write structured, maintainable code, and contribute to 
                impactful products through developer internships and software engineer roles.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((hl, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex gap-4 p-4 rounded-xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800/80 shadow-sm"
                >
                  <div className="text-2xl mt-1 shrink-0 p-2 rounded-lg bg-slate-50 dark:bg-slate-850">
                    {hl.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-800 dark:text-slate-100">{hl.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-normal">{hl.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
