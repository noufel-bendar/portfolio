import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiArrowUp, FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../App";

export default function Footer() {
  const { isDark } = useTheme();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`relative overflow-hidden py-16 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(139,92,246,0.5) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(236,72,153,0.5) 0%, transparent 50%)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & description */}
          <div className="text-center md:text-left">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 inline-block"
            >
              BN
            </motion.div>
            <p className={`max-w-xs mx-auto md:mx-0 leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Crafting digital experiences with passion and precision. Let's
              build something amazing together.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`inline-block transition-colors hover:translate-x-1 transform ${
                      isDark 
                        ? 'text-slate-400 hover:text-white' 
                        : 'text-slate-600 hover:text-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top */}
          <div className="text-center md:text-right">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-lg hover:shadow-xl transition-all font-medium text-white"
            >
              <FiArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mt-10 pt-8 ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          {/* Social Media Links */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-6">
              <motion.a
                href="https://www.instagram.com/__n_o_u__f_e_l__"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-pink-400 hover:text-pink-300' 
                    : 'bg-slate-100 hover:bg-slate-200 text-pink-600 hover:text-pink-700'
                }`}
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://github.com/noufel-bendar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800'
                }`}
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/bendar-noufel-18140a282/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-blue-400 hover:text-blue-300' 
                    : 'bg-slate-100 hover:bg-slate-200 text-blue-600 hover:text-blue-700'
                }`}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              © {new Date().getFullYear()} Bendar Noufel. All rights reserved.
            </p>
            <div className={`flex items-center gap-2 text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiHeart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
