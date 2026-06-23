import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGlobe, FiCpu, FiShoppingBag, FiBriefcase } from 'react-icons/fi';

// Clickable card which tracks mouse move for the glowing border follow effect
function GlowingShowroomCard({ site, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const Icon = site.icon;

  return (
    <motion.a
      href={site.link}
      target="_blank"
      rel="noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="relative flex flex-col justify-between p-8 rounded-2xl glass-card border-white/5 overflow-hidden text-left group cursor-pointer h-60 bg-dark-card/90"
    >
      {/* Vercel/Stripe hover glowing overlay */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(280px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(6, 182, 212, 0.15), transparent 85%)`
        }}
      />
      
      {/* Visual top bar icon */}
      <div className="relative z-10 flex justify-between items-start">
        <div className={`p-3.5 rounded-xl bg-gradient-to-r ${site.color} p-[1px] shadow-lg`}>
          <div className="w-10 h-10 bg-dark-card rounded-[11px] flex items-center justify-center text-brand-cyan group-hover:bg-transparent group-hover:text-white transition-colors">
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <span className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-extrabold text-[9px] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping mr-1" />
          <span>Live Demo</span>
        </span>
      </div>

      {/* site information text */}
      <div className="relative z-10 space-y-2 mt-4">
        <h4 className="text-xl font-extrabold text-light-text dark:text-dark-text group-hover:text-brand-cyan transition-colors">
          {site.title}
        </h4>
        <p className="text-xs text-light-muted dark:text-dark-muted font-bold leading-relaxed line-clamp-2">
          {site.tagline}
        </p>
      </div>

      {/* Redirect redirect indicator */}
      <div className="relative z-10 flex items-center space-x-1.5 text-xs font-bold text-brand-indigo dark:text-brand-cyan group-hover:underline pt-4 border-t border-light-border dark:border-dark-border/40 w-full mt-2">
        <FiGlobe className="w-4 h-4" />
        <span>Launch Application</span>
        <FiExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </motion.a>
  );
}

export default function LiveWebsites() {
  const showroomSites = [
    {
      title: 'CareerPilot',
      tagline: 'AI-Based placement prep platform. ATS scoring, profile analyses, and job tracker workflows.',
      link: 'https://careerpilot-frontend-alpha.vercel.app/', // live vercel deployment
      color: 'from-brand-cyan to-brand-indigo',
      icon: FiBriefcase
    },
    {
      title: 'MediCare',
      tagline: 'AI-Powered healthcare platform featuring secure JWT authorization and doctor booking tools.',
      link: 'https://doctor-appointment-frontend-beige-xi.vercel.app/',
      color: 'from-brand-indigo to-brand-violet',
      icon: FiCpu
    },
    {
      title: 'Apna Shop',
      tagline: 'Premium e-commerce showroom equipped with product filtering and shopping cart controls.',
      link: 'https://apna-shop-frontend.vercel.app/',
      color: 'from-brand-violet to-brand-cyan',
      icon: FiShoppingBag
    }
  ];

  return (
    <section id="showroom" className="relative py-24 bg-light-bg dark:bg-dark-bg/25 border-y border-light-border dark:border-dark-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-indigo mb-2"
          >
            Showcase
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            My Live Websites
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-indigo to-brand-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Live Sites Showroom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showroomSites.map((site, index) => (
            <GlowingShowroomCard key={index} site={site} index={index} />
          ))}
        </div>

      </div>

      {/* Decorative Glow elements */}
      <div className="absolute right-1/3 top-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
