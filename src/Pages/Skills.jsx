import React from "react";

const Skills = () => {
  const skillList = [
    { name: "HTML5", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS3", icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Express.js", icon: "" },
    { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    { name: "C++", icon: "https://cdn.worldvectorlogo.com/logos/c.svg" },
    { name: "Java", icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
    { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
    { name: "Spring Boot", icon: "https://cdn.worldvectorlogo.com/logos/spring-3.svg" },
    { name: "Postman", icon: "https://cdn.worldvectorlogo.com/logos/postman.svg" },
    { name: "Git & GitHub", icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
  ];

  return (
    <section id="skills" className="py-16 bg-base-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
          My Technical <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillList.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 30} 
              data-aos-offset="100" 
              className="bg-base-200 p-4 rounded-xl shadow-sm hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 border border-base-300 group flex flex-col items-center justify-center"
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center bg-white/5 rounded-lg p-2">
                {skill.name === "Express.js" ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-full h-full fill-current text-base-content opacity-90 group-hover:scale-110 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.3 16.5h-1.8l-1.5-2.4-1.5 2.4h-1.8l2.4-3.6-2.4-3.6h1.8l1.5 2.4 1.5-2.4h1.8l-2.4 3.6 2.4 3.6zM6.6 16.5V7.5H12v1.5H8.1v2.25h3.15v1.5H8.1v2.25H12v1.5H6.6z" />
                  </svg>
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>

              <h3 className="text-sm font-semibold group-hover:text-blue-500 transition-colors">
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