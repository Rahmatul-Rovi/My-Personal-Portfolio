import React from 'react';
import rovi from '../assets/Rovi2.jpg';
import {
    FaCode,
    FaGraduationCap,
    FaUserTie,
    FaLaptopCode
} from 'react-icons/fa';
import { FiArrowRightCircle } from 'react-icons/fi';

const About = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

     return (
        <section
            id="about"
            className="relative overflow-hidden bg-base-100 px-6 py-24"
        >

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]"></div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]"></div>


            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-16 text-center" data-aos="fade-up">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
                        Get To Know Me
                    </p>

                    <h2 className="mb-5 text-4xl font-extrabold text-base-content md:text-5xl">
                        About{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>

                    <div className="mx-auto h-1.5 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>

                </div>