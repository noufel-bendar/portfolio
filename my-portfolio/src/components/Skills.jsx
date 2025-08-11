import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, 
  FiDatabase, 
  FiGlobe, 
  FiSmartphone, 
  FiServer, 
  FiLayers,
  FiGitBranch,
  FiPackage,
  FiMonitor,
  FiZap
} from "react-icons/fi";
import { useTheme } from "../App";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FiMonitor,
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
      { name: "JavaScript", level: 85, color: "from-yellow-500 to-orange-500" },
      { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
      { name: "CSS", level: 90, color: "from-blue-600 to-indigo-600" },
      { name: "Tailwind", level: 85, color: "from-cyan-500 to-blue-500" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: FiServer,
    description: "Creating robust server-side applications and APIs",
    skills: [
      { name: "Python", level: 85, color: "from-blue-600 to-purple-600" },
      { name: "Django", level: 80, color: "from-green-600 to-green-700" }
    ]
  },
  {
    id: "database",
    title: "Database & ORM",
    icon: FiDatabase,
    description: "Managing data storage and database operations",
    skills: [
      { name: "SQLite", level: 80, color: "from-blue-400 to-blue-500" },
      { name: "Oracle", level: 75, color: "from-red-500 to-orange-500" },
      { name: "MySQL", level: 75, color: "from-blue-500 to-indigo-600" },
      { name: "Django", level: 80, color: "from-green-600 to-green-700" }
    ]
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: FiPackage,
    description: "Essential tools for modern development workflow",
    skills: [
      { name: "Git", level: 85, color: "from-orange-500 to-red-500" },
      { name: "VS Code", level: 90, color: "from-blue-500 to-purple-500" },
      { name: "Cursor", level: 85, color: "from-purple-500 to-pink-500" },
      { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" }
    ]
  },
  {
    id: "libraries",
    title: "Libraries & Frameworks",
    icon: FiLayers,
    description: "Popular libraries and frameworks for enhanced development",
    skills: [
      { name: "AOS", level: 75, color: "from-blue-500 to-cyan-500" },
      { name: "Framer Motion", level: 80, color: "from-purple-500 to-pink-500" },
      { name: "React Router", level: 85, color: "from-red-500 to-pink-500" }
    ]
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    icon: FiZap,
    description: "Deploying applications and managing development operations",
    skills: [
      { name: "Vercel", level: 75, color: "from-black to-gray-700" },
      { name: "GitHub Pages", level: 80, color: "from-gray-600 to-gray-700" }
    ]
  }
];

const container = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    } 
  }
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

export default function Skills() {
  const { isDark } = useTheme();

  return (
    <section id="skills" className={`py-24 relative overflow-hidden ${
      isDark ? 'bg-slate-900' : 'bg-gray-50'
    }`}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-blue-500/10' : 'bg-blue-400/20'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          isDark ? 'bg-green-500/10' : 'bg-green-400/20'
        }`}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-purple-500/5' : 'bg-purple-400/15'
        }`}></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}
            animate={floatingAnimation}
          >
            Skills & Expertise
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
            I've developed a diverse skill set across various technologies and frameworks. Here's a comprehensive overview of my technical expertise and proficiency levels.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={item}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50' 
                  : 'bg-white/80 border-slate-200/50 hover:border-blue-400/50'
              }`}
            >
              {/* Category Header */}
              <div className={`p-6 border-b ${
                isDark ? 'border-slate-700/50' : 'border-slate-200/50'
              }`}>
                <div className="flex items-center gap-4 mb-3">
                  <motion.div 
                    className={`p-3 rounded-xl ${
                      isDark ? 'bg-blue-500/20' : 'bg-blue-100/50'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <category.icon className={`w-6 h-6 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </motion.div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-xs font-bold ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className={`w-full h-2 rounded-full ${
                        isDark ? 'bg-slate-700/50' : 'bg-slate-200/50'
                      } overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
