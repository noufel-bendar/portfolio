import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import InitialsLogo from "./InitialsLogo";
import ContactModal from "./ContactModal";
import { FiDownload, FiArrowRight, FiCode, FiZap } from "react-icons/fi";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Hero() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true, 
      easing: 'ease-out-cubic',
      offset: 100
    });
  }, []);

  return (
    <header
      id="home"
      className="hero-bg animate-gradient-x min-h-screen flex items-center relative overflow-hidden pt-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-6 lg:px-20 py-20 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* LEFT CONTENT */}
          <motion.div variants={slideInLeft} className="space-y-8">
            <div className="space-y-6">
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 font-medium tracking-wide">Hello, I'm</span>
              </motion.div>

              {/* Name */}
              <motion.h1 
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Bendar Noufel
                </span>
              </motion.h1>

              {/* Title */}
              <motion.p 
                variants={fadeUp}
                className="text-2xl text-slate-200 font-semibold flex items-center gap-3"
              >
                <FiCode className="text-purple-400 animate-pulse" />
                Software Engineer · Full Stack Developer
                <FiZap className="text-yellow-400 animate-pulse" />
              </motion.p>

              {/* Bio */}
              <motion.p 
                variants={fadeUp}
                className="text-lg text-slate-300 max-w-2xl leading-relaxed"
              >
                Passionate developer with expertise in modern web technologies and backend systems. 
                I love building scalable applications that solve real-world problems and create 
                exceptional user experiences.
              </motion.p>
            </div>

            {/* BUTTONS */}
            <motion.div 
              variants={fadeUp}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                Contact Me
              </motion.button>

              <motion.a
                href="/CV_BENDAR_Noufel.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Bendar Noufel's CV in new tab"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-2"
              >
                <FiDownload className="mr-2 group-hover:translate-y-1 transition-transform" /> Download CV
              </motion.a>
            </motion.div>

            {/* TECH CHIPS */}
            <motion.div 
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              {["JavaScript", "React", "CSS", "HTML", "TailwindCSS", "Python", "Django", "C", "Java"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.5)"
                    }}
                    className="tech-chip border border-slate-600 bg-slate-800/50 backdrop-blur-sm text-slate-200 hover:text-purple-300 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: LOGO */}
          <motion.div 
            variants={slideInRight} 
            className="flex justify-center md:justify-end"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                filter: "brightness(1.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
              className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]"
            >
              {/* Floating elements around logo */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full blur-sm"
              />
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/30 rounded-full blur-sm"
              />
              
              <InitialsLogo size={350} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </header>
  );
}
