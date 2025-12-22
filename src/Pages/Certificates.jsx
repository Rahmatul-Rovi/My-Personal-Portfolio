import React from 'react';
import Bubt from '../assets/Bubt-certificate.png';
import Hero from '../assets/Programming-hero-certificate.png';

const Certificates = () => {
    const certificateList = [
        {
            id: 1,
            title: "Programming Hero - Web Development",
            organization: "Programming Hero",
            issueDate: "2025",
            image: Hero, 
            link: Hero 
        },
        {
            id: 2,
            title: "Intra Intake Programming Contest IIPC BUBT",
            organization: "Bangladesh University of Business and Technology",
            issueDate: "2024",
            image: Bubt,
            link: Bubt
        }
    ];

    return (
        <section id="certificates" className="py-20 bg-base-100 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    My <span className="text-blue-600">Certificates</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificateList.map((cert) => (
                        <div 
                            key={cert.id} 
                            data-aos="zoom-in"
                            className="bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300 group"
                        >
                            {/* Certificate Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={cert.image} 
                                    alt={cert.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm rounded-full">
                                        View Certificate
                                    </a>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                                <p className="text-blue-600 font-medium">{cert.organization}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <span className="text-sm text-gray-500">Issued: {cert.issueDate}</span>
                                    <div className="badge badge-outline badge-sm">Verified</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;