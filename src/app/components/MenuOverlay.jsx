"use client";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-8 items-center space-y-4">
      {links.map((link, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <NavLink href={link.path} title={link.title} />
        </motion.li>
      ))}
    </ul>
  );
};

export default MenuOverlay;