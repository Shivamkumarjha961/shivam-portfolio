import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiGlobe, FiTrendingUp, FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

export default function About() {
  const highlights = [
    {
      icon: FiCode,
      title: 'MERN Stack Developer',
      description: 'Building modern React frontends coupled with fast Express & Node backends.',
      color: 'from-brand-cyan to-brand-indigo',
    },
    {
      icon: FiLayers,
      title: 'Full Stack Projects',
      description: 'End-to-end delivery of complex web applications with complete client-server workflows.',
      color: 'from-brand-indigo to-brand-violet',
    },
    {
      icon: FiCpu,
      title: 'AI Integration',
      description: 'Connecting generative artificial intelligence APIs (like Google Gemini API) for smart platforms.',
      color: 'from-brand-violet to-brand-cyan',
    },
    {
      icon: FiGlobe,
      title: 'REST APIs & Security',
      description: 'Designing modular, standardized API structures alongside solid JWT-based authorization.',
      color: 'from-brand-cyan to-brand-teal',
    },
    {
      icon: FiTrendingUp,
      title: 'Problem Solving',
      description: 'Developing high efficiency algorithm structures and logic solutions (C++, LeetCode 120+).',
      color: 'from-brand-teal to-brand-indigo',
    },
    {
      icon: FiBookOpen,
      title: 'Open Source Learning',
      description: 'Continuously active contributor on GitHub, absorbing cutting-edge patterns.',
      color: 'from-brand-indigo to-brand-violet',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-light-bg dark:bg-dark-bg/30 border-y border-light-border dark:border-dark-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan mb-2"
          >
            Behind Shivam
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Professional Summary
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: bio & university info card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 rounded-2xl border-white/5 space-y-6 text-left"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-light-text to-light-text dark:from-dark-text dark:to-dark-text bg-clip-text text-transparent">
                Passionate Innovator
              </h3>
              
              <p className="text-light-muted dark:text-dark-muted leading-relaxed text-sm md:text-base">
                Passionate B.Tech CSE student at Lovely Professional University specializing in Full Stack MERN Development. Experienced in building scalable web applications, REST APIs, authentication systems, AI-powered solutions, and modern user interfaces. Strong interest in software engineering, backend development, and problem solving.
              </p>

              <div className="border-t border-light-border dark:border-dark-border/40 pt-6 space-y-4">
                <div className="flex items-center space-x-3 text-light-muted dark:text-dark-muted">
                  <FiMapPin className="text-brand-cyan w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Phagwara, Punjab, India (LPU Campus)</span>
                </div>
                <div className="flex items-center space-x-3 text-light-muted dark:text-dark-muted">
                  <FiCalendar className="text-brand-indigo w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Target Graduation: 2027</span>
                </div>
              </div>
            </motion.div>

            {/* University Milestone Sub-Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl border-brand-indigo/10 flex items-start space-x-4 text-left relative overflow-hidden bg-brand-indigo/5 dark:bg-brand-indigo/5"
            >
              <div className="p-3.5 rounded-xl bg-brand-indigo/10 text-brand-indigo">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-extrabold tracking-wider text-brand-indigo">
                  Education
                </span>
                <h4 className="text-base font-bold text-light-text dark:text-dark-text">
                  B.Tech Computer Science & Engineering
                </h4>
                <p className="text-xs text-light-muted dark:text-dark-muted">
                  Lovely Professional University (LPU), Punjab
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Core capabilities grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="glass-card p-6 rounded-2xl border-white/5 text-left group transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle colored glow corner */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-0.5 flex items-center justify-center text-white mb-4 shadow-md`}>
                    <div className="w-full h-full bg-dark-card rounded-[10px] flex items-center justify-center text-brand-cyan group-hover:bg-transparent group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-light-text dark:text-dark-text group-hover:text-brand-cyan transition-colors mb-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Decorative Blur elements */}
      <div className="absolute left-1/4 top-1/2 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
