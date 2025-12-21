import React from 'react';

const Projects = () => {
    // Tumar project list eikhane add koro
    const projectList = [
        {
            id: 1,
            title: "Project One Name",
            description: "A brief description of what this project does and the technologies used (React, Firebase, etc.).",
            image: "https://via.placeholder.com/600x400", // Tumar project screenshot eikhane dibe
            liveLink: "#",
            githubLink: "#",
            tags: ["React", "Tailwind", "Firebase"]
        },
        {
            id: 2,
            title: "Project Two Name",
            description: "Another awesome project that solves a specific problem using modern web tech.",
            image: "https://via.placeholder.com/600x400",
            liveLink: "#",
            githubLink: "#",
            tags: ["Node.js", "Express", "MongoDB"]
        }
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
                                
                                <div className="card-actions justify-between mt-4">
                                    <a href={project.githubLink} target="_blank" className="btn btn-sm btn-outline">GitHub</a>
                                    <a href={project.liveLink} target="_blank" className="btn btn-sm btn-primary">Live Demo</a>
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