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
            >
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

                {/* Category Badge */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6">
                {/* Icon & Verified */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-purple-500/15 text-xl text-blue-500">
                    <FaAward />
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Completed
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-7 text-base-content transition-colors duration-300 group-hover:text-blue-500">
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="min-h-[48px] text-sm leading-6 text-base-content/60">
                  {cert.organization}
                </p>

                {/* Bottom Info */}
                <div className="mt-5 flex items-center justify-between border-t border-base-content/10 pt-4">
                  <div>
                    <span className="text-xs text-base-content/40">
                      Issued Date
                    </span>
                    <p className="mt-1 text-sm font-semibold text-base-content/70">
                      {cert.issueDate}
                    </p>
                  </div>

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    title="View Certificate"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-content/10 bg-base-100 text-base-content/50 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Bottom Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom Achievement Note */}
        <div
          className="mt-14 text-center"
          data-aos="fade-up"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-base-content/5 bg-base-200 px-6 py-4">
            <FaAward className="text-xl text-blue-500" />
            <p className="text-sm text-base-content/60">
              Always learning, improving, and building new skills.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
