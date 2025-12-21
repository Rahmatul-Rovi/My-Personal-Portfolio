import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-base-200 pt-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-6">
                {/* Tumar Chobi - src/assets folder e 'profile.jpg' name rakhbe */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <img 
                        src="https://img.freepik.com/free-vector/user-blue-gradient-vector-icon_78370-4692.jpg" 
                        className="w-64 md:w-80 rounded-full shadow-2xl border-4 border-white relative" 
                        alt="Profile"
                    />
                </div>

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-bold">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-6xl">Tumar Nam</span>
                    </h1>
                    <p className="py-6 text-xl md:text-2xl font-medium text-gray-600">
                        Full Stack Web Developer | Frontend Specialist
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button className="btn btn-primary rounded-full px-8 hover:scale-105 transition-all">
                            Hire Me
                        </button>
                        <button className="btn btn-outline btn-secondary rounded-full px-8 hover:scale-105 transition-all">
                            View Work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;