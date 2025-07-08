"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaCode, FaGithub, FaHeart, FaCoffee } from "react-icons/fa";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects Built",
    value: "15",
    postfix: "+",
    icon: FaCode,
    description: "Personal & Client Projects",
  },
  {
    metric: "GitHub Stars",
    value: "50",
    icon: FaGithub,
    description: "Community Recognition",
  },
  {
    metric: "Coffee Cups",
    value: "1000",
    postfix: "+",
    icon: FaCoffee,
    description: "Late Night Coding Sessions",
  },
  {
    metric: "Bugs Fixed",
    value: "200",
    postfix: "+",
    icon: FaHeart,
    description: "Problem Solving Wins",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A few fun stats from my coding adventures and late-night debugging sessions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievementsList.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/20 flex flex-col items-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-400" />
                  </div>
                </div>

                {/* Number */}
                <div className="text-center mb-2 min-h-[48px] flex items-end justify-center">
                  <h3
                    className="text-3xl lg:text-4xl font-bold text-white flex items-end justify-center"
                    style={{ lineHeight: '1.1', minHeight: '44px', whiteSpace: 'nowrap', letterSpacing: '0.5px' }}
                  >
                    {achievement.prefix}
                    <span style={{ display: 'inline-block', minWidth: '70px', whiteSpace: 'nowrap', lineHeight: '1.1', overflow: 'hidden' }}>
                      <AnimatedNumbers
                        includeComma
                        animateToNumber={parseInt(achievement.value)}
                        locale="en-US"
                        className="text-white text-3xl lg:text-4xl font-bold"
                        configs={(_, index) => {
                          return {
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1),
                          };
                        }}
                      />
                    </span>
                    {achievement.postfix}
                  </h3>
                </div>

                {/* Metric */}
                <p className="text-primary-400 font-semibold text-center mb-1 mt-2 text-lg">
                  {achievement.metric}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm text-center">
                  {achievement.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;