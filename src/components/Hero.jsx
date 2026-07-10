import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaCode, FaFileAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Hero = () => {
  const roles = ["B.Tech 4th Year Student", "Full Stack Developer", "AI Enthusiast"];
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const activeRole = roles[currentRoleIdx];

    if (!isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(activeRole.slice(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);

      if (currentText === activeRole) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(activeRole.slice(0, currentText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);

      if (currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Tagline */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100/90 text-blue-900 dark:bg-slate-800/80 dark:text-slate-100 dark:border dark:border-slate-700/60 mb-6 shadow-sm"
          >
            <FaCode className="animate-pulse" />
            <span>Open For Opportunities & Internships</span>
          </motion.div>

          {/* Intro Heading */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-base font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-widest"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Title / Role */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mt-4 tracking-wide min-h-[40px] flex items-center justify-center gap-1.5"
          >
            <span>I am a</span>
            <span className="text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-400 pr-1 animate-caret">
              {currentText}
            </span>
          </motion.h2>

          {/* Short Bio */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-700 dark:text-slate-200 max-w-2xl mt-6 leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mt-10 w-full px-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white cursor-pointer shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto justify-center"
            >
              <span>View Projects</span>
              <FaArrowRight className="text-xs" />
            </button>

            <Link
              to="/resume"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-white text-slate-800 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 cursor-pointer shadow-md hover:bg-slate-50 dark:hover:bg-slate-700/80 transform hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto justify-center"
            >
              <FaFileAlt className="text-xs" />
              <span>View Resume</span>
            </Link>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-slate-900 text-white dark:bg-slate-950 dark:border dark:border-slate-800 hover:bg-slate-800 dark:hover:bg-slate-900 cursor-pointer shadow-md transform hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto justify-center"
            >
              <FaEnvelope className="text-xs" />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
