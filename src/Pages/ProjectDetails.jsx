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
        ></div>