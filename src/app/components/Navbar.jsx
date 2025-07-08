"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Portfolio",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 shadow-2xl' 
          : 'bg-gray-900/40 backdrop-blur-md'
      }`}
      style={{ boxShadow: scrolled ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : undefined }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center">
              <img 
                src="/images/Logoimage.svg"
                alt="Abhishek Logo" 
                width={48} 
                height={48}
                className="transition-transform duration-300 group-hover:scale-110 rounded-full border-2 border-primary-400 shadow-md"
                style={{ display: 'block' }}
              />
              <span className="ml-3 text-lg font-bold text-white hidden sm:inline-block tracking-tight">
                Abhishek
              </span>
            </div>
            <span className="ml-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 text-xs font-semibold shadow-sm border border-primary-500/30 hidden md:inline-block">
              Freelance Full Stack Developer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink href={link.path} title={link.title} />
              </motion.div>
            ))}
            {/* Hire Me CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="ml-4 px-6 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 border-2 border-transparent hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Hire Me CTA */}
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-md border-2 border-transparent hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 text-sm"
              style={{ minWidth: 90 }}
            >
              Hire Me
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 shadow-2xl"
          >
            <MenuOverlay links={navLinks} />
            <div className="flex justify-center py-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg border-2 border-transparent hover:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400 text-base"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;