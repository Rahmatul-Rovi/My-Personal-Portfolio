import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
                    About <span className="text-blue-600">Me</span>
                </h2>
                
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="md:w-1/2" data-aos="fade-right">
                        <div className="bg-gray-200 rounded-2xl h-80 w-full flex items-center justify-center overflow-hidden shadow-xl">
                             {/* Tumar arekta chobi eikhane dite paro */}
                            <img src="https://via.placeholder.com/400x400" alt="About Me" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 space-y-5" data-aos="fade-left">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            I am a Passionate Developer from Bangladesh
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Ami ekjon web developer jeta React ar modern technologies niye kaj korte bhalobashi. 
                            Ami chapi shundor shundor user interface banate jeta user-der kajer hoy. 
                            Learning ar building — eitae amar protidin-er kaj.
                        </p>
                        
                        {/* Stats Example */}
                        <div className="grid grid-cols-2 gap-4 pt-5">
                            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">
                                <h4 className="text-3xl font-bold text-blue-600">10+</h4>
                                <p className="text-sm font-medium">Projects Done</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-600">
                                <h4 className="text-3xl font-bold text-purple-600">1+</h4>
                                <p className="text-sm font-medium">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;