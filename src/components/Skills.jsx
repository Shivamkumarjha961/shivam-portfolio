import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiGithub } from 'react-icons/si';
import { FaDatabase, FaCode, FaCss3Alt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const categories = [
    { id: 'Frontend', label: 'Frontend & UI', icon: SiReact },
    { id: 'Backend', label: 'Backend APIs', icon: SiNodedotjs },
    { id: 'Database', label: 'Databases & ORM', icon: SiMongodb },
    { id: 'Programming', label: 'Languages', icon: SiCplusplus },
    { id: 'Tools', label: 'Tools & Utilities', icon: SiGithub },
  ];

  const skillsData = {
    Frontend: [
      { name: 'ReactJS', level: 90, icon: SiReact, color: 'text-[#61dafb]' },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: 'text-[#38bdf8]' },
      { name: 'JavaScript (ES6+)', level: 85, icon: SiJavascript, color: 'text-[#f7df1e]' },
      { name: 'CSS3', level: 90, icon: FaCss3Alt, color: 'text-[#1572b6]' },
      { name: 'HTML5', level: 92, icon: SiHtml5, color: 'text-[#e34f26]' },
    ],
    Backend: [
      { name: 'NodeJS', level: 85, icon: SiNodedotjs, color: 'text-[#339933]' },
      { name: 'ExpressJS', level: 88, icon: SiExpress, color: 'text-light-text dark:text-dark-text' },
      { name: 'REST APIs', level: 86, icon: TbApi, color: 'text-brand-cyan' },
    ],
    Database: [
      { name: 'MongoDB', level: 85, icon: SiMongodb, color: 'text-[#47a248]' },
      { name: 'Mongoose ORM', level: 82, icon: FaDatabase, color: 'text-brand-indigo' },
    ],
    Programming: [
      { name: 'C++', level: 85, icon: SiCplusplus, color: 'text-[#00599c]' },
      { name: 'JavaScript', level: 85, icon: SiJavascript, color: 'text-[#f7df1e]' },
    ],
    Tools: [
      { name: 'GitHub & Git', level: 88, icon: SiGithub, color: 'text-[#f05032]' },
      { name: 'VS Code', level: 90, icon: FaCode, color: 'text-[#007acc]' },
      { name: 'Thunder Client', level: 84, icon: TbApi, color: 'text-[#8b5cf6]' },
    ],
  };

  return (
    <section
      id="skills"
      className="relative py-24 neon-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-indigo mb-2"
          >
            My Weapons
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Skills & Expertise
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-indigo to-brand-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Controls and Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Tab selection column */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 space-x-4 lg:space-x-0 lg:space-y-3.5 scrollbar-thin scrollbar-thumb-brand-indigo">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-3 px-5 py-4 rounded-xl border text-left font-bold transition-all duration-300 w-full flex-shrink-0 lg:flex-shrink ${
                    isActive
                      ? 'border-brand-indigo bg-brand-indigo/10 text-brand-indigo shadow-md shadow-brand-indigo/5'
                      : 'border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card/40 text-light-muted dark:text-dark-muted hover:border-brand-indigo/50 hover:bg-brand-indigo/5'
                  }`}
                  style={{ minWidth: '170px' }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-brand-indigo' : ''}`} />
                  <span className="text-sm md:text-base tracking-wide whitespace-nowrap">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Skills Grid Showcase */}
          <div className="lg:col-span-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skillsData[activeTab].map((skill, index) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="glass-card p-6 rounded-2xl border-white/5 flex flex-col justify-between hover:scale-[1.01] hover:border-brand-indigo/35 transition-all duration-300 relative group overflow-hidden"
                    >
                      {/* Brand Glowing Dot */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-brand-indigo/5 opacity-0 group-hover:opacity-100 blur-xl transition-all" />

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2.5 rounded-xl bg-dark-bg/60 dark:bg-dark-bg/60 border border-white/5 ${skill.color}`}>
                            <SkillIcon className="w-6 h-6" />
                          </div>
                          <span className="text-base font-bold text-light-text dark:text-dark-text tracking-wide">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-extrabold text-brand-indigo tracking-widest">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="space-y-1">
                        <div className="h-2 bg-light-border dark:bg-dark-border/40 rounded-full w-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full"
                          />
                        </div>
                        <div className="flex justify-between text-[10px] text-light-muted dark:text-dark-muted font-semibold tracking-wider uppercase pt-1">
                          <span>Basics</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* Decorative Blob */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
