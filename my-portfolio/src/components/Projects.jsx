import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import { useTheme } from "../App";
import ecoVisionImg from "../assets/2-bg.png";
import specheckImg from "../assets/speclogo1_ai.png";
import unoImg from "../assets/uno-logo.png";

const projects = [
  {
    id: 1,
    title: "Specheck",
    description: "An intelligent computer sales platform with a sophisticated rating system. Computers are categorized and rated based on specific use cases like gaming, student work, professional use, and more. Helps users make informed purchasing decisions.",
    image: specheckImg,
    technologies: ["React", "Django", "Tailwind CSS", "AOS", "Python", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/noufel-bendar/SpecCheck",
    featured: true,
    category: "E-commerce Platform",
    highlights: ["Smart Rating System", "Category-based Classification", "Product Management", "User Reviews"]
  },
  {
    id: 2,
    title: "EcoVision",
    description: "A comprehensive recycling website that connects sellers and buyers of recyclable materials. Features a points system where users earn rewards for contributing to environmental sustainability. Built with modern web technologies for optimal user experience.",
    image: ecoVisionImg,
    technologies: ["React", "Django", "Tailwind CSS", "AOS", "Python", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/noufel-bendar/EcoVision",
    featured: false,
    category: "Web Application",
    highlights: ["Points System", "User Authentication", "Material Marketplace", "Responsive Design"]
  },
  {
    id: 3,
    title: "UNO Game",
    description: "A complete UNO card game implementation built in Java. Features all standard UNO game mechanics including card matching, special cards, and turn management. Designed with clean architecture principles for maintainability and extensibility.",
    image: unoImg,
    technologies: ["Java", "Object-Oriented Design", "Game Logic", "Console Interface"],
    liveUrl: "#",
    githubUrl: "https://github.com/noufel-bendar/Uno-game",
    featured: false,
    category: "Game Development",
    highlights: ["Complete Game Logic", "Card Management", "Turn System", "Clean Architecture"]
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    } 
  }
};

const floatingAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export default function Projects() {
  const { isDark } = useTheme();

  return (
    <section id="projects" className={`py-20 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/10' : 'bg-purple-400/20'
        }`}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
            animate={floatingAnimation}
          >
            My Projects
          </motion.h2>
          <motion.p 
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are the projects I've built, showcasing my skills in web development, game development, and full-stack applications. Each project demonstrates different technologies and problem-solving approaches.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50' 
                  : 'bg-white/80 border-slate-200/50 hover:border-purple-400/50'
              } ${
                project.featured 
                  ? isDark
                    ? "md:col-span-2 lg:col-span-1 border-purple-500/50 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" 
                    : "md:col-span-2 lg:col-span-1 border-purple-400/50 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50"
                  : isDark
                    ? "hover:bg-gradient-to-br hover:from-purple-500/5 hover:via-pink-500/5 hover:to-blue-500/5"
                    : "hover:bg-gradient-to-br hover:from-purple-50/50 hover:via-pink-50/50 hover:to-blue-50/50"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain mx-auto"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  <span className={`px-3 py-1 text-white text-sm font-medium rounded-full shadow-lg ${
                    project.featured 
                      ? 'bg-purple-500 shadow-purple-500/25' 
                      : 'bg-slate-600/80 shadow-slate-600/25'
                  }`}>
                    {project.category}
                  </span>
                </motion.div>
                
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-lg shadow-pink-500/25">
                      Featured
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className={`text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <p className={`mb-4 leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>

                {/* Project Highlights */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, index) => (
                      <motion.span
                        key={highlight}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`px-2 py-1 text-xs rounded-md font-medium transition-all duration-300 ${
                          isDark 
                            ? 'bg-slate-700/60 text-slate-300' 
                            : 'bg-slate-100/80 text-slate-600'
                        }`}
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`px-3 py-1 backdrop-blur-sm text-sm rounded-full font-medium transition-all duration-300 ${
                        isDark 
                          ? 'bg-slate-700/40 border border-slate-600/30 text-slate-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300'
                          : 'bg-slate-100/80 border border-slate-200/50 text-slate-600 hover:bg-purple-100/50 hover:border-purple-400/50 hover:text-purple-600'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-all duration-300 font-medium ${
                      isDark 
                        ? 'border-slate-600 text-slate-300 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300'
                        : 'border-slate-300 text-slate-600 hover:bg-purple-100/50 hover:border-purple-400/50 hover:text-purple-600'
                    }`}
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-center mt-16"
        >
          <p className={`mb-6 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Interested in working together? Let's discuss your project!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
          >
            <FiCode className="w-5 h-5" />
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
