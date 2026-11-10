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

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Rahmatul-Rovi",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/",
      name: "LinkedIn",
    },
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/",
      name: "Facebook",
    },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden rounded-t-[2rem] border-t border-base-content/10 bg-base-300 text-base-content">

      {/* Subtle Gradient Decoration */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-[100px]"></div>
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-purple-500/10 blur-[100px]"></div>

      {/* Gradient Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="/#home"
              className="inline-block text-3xl font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Rahmatul-Rovi
              </span>
              <span className="text-blue-600">.</span>
            </a>

 <p className="mt-5 max-w-xs text-sm leading-7 opacity-65">
              Passionate MERN Stack Developer focused on creating modern,
              responsive, and user-friendly web applications.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              Available for Opportunities
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Quick Navigation
            </h3>