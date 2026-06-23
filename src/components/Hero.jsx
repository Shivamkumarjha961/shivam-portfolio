import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus } from 'react-icons/si';

export default function Hero() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Backend Developer'
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;
    const currentWord = roles[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  const handleScrollTo = (id) => {
    navigate(`/${id}`);
    window.scrollTo(0, 0);
  };




  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden neon-grid"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Headline & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card border-brand-cyan/20 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">
              Available for Internships & Full-Time Roles
            </span>
          </motion.div>

          <div className="space-y-3">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl font-medium text-dark-muted dark:text-dark-muted"
            >
              Hi, I'm
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
            >
              <span className="bg-gradient-to-r from-light-text via-brand-indigo to-brand-violet bg-clip-text text-transparent dark:from-dark-text dark:via-brand-cyan dark:to-brand-indigo">
                Shivam Kumar Jha
              </span>
            </motion.h1>

            {/* Typewriter Animated Role Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="h-10 md:h-12 flex items-center"
            >
              <h2 className="text-xl md:text-3xl font-bold text-brand-indigo dark:text-brand-cyan tracking-wide flex items-center">
                <span>{displayText}</span>
                <span className="w-1 h-6 md:h-8 bg-brand-indigo dark:bg-brand-cyan ml-1 animate-ping" />
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-base md:text-lg text-light-muted dark:text-dark-muted leading-relaxed max-w-xl"
          >
            Building scalable, modern and user-friendly web applications using React, Node.js, Express.js and MongoDB. Specialized in high-performance REST APIs, full-stack architecture, and interactive design.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="group flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet hover:scale-[1.03] active:scale-[0.97] text-white font-extrabold shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/40 transition-all duration-300"
            >
              <span>View Projects</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/resume.pdf"
              download="Shivam_Kumar_Jha_Resume.pdf"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-dark-border dark:border-dark-border bg-light-card hover:bg-light-card/80 dark:bg-dark-card/50 dark:hover:bg-dark-card hover:scale-[1.03] text-light-text dark:text-dark-text font-bold transition-all duration-300"
            >
              <FaDownload className="w-4 h-4 text-brand-cyan" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl border border-brand-indigo/35 hover:border-brand-indigo bg-brand-indigo/5 text-brand-indigo dark:text-brand-indigo font-bold hover:scale-[1.03] transition-all"
            >
              <FaEnvelope className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Recruiter Social Anchors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center space-x-6 pt-8 border-t border-light-border dark:border-dark-border/40 w-fit"
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-light-muted dark:text-dark-muted">
              Connect With Me:
            </span>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Shivamkumarjha961"
                target="_blank"
                rel="noreferrer"
                className="text-light-text hover:text-brand-cyan dark:text-dark-text dark:hover:text-brand-cyan text-xl hover:scale-125 transition-all"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-kumar-jha-119a95297/"
                target="_blank"
                rel="noreferrer"
                className="text-light-text hover:text-brand-indigo dark:text-dark-text dark:hover:text-brand-indigo text-xl hover:scale-125 transition-all"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/Shivam_Kumar_Jha123/"
                target="_blank"
                rel="noreferrer"
                className="text-light-text hover:text-brand-violet dark:text-dark-text dark:hover:text-brand-violet text-xl hover:scale-125 transition-all"
                title="LeetCode"
              >
                <SiLeetcode />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Graphical Terminal Simulation */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[400px]">


          {/* Central Glassmorphic Terminal shell mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[380px] glass-card rounded-2xl border-white/10 shadow-2xl overflow-hidden text-left relative z-10 bg-dark-card/95"
          >
            {/* Header controls bar */}
            <div className="px-4 py-3 bg-dark-bg/60 border-b border-white/5 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#eab308] inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#22c55e] inline-block" />
              </div>
              <span className="text-[11px] font-bold text-dark-muted tracking-wider select-none">shivam.js</span>
              <span className="w-4" />
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-[11px] md:text-[12px] leading-relaxed text-[#a9b1d6] space-y-3.5">
              <div>
                <span className="text-brand-cyan">const</span> <span className="text-brand-violet">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-[#e0af68]">name</span>: <span className="text-[#9ece6a]">'Shivam Kumar Jha'</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#e0af68]">role</span>: <span className="text-[#9ece6a]">'MERN Stack & Full Stack SDE'</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#e0af68]">location</span>: <span className="text-[#9ece6a]">'Phagwara, Punjab, India'</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#e0af68]">skills</span>: [
                <div className="pl-4">
                  <span className="text-[#9ece6a]">'React'</span>, <span className="text-[#9ece6a]">'Node.js'</span>, <span className="text-[#9ece6a]">'Express'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-[#9ece6a]">'MongoDB'</span>, <span className="text-[#9ece6a]">'C++'</span>, <span className="text-[#9ece6a]">'Tailwind'</span>
                </div>
                ]
              </div>
              <div>&#125;;</div>
              
              <div className="pt-2 border-t border-dark-border/40">
                <span className="text-brand-indigo">&gt;</span> <span className="text-brand-cyan">developer</span>.isScalable()
              </div>
              <div className="text-brand-emerald">
                true
              </div>
              <div>
                <span className="text-brand-indigo">&gt;</span> <span className="text-brand-cyan">developer</span>.getReadyForRecruitment()
              </div>
              <div className="text-brand-cyan animate-pulse">
                "Ready for interviews... Let's code!"
              </div>
            </div>
          </motion.div>
        </div>

      </div>


    </section>
  );
}
