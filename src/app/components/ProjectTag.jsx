"use client";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaLayerGroup } from "react-icons/fa";

const ICONS = {
  All: <FaLayerGroup className="w-4 h-4 mr-2" />,
  Web: <FaGlobe className="w-4 h-4 mr-2" />,
  Mobile: <FaMobileAlt className="w-4 h-4 mr-2" />,
};

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      className={`flex items-center px-6 py-3 rounded-2xl border-2 font-semibold text-base transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-400 shadow-sm min-w-[120px] justify-center
        ${isSelected
          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-primary-500 shadow-lg'
          : 'bg-gray-700/50 text-primary-400 border-gray-600 hover:border-primary-400'}
      `}
      onClick={() => onClick(name)}
      whileHover={{ scale: 1.10 }}
      whileTap={{ scale: 0.97 }}
      animate={isSelected ? { scale: 1.08, boxShadow: "0 4px 24px 0 rgba(251,191,36,0.10)" } : { scale: 1, boxShadow: "none" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      type="button"
    >
      {ICONS[name]}
      <span>{name}</span>
    </motion.button>
  );
};

export default ProjectTag;