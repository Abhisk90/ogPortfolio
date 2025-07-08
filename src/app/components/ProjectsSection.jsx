"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Next.js, featuring smooth animations and a clean design.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React", "Next.js", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "A stunning photography portfolio showcasing creative work with advanced filtering and gallery features.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React", "Styled Components"],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Mobile-first food delivery app with real-time tracking, payment processing, and restaurant management.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React Native", "Firebase"],
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Complete authentication and CRUD operations template with Firebase integration and modern UI components.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React", "Firebase"],
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Interactive learning platform with progress tracking, quizzes, and comprehensive full-stack development curriculum.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
            Portfolio
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Selected projects that showcase my skills in web and mobile development. Each project is built with a focus on clean code, performance, and user experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-3 mb-12"
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </motion.div>

      <motion.ul
        ref={ref}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;