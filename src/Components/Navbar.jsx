import React from 'react';

const Navbar = () => {
  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = (
    <>
      <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-500 font-medium">About</button></li>
      <li><button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 font-medium">Skills</button></li>
      <li><button onClick={() => scrollToSection('projects')} className="hover:text-blue-500 font-medium">Projects</button></li>
      <li><button onClick={() => scrollToSection('certificates')} className="hover:text-blue-500 font-medium">Certificates</button></li>
      <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-500 font-medium">Contact</button></li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 px-4 md:px-10 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        {/* Logo */}
        <a className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer">
          DevPortfolio
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Resume Button */}
        <a 
          href="/resume.pdf" 
          download="My_Resume.pdf"
          className="btn btn-primary btn-outline rounded-full hover:scale-105 transition-all duration-300"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;