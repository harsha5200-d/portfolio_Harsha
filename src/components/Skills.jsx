import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

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
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
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
                    className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Category Label */}
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                      <span>{catGroup.category}</span>
                      <span className="text-[10px] uppercase font-semibold text-blue-600 dark:text-blue-400 tracking-wider">
                        {catGroup.skills.length} Items
                      </span>
                    </h3>

                    {/* Category Skills */}
                    <div className="space-y-4 flex-grow">
                      {catGroup.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs font-semibold">
                            <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                            <span className="text-slate-500 dark:text-slate-450">{skill.level}%</span>
                          </div>
                          
                          {/* Progress bar container */}
                          <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            {/* Animated progress fill */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
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
