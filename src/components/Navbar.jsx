import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiDownload, FiSend } from 'react-icons/fi';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'projects', path: '/projects', label: 'Projects' },

    { id: 'certifications', path: '/certifications', label: 'Certifications' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  // Track scrolling to add rich borders and shadows
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };



  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glass-navbar shadow-lg' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" onClick={handleNavClick}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            <span className="text-2xl font-extrabold tracking-widest bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet bg-clip-text text-transparent">
              SKJ
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.id}
                to={link.path}
                className={`relative text-sm font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-brand-cyan'
                    : 'text-dark-muted hover:text-brand-indigo dark:text-dark-muted dark:hover:text-dark-text'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-cyan to-brand-indigo rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-xl border border-dark-border dark:border-dark-border bg-dark-card/40 dark:bg-dark-card/40 text-dark-text hover:text-brand-cyan transition-colors"
            title="Toggle Theme"
          >
            {isDarkMode ? <FiSun className="w-4 h-4 text-brand-amber" /> : <FiMoon className="w-4 h-4 text-brand-indigo" />}
          </button>

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Shivam_Kumar_Jha_Resume.pdf"
            className="flex items-center space-x-1.5 px-4 py-2 text-sm font-semibold rounded-xl border border-brand-indigo/30 hover:border-brand-indigo bg-brand-indigo/10 hover:bg-brand-indigo/20 text-brand-indigo dark:text-brand-indigo transition-all duration-300"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Hire Me CTA */}
          <Link
            to="/contact"
            className="flex items-center space-x-1.5 px-5 py-2 text-sm font-bold rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo hover:from-brand-indigo hover:to-brand-violet text-white shadow-md shadow-brand-indigo/20 hover:shadow-brand-indigo/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <FiSend className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </Link>
        </div>

        {/* Mobile Control Buttons (Toggle & Drawer Trigger) */}
        <div className="flex items-center space-x-3 lg:hidden">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg border border-dark-border bg-dark-card/40 text-dark-text transition-all"
          >
            {isDarkMode ? <FiSun className="w-4 h-4 text-brand-amber" /> : <FiMoon className="w-4 h-4 text-brand-indigo" />}
          </button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-dark-border bg-dark-card/40 text-dark-text transition-all"
          >
            {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full glass-navbar shadow-2xl overflow-hidden mt-4"
          >
            <div className="px-6 py-8 flex flex-col space-y-5 border-t border-dark-border">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`text-left text-base font-semibold py-1 transition-colors ${
                      isActive ? 'text-brand-cyan pl-2 border-l-2 border-brand-cyan' : 'text-dark-muted dark:text-dark-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-dark-border flex flex-col space-y-3">
                <a
                  href="/resume.pdf"
                  download="Shivam_Kumar_Jha_Resume.pdf"
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl border border-brand-indigo/30 bg-brand-indigo/5 text-brand-indigo font-semibold transition-all"
                >
                  <FiDownload />
                  <span>Download Resume</span>
                </a>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-bold transition-all"
                >
                  <FiSend />
                  <span>Hire Me</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
