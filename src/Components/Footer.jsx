import React from "react";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaEnvelope,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaHeart,
  FaArrowUp,
  FaDownload,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
    const navLinks = [
    { name: "About", id: "about", icon: <FaUser /> },
    { name: "Skills", id: "skills", icon: <FaCode /> },
    { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
    { name: "Education", id: "education", icon: <FaGraduationCap /> },
    { name: "Certificates", id: "certificates", icon: <FaCertificate /> },
    { name: "Contact", id: "contact", icon: <FaEnvelope /> },
  ];