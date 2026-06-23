import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward, FaNetworkWired, FaCode } from 'react-icons/fa';
import { SiGoogle, SiFreecodecamp, SiOpenai, SiCplusplus } from 'react-icons/si';

export default function Certifications() {
  const certificationsList = [
    {
      title: 'Introduction to HTML, CSS & JavaScript',
      issuer: 'IBM Academic Alliance (Coursera)',
      duration: 'Completed: 2025',
      badge: 'Verified IBM Badge',
      icon: FaAward,
      color: 'text-[#052d3d]', // IBM blue
      brandBg: 'bg-[#0f62fe]/10',
      verifyUrl: 'https://drive.google.com/file/d/1w4dDYt0C3cWJ-5yPCAPLGIn3U_rZ0VBS/view',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp Developer Academy',
      duration: 'Completed: 2025',
      badge: 'Verified Credential',
      icon: SiFreecodecamp,
      color: 'text-[#0a0a23]', // Freecodecamp dark blue
      brandBg: 'bg-[#0a0a23]/10',
      verifyUrl: 'https://www.freecodecamp.org/certification/shivamj12/responsive-web-design',
    },
    {
      title: 'Mastering C++: From Object-Oriented Programming to Dynamic Programming',
      issuer: 'Lovely Professional University (Centre for Professional Enhancement)',
      duration: 'Certificate of Merit • Completed: 2025',
      badge: 'VERIFIED C++ CERTIFICATE',
      icon: SiCplusplus,
      color: 'text-[#00599c]', // C++ Blue
      brandBg: 'bg-[#00599c]/10',
      verifyUrl: 'https://drive.google.com/file/d/1xYkGJA_LbHw8WGJCywQ1nORxxQc79E_k/view?usp=sharing',
    },
    {
      title: 'Object Oriented Programming',
      issuer: 'Lovely Professional University (LPU) | Neo Colab',
      duration: '72 Hours • Completed: 2024',
      badge: 'VERIFIED LPU CERTIFICATE',
      icon: FaCode,
      color: 'text-[#f43f5e]', // LPU Rose/Red accent
      brandBg: 'bg-[#f43f5e]/10',
      verifyUrl: 'https://drive.google.com/file/d/1YCpHbZq1tKNwl_4oP-_kfGLs4pyaKq8J/view?usp=sharing',
    },
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      issuer: 'Infosys Springboard Learning Platform',
      duration: 'Completed: 2025',
      badge: 'VERIFIED AI CERTIFICATE',
      icon: SiOpenai,
      color: 'text-[#10a37f]', // OpenAI green
      brandBg: 'bg-[#10a37f]/10',
      verifyUrl: 'https://drive.google.com/file/d/1ADqSwkzhN8w0syf8woxO_pPrbhHIP4qv/view?usp=sharing',
    },
    {
      title: 'Social Networks',
      issuer: 'NPTEL Online Certification (IIT Madras & SWAYAM)',
      duration: '12 Week Course • Completed: 2026',
      badge: 'ELITE CERTIFIED',
      icon: FaNetworkWired,
      color: 'text-[#f59e0b]', // Gold/Amber for Elite Certification
      brandBg: 'bg-[#f59e0b]/10',
      verifyUrl: 'https://drive.google.com/file/d/1ekvse_jWqDKxEMnHHebkUBaJk0-MLHDl/view?usp=sharing',
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-light-bg dark:bg-dark-bg/20 border-y border-light-border dark:border-dark-border/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-indigo mb-2"
          >
            Credentials
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Certifications & Training
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-indigo to-brand-violet mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Cards Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsList.map((cert, index) => {
            const BrandIcon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-card p-6 md:p-8 rounded-2xl border-white/5 flex flex-col justify-between text-left relative group overflow-hidden"
              >
                {/* Visual Top Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-3.5 rounded-xl ${cert.brandBg} ${cert.color} shadow-md`}>
                      <BrandIcon className="w-6 h-6 text-brand-cyan" />
                    </div>
                    
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald font-extrabold text-[9px] uppercase tracking-wider">
                      <FaAward className="w-3 h-3" />
                      <span>{cert.badge}</span>
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-light-muted dark:text-dark-muted">
                      {cert.issuer}
                    </span>
                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text group-hover:text-brand-cyan transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-light-muted dark:text-dark-muted font-semibold tracking-wide">
                      {cert.duration}
                    </p>
                  </div>
                </div>

                {/* Verification CTA */}
                <div className="pt-6 border-t border-light-border dark:border-dark-border/40 w-full mt-6">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-indigo dark:text-brand-cyan hover:underline"
                  >
                    <span>Verify Certificate</span>
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
