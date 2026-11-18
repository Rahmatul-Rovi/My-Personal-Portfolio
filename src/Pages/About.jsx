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

                {/* Main Content */}
                <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-20">

                    {/* Image Section */}
                    <div
                        className="w-full lg:w-1/2"
                        data-aos="zoom-in-right"
                    >

                        <div className="group relative mx-auto max-w-lg">

                            {/* Image Glow */}
                            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-20 blur-xl transition-all duration-700 group-hover:opacity-50"></div>

                            {/* Image Frame */}
                            <div className="relative overflow-hidden rounded-3xl border border-base-content/10 bg-base-200 p-2 shadow-2xl">

                                <img
                                    src={rovi}
                                    alt="Rahmatul Rovi - Full Stack Developer"
                                    className="h-[350px] w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105 md:h-[450px]"
                                />

                                {/* Image Overlay */}
                                <div className="pointer-events-none absolute inset-2 rounded-2xl bg-gradient-to-t from-blue-950/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                            </div>