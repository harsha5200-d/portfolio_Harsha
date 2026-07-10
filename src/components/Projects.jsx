import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch, FaRegCheckCircle } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI / ML', 'Full Stack', 'Web Dev'];

  const getCategoryMatches = (project, category) => {
    if (category === 'All') return true;
    if (category === 'AI / ML') return project.tech.some(t => t.toLowerCase().includes('ai') || t.toLowerCase().includes('gemini'));
    if (category === 'Full Stack') return project.tech.some(t => t.toLowerCase().includes('mongodb') || t.toLowerCase().includes('express'));
    if (category === 'Web Dev') return project.tech.some(t => t.toLowerCase().includes('canvas') || t.toLowerCase().includes('javascript') || t.toLowerCase().includes('html5'));
    return true;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 md:py-28 transition-colors duration-300">
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
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 px-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full border cursor-pointer transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-650 border-blue-600 text-white shadow-md shadow-blue-500/15'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {projectsData
              .filter(p => getCategoryMatches(p, filter))
              .map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 shadow-md flex flex-col justify-between overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {project.image && (
                    <div className="h-48 w-full overflow-hidden border-b border-slate-150/40 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Failback if image path is not found locally
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xl p-2 rounded-xl bg-slate-50 dark:bg-slate-850 text-slate-500 shrink-0">
                        <FaCodeBranch className="text-blue-500/80" />
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 dark:text-slate-200 text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-100/30 dark:border-slate-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="mt-6 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                        Key Features
                      </h4>
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex gap-2 text-xs text-slate-700 dark:text-slate-200">
                          <FaRegCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Links */}
                  <div className="p-6 md:px-8 border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-900/70 flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-slate-900 dark:hover:bg-slate-800 transition-all text-center cursor-pointer shadow-sm"
                    >
                      <FaGithub />
                      <span>Code Repository</span>
                    </a>
                    
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-750 text-xs font-semibold shadow-sm transition-all text-center cursor-pointer"
                    >
                      <span>Live Showcase</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
