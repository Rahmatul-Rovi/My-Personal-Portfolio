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