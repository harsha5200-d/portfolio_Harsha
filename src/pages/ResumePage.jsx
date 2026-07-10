import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { personalInfo, skillsData, projectsData, educationData, certificationsData } from '../data/portfolioData';

const ResumePage = () => {


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300 pt-24 pb-16 px-4 no-print-bg">
      
      {/* Interactive Controller (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-8 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-250/60 dark:border-slate-800 shadow-sm flex flex-wrap gap-4 items-center justify-between no-print">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-650 dark:text-slate-300"
          >
            <FaArrowLeft className="text-[10px]" />
            <span>Back to Portfolio</span>
          </Link>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Resume View
          </span>
        </div>
      </div>

      {/* Printable Resume Container */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-850 p-8 md:p-12 shadow-md dark:shadow-none print-container text-slate-900 dark:text-slate-100 font-sans print:text-black print:bg-white print:p-0 print:border-none print:shadow-none transition-colors duration-300">
        
        {/* Name and Header Info */}
        <div className="text-center pb-6 border-b-2 border-slate-900 dark:border-slate-800 print:border-slate-900">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white print:text-black print:text-3xl print:font-bold">
            Harsha vardhan Reshavena
          </h1>
          <p className="text-sm md:text-base font-semibold text-slate-650 dark:text-slate-350 italic mt-1.5 print:text-slate-700 print:text-xs">
            B.Tech 4th-year student
          </p>
          
          {/* Direct Contact links */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-4 text-xs font-medium text-slate-755 dark:text-slate-350 print:text-black print:text-[10px]">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
              <FaEnvelope className="text-[10px] text-slate-400 print:hidden" />
              <span>{personalInfo.email}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1 hover:underline">
              <FaPhone className="text-[10px] text-slate-400 print:hidden" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-[10px] text-slate-400 print:hidden" />
              <span>Hyderabad, Telangana, IN</span>
            </span>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <FaGithub className="text-[10px] text-slate-400 print:hidden" />
              <span>Github</span>
            </a>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <FaLinkedin className="text-[10px] text-slate-400 print:hidden" />
              <span>linkedin</span>
            </a>
          </div>

          {/* Social Profiles row */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 mt-2.5 text-xs font-semibold text-slate-600 dark:text-slate-400 print:text-black print:text-[9.5px]">
            <a href={personalInfo.socials.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="hover:underline">GeeksForGeeks</a>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <a href={personalInfo.socials.hackerrank} target="_blank" rel="noopener noreferrer" className="hover:underline">HackerRank</a>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline">Leetcode</a>
            <span className="text-slate-300 dark:text-slate-800 print:text-black">•</span>
            <a href={personalInfo.socials.codechef} target="_blank" rel="noopener noreferrer" className="hover:underline">CodeChef</a>
          </div>
        </div>

        {/* SUMMARY */}
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-900 dark:border-slate-800 print:text-black print:text-xs print:font-bold print:border-black pb-1">
            Summary
          </h2>
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed print:text-black print:text-[10.5px]">
            {personalInfo.summary}
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-900 dark:border-slate-800 print:text-black print:text-xs print:font-bold print:border-black pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mt-3 print:grid-cols-2 print:gap-x-12">
            {skillsData.map((group, idx) => (
              <div key={idx} className="text-xs print:text-[10.5px]">
                <strong className="text-slate-850 dark:text-white print:text-black">{group.category}</strong>
                <p className="text-slate-650 dark:text-slate-400 mt-0.5 print:text-black">
                  {group.skills.map(s => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-900 dark:border-slate-800 print:text-black print:text-xs print:font-bold print:border-black pb-1">
            Projects
          </h2>
          <div className="mt-3 space-y-4 print:space-y-3">
            {projectsData.map((project, idx) => (
              <div key={idx} className="text-xs md:text-sm print:text-[10.5px]">
                <div className="flex justify-between items-center font-bold">
                  <h3 className="text-slate-850 dark:text-white print:text-black flex items-center gap-1">
                    <span>{project.title}</span>
                    <span className="text-[10px] text-slate-400 font-normal print:hidden">
                      ({project.tech.join(', ')})
                    </span>
                  </h3>
                </div>
                <p className="text-slate-650 dark:text-slate-400 mt-1 print:text-black leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-900 dark:border-slate-800 print:text-black print:text-xs print:font-bold print:border-black pb-1">
            Education
          </h2>
          <div className="mt-3 space-y-4 print:space-y-3">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs md:text-sm print:text-[10.5px]">
                <div>
                  <h3 className="font-bold text-slate-850 dark:text-white print:text-black">
                    {edu.degree}, {edu.major}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-450 italic mt-0.5 print:text-black">
                    {edu.institution} | CGPA: {edu.cgpa}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-semibold text-slate-700 dark:text-slate-400 print:text-black">
                    {edu.period}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5 print:text-black">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-900 dark:border-slate-800 print:text-black print:text-xs print:font-bold print:border-black pb-1">
            Certifications
          </h2>
          <ul className="list-disc list-inside mt-3 space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-350 print:text-black print:text-[10.5px]">
            {certificationsData.map((cert, idx) => (
              <li key={idx} className="leading-relaxed">
                <strong className="text-slate-800 dark:text-white print:text-black">{cert.title}</strong> | Verified by {cert.issuer}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div>
  );
};

export default ResumePage;
