
import React from 'react';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-[#0a0a0a] z-[9999] flex items-center justify-center animate-preloader-fade-out">
            <div className="text-white text-6xl font-playfair font-bold animate-logo-pulse">
                HR
            </div>
        </div>
    );
};

export default Preloader;
