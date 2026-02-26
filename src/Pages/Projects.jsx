import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Ecom from '../assets/ecom.png';
import News from '../assets/news.png';
import Tax from '../assets/tax.png';
import Bill from '../assets/billing.png';
import Portfolio from '../assets/portfolio.png';
import Book from '../assets/book.png';
import Hospital from '../assets/hospital.png';
import parcel from '../assets/parcel.png';
import gentle from '../assets/gentle.png';

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "Parcel-Management-System",
            description: "A seamless delivery management system featuring real-time tracking, secure parcel booking, and role-based dashboards for efficient logistics handling.",
            image: parcel, 
            liveLink: "https://parcel-management-system-792e2.web.app/",
            githubLink: "https://github.com/Rahmatul-Rovi/Percel-Delivery-Management-Client",
            tags: ["React", "Tailwind", "NodeJS", "MongoDB"]
        },
         {
            id: 2,
            title: "Hospital-Management",
            description: "A modern healthcare platform for easy doctor appointments and medical service management. Features secure user authentication, a responsive dashboard, and real-time scheduling to improve patient-provider interaction.",
            image: Hospital,
            liveLink: "https://hospital-management-86.netlify.app/",
            githubLink: "https://github.com/Rahmatul-Rovi/Hospital-Management",
            tags: ["React", "Tailwind", "Firebase", "NodeJS"]
        },
        {
            id: 3,
            title: "Gentle-Vibe",
            description: "A premium lifestyle and apparel platform offering a curated selection of contemporary fashion with a minimal aesthetic.",
            image: gentle,
            liveLink: "https://gentle-vibe.web.app/",
            githubLink: "https://github.com/Rahmatul-Rovi/Gentle-Vibe-Web-App",
            tags: ["React", "Tailwind", "MongoDB", "NodeJS"]
        },
         {
            id: 4,
            title: "My-Personal-Portfolio",
            description: "A high-performance, responsive developer portfolio built with React and Tailwind CSS, featuring smooth animations and a modern dark-themed UI.",
            image: Portfolio,
            liveLink: "https://my-personal-portfolio-86.netlify.app/",
            githubLink: "https://github.com/Rahmatul-Rovi/My-Personal-Portfolio",
            tags: ["React", "Tailwind"]
        },
        
        {
            id: 5,
            title: "Billing-System-Management",
            description: "Automated invoicing and sales tracking system with real-time inventory management and data precision.",
            image: Bill,
            liveLink: "https://github.com/Rahmatul-Rovi/Billing_System_Management",
            githubLink: "https://github.com/Rahmatul-Rovi/Billing_System_Management",
            tags: ["Python", "MySQL"]
        },
         {
            id: 6,
            title: "Tax-Management-System",
            description: "A secure web tool for automated tax calculations, financial data tracking, and document management.",
            image: Tax,
            liveLink: "https://rahmatul-rovi.github.io/Tax_Management/",
            githubLink: "https://github.com/Rahmatul-Rovi/Tax_Management",
            tags: ["Html", "Tailwind", "JavaScript"]
        },
         {
            id: 7,
            title: "E-Commerce-App",
            description: "A modern shopping platform with dynamic product filtering and a secure, seamless checkout experience.",
            image: Ecom, 
            liveLink: "https://ecommerce-app-86.netlify.app/",
            githubLink: "https://github.com/Rahmatul-Rovi/Clothing-App",
            tags: ["React", "Tailwind", "MongoDB", "NodeJS"]
        },
         {
            id: 8,
            title: "News-App",
            description: "A real-time news portal that aggregates global headlines with category-based sorting and social sharing.",
            image: News,
            liveLink: "https://the-dragon-news-app.netlify.app/",
            githubLink: "https://github.com/Rahmatul-Rovi/Dragon-News-App",
            tags: ["React", "Tailwind", "MongoDB", "NodeJS"]
        },
    ];

    return (
        <section id="projects" className="py-20 bg-base-200 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    My Recent <span className="text-blue-600">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project) => (
                        <div 
                            key={project.id} 
                            data-aos="zoom-in-up"
                            className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-base-300"
                        >
                            {/* Project Image with Hover Zoom */}
                            <figure className="relative h-52 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </figure>

                            <div className="card-body p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="badge badge-sm badge-outline text-blue-600">{tag}</span>
                                    ))}
                                </div>
                                <h2 className="card-title text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-500 text-sm my-2">{project.description}</p>
                                
                                <div className="flex items-center justify-between mt-6 gap-4">
    {/* GitHub Link - Outline Style */}
    <a 
        href={project.githubLink} 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold border-2 border-gray-700 rounded-xl text-gray-300 hover:bg-gray-800 hover:border-gray-600 hover:text-white transition-all duration-300 active:scale-95"
    >
        <FiGithub size={18} />
        GitHub
    </a>

    {/* Live Demo - Gradient Style */}
    <a 
        href={project.liveLink} 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95"
    >
        <FiExternalLink size={18} />
        Live Demo
    </a>
</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;