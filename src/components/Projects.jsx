import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle, FiCalendar, FiX, FiInfo } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiGoogle, SiGithub as SiGithubBrand, SiJsonwebtokens } from 'react-icons/si';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const projectsList = [
    {
      id: 1,
      title: 'CareerPilot',
      category: 'AI-Based Placement Preparation Platform',
      duration: 'Jan 2026 – Mar 2026',
      description: 'CareerPilot is a full-stack placement preparation platform where students can upload resumes for ATS analysis, analyze GitHub profiles, receive AI career suggestions, and track job applications through a centralized dashboard.',
      techStack: [
        { name: 'ReactJS', icon: SiReact, color: 'text-[#61dafb]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#38bdf8]' },
        { name: 'NodeJS', icon: SiNodedotjs, color: 'text-[#339933]' },
        { name: 'ExpressJS', icon: SiExpress, color: 'text-dark-text dark:text-dark-text' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47a248]' },
        { name: 'GitHub API', icon: SiGithubBrand, color: 'text-[#f05032]' },
      ],
      features: [
        'ATS Resume Score Checker using specialized keyword matching rules.',
        'GitHub Profile Analysis to evaluate technical contribution statistics.',
        'AI Career Suggestions recommending roles based on developer skills.',
        'Visual Job Tracker to manage active recruiter submissions.',
        'Student Dashboard representing user metrics and preparations.'
      ],
      color: 'from-brand-cyan to-brand-indigo',
      demoUrl: 'https://careerpilot-frontend-alpha.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumarjha961/CareerPilot',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'MediCare',
      category: 'AI-Powered Healthcare Platform',
      duration: 'Aug 2025 – Dec 2025',
      description: 'Developed a comprehensive healthcare platform featuring AI-powered medical suggestions using Gemini API, secure JWT user authentication, and appointment booking functionality.',
      techStack: [
        { name: 'ReactJS', icon: SiReact, color: 'text-[#61dafb]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#38bdf8]' },
        { name: 'NodeJS', icon: SiNodedotjs, color: 'text-[#339933]' },
        { name: 'ExpressJS', icon: SiExpress, color: 'text-dark-text dark:text-dark-text' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47a248]' },
        { name: 'Gemini API', icon: SiGoogle, color: 'text-[#4285f4]' },
        { name: 'JWT Auth', icon: SiJsonwebtokens, color: 'text-[#06b6d4]' }
      ],
      features: [
        'AI Medical Assistant answering queries using Google Gemini API integrations.',
        'Appointment Booking scheduler matching users with simulated general practitioners.',
        'Secure authentication system keeping accounts private and managed.',
        'Optimized server endpoints responding under 150ms.'
      ],
      color: 'from-brand-indigo to-brand-violet',
      demoUrl: 'https://doctor-appointment-frontend-beige-xi.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumarjha961/Patient-healthcare',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Apna Shop',
      category: 'MERN E-Commerce Platform',
      duration: 'Feb 2025 – May 2025',
      description: 'Built a complete e-commerce application supporting authentication, advanced product search, product filtering, shopping cart workflows, and secure JWT-based admin authorization.',
      techStack: [
        { name: 'ReactJS', icon: SiReact, color: 'text-[#61dafb]' },
        { name: 'NodeJS', icon: SiNodedotjs, color: 'text-[#339933]' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47a248]' },
        { name: 'HTML5', icon: SiReact, color: 'text-[#e34f26]' }, // placeholder custom
        { name: 'CSS3', icon: SiReact, color: 'text-[#1572b6]' }
      ],
      features: [
        'Secure user registration and JWT-authorized product routes.',
        'Dynamic Product Search with instant matching results.',
        'Multilevel Product Filtering by price range, ratings, and categories.',
        'Responsive Shopping workflows from cart adding to checkout details.',
        'Aesthetic mobile viewport grid alignments for optimized responsive layouts.'
      ],
      color: 'from-brand-violet to-brand-cyan',
      demoUrl: 'https://apna-shop-frontend.vercel.app/',
      githubUrl: 'https://github.com/Shivamkumarjha961/Apna_Shop',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="relative py-24 neon-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan mb-2"
          >
            Showroom
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Premium Projects
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl border-white/5 overflow-hidden flex flex-col h-full group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Cover Image with Tech Stack Floating Banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                {/* Visual Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                
                {/* Badge Category */}
                <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-lg bg-dark-bg/80 text-brand-cyan border border-white/5 font-extrabold text-[10px] tracking-wide uppercase">
                  {project.title === 'CareerPilot' ? 'AI Full Stack' : project.title === 'MediCare' ? 'AI Web Health' : 'MERN E-Com'}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-light-muted dark:text-dark-muted font-semibold">
                    <FiCalendar className="w-3.5 h-3.5 text-brand-indigo" />
                    <span>{project.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-light-muted dark:text-dark-muted font-bold tracking-wide">
                    {project.category}
                  </p>
                  
                  <p className="text-xs text-light-muted dark:text-dark-muted line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Micro tech indicators preview */}
                <div className="space-y-4 pt-4 border-t border-light-border dark:border-dark-border/40">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-dark-bg/40 text-dark-muted border border-white/5">
                        {tech.name}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold bg-brand-indigo/10 text-brand-indigo">
                        +{project.techStack.length - 4} More
                      </span>
                    )}
                  </div>

                  <span className="flex items-center space-x-1.5 text-xs text-brand-indigo dark:text-brand-cyan font-bold group-hover:underline">
                    <FiInfo className="w-3.5 h-3.5" />
                    <span>Explore details & specs</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal overlays */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-bg/85 backdrop-blur-md"
              onClick={() => {
                console.log("Backdrop clicked!");
                setSelectedProject(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-2xl bg-dark-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden text-left relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={(e) => {
                    console.log("X button clicked!");
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 z-[110] p-2 rounded-xl bg-dark-bg/80 text-dark-text border border-white/5 hover:text-brand-cyan hover:scale-105 transition-all cursor-pointer pointer-events-auto"
                  aria-label="Close project details"
                >
                  <FiX className="w-5 h-5" />
                </button>

              {/* Cover Image banner */}
              <div className="relative h-48 md:h-56 w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/20 to-transparent" />
                
                {/* Title Title */}
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-extrabold text-white tracking-wide mt-1">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Specs & Description content */}
              <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-brand-indigo bg-dark-card">
                
                <div className="flex items-center space-x-6 text-sm text-dark-muted border-b border-dark-border/40 pb-4">
                  <div className="flex items-center space-x-2">
                    <FiCalendar className="text-brand-cyan" />
                    <span className="font-semibold text-xs uppercase tracking-wider">{selectedProject.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm uppercase font-extrabold tracking-widest text-brand-indigo">
                    Overview
                  </h4>
                  <p className="text-sm text-dark-text leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tech Badges Grid */}
                <div className="space-y-3">
                  <h4 className="text-sm uppercase font-extrabold tracking-widest text-brand-indigo">
                    Tech Stack Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.techStack.map((tech, i) => {
                      const TechIcon = tech.icon;
                      return (
                        <span key={i} className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-dark-bg/60 border border-white/5 text-xs text-dark-text font-bold">
                          <TechIcon className={tech.color} />
                          <span>{tech.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3">
                  <h4 className="text-sm uppercase font-extrabold tracking-widest text-brand-indigo">
                    Engineered Core Features
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs md:text-sm text-dark-muted">
                        <FiCheckCircle className="text-brand-emerald w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links CTAs Buttons */}
                <div className="flex space-x-4 pt-6 border-t border-dark-border/40">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-indigo text-white font-extrabold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-dark-border bg-dark-card hover:bg-dark-card/50 text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <FiGithub />
                    <span>GitHub Code</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
  </section>
);
}
