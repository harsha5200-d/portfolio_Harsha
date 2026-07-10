import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';
import { ThemeProvider } from './context/ThemeContext';
import DynamicBackground from './components/DynamicBackground';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <DynamicBackground />
        <div className="flex flex-col min-h-screen bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-300">
          {/* Global navigation navbar (hidden during printing) */}
          <Navbar />
          
          {/* Main content viewport */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </main>
          
          {/* Global footer (hidden during printing) */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
