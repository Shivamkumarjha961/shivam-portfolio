import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';
import { FaLaptopCode, FaRobot, FaFire } from 'react-icons/fa';

// Smooth Counter Animation Hook/Component
function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TechnicalHighlights() {
  const highlights = [
    {
      id: 1,
      icon: SiLeetcode,
      count: 120,
      suffix: "+",
      label: "LeetCode Problems Solved",
      color: "from-[#eab308] to-[#ca8a04]",
      shadow: "hover:shadow-[#eab308]/20",
      textGlow: "text-[#eab308]"
    },
    {
      id: 2,
      icon: FaLaptopCode,
      count: 3,
      suffix: "+",
      label: "Production-Ready MERN Projects",
      color: "from-brand-cyan to-brand-indigo",
      shadow: "hover:shadow-brand-cyan/20",
      textGlow: "text-brand-cyan"
    },
    {
      id: 3,
      icon: FaRobot,
      count: 2,
      suffix: "+",
      label: "AI-Powered Applications Built",
      color: "from-brand-violet to-brand-indigo",
      shadow: "hover:shadow-brand-violet/20",
      textGlow: "text-brand-violet"
    },
    {
      id: 4,
      icon: FaFire,
      count: 100,
      suffix: "%",
      label: "Hands-On Learning & Development",
      color: "from-[#ef4444] to-[#b91c1c]",
      shadow: "hover:shadow-[#ef4444]/20",
      textGlow: "text-[#ef4444]"
    }
  ];

  return (
    <section id="highlights" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] bg-brand-indigo/5 dark:bg-brand-indigo/10 blur-[120px] rounded-full pointer-events-none z-0" />
      
      <div className="relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-indigo/30 bg-brand-indigo/5 text-brand-indigo text-xs font-bold tracking-widest uppercase"
          >
            <FaLaptopCode className="w-3.5 h-3.5" />
            <span>Engineering Excellence</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-light-text dark:text-dark-text tracking-tight"
          >
            Technical <span className="bg-gradient-to-r from-brand-cyan to-brand-indigo bg-clip-text text-transparent">Highlights</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-light-muted dark:text-dark-muted max-w-2xl mx-auto font-medium"
          >
            Showcasing a strong foundation in algorithmic problem-solving, full-stack architecture, and a relentless drive for practical, hands-on software development.
          </motion.p>
        </div>

        {/* Statistic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: "easeOut" }}
              className={`group relative p-8 rounded-3xl glass-card border-white/5 bg-light-card/60 dark:bg-dark-card/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:-translate-y-2 ${item.shadow}`}
            >
              {/* Top Gradient Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="flex flex-col items-center text-center space-y-6 h-full justify-between relative z-10">
                
                {/* Icon Container with subtle pulse & glow */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} blur-[25px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                  <div className="w-16 h-16 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500 ease-out shadow-lg">
                    <item.icon className={`w-8 h-8 ${item.textGlow}`} />
                  </div>
                </div>

                {/* Animated Counter & Label */}
                <div className="space-y-3">
                  <h3 className={`text-5xl font-black tracking-tighter ${item.textGlow} drop-shadow-md`}>
                    <CountUp end={item.count} suffix={item.suffix} />
                  </h3>
                  <p className="text-sm font-bold text-light-muted dark:text-dark-muted tracking-wide uppercase leading-relaxed group-hover:text-light-text dark:group-hover:text-dark-text transition-colors duration-300">
                    {item.label}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
