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

         <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-2">
            <FiFolder className="text-blue-500" size={20} />
            <h3 className="font-bold text-lg">
              All Projects
            </h3>
          </div>

          <span className="text-sm text-base-content/50">
            {projectsData.length} Projects
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="group bg-base-100 rounded-2xl overflow-hidden border border-base-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >

              {/* Project Image - Clickable */}
              <Link
                to={`/projects/${project.id}`}
                className="relative block h-52 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-300" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiArrowUpRight size={22} />
                </div>

                <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                  Explore Project
                </div>
              </Link>