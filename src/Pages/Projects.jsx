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
