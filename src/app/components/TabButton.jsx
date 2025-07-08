"use client";
import { motion } from "framer-motion";

const TabButton = ({ children, selectTab, active }) => {
  const buttonVariants = {
    active: {
      scale: 1.05,
      backgroundColor: "rgba(251, 191, 36, 0.2)",
      borderColor: "rgba(251, 191, 36, 0.5)",
      color: "#fbbf24",
    },
    inactive: {
      scale: 1,
      backgroundColor: "rgba(55, 65, 81, 0.3)",
      borderColor: "rgba(75, 85, 99, 0.5)",
      color: "#9ca3af",
    },
  };

  return (
    <motion.button
      className="px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 backdrop-blur-sm"
      onClick={selectTab}
      variants={buttonVariants}
      animate={active ? "active" : "inactive"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default TabButton;