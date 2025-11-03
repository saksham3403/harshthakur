
import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useScrollAnimation(sectionRef);

    return (
        <section id="contact" ref={sectionRef} className="container mx-auto px-6 py-20 text-center">
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-5xl md:text-6xl font-bold font-playfair text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                    I'm available for freelance projects and collaborations. If you have a project in mind, want to purchase a print, or just want to say hello, feel free to reach out.
                </p>
                <a 
                    href="mailto:hello@harshthakur.photo" 
                    className="inline-block bg-white text-black font-semibold px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 mb-12 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                    +91 74894 66169
                </a>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.instagram.com/harsh_thakur_373?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <InstagramIcon />
                    </a>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;
