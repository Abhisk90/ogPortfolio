"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const longestPhrase = "Web Developer";
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 text-center lg:text-left space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 text-primary-400 text-sm font-medium backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-tight"
            >
              <span
                className="bg-gradient-to-r from-primary-400 via-yellow-400 to-secondary-500 bg-clip-text text-transparent drop-shadow-md"
                style={{
                  textShadow: "0 2px 12px rgba(0,0,0,0.12)",
                  letterSpacing: "-0.01em",
                  display: "inline-block",
                }}
              >
                Hello, I&apos;m
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500"
                style={{ display: 'inline-block', minWidth: `${longestPhrase.length + 2}ch`, textAlign: 'left' }}
              >
                <TypeAnimation
                  sequence={[
                    "Abhishek",
                    1000,
                    "Web Developer",
                    1000,
                    "Mobile Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{ display: 'inline-block', minWidth: `${longestPhrase.length + 2}ch`, textAlign: 'left' }}
                />
              </motion.span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Cultivating digital landscapes with finesse, I specialize in the MERN stack. 
            With HTML, CSS, and JavaScript as my brushstrokes and MongoDB, Express.js, 
            React, and Node.js as my canvas, I sculpt seamless digital experiences. 
            Let&apos;s craft brilliance together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <a
              href="/London-Resume-Template-Professional.pdf"
              download="London-Resume.pdf"
              className="group relative px-8 py-4 rounded-xl font-semibold text-white border-2 border-gray-600 hover:border-primary-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-gray-900/50"
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-2xl">
              <div className="rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-1">
                <Image
                  src="/images/hero-image.png"
                  alt="Abhishek - Web Developer"
                  className="rounded-full object-cover"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-60"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full opacity-60"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;