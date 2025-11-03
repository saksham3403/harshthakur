
import React from 'react';
import { ArrowDownIcon } from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
    const scrollToGallery = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="h-screen w-full flex flex-col items-center justify-center relative text-white text-center">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 overflow-hidden">
                <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Hero Background" className="w-full h-full object-cover ken-burns" />
            </div>

            <div className="relative z-20 px-4">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black font-playfair tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Harsh Thakur
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-300 tracking-wider animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    CAPTURING MOMENTS, CREATING MEMORIES
                </p>
            </div>
            
            <a href="#gallery" onClick={scrollToGallery} className="absolute bottom-10 z-20 scroll-indicator-animation cursor-pointer">
                <ArrowDownIcon />
            </a>
        </section>
    );
};

export default Hero;
