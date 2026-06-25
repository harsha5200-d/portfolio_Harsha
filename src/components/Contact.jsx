import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const contactItems = [
    {
      id: 'email',
      label: 'Email Me',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <FaEnvelope className="text-xl" />,
    },
    {
      id: 'phone',
      label: 'Call Me',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      icon: <FaPhoneAlt className="text-xl" />,
    },
    {
      id: 'location',
      label: 'Location',
      value: personalInfo.location,
      href: null,
      icon: <FaMapMarkerAlt className="text-xl" />,
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'harsha5200-d',
      href: personalInfo.socials.github,
      icon: <FaGithub className="text-xl" />,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'Harsha Vardhan Reshavena',
      href: personalInfo.socials.linkedin,
      icon: <FaLinkedin className="text-xl" />,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:py-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-650 dark:text-slate-350 mt-6 text-sm max-w-xl mx-auto leading-relaxed">
            Feel free to reach out to me regarding developer opportunities, projects, or just to say hello! Click any of the options below to connect directly.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto justify-center"
        >
          {contactItems.map((item) => {
            const isLinkedIn = item.id === 'linkedin';
            
            const cardContent = (
              <>
                <span className="p-3.5 rounded-2xl bg-blue-50 dark:bg-slate-850 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-all duration-300 shrink-0">
                  {item.icon}
                </span>
                <div className="text-left">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">{item.label}</h4>
                  <p className="text-sm font-semibold text-slate-850 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all">
                    {item.value}
                  </p>
                </div>
              </>
            );

            const containerClassName = `group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all duration-300 ${item.href ? 'cursor-pointer' : 'cursor-default'} ${isLinkedIn ? 'sm:col-span-2 lg:col-span-1' : ''}`;

            if (item.href) {
              return (
                <motion.a
                  key={item.id}
                  href={item.href}
                  target={item.id !== 'email' && item.id !== 'phone' ? "_blank" : undefined}
                  rel={item.id !== 'email' && item.id !== 'phone' ? "noopener noreferrer" : undefined}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={containerClassName}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={containerClassName}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
