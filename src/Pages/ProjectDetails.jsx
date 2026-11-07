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