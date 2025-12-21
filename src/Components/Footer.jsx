import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded-t-3xl mt-10">
            <div className="space-y-2">
                <p className="font-bold text-xl italic bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Rahmaul Rovi
                </p> 
                <p className="flex items-center gap-2 font-medium">
                    Designed & Built with <FaHeart className="text-red-500 animate-pulse" /> by <span className="text-blue-600">Rahmaul Rovi</span>
                </p>
                <p className="text-sm opacity-60">
                    Copyright © 2025 - All rights reserved
                </p>
            </div> 
        </footer>
    );
};

export default Footer;