import React from 'react';
import rovi from '../assets/Rovi2.jpg';
import { FaCode, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';

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
        {/* Border Glow Animation */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-base-200 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
                src={rovi} 
                alt="About Me" 
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110" 
            />
            
            {/* Overlay Effect on Hover */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                      <div className="relative p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
                I am a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> who believes that writing code is an art form. 
                By leveraging <span className="text-blue-400 font-semibold">React, Node.js</span>, and the latest technologies, I build impactful solutions that simplify complex problems for users. 
                Problem-solving is my core drive, and I am constantly evolving by mastering new skills every single day.
            </p>
        </div>
                        
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
<div className="pt-8">
    <button 
        onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}
        className="group relative inline-flex items-center justify-center px-10 py-3.5 font-bold text-white transition-all duration-300 active:scale-95"
    >
        {/* Glow Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
        
        {/* Main Button Body */}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-3.5 rounded-xl border border-white/20 shadow-xl overflow-hidden">
            <span className="relative z-10">My Journey</span>
            
            {/* Animated Icon */}
            <FiArrowRightCircle className="text-xl group-hover:translate-x-2 transition-transform duration-300 ease-out" />
            
            {/* Shine Overlay Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </div>
    </button>
</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;