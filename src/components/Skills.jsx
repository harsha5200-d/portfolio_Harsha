import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaGitAlt, 
  FaCode,
  FaTerminal
} from 'react-icons/fa';
import { 
  SiCplusplus, 
  SiTailwindcss, 
  SiExpress, 
  SiFlask, 
  SiDjango, 
  SiMysql, 
  SiMongodb, 
  SiPostman, 
  SiJupyter,
  SiC,
  SiIntellijidea
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const skillIcons = {
  // Programming Languages
  "Java": <FaJava className="text-orange-600 dark:text-orange-500" />,
  "Python": <FaPython className="text-blue-500" />,
  "C": <SiC className="text-sky-650" />,
  "C++": <SiCplusplus className="text-blue-600" />,
  "JavaScript": <FaJs className="text-yellow-500" />,
  "SQL": <FaDatabase className="text-emerald-500" />,
  
  // Frontend
  "HTML5": <FaHtml5 className="text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-blue-500" />,
  "React.js": <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  
  // Backend & Frameworks
  "Node.js": <FaNodeJs className="text-emerald-550" />,
  "Express.js": <SiExpress className="text-slate-800 dark:text-slate-200" />,
  "Flask": <SiFlask className="text-slate-850 dark:text-slate-200" />,
  "Django": <SiDjango className="text-green-800 dark:text-green-600" />,
  "REST APIs": <TbApi className="text-indigo-500" />,
  
  // Databases & ORM
  "MySQL": <SiMysql className="text-blue-500" />,
  "MongoDB": <SiMongodb className="text-green-555" />,
  "SQLAlchemy": <FaDatabase className="text-red-500" />,
  "Mongoose": <SiMongodb className="text-emerald-600 dark:text-emerald-550" />,
  
  // Tools & Platforms
  "Git & GitHub": <FaGitAlt className="text-orange-600" />,
  "VS Code / IntelliJ": <SiIntellijidea className="text-sky-500" />,
  "Postman": <SiPostman className="text-orange-500" />,
  "Jupyter Notebook": <SiJupyter className="text-orange-600" />
};

const getSkillIcon = (name) => {
  return skillIcons[name] || <FaCode className="text-blue-500" />;
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map(cat => cat.category)];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100"
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto px-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full border cursor-pointer transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/15'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData
                .filter(cat => activeTab === 'All' || cat.category === activeTab)
                .map((catGroup) => (
                  <motion.div
                    key={catGroup.category}
                    variants={itemVariants}
                    layout
                    className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Category Label */}
                    <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                      <span>{catGroup.category}</span>
                      <span className="text-[10px] uppercase font-semibold text-blue-600 dark:text-blue-400 tracking-wider">
                        {catGroup.skills.length} Items
                      </span>
                    </h3>

                    {/* Category Skills Grid */}
                    <div className="grid grid-cols-2 gap-3 flex-grow mt-2">
                      {catGroup.skills.map((skill, skillIdx) => {
                        const isLastOdd = catGroup.skills.length % 2 !== 0 && skillIdx === catGroup.skills.length - 1;
                        return (
                          <div 
                            key={skillIdx} 
                            className={`flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-850 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-sm group/skill cursor-default ${isLastOdd ? 'col-span-2' : ''}`}
                          >
                            <span className="text-xl shrink-0 group-hover/skill:scale-110 transition-transform duration-300">
                              {getSkillIcon(skill.name)}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
