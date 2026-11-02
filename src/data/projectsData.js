import Ecom from "../assets/ecom.png";
import News from "../assets/news.png";
import Tax from "../assets/tax.png";
import Bill from "../assets/billing.png";
import Portfolio from "../assets/portfolio.png";
import Book from "../assets/book.png";
import Hospital from "../assets/hospital.png";
import parcel from "../assets/parcel.png";
import gentle from "../assets/gentle.png";
import Loan from "../assets/loan.png";
import Restaurant from "../assets/restaurant.png";
import Rise from "../assets/rise.png";
import Car from "../assets/car.png";
import AI from "../assets/Resume-AI.png";
import api from "../assets/API.png";
import BazarDB from "../assets/BazarDB.png";

const projectsData = [
      {
    id: "tastytwists",
    title: "TastyTwists - Restaurant Management System",
    description:
      "A comprehensive full-stack restaurant management platform featuring an interactive dynamic menu, a secure cart system, Stripe payment integration, and role-based dashboards.",
    image: Restaurant,
    liveLink: "https://restaurant-jade-chi-81.vercel.app/",
    githubLink:
      "https://github.com/Rahmatul-Rovi/Restaurant-Management-System-Client",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    category: "Full Stack",
    features: [
      "Dynamic restaurant menu",
      "Secure shopping cart",
      "Stripe payment integration",
      "User authentication",
      "Role-based dashboards",
      "Admin management system",
    ],
    overview:
      "A full-stack restaurant management platform designed to simplify online food ordering and restaurant operations.",
    challenges: [
      "Managing user roles and dashboard access.",
      "Integrating payment functionality into the ordering workflow.",
      "Handling cart and order management.",
    ],
  },

   {
    id: "bazardb",
    title: "BazarDB - E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with Next.js and PostgreSQL via Prisma, featuring advanced search, filters, wishlist management, product reviews, and a role-based admin panel.",
    image: BazarDB,
    liveLink: "https://e-commerce-bazar-db.vercel.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/E-Commerce-BazarDB",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    category: "Full Stack",
    features: [
      "Advanced product search",
      "Product filtering",
      "Wishlist management",
      "Product reviews",
      "NextAuth authentication",
      "Role-based admin panel",
    ],
    overview:
      "A modern e-commerce platform built with Next.js, PostgreSQL and Prisma ORM to provide a complete online shopping experience.",
    challenges: [
      "Managing relational data using PostgreSQL and Prisma.",
      "Implementing authentication and role-based access.",
      "Building product search and filtering functionality.",
    ],
  },

   {
    id: "gentle-vibe",
    title: "Gentle Vibe - E-Commerce Platform",
    description:
      "A premium e-commerce and lifestyle apparel platform featuring dynamic product filtering, user authentication, shopping cart, and checkout.",
    image: gentle,
    liveLink: "https://gentle-vibe.web.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/Gentle-Vibe-Web-App",
    tags: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
    category: "Full Stack",
    features: [
      "Dynamic product filtering",
      "User authentication",
      "Shopping cart management",
      "Product management",
      "Checkout workflow",
      "Responsive interface",
    ],
       overview:
      "A premium lifestyle apparel shopping platform combining a modern frontend with backend database management.",
    challenges: [
      "Managing product data and filtering.",
      "Building a seamless shopping cart workflow.",
      "Connecting frontend functionality with backend APIs.",
    ],
  },
    
   {
    id: "loan-management",
    title: "Loan Management System",
    description:
      "A financial platform designed to simplify loan workflows with automated processing, status tracking, and user-focused interfaces.",
    image: Loan,
    liveLink: "https://loan-project-b8052.web.app/",
    githubLink:
      "https://github.com/Rahmatul-Rovi/Loan-Management-System-Client",
    tags: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
    category: "Full Stack",
    features: [
      "Loan application system",
      "Loan approval management",
      "Repayment tracking",
      "User dashboard",
      "Admin management",
      "Payment integration",
    ],
]