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

  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-base-100 px-5 py-24 md:px-8"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-500">
            <FaAward />
            Achievements & Learning
          </span>

           <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-base-content md:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-base-content/60 md:text-lg">
            A collection of achievements, certifications, competitions, and
            learning experiences that reflect my continuous journey of growth
            and development.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificateList.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="group relative overflow-hidden rounded-3xl border border-base-content/10 bg-base-200 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
            ></div>

             {/* Certificate Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-base-300">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    View Certificate
                    <FaExternalLinkAlt />
                  </a>
                </div>