import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      metric: "110+ Solved",
      color: "from-amber-1000 to-orange-600",
      link: personalInfo.socials.leetcode,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.102 17.93l-2.69 2.6c-.75.68-1.98.68-2.73 0l-5.38-5.2a2.022 2.022 0 010-2.82l5.38-5.2c.75-.68 1.98-.68 2.73 0l2.69 2.6c.75.67.75 1.77 0 2.44L11.58 14.5c-.37.34-.99.34-1.37 0l-1.34-1.3c-.38-.36-.38-.96 0-1.32.38-.36.99-.36 1.37 0l.65.63 2.14-2.07c.38-.36.38-.96 0-1.32-.38-.36-.99-.36-1.37 0l-3.48 3.37c-.75.72-.75 1.89 0 2.61l3.48 3.37c.75.72 1.98.72 2.73 0l3.48-3.37c.38-.36.38-.96 0-1.32-.38-.36-.99-.36-1.37 0l-2.13 2.06zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fillOpacity="0.1" />
          <path d="M13.483 0a1.374 1.374 0 00-.961.41L7.438 5.495c-.383.383-.383 1.004 0 1.388.383.383 1.004.383 1.387 0l5.085-5.086 5.086 5.086c.383.383 1.004.383 1.387 0a.98.98 0 000-1.388L15.3 1.41a1.375 1.375 0 00-.962-.41H13.48zm.27 10.28a1.374 1.374 0 00-.96.41L7.708 15.78c-.383.382-.383 1.003 0 1.387.383.383 1.004.383 1.387 0l5.086-5.085 5.085 5.085c.383.383 1.004.383 1.388 0a.98.98 0 000-1.387l-5.086-5.086a1.375 1.375 0 00-.961-.41H13.75z" />
        </svg>
      )
    },
    {
      name: "GeeksforGeeks",
      metric: "Score 450+",
      color: "from-green-600 to-emerald-700",
      link: personalInfo.socials.geeksforgeeks,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.78 13.91l-3.32-3.32 1.42-1.42 1.9 1.9 4.38-4.38 1.42 1.42-5.8 5.8z" fillOpacity="0.1" />
          <path d="M19 10.5V8.8h-4.3c-.4 0-.8.2-1 .5l-2.2 2.7-2.2-2.7c-.2-.3-.6-.5-1-.5H4v1.7h3.8l2.2 2.7-2.2 2.7H4v1.7h4.3c.4 0 .8-.2 1-.5l2.2-2.7 2.2 2.7c.2.3.6.5 1 .5H19v-1.7h-3.8l-2.2-2.7 2.2-2.7H19z" />
        </svg>
      )
    },
    {
      name: "HackerRank",
      metric: "5 Star Gold",
      color: "from-green-500 to-teal-650",
      link: personalInfo.socials.hackerrank,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11V8H13V16Z" fillOpacity="0.1" />
          <path d="M19.3 6H4.7C4.3 6 4 6.3 4 6.7v10.6c0 .4.3.7.7.7h14.6c.4 0 .7-.3.7-.7V6.7c0-.4-.3-.7-.7-.7zm-8.8 8.8H8.3V9.2h2.2v5.6zm4.4 0h-2.2V9.2h2.2v5.6z" />
        </svg>
      )
    },
    {
      name: "CodeChef",
      metric: "3 Star Division",
      color: "from-amber-700 to-amber-900",
      link: personalInfo.socials.codechef,
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fillOpacity="0.1" />
          <path d="M17.5 14c-.8 0-1.5-.5-1.8-1.2h-7.4c-.3.7-1 1.2-1.8 1.2-1.1 0-2-.9-2-2s.9-2 2-2c.8 0 1.5.5 1.8 1.2h7.4c.3-.7 1-1.2 1.8-1.2 1.1 0 2 .9 2 2s-.9 2-2 2zm-11-2.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5zm11 0c.3 0 .5-.2.5-.5s-.2-.5-.5-.5-.5.2-.5.5.2.5.5.5z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      metric: "Contributions & Repos",
      color: "from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950",
      link: personalInfo.socials.github,
      icon: <FaGithub className="text-3xl" />
    },
    {
      name: "LinkedIn",
      metric: "Professional Network",
      color: "from-blue-600 to-blue-800",
      link: personalInfo.socials.linkedin,
      icon: <FaLinkedin className="text-3xl" />
    }
  ];

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
    hidden: { y: 25, opacity: 0 },
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
    <section id="coding-profiles" className="py-20 px-4 md:py-28 bg-slate-100/50 dark:bg-slate-900/40 transition-colors duration-300">
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
            Coding & Professional Profiles
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profiles.map((profile, idx) => (
            <motion.a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden p-6 rounded-2xl bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800/80 shadow-sm hover:shadow-md flex items-center justify-between group transition-all duration-300"
            >
              {/* Profile details */}
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${profile.color} text-white shrink-0`}>
                  {profile.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
                    {profile.metric}
                  </p>
                </div>
              </div>

              {/* Arrow link */}
              <span className="p-2 rounded-lg bg-slate-400 dark:bg-slate-850 text-slate-450 group-hover:text-blue-400 dark:group-hover:text-blue-400 transition-colors">
                <FaExternalLinkAlt className="text-[11px]" />
              </span>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CodingProfiles;
