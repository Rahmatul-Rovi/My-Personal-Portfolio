import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FiSend, FiPlay } from 'react-icons/fi'; // ArrowRight er bodole Play beshi bhalo lage
import rovi from '../assets/Rovi1.jpg';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-base-100 pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                
                {/* Profile Image - Clean with subtle glow */}
                <div className="relative group" data-aos="zoom-in">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
                    <img 
                        src={rovi} 
                        className="w-64 md:w-80 h-64 md:h-80 rounded-full shadow-2xl border-4 border-white/10 relative object-cover" 
                        alt="Rahmatul Rovi"
                    />
                </div>

                {/* Text Content */}
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                        Hi, I'm <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                            Rahmatul Rovi
                        </span>
                    </h1>

                    {/* Typewriter - Balanced Height */}
                    <div className="py-6 h-24 md:h-20">
                        <span className="text-2xl md:text-3xl font-bold text-gray-400">
                            <Typewriter
                                words={['Full Stack Web Developer', 'MERN Stack Developer']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>

                    {/* Balanced Buttons */}
                    <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4">
                        {/* Hire Me - Solid Premium */}
                        <button 
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 active:scale-95 group"
                        >
                            Hire Me
                            <FiSend className="group-hover:rotate-12 transition-transform" />
                        </button>

                        {/* View Work - Glassmorphism */}
                        <button 
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                            className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 active:scale-95 group"
                        >
                            View Work
                            <FiPlay className="text-blue-500 group-hover:scale-125 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;