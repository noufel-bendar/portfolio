import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiInstagram, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { useTheme } from "../App";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { isDark } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:bendarnoufel@gmail.com?subject=Contact%20from%20portfolio&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/__n_o_u__f_e_l__", 
      icon: FiInstagram, 
      color: "text-pink-400",
      hoverColor: "hover:text-pink-300",
      bgColor: "bg-pink-500/20",
      hoverBgColor: "group-hover:bg-pink-500/30"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/noufel-bendar", 
      icon: FiGithub, 
      color: "text-slate-400",
      hoverColor: "hover:text-slate-300",
      bgColor: "bg-slate-500/20",
      hoverBgColor: "group-hover:bg-slate-500/30"
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/bendar-noufel-18140a282/", 
      icon: FiLinkedin, 
      color: "text-blue-400",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-500/20",
      hoverBgColor: "group-hover:bg-blue-500/30"
    }
  ];

  const floatingAnimation = {
    y: [0, -6, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/5' : 'bg-purple-400/15'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.h2 
            className={`text-5xl font-extrabold tracking-tight mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
            animate={floatingAnimation}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className={`text-xl leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have an idea, project, or just want to say hello? Drop me a message and I'll get back to you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className={`backdrop-blur-sm shadow-2xl rounded-3xl p-10 border transition-all duration-500 ${
              isDark 
                ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 hover:shadow-purple-500/10' 
                : 'bg-white/80 border-purple-400/20 hover:border-purple-400/40 hover:shadow-purple-400/10'
            }`}
          >
            <motion.h3 
              className={`text-3xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              Send a Message
            </motion.h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email"].map((field, index) => (
                <motion.div 
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <label className={`block text-sm font-semibold mb-3 capitalize ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {field}
                  </label>
                  <motion.input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                      isDark 
                        ? 'border-slate-600 bg-slate-700/50 text-white placeholder-slate-400' 
                        : 'border-slate-300 bg-white/80 text-slate-800 placeholder-slate-500'
                    }`}
                    placeholder={field === "email" ? "your@email.com" : "Your name"}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label className={`block text-sm font-semibold mb-3 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  whileFocus={{ scale: 1.02 }}
                  className={`w-full px-5 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none ${
                    isDark 
                      ? 'border-slate-600 bg-slate-700/50 text-white placeholder-slate-400' 
                      : 'border-slate-300 bg-white/80 text-slate-800 placeholder-slate-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold 
                           rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <FiSend className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="space-y-12"
          >
            {/* Email */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start space-x-5 group"
            >
              <motion.div 
                className="p-4 bg-purple-500/20 rounded-xl group-hover:bg-purple-500/30 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={pulseAnimation}
              >
                <FiMail className="w-7 h-7 text-purple-400" />
              </motion.div>
              <div>
                <p className={`font-semibold text-lg mb-1 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>Email</p>
                <a href="mailto:bendarnoufel@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg">
                  bendarnoufel@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start space-x-5 group"
            >
              <motion.div 
                className="p-4 bg-green-500/20 rounded-xl group-hover:bg-green-500/30 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                animate={pulseAnimation}
              >
                <FiMapPin className="w-7 h-7 text-green-400" />
              </motion.div>
              <div>
                <p className={`font-semibold text-lg mb-1 ${
                  isDark ? 'text-white' : 'text-slate-800'
                }`}>Location</p>
                <p className={`text-lg ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>Algeria</p>
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-slate-800'
              }`}>Connect With Me</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group p-4 rounded-xl transition-all duration-300 border text-center ${
                      isDark 
                        ? 'bg-slate-800/50 text-slate-300 border-slate-600 hover:border-slate-500 hover:bg-slate-700/50' 
                        : 'bg-white/80 text-slate-600 border-slate-300 hover:border-slate-400 hover:bg-slate-50/80'
                    }`}
                  >
                    <div className={`p-3 rounded-lg transition-colors duration-300 ${social.bgColor} ${social.hoverBgColor} mb-2`}>
                      <social.icon className={`w-6 h-6 ${social.color} ${social.hoverColor}`} />
                    </div>
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/50 hover:shadow-purple-500/20'
                  : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 border-purple-400/30 hover:border-purple-400/50 hover:shadow-purple-400/20'
              }`}
            >
              <h4 className={`text-xl font-bold mb-3 ${
                isDark ? 'text-purple-300' : 'text-purple-600'
              }`}>🚀 Currently Available</h4>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Open to new opportunities — let's make something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
