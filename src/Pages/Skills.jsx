import React from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Building beautiful user interfaces",
      icon: Code2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      skills: [
        {
          name: "HTML5",
          icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
        },
        {
          name: "JavaScript",
          icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          name: "React",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ],
    },

    {
      title: "Backend Development",
      subtitle: "Building powerful server-side applications",
      icon: Server,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      skills: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          dark: true,
        },
        {
          name: "Java",
          icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
        },
      ],
    },

      {
      title: "Database",
      subtitle: "Managing and organizing data efficiently",
      icon: Database,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      skills: [
        {
          name: "MongoDB",
          icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Prisma ORM",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
          dark: true,
        },
      ],
    },
     {
      title: "Others & Tools",
      subtitle: "Development tools and programming languages",
      icon: Wrench,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      skills: [
        {
          name: "Firebase",
          icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
        },
        {
          name: "C++",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
        },
        {
          name: "Postman",
          icon: "https://cdn.worldvectorlogo.com/logos/postman.svg",
        },
        {
          name: "Git & GitHub",
          icon: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
          dark: true,
        },
      ],
    },
  ];

   return (
    <section
      id="skills"
      className="relative py-20 px-5 sm:px-8 bg-base-100 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold mb-4">
            <Sparkles size={16} />
            My Expertise
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Technical{" "}
            <span className="text-blue-600">Skills</span>
          </h2>

          <p className="text-base-content/60 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>

          <div className="w-20 h-1 bg-blue-600 rounded-full mx-auto mt-6" />
        </div>

         {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-base-200/70 border border-base-300 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-7">

                  <div
                    className={`w-12 h-12 rounded-xl ${category.bg} ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <CategoryIcon size={25} />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold">
                      {category.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-base-content/50 mt-1">
                      {category.subtitle}
                    </p>
                  </div>

                </div>

   {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-base-100 border border-base-300 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300 hover:scale-[1.03] group/skill"
                    >
                      <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-base-200 p-1.5">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          loading="lazy"
                          className={`w-full h-full object-contain group-hover/skill:scale-110 transition-transform duration-300 ${
                            skill.dark ? "dark:invert" : ""
                          }`}
                        />
                      </div>

                      <span className="text-xs sm:text-sm font-semibold text-base-content/80 group-hover/skill:text-blue-500 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}

                </div>
                 {/* Bottom Decoration */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              </div>
            );
          })}

        </div>

        {/* Bottom Text */}
        <div
          className="text-center mt-12"
          data-aos="fade-up"
        >
          <p className="text-sm text-base-content/50">
            <span className="text-blue-500 font-semibold">
              Always Learning
            </span>{" "}
            — Exploring new technologies and improving my skills.
          </p>
