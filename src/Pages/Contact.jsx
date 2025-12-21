import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-base-200 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let's talk about everything!</h3>
                            <p className="text-gray-500">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 p-3 rounded-full text-white"><FaEnvelope /></div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me</p>
                                    <p className="font-bold">your-email@gmail.com</p> {/* Eikhane tumar email dao */}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-600 p-3 rounded-full text-white"><FaPhoneAlt /></div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Me</p>
                                    <p className="font-bold">+880 1XXXXXXXXX</p> {/* Eikhane tumar number dao */}
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-green-600 p-3 rounded-full text-white"><FaMapMarkerAlt /></div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-bold">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 pt-4">
                            <a href="YOUR_LINKEDIN_URL" className="btn btn-circle btn-outline hover:bg-blue-600 border-gray-400"><FaLinkedin size={20}/></a>
                            <a href="YOUR_GITHUB_URL" className="btn btn-circle btn-outline hover:bg-black border-gray-400"><FaGithub size={20}/></a>
                            <a href="YOUR_FACEBOOK_URL" className="btn btn-circle btn-outline hover:bg-blue-800 border-gray-400"><FaFacebook size={20}/></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-base-100 p-8 rounded-2xl shadow-xl" data-aos="fade-left">
                        <form className="space-y-4">
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full focus:outline-blue-600" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Your Email" className="input input-bordered w-full focus:outline-blue-600" required />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered h-32 focus:outline-blue-600" placeholder="Your Message" required></textarea>
                            </div>
                            <button className="btn btn-primary w-full rounded-full mt-4">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;