
import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useScrollAnimation(sectionRef);

    return (
        <section id="about" ref={sectionRef} className="container mx-auto px-6 py-20 overflow-hidden">
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-center mb-12 text-white">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className={`md:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                         <img src="profile.jpg" alt="Harsh Thakur" className="w-full h-full object-cover" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </div>
                <div className={`md:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
                    <h3 className="text-3xl font-playfair font-bold text-white mb-4">Harsh Thakur</h3>
                    <p className="text-gray-300 mb-4">
                        I am a passionate photographer with a keen eye for detail and a love for storytelling. My journey began with a simple film camera, and since then, I've been dedicated to capturing the fleeting beauty of the world around us.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Whether it's the raw emotion of a portrait, the majestic sweep of a landscape, or the vibrant energy of city life, I strive to create images that are not just seen, but felt. Each photograph is a piece of a larger narrative, a moment frozen in time, yet full of life.
                    </p>
                     <p className="text-gray-300">
                        Let's connect and create something beautiful together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
