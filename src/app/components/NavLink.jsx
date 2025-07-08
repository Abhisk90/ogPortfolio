"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
      >
        <span className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium relative z-10">
          {title}
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          initial={false}
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </Link>
  );
};

export default NavLink;