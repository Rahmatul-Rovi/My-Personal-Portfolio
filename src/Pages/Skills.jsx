import React from "react";

const Skills = () => {
  const skillList = [
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express.js", icon: "express" }, // special case
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "C++", icon: "https://cdn.worldvectorlogo.com/logos/c.svg" },
    { name: "Java", icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "Spring Boot", icon: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
    { name: "Git & GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  ];

  return (
    <section id="skills" className="py-20 bg-base-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">
          My Technical <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 50}
              className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-300 border border-base-300 group flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white/5 rounded-xl p-3 shadow-inner">
                
                {/* EXPRESS.JS SPECIAL LOGIC */}
                {skill.name === "Express.js" ? (
                  <svg
                    viewBox="0 0 256 64"
                    className="w-full h-full fill-current text-white opacity-90 group-hover:scale-110 transition-transform"
                  >
                    <path d="M0 50h256v6H0zM42.4 14.7h6.9l11.8 29.7 11.9-29.7h6.9L64.4 56h-6.9L42.4 14.7zm51.7 0h6.3v41.3h-6.3V14.7zm17.8 0h30.5v5.6h-24.2v11.6h22.5v5.5h-22.5v13h24.9V56h-31.2V14.7zm44.9 0h6.7l8.7 15.3 8.7-15.3h6.6l-11.8 20.2L187.4 56h-6.7l-9.2-16.1L162.4 56h-6.7l12.2-21.1-11.9-20.2zm48.3 0h6.3v41.3h-6.3V14.7z" />
                  </svg>
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>

              <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
