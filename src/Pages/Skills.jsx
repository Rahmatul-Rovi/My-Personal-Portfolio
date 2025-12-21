import React from 'react';

const Skills = () => {
    // Tumar janashona shob technology eikhane add koro
    const skillList = [
        { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
        { name: "Firebase", icon: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
        { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "MongoDB", icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
    ];

    return (
        <section id="skills" className="py-20 bg-base-100 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10" data-aos="fade-up">
                    My <span className="text-blue-600">Skills</span>
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skillList.map((skill, index) => (
                        <div 
                            key={index} 
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                            className="bg-base-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-300 group"
                        >
                            <img 
                                src={skill.icon} 
                                alt={skill.name} 
                                className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform"
                            />
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;