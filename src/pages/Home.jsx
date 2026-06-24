import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import CodingProfiles from '../components/CodingProfiles';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <CodingProfiles />
      <Contact />
    </div>
  );
};

export default Home;
