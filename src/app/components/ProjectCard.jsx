"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, imgUrl, gitUrl, previewUrl, tech }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: "0 8px 32px 0 rgba(251,191,36,0.10)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Tech Stack Badges */}
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/20 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <motion.a
            href={gitUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-primary-500/20 text-gray-300 hover:text-primary-400 rounded-lg border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 text-sm font-medium"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={previewUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 hover:from-primary-500/30 hover:to-secondary-500/30 text-primary-400 hover:text-primary-300 rounded-lg border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 text-sm font-medium"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            Live Demo
          </motion.a>
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;