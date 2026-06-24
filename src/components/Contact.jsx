import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:py-28 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Contact Details (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-6">
              Contact Information
            </h3>
            <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-8">
              Feel free to reach out to me regarding developer opportunities, projects, or just to say hello! I will get back to you as soon as possible.
            </p>

            {/* Email card */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm">
              <span className="p-3.5 rounded-xl bg-blue-50 dark:bg-slate-850 text-blue-600 dark:text-blue-400 shrink-0">
                <FaEnvelope className="text-lg" />
              </span>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Email Me</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-850 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone card */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm">
              <span className="p-3.5 rounded-xl bg-indigo-50 dark:bg-slate-850 text-indigo-600 dark:text-indigo-400 shrink-0">
                <FaPhoneAlt className="text-lg" />
              </span>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Call Me</h4>
                <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-slate-850 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm">
              <span className="p-3.5 rounded-xl bg-purple-50 dark:bg-slate-850 text-purple-600 dark:text-purple-400 shrink-0">
                <FaMapMarkerAlt className="text-lg" />
              </span>
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">Location</h4>
                <p className="text-sm font-semibold text-slate-850 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-md"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-bold text-slate-850 dark:text-white">
                    Send Message
                  </h3>
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm outline-none transition-all ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900'
                      }`}
                      placeholder="johndoe@example.com"
                    />
                    {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email}</span>}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-sm outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900'
                      }`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && <span className="text-xs text-red-500 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-650 hover:from-blue-700 hover:to-indigo-700 text-white cursor-pointer shadow-md disabled:opacity-50 transition-all text-sm"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <FaPaperPlane className="text-xs" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <FaCheckCircle className="text-5xl text-green-500 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
                    Thank you for reaching out. Harsha will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
