import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../App";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navLinks = ["About", "Projects", "Skills", "Contact"];

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { delay: delay * 0.1, duration: 0.4 }
    }),
  };

  return (
    <header className={`fixed top-0 left-0 w-full backdrop-blur-lg shadow-lg border-b border-purple-500/20 z-50 transition-colors duration-300 ${
      isDark ? 'bg-slate-900/80' : 'bg-white/80'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          BN
        </motion.div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              custom={index}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              data-aos="fade-down"
              className={`transition-colors duration-300 ${
                isDark ? 'text-slate-200 hover:text-purple-400' : 'text-slate-700 hover:text-purple-600'
              }`}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Buttons - Desktop */}
        <div className="hidden md:flex gap-4 items-center" data-aos="fade-left">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors border ${
              isDark 
                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-600' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-300'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/CV_BENDAR_Noufel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Download CV
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-2xl transition-colors ${
            isDark ? 'text-slate-200 hover:text-purple-400' : 'text-slate-700 hover:text-purple-600'
          }`}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden backdrop-blur-lg px-6 py-4 shadow-lg border-t border-purple-500/20 transition-colors duration-300 ${
            isDark ? 'bg-slate-900/95' : 'bg-white/95'
          }`}
          data-aos="fade-down"
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`transition-colors duration-300 ${
                  isDark ? 'text-slate-200 hover:text-purple-400' : 'text-slate-700 hover:text-purple-600'
                }`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded-lg text-center border transition-colors ${
                isDark 
                  ? 'bg-slate-800 text-slate-200 border-slate-600 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              {isDark ? <FiSun className="w-4 h-4 inline mr-2" /> : <FiMoon className="w-4 h-4 inline mr-2" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
            <a
              href="/CV_BENDAR_Noufel.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-purple-500 text-purple-400 text-center hover:bg-purple-500 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
