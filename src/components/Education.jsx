import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100"
          >
            Education Timeline
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-12 pl-8 md:pl-12 space-y-12">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Dot/Icon */}
              <span className="absolute -left-[53px] md:-left-[69px] top-1.5 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 dark:bg-purple-650 text-white shadow-md border-4 border-slate-50 dark:border-slate-950">
                <FaGraduationCap className="text-base md:text-lg" />
              </span>

              {/* Timeline Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    {/* Degree & Major */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  
                  {/* CGPA Badge */}
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-green-150/70 text-green-800 dark:bg-green-950/40 dark:text-green-300 border border-green-200/50 dark:border-green-800/40 shrink-0 self-start md:self-auto">
                    CGPA: {edu.cgpa}
                  </div>
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-300 mt-4 pt-4 border-t border-slate-100 dark:border-slate-850/60">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-slate-400" />
                    <span>{edu.period}</span>
                  </span>
                  
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt className="text-slate-400" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
