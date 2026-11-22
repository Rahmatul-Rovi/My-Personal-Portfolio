import React from "react";
import Bubt from "../assets/Bubt-certificate.png";
import Hero from "../assets/Programming-hero-certificate.png";
import hack from "../assets/Hackthon.png";
import Aptitude from "../assets/Grameenphone-Aptitude-Certificate.png";
import ATS from "../assets/Grameenphone-ATS-CV-Certificate.png";

import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const Certificates = () => {
  const certificateList = [
    {
      id: 1,
      title: "Web Development Course",
      organization: "Programming Hero",
      issueDate: "2025",
      image: Hero,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Intra Intake Programming Contest (IIPC)",
      organization: "Bangladesh University of Business and Technology",
      issueDate: "2024",
      image: Bubt,
      category: "Programming Contest",
    },
    {

      id: 3,
      title: "Hacktasyne 10-Hour Hackathon",
      organization: "Bangladesh University of Business and Technology",
      issueDate: "2025",
      image: hack,
      category: "Hackathon",
    },
    {
      id: 4,
      title: "Ace the Aptitude Test",
      organization: "Grameenphone Academy",
      issueDate: "November 15, 2026",
      image: Aptitude,
      category: "Career Development",
    },
    {
      id: 5,
      title: "Build ATS-Winning CV",
      organization: "Grameenphone Academy",
      issueDate: "November 15, 2026",
      image: ATS,
      category: "Career Development",
    },
  ];