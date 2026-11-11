import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FiSend, FiPlay, FiArrowDown } from 'react-icons/fi';
import rovi from '../assets/rovi.jpeg';

const Hero = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

     return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-base-100 pt-24 pb-16 overflow-hidden"
        >

            {/* Background Decorations */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-20">

                {/* Profile Image */}
                <div
                    className="relative group shrink-0"
                    data-aos="zoom-in"
                >
                    {/* Outer Glow */}
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-25 blur-xl transition duration-700 group-hover:opacity-50 group-hover:blur-2xl"></div>

                    {/* Gradient Border */}
                    <div className="relative rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 p-[5px] shadow-2xl shadow-blue-500/20 transition-transform duration-500 group-hover:scale-[1.03]">

                        <div className="rounded-full bg-base-100 p-[5px]">
                            <img
                                src={rovi}
                                className="w-64 h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] rounded-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                alt="Rahmatul Rovi"
                            />
                        </div>

                    </div>

                     {/* Floating Badge */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-blue-500/20 bg-base-100 px-5 py-2.5 shadow-xl">
                        <span className="flex items-center gap-2 text-sm font-semibold text-base-content">
                            <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                            Full Stack Developer
                        </span>
                    </div>

                </div>


                {/* Text Content */}
                <div
                    className="flex-1 text-center lg:text-left"
                    data-aos="fade-right"
                >
                      {/* Introduction */}
                    <p className="mb-4 text-sm md:text-base font-bold uppercase tracking-[0.25em] text-blue-600">
                        Welcome to my portfolio
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-base-content">
                        Hi, I'm
                        <br />

                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Rahmatul Rovi
                        </span>
                    </h1>
 {/* Typewriter Animation - Unchanged */}
                    <div className="py-6 h-24 md:h-20">
                        <span className="text-xl md:text-3xl font-bold text-base-content/60">
                            <Typewriter
                                words={[
                                    'Full Stack Web Developer',
                                    'MERN Stack Developer'
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>

                </div>
                </div>