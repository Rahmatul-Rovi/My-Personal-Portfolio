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