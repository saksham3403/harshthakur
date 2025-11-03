
import React from 'react';
import { InstagramIcon, TwitterIcon, LinkedInIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111111] text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                     <a href="https://www.instagram.com/harsh_thakur_373?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
                        <InstagramIcon />
                    </a>
                   
                </div>
                <p>&copy; {currentYear} Flexhive Solution Co.. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
