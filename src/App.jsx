import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

import LiveWebsites from './components/LiveWebsites';
import TechnicalHighlights from './components/TechnicalHighlights';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme: apply 'dark' to HTML element on mount and theme update
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="relative min-h-screen text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg neo-bg-gradient transition-colors duration-300 selection:bg-brand-indigo/35 selection:text-white">
        

        {/* Sticky Blur Navbar */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Main Sections Assembly */}
        <main className="relative z-10 w-full overflow-x-hidden min-h-[80vh] pt-6">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col space-y-12">
                <Hero />
                <About />
                <Skills />
              </div>
            } />
            <Route path="/projects" element={
              <div className="flex flex-col space-y-12">
                <Projects />
                <LiveWebsites />
                <TechnicalHighlights />
              </div>
            } />

            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer copyright & ChevronUp toggler */}
        <Footer />

      </div>
    </Router>
  );
}
