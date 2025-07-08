"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaCertificate, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies and a proven track record of delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/10 to-secondary-500/10 p-2">
              <Image 
                src="/images/about-image.png" 
                width={500} 
                height={500}
                alt="About Abhishek"
                className="rounded-xl object-cover"
              />
            </div>
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full opacity-60"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-500 rounded-full opacity-60"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Full Stack Web Developer
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a results-driven full-stack developer with a passion for creating innovative web solutions. 
                With expertise in the MERN stack and modern development practices, I specialize in building 
                scalable, user-centric applications that drive business growth and enhance user experiences.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Key Strengths</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="p-2 bg-primary-500/20 rounded-lg mt-1">
                    <FaRocket className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Fast Delivery</h5>
                    <p className="text-gray-400 text-sm">Quick turnaround times with high-quality code</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="p-2 bg-secondary-500/20 rounded-lg mt-1">
                    <FaUsers className="w-4 h-4 text-secondary-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Team Player</h5>
                    <p className="text-gray-400 text-sm">Excellent collaboration and communication skills</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="p-2 bg-primary-500/20 rounded-lg mt-1">
                    <FaLightbulb className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Problem Solver</h5>
                    <p className="text-gray-400 text-sm">Creative solutions to complex technical challenges</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="p-2 bg-secondary-500/20 rounded-lg mt-1">
                    <FaCode className="w-4 h-4 text-secondary-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Clean Code</h5>
                    <p className="text-gray-400 text-sm">Maintainable, scalable, and well-documented code</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Technical Expertise</h4>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Frontend</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Backend</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Database</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">DevOps</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Testing</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">UI/UX</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Education & Certifications</h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <FaGraduationCap className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">B.Tech in Computer Science</h5>
                    <p className="text-gray-400 text-sm">Comprehensive education in computer science fundamentals, algorithms, and software engineering principles.</p>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800/50"
                >
                  <div className="p-3 bg-secondary-500/20 rounded-lg">
                    <FaCertificate className="w-5 h-5 text-secondary-400" />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-1">AWS Cloud Practitioner</h5>
                    <p className="text-gray-400 text-sm">Certified in AWS cloud services and best practices for scalable applications.</p>
                  </div>
                </motion.div>
          </div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;