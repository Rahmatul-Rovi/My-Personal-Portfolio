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

            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    className="group flex w-fit items-center gap-3 text-sm opacity-70 transition-all duration-300 hover:translate-x-2 hover:text-blue-600 hover:opacity-100"
                  >
                    <span className="text-blue-600 transition-colors group-hover:text-purple-600">
                      {item.icon}
                    </span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Connect With Me
            </h3>

            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <p className="mb-6 text-sm leading-7 opacity-65">
              Let's connect and discuss new ideas, projects, and
              opportunities.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-base-content/10 bg-base-100 text-lg text-base-content shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Resume */}
          <div>
            <h3 className="mb-4 text-lg font-bold">
              Let's Work Together
            </h3>

            <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

            <p className="mb-6 text-sm leading-7 opacity-65">
              Interested in working together? Explore my resume or
              feel free to contact me for new opportunities.
            </p>

            <a
              href="/RAHMATUL_RESUME_FULLSTACK.pdf"
              download="Rahmatul_Rovi_Resume.pdf"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-base-content/10 py-7">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">

            <p className="text-sm opacity-60">
              © {currentYear}{" "}
              <span className="font-semibold opacity-100">
                Rahmatul Rovi
              </span>
              . All Rights Reserved.
            </p>

            <p className="flex items-center gap-2 text-sm opacity-70">
              Designed & Built with
              <FaHeart className="animate-pulse text-red-500" />
              by
              <span className="font-semibold text-blue-600">
                Rahmatul Rovi
              </span>
            </p>

            <a
              href="/#home"
              className="group flex items-center gap-2 rounded-xl border border-base-content/10 bg-base-100 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              Back to Top
              <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
