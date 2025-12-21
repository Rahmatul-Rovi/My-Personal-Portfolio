import React from 'react';
import { FaCode, FaGraduationCap, FaUserTie } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-24 bg-base-100 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">
                        About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section with Creative Frame */}
                    <div className="lg:w-1/2" data-aos="zoom-in-right">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-base-200 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img 
                                    src="https://img.freepik.com/free-vector/user-blue-gradient-vector-icon_78370-4692.jpg" 
                                    alt="About Me" 
                                    className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition duration-500" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 space-y-6" data-aos="fade-left">
                        <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm">
                            <FaUserTie /> <span>Who I Am</span>
                        </div>
                        <h3 className="text-3xl font-bold leading-tight">
                            Crafting High-Performance Websites with <span className="text-blue-600">Precision</span>
                        </h3>
                        <p className="text-lg text-gray-500 leading-relaxed text-justify">
                            Ami ekjon Passionate Full Stack Developer. Code lekha amar kache shudhu kaj na, eita ekta art. 
                            React, Node.js ar modern tech stack use kore ami emon shob solution banai jeta user-der life shohoj kore. 
                            Problem solving amar nesha ar protidin notun kisu shikha amar hoby.
                        </p>
                        
                        {/* Interactive Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            <div className="p-6 rounded-2xl bg-base-200 border border-white/5 hover:border-blue-500/50 transition-colors group">
                                <div className="text-blue-600 text-3xl mb-3 group-hover:scale-110 transition-transform"><FaCode /></div>
                                <h4 className="text-3xl font-bold">10+</h4>
                                <p className="text-gray-500 font-medium">Real-world Projects</p>
                            </div>
                            
                            <div className="p-6 rounded-2xl bg-base-200 border border-white/5 hover:border-purple-500/50 transition-colors group">
                                <div className="text-purple-600 text-3xl mb-3 group-hover:scale-110 transition-transform"><FaGraduationCap /></div>
                                <h4 className="text-3xl font-bold">1+</h4>
                                <p className="text-gray-500 font-medium">Years of Experience</p>
                            </div>
                        </div>

                        {/* Social/CTA Mini */}
                        <div className="pt-4">
                            <button className="btn btn-primary rounded-xl px-10 shadow-lg shadow-blue-500/20">
                                My Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;