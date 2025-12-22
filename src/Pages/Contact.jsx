import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // Account setup korar por eikhane IDs gulo boshabe
        emailjs.sendForm(
            'YOUR_SERVICE_ID', 
            'YOUR_TEMPLATE_ID', 
            form.current, 
            'YOUR_PUBLIC_KEY'
        )
        .then((result) => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thanks, Rovi will get back to you soon.',
                background: '#1d232a',
                color: '#fff'
            });
            e.target.reset();
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong, please try again.',
            });
        });
    };

    return (
        <section id="contact" className="py-20 bg-base-200 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Side: Contact Info & Socials */}
                    <div className="space-y-8" data-aos="fade-right">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Let's talk about everything!</h3>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        {/* Direct Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-600 p-3 rounded-full text-white shadow-lg shadow-blue-500/20"><FaEnvelope /></div>
                                <div>
                                    <p className="text-sm text-gray-500">Email Me</p>
                                    <p className="font-bold">rahmatul.rovi@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-purple-600 p-3 rounded-full text-white shadow-lg shadow-purple-500/20"><FaPhoneAlt /></div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Me</p>
                                    <p className="font-bold">+880 1533636073</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-green-600 p-3 rounded-full text-white shadow-lg shadow-green-500/20"><FaMapMarkerAlt /></div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-bold">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Section */}
                        <div className="flex gap-4 pt-4">
                            {/* GitHub */}
                            <a 
                                href="https://github.com/Rahmatul-Rovi" 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn btn-circle btn-outline border-gray-400 hover:bg-black hover:border-black text-gray-400 hover:text-white transition-all duration-300"
                            >
                                <FaGithub size={22}/>
                            </a>

                            {/* LinkedIn */}
                            <a 
                                href="https://www.linkedin.com/in/rahmatul-munim-653288398" 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn btn-circle btn-outline border-gray-400 hover:bg-[#0077b5] hover:border-[#0077b5] text-gray-400 hover:text-white transition-all duration-300"
                            >
                                <FaLinkedin size={22}/>
                            </a>

                            {/* Facebook */}
                            <a 
                                href="https://www.facebook.com/rahmatul.rovi.3" 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn btn-circle btn-outline border-gray-400 hover:bg-[#1877F2] hover:border-[#1877F2] text-gray-400 hover:text-white transition-all duration-300"
                            >
                                <FaFacebook size={22}/>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-base-100 p-8 rounded-2xl shadow-xl border border-white/5" data-aos="fade-left">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="form-control">
                                <input type="text" name="from_name" placeholder="Your Name" className="input input-bordered w-full focus:outline-blue-600 bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="from_email" placeholder="Your Email" className="input input-bordered w-full focus:outline-blue-600 bg-base-200" required />
                            </div>
                            <div className="form-control">
                                <textarea name="message" className="textarea textarea-bordered h-32 focus:outline-blue-600 bg-base-200" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full rounded-full mt-4 shadow-lg shadow-blue-500/20 group">
                                <span className="group-hover:scale-105 transition-transform">Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;