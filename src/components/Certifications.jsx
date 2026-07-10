import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section id="certifications" className="py-20 px-4 md:py-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-slate-100"
          >
            Certifications
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800/80 shadow-sm flex flex-col hover:shadow-md transition-all duration-300"
            >
              {/* Certification Header */}
              <div className="flex gap-4 items-start">
                <span className="p-3 rounded-xl bg-blue-50 dark:bg-slate-850 text-blue-600 dark:text-blue-400 shrink-0">
                  <FaAward className="text-xl" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
                    Verified by {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-700 dark:text-slate-200 mt-4 leading-relaxed flex-grow">
                {cert.description}
              </p>

              {/* Verify Badge / Action */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-850/60 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">
                <span>Credential ID: Verified</span>
                {cert.url ? (
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-450 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    <span>Verify</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-slate-400 dark:text-slate-650">
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
