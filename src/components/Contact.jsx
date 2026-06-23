import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure.';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Please add a subject.';
    if (!formData.message.trim()) tempErrors.message = 'Please write your message details.';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, val } = { name: e.target.name, val: e.target.value };
    setFormData({ ...formData, [name]: val });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      user_message: formData.message,
      current_date_time: new Date().toLocaleString()
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          
          confetti({
            particleCount: 150,
            spread: 85,
            origin: { y: 0.6 },
            colors: ['#06b6d4', '#6366f1', '#8b5cf6', '#10b981']
          });

          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setIsSubmitting(false);
          setSubmitStatus('error');
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 neon-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan mb-2"
          >
            Connection Hub
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-light-text dark:text-dark-text"
          >
            Get In Touch
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo mx-auto mt-4 rounded-full" />
        </div>

        {/* Form and Contact Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl border-white/5 space-y-8 text-left h-full flex flex-col justify-between"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-light-text to-light-text dark:from-dark-text dark:to-dark-text bg-clip-text text-transparent">
                  Let's Build Something Awesome
                </h3>
                
                <p className="text-sm md:text-base text-light-muted dark:text-dark-muted leading-relaxed">
                  I'm actively seeking internship and entry-level Software Development, Frontend, and MERN Full Stack opportunities. If you have any questions or just want to connect, feel free to drop a message!
                </p>
              </div>

              {/* Action Rows */}
              <div className="space-y-6 pt-6 border-t border-light-border dark:border-dark-border/40">
                
                <a
                  href="mailto:shivamkumarjha961@gmail.com"
                  className="flex items-center space-x-4 text-light-muted hover:text-brand-cyan dark:text-dark-muted dark:hover:text-brand-cyan transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan group-hover:scale-110 transition-transform">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-light-muted dark:text-dark-muted">Email Me</span>
                    <span className="text-sm font-semibold tracking-wide">shivamkumarjha961@gmail.com</span>
                  </div>
                </a>

                <a
                  href="tel:+916203875164"
                  className="flex items-center space-x-4 text-light-muted hover:text-brand-indigo dark:text-dark-muted dark:hover:text-brand-indigo transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-brand-indigo/10 text-brand-indigo group-hover:scale-110 transition-transform">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-light-muted dark:text-dark-muted">Call Me</span>
                    <span className="text-sm font-semibold tracking-wide">+91-6203875164</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-light-muted dark:text-dark-muted">
                  <div className="p-3 rounded-xl bg-brand-violet/10 text-brand-violet">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-light-muted dark:text-dark-muted">Location</span>
                    <span className="text-sm font-semibold tracking-wide">Phagwara, Punjab, India</span>
                  </div>
                </div>

              </div>

              {/* Social Channels row */}
              <div className="pt-6 border-t border-light-border dark:border-dark-border/40 flex items-center space-x-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-light-muted dark:text-dark-muted mr-2">
                  Social profiles:
                </span>
                <div className="flex space-x-3.5">
                  <a
                    href="https://github.com/Shivamkumarjha961"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-light-border dark:border-dark-border/50 text-light-text hover:text-brand-cyan dark:text-dark-text dark:hover:text-brand-cyan text-lg hover:scale-110 transition-all"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shivam-kumar-jha-119a95297/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-light-border dark:border-dark-border/50 text-light-text hover:text-brand-indigo dark:text-dark-text dark:hover:text-brand-indigo text-lg hover:scale-110 transition-all"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://leetcode.com/u/Shivam_Kumar_Jha123/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-light-border dark:border-dark-border/50 text-light-text hover:text-brand-violet dark:text-dark-text dark:hover:text-brand-violet text-lg hover:scale-110 transition-all"
                  >
                    <SiLeetcode />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form Console */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 md:p-8 rounded-2xl border-white/5 text-left h-full flex flex-col justify-center relative overflow-hidden"
            >
              {/* Submission success feedback */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-dark-card/95 z-20 flex flex-col items-center justify-center text-center p-6 space-y-4"
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FiCheckCircle className="w-16 h-16 text-brand-emerald animate-bounce" />
                        <h4 className="text-2xl font-extrabold text-white">Message Transmitted!</h4>
                        <p className="text-sm text-dark-muted max-w-sm leading-relaxed">
                          Thank you for contacting me. Your message has been sent successfully. I will get back to you soon.
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                          <span className="text-3xl font-bold text-red-500">!</span>
                        </div>
                        <h4 className="text-2xl font-extrabold text-white">Transmission Failed</h4>
                        <p className="text-sm text-dark-muted max-w-sm leading-relaxed">
                          Something went wrong. Please try again later.
                        </p>
                      </>
                    )}
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="px-6 py-2 rounded-xl bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan font-bold text-xs uppercase tracking-wider hover:bg-brand-cyan/30 transition-all"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-extrabold tracking-widest text-light-muted dark:text-dark-muted">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg/40 dark:bg-dark-bg/40 border text-light-text dark:text-dark-text text-sm font-semibold focus:outline-none focus:border-brand-cyan transition-colors ${
                        errors.name ? 'border-red-500/50' : 'border-light-border dark:border-dark-border'
                      }`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-bold block">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-extrabold tracking-widest text-light-muted dark:text-dark-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl bg-dark-bg/40 dark:bg-dark-bg/40 border text-light-text dark:text-dark-text text-sm font-semibold focus:outline-none focus:border-brand-cyan transition-colors ${
                        errors.email ? 'border-red-500/50' : 'border-light-border dark:border-dark-border'
                      }`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-bold block">{errors.email}</span>}
                  </div>

                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-extrabold tracking-widest text-light-muted dark:text-dark-muted">
                    Subject Heading
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg/40 dark:bg-dark-bg/40 border text-light-text dark:text-dark-text text-sm font-semibold focus:outline-none focus:border-brand-cyan transition-colors ${
                      errors.subject ? 'border-red-500/50' : 'border-light-border dark:border-dark-border'
                    }`}
                    placeholder="MERN Developer Internship Opportunities"
                  />
                  {errors.subject && <span className="text-[10px] text-red-500 font-bold block">{errors.subject}</span>}
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label className="text-[10px] uppercase font-extrabold tracking-widest text-light-muted dark:text-dark-muted">
                    Detailed Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg/40 dark:bg-dark-bg/40 border text-light-text dark:text-dark-text text-sm font-semibold focus:outline-none focus:border-brand-cyan transition-colors resize-none ${
                      errors.message ? 'border-red-500/50' : 'border-light-border dark:border-dark-border'
                    }`}
                    placeholder="Hi Shivam, we reviewed your e-commerce and AI projects..."
                  />
                  {errors.message && <span className="text-[10px] text-red-500 font-bold block">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2.5 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet text-white font-extrabold text-sm uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-75 shadow-lg shadow-brand-indigo/15 hover:shadow-brand-indigo/30 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
