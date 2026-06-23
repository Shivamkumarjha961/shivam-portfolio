import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronUp, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-20 pb-10 bg-light-bg/50 dark:bg-dark-bg/80 border-t border-light-border dark:border-white/10 overflow-hidden shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          {/* Column 1: Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <span className="text-2xl font-black tracking-widest bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet bg-clip-text text-transparent inline-block">
                Shivam Kumar Jha
              </span>
              <p className="mt-3 text-sm text-light-muted dark:text-dark-muted font-medium max-w-sm mx-auto md:mx-0 leading-relaxed">
                A passionate MERN Stack & Full Stack Developer dedicated to building scalable, user-centric digital experiences.
              </p>
            </div>
            <div className="pt-2 flex flex-col space-y-3 items-center md:items-start text-sm text-light-muted dark:text-dark-muted font-medium">
              <a href="mailto:shivam@example.com" className="flex items-center space-x-2 hover:text-brand-cyan transition-colors">
                <FiMail className="w-4 h-4" />
                <span>Contact via Email</span>
              </a>
              <div className="flex items-center space-x-2">
                <FiMapPin className="w-4 h-4" />
                <span>Phagwara, Punjab, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold tracking-widest text-light-text dark:text-dark-text uppercase">Explore</h4>
            <div className="flex flex-col space-y-3 text-sm font-semibold text-light-muted dark:text-dark-muted">
              <Link to="/" onClick={handleScrollToTop} className="hover:text-brand-cyan hover:translate-x-1 transition-all w-fit mx-auto md:mx-0">Home</Link>
              <Link to="/projects" onClick={handleScrollToTop} className="hover:text-brand-cyan hover:translate-x-1 transition-all w-fit mx-auto md:mx-0">Projects</Link>
              <Link to="/contact" onClick={handleScrollToTop} className="hover:text-brand-cyan hover:translate-x-1 transition-all w-fit mx-auto md:mx-0">Contact</Link>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold tracking-widest text-light-text dark:text-dark-text uppercase">Connect</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Shivamkumarjha961"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center text-light-text dark:text-dark-text hover:text-brand-cyan hover:border-brand-cyan hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-1 transition-all duration-300"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-kumar-jha-119a95297/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center text-light-text dark:text-dark-text hover:text-brand-indigo hover:border-brand-indigo hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:-translate-y-1 transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Shivam_Kumar_Jha123/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border flex items-center justify-center text-light-text dark:text-dark-text hover:text-brand-violet hover:border-brand-violet hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:-translate-y-1 transition-all duration-300"
                title="LeetCode"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
            </div>
            
            <div className="pt-4">
              <span className="inline-block px-3 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 text-brand-cyan text-[11px] font-bold tracking-wide animate-pulse">
                AVAILABLE FOR HIRE
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-border dark:border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold tracking-widest text-light-muted dark:text-dark-muted">
          <p>© {new Date().getFullYear()} Shivam Kumar Jha.</p>
          
          <div className="flex items-center space-x-6">
            <span className="hidden md:inline-block">Designed for Product Engineering Recruitment</span>
            <button
              onClick={handleScrollToTop}
              className="flex items-center justify-center space-x-1.5 hover:text-brand-cyan transition-colors group"
              title="Scroll To Top"
            >
              <span>BACK TO TOP</span>
              <FiChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
