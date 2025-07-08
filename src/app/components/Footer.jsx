"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2"
          >
            <span className="text-white font-semibold">Abhishek</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Full Stack Developer</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:abhishek@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-sm"
          >
            <span>© {currentYear} All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              Made with <FaHeart className="w-3 h-3 text-red-400 animate-pulse" /> by Abhishek
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;