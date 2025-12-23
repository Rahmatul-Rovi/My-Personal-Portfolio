import React from 'react';
import { FaUser, FaCode, FaProjectDiagram, FaCertificate, FaEnvelope, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  // Page refresh/scroll to top function
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = (
    <>
      <li>
        <button onClick={() => scrollToSection('about')} className="flex items-center gap-2 hover:text-blue-500 font-medium transition-colors">
          <FaUser className="text-blue-600 text-xs" /> About
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('skills')} className="flex items-center gap-2 hover:text-blue-500 font-medium transition-colors">
          <FaCode className="text-blue-600 text-xs" /> Skills
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('projects')} className="flex items-center gap-2 hover:text-blue-500 font-medium transition-colors">
          <FaProjectDiagram className="text-blue-600 text-xs" /> Projects
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('certificates')} className="flex items-center gap-2 hover:text-blue-500 font-medium transition-colors">
          <FaCertificate className="text-blue-600 text-xs" /> Certificates
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 hover:text-blue-500 font-medium transition-colors">
          <FaEnvelope className="text-blue-600 text-xs" /> Contact
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 px-4 md:px-10 shadow-sm border-b border-white/5">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100 rounded-2xl w-56 border border-white/10 space-y-2">
            {navLinks}
          </ul>
        </div>
        
        {/* Logo - Click to Refresh/Top */}
        <button 
          onClick={handleLogoClick}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
        >
          Rahmatul-Rovi
        </button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Attractive Resume Button */}
        <a 
          href="/resume.pdf" 
          download="My_Resume.pdf"
          className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-bold text-white transition-all duration-300 bg-blue-600 rounded-full group hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 active:scale-95"
        >
          <FaDownload className="text-sm group-hover:animate-bounce" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;