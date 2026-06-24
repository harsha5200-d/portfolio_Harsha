import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/80 py-12 px-4 no-print transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name and Role */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            B.Tech Computer Science | Full Stack Developer
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm transition-all border border-slate-200/40 dark:border-slate-700/50"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 shadow-sm transition-all border border-slate-200/40 dark:border-slate-700/50"
            aria-label="GitHub"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 shadow-sm transition-all border border-slate-200/40 dark:border-slate-700/50"
            aria-label="Email"
          >
            <FaEnvelope className="text-lg" />
          </a>
        </div>

        {/* Copyright info */}
        <div className="text-center md:text-right text-xs text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-1 text-[10px] opacity-75">Designed as a premium, ATS-friendly Portfolio Website.</p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3.5 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white shadow-lg cursor-pointer transition-colors z-40 border border-white/20"
            aria-label="Scroll to top"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
