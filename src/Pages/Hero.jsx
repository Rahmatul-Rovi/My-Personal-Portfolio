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
                    
                </div>