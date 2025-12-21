import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Bachelor of CSE",
            institution: "Bangladesh University of Business and Technology",
            duration: "2023 - Present",
            description: "Specialized in Competitive Programming and Software Engineering.",
        },
        {
            id: 2,
            degree: "Higher Secondary Education",
            institution: "Tamirul Millat Kamil Madrasah, Tongi",
            duration: "2020 - 2022",
            description: "Science Group. Focused on Mathematics and ICT.",
        },
        {
            id: 3,
            degree: "Secondary School Certificate",
            institution: "Your School Name Here",
            duration: "2018 - 2020",
            description: "Science Group. Achieved GPA 5.00 with strong basics.",
        }
    ];

    return (
        <section id="education" className="py-20 bg-base-100 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-16" data-aos="fade-up">
                    <FaGraduationCap className="text-4xl text-blue-600" />
                    <h2 className="text-4xl font-bold text-center">Education Journey</h2>
                </div>

                {/* Main Timeline Container */}
                <div className="relative">
                    {/* Vertical Center Line (Visible on Desktop) */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600/30"></div>
                    
                    {/* Mobile Line (Visible on Small Screens) */}
                    <div className="md:hidden absolute left-4 h-full w-0.5 bg-blue-600/30"></div>

                    {educationData.map((edu, index) => (
                        <div 
                            key={edu.id} 
                            className={`mb-12 flex justify-between items-center w-full ${
                                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                            } flex-row`} // Mobile-e hamesha ek side-e thakbe
                            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                        >
                            {/* Empty space for Zig-Zag (Desktop only) */}
                            <div className="hidden md:block w-[45%]"></div>

                            {/* Timeline Dot */}
                            <div className="z-20 absolute md:left-1/2 left-4 transform md:-translate-x-1/2 -translate-x-1/2">
                                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-base-100 shadow-[0_0_15px_rgba(37,99,235,0.6)]"></div>
                            </div>

                            {/* Content Card */}
                            <div className="w-[85%] md:w-[45%] bg-base-200 p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-blue-500/40 transition-all duration-500 group ml-10 md:ml-0">
                                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">{edu.duration}</span>
                                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                                <p className="text-lg font-medium text-gray-300 mt-1">{edu.institution}</p>
                                <div className="mt-4 h-1 w-12 bg-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                                <p className="mt-4 text-gray-400 leading-relaxed italic">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;