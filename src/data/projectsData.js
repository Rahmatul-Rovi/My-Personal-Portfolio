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

     overview:
      "A loan management application that helps users apply for loans and track application and repayment status.",
    challenges: [
      "Managing loan application statuses.",
      "Implementing approval and disbursement workflows.",
      "Handling repayment-related operations.",
    ],
  },

    {
    id: "resume-ai",
    title: "ResumeAI - AI Resume Analyzer",
    description:
      "An AI-powered resume analyzer built with Next.js and Gemini AI. Users can upload PDF resumes, paste job descriptions, and receive match scores with suggestions in Bengali.",
    image: AI,
    liveLink: "https://resume-ai-sigma-seven.vercel.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/Resume-AI",
    tags: ["Next.js", "Google AI", "PostgreSQL", "Prisma", "NextAuth"],
    category: "AI Application",
    features: [
      "PDF resume upload",
      "Job description analysis",
      "AI-powered resume evaluation",
      "Resume match score",
      "Improvement suggestions",
      "Bengali feedback",
    ],
    overview:
      "An AI-powered application that analyzes resumes against job descriptions and provides useful feedback.",
    challenges: [
      "Integrating Gemini AI into the application.",
      "Processing uploaded PDF resumes.",
      "Generating relevant resume analysis and suggestions.",
    ],
  },

  {
    id: "parcel-management",
    title: "Parcel Management System",
    description:
      "A delivery management system featuring parcel booking, real-time tracking, and role-based dashboards.",
    image: parcel,
    liveLink: "https://parcel-management-system-792e2.web.app/",
    githubLink:
      "https://github.com/Rahmatul-Rovi/Percel-Delivery-Management-Client",
    tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    category: "Full Stack",
    features: [
      "Parcel booking",
      "Parcel tracking",
      "Delivery management",
      "Role-based dashboards",
      "User authentication",
      "Responsive interface",
    ],
    overview:
      "A delivery management platform for handling parcel booking and delivery operations.",
    challenges: [
      "Managing parcel delivery status.",
      "Implementing role-based functionality.",
      "Organizing parcel tracking information.",
    ],
  },

   {
    id: "car-doctor",
    title: "Car Doctor - Automotive Services",
    description:
      "A Next.js automotive service booking application with service browsing and appointment booking functionality.",
    image: Car,
    liveLink: "https://car-doctor-lovat.vercel.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/Car-Doctor-Next-Js",
    tags: ["Next.js", "React", "Tailwind CSS"],
    category: "Frontend",
    features: [
      "Automotive service browsing",
      "Service details",
      "Appointment booking",
      "Responsive UI",
      "Next.js navigation",
    ],

     overview:
      "A web application designed to make automotive service browsing and appointment booking easier.",
    challenges: [
      "Building responsive service pages.",
      "Managing navigation and data fetching.",
      "Creating an intuitive booking interface.",
    ],
  },

   {
    id: "api-practice",
    title: "API Practice",
    description:
      "A practical application focused on API integration, dynamic data fetching, and state management.",
    image: api,
    liveLink: "https://api-practice-frontend-one.vercel.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/API-Practice-Frontend",
    tags: ["React", "Tailwind CSS", "API Integration", "PostgreSQL"],
    category: "Full Stack",
      features: [
      "API integration",
      "Dynamic data fetching",
      "State management",
      "Responsive layouts",
    ],
      overview:
      "A practical development project focused on connecting frontend applications with APIs.",
    challenges: [
      "Handling API responses.",
      "Managing dynamic application data.",
      "Building reusable frontend components.",
    ],
  },

   {
    id: "rise-seven",
    title: "Rise Seven - Digital Agency",
    description:
      "A modern and responsive digital marketing agency landing page with smooth navigation and optimized UI components.",
    image: Rise,
    liveLink: "https://rise-at-seven7.netlify.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/Rise_Seven",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    category: "Frontend",
     features: [
      "Modern landing page",
      "Responsive design",
      "Smooth navigation",
      "Reusable components",
      "Modern UI design",
    ],
      overview:
      "A digital agency landing page focused on professional design and responsive user experience.",
    challenges: [
      "Maintaining consistent UI across devices.",
      "Creating reusable components.",
      "Building a clean landing page layout.",
    ],
  },

   {
    id: "hospital-management",
    title: "Hospital Management",
    description:
      "A healthcare platform for doctor appointments and medical service management with authentication and dashboards.",
    image: Hospital,
    liveLink: "https://hospital-management-86.netlify.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/Hospital-Management",
    tags: ["React", "Tailwind CSS", "Firebase"],
    category: "Full Stack",
     features: [
      "Doctor appointment interface",
      "User authentication",
      "Healthcare services",
      "Dashboard",
      "Responsive design",
    ],
     overview:
      "A healthcare management platform designed to improve interaction between patients and healthcare services.",
    challenges: [
      "Managing authentication.",
      "Building appointment-related interfaces.",
      "Creating a responsive healthcare platform.",
    ],
  },

   {
    id: "tax-management",
    title: "Tax Management System",
    description:
      "A web application for tax calculations, financial data tracking, and document management.",
    image: Tax,
    liveLink: "https://rahmatul-rovi.github.io/Tax_Management/",
    githubLink: "https://github.com/Rahmatul-Rovi/Tax_Management",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    category: "Frontend",
    features: [
      "Tax calculation interface",
      "Financial data tracking",
      "Document management",
      "Responsive design",
    ],

     overview:
      "A web-based tax management tool designed to simplify tax-related calculations and information management.",
    challenges: [
      "Implementing calculation logic.",
      "Managing user input.",
      "Designing a clean interface.",
    ],
  },

   {
    id: "personal-portfolio",
    title: "My Personal Portfolio",
    description:
      "A responsive developer portfolio built with React and Tailwind CSS, featuring animations and a modern UI.",
    image: Portfolio,
    liveLink: "https://my-personal-portfolio-86.netlify.app/",
    githubLink: "https://github.com/Rahmatul-Rovi/My-Personal-Portfolio",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
]