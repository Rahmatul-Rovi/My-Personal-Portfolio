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