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