import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { useTheme } from "../App";

export default function ContactModal({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isDark } = useTheme();

  const submit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:bendarnoufel@gmail.com?subject=Contact%20from%20portfolio&body=${body}`;

    setIsSubmitting(false);
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
          className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`relative z-10 w-full max-w-md backdrop-blur-xl shadow-2xl border rounded-2xl overflow-hidden ${
            isDark 
              ? 'bg-slate-800/95 border-purple-500/30' 
              : 'bg-white/95 border-purple-400/30'
          }`}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${
            isDark ? 'border-slate-700/50' : 'border-slate-200/50'
          }`}>
            <h3 className={`text-xl font-bold flex items-center gap-2 ${
              isDark ? 'text-white' : 'text-slate-800'
            }`}>
              <FiMail className="text-purple-400" />
              Contact Me
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-purple-500/20 rounded-full transition-colors"
            >
              <FiX className={`w-5 h-5 hover:text-purple-400 transition-colors ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="p-6 space-y-5">
            {/* Name */}
            <div>
              <label className={`text-sm font-medium flex items-center gap-2 mb-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <FiUser className="w-4 h-4" />
                Name
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                  isDark 
                    ? 'border-slate-600 bg-slate-700/50 text-white placeholder-slate-400' 
                    : 'border-slate-300 bg-white/80 text-slate-800 placeholder-slate-500'
                }`}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className={`text-sm font-medium flex items-center gap-2 mb-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <FiMail className="w-4 h-4" />
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${
                  isDark 
                    ? 'border-slate-600 bg-slate-700/50 text-white placeholder-slate-400' 
                    : 'border-slate-300 bg-white/80 text-slate-800 placeholder-slate-500'
                }`}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className={`text-sm font-medium flex items-center gap-2 mb-1 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                <FiMessageSquare className="w-4 h-4" />
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none ${
                  isDark 
                    ? 'border-slate-600 bg-slate-700/50 text-white placeholder-slate-400' 
                    : 'border-slate-300 bg-white/80 text-slate-800 placeholder-slate-500'
                }`}
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Buttons */}
            <div className={`flex justify-end gap-3 pt-4 border-t ${
              isDark ? 'border-slate-700/50' : 'border-slate-200/50'
            }`}>
              <button
                type="button"
                onClick={onClose}
                className={`px-4 py-2 transition-colors ${
                  isDark 
                    ? 'text-slate-400 hover:text-white' 
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-400 disabled:to-pink-400 text-white font-medium rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
