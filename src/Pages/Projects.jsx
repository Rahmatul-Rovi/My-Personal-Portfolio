import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiArrowRight,
  FiCode,
  FiFolder,
} from "react-icons/fi";

import projectsData from "../data/projectsData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projectsData
    : projectsData.slice(0, 6);

      return (
    <section
      id="projects"
      className="relative py-20 px-5 sm:px-8 bg-base-200 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-sm mb-5">
            <FiCode />
            My Creative Work
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Featured{" "}
            <span className="text-blue-600">Projects</span>
          </h2>

          <p className="text-base-content/60 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects, technical skills,
            and practical experience in building modern
            web applications.
          </p>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
        </div>