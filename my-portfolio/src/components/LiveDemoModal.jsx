import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink, FiMaximize2 } from "react-icons/fi";
import { useTheme } from "../App";

export default function LiveDemoModal({ isOpen, onClose, project }) {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen || !project) return null;

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleModalClose = () => {
    setIsLoading(true);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative z-10 w-full max-w-6xl h-[80vh] backdrop-blur-xl shadow-2xl border rounded-2xl overflow-hidden ${
            isDark 
              ? 'bg-slate-800/95 border-purple-500/30' 
              : 'bg-white/95 border-purple-400/30'
          }`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${
            isDark ? 'border-slate-700/50' : 'border-slate-200/50'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-red-500' : 'bg-red-400'
              }`}></div>
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-yellow-500' : 'bg-yellow-400'
              }`}></div>
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-green-500' : 'bg-green-400'
              }`}></div>
            </div>
            <h3 className={`text-lg font-bold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              {project.title} - Live Demo
            </h3>
            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 hover:bg-purple-500/20 rounded-full transition-colors ${
                  isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-500 hover:text-purple-600'
                }`}
                title="Open in new tab"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={handleModalClose}
                className={`p-2 hover:bg-purple-500/20 rounded-full transition-colors ${
                  isDark ? 'text-slate-400 hover:text-purple-400' : 'text-slate-500 hover:text-purple-600'
                }`}
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Website Preview */}
          <div className="relative h-full">
            <iframe
              src={project.liveUrl}
              title={`${project.title} Live Demo`}
              className="w-full h-full border-0"
              loading="lazy"
              onLoad={handleIframeLoad}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />
            
            {/* Loading Overlay */}
            {isLoading && (
              <div className={`absolute inset-0 flex items-center justify-center ${
                isDark ? 'bg-slate-800' : 'bg-white'
              }`}>
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Loading {project.title}...
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={`p-4 border-t ${
            isDark ? 'border-slate-700/50' : 'border-slate-200/50'
          }`}>
            <div className="flex items-center justify-between">
              <p className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Interactive preview of {project.title}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-medium text-sm`}
              >
                <FiMaximize2 className="w-4 h-4" />
                Open Full Site
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
