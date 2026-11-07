
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiTarget,
  FiArrowUpRight,
} from "react-icons/fi";

import projectsData from "../data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find(
    (item) => item.id === id
  );

  // Project Not Found
  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-base-200 px-5">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">
            404
          </h1>

          <h2 className="text-2xl font-bold mb-3">
            Project Not Found
          </h2>

          <p className="text-base-content/60 mb-7">
            Sorry, the project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 px-5 sm:px-8 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-base-100 border border-base-300 font-semibold text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 mb-8"
        >
          <FiArrowLeft />
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="text-center mb-10" data-aos="fade-up">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-sm mb-5">
            {project.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            {project.title}
          </h1>

          <p className="max-w-3xl mx-auto text-base-content/60 leading-relaxed">
            {project.description}
          </p>

        </div>

        {/* Main Project Image */}
        <div
          className="relative overflow-hidden rounded-2xl border border-base-300 shadow-2xl mb-10 group"
          data-aos="zoom-in"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[550px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
          data-aos="fade-up"
        >

          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <FiExternalLink size={19} />
            View Live Project
            <FiArrowUpRight />
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-base-content/20 font-bold hover:bg-base-content hover:text-base-100 transition-all duration-300"
          >
            <FiGithub size={20} />
            View Source Code
          </a>

        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

          {/* Left Side */}
          <div className="lg:col-span-2 space-y-7">

            {/* Overview */}
            <div
              className="bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                  <FiLayers size={22} />
                </div>

                <h2 className="text-2xl font-bold">
                  Project Overview
                </h2>
              </div>

              <p className="text-base-content/70 leading-8">
                {project.overview}
              </p>
            </div>

            {/* Features */}
            <div
              className="bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <FiCheckCircle size={22} />
                </div>

                <h2 className="text-2xl font-bold">
                  Key Features
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-base-200/70 border border-base-300 hover:border-emerald-500/40 transition-colors"
                  >
                    <FiCheckCircle
                      className="text-emerald-500 mt-0.5 shrink-0"
                      size={19}
                    />

                    <span className="text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>
            </div>

            {/* Challenges */}
            <div
              className="bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <FiTarget size={22} />
                </div>

                <h2 className="text-2xl font-bold">
                  Challenges & Solutions
                </h2>
              </div>

              <div className="space-y-4">

                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-base-200/70"
                  >
                    <span className="w-8 h-8 shrink-0 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
                      {index + 1}
                    </span>

                    <p className="text-sm leading-7 text-base-content/70">
                      {challenge}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* Right Side - Tech Stack */}
          <div className="space-y-7">

            <div
              className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm lg:sticky lg:top-24"
              data-aos="fade-up"
            >

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <FiCode size={22} />
                </div>

                <h2 className="text-xl font-bold">
                  Technologies Used
                </h2>
              </div>

              <div className="flex flex-wrap gap-3">

                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}

              </div>

              <div className="divider my-6" />

              <h3 className="font-bold mb-4">
                Project Links
              </h3>

              <div className="space-y-3">

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <span className="flex items-center gap-2 font-semibold text-sm">
                    <FiExternalLink />
                    Live Website
                  </span>

                  <FiArrowUpRight />
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-base-300 hover:bg-base-200 transition-colors"
                >
                  <span className="flex items-center gap-2 font-semibold text-sm">
                    <FiGithub />
                    GitHub Repository
                  </span>

                  <FiArrowUpRight />
                </a>

              </div>

            </div>

          </div>
        </div>

        {/* Back to Projects */}
        <div className="text-center mt-14">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-base-100 border border-base-300 font-bold hover:border-blue-500 hover:text-blue-500 transition-all duration-300"
          >
            <FiArrowLeft />
            Explore More Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;
