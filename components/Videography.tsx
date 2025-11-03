
import React, { useRef } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { PlayIcon } from './icons/PlayIcon';

const Videography: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isVisible = useScrollAnimation(sectionRef);

    const videos = [
        {
            id: 1,
            thumbnail: 'https://picsum.photos/seed/v1/1280/720',
            title: 'THE MUSCLEMAGNUM',
            description: 'A collection of my best moments from the past year.',
            url: 'https://www.instagram.com/reel/DPmEEWnkrmw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        },
        {
            id: 2,
            thumbnail: 'reel1.jpg',
            title: 'LORD GANESHA',
            description: 'Capturing the magic of a special day.',
            url: 'https://www.instagram.com/reel/DOQDjIXksJ0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
        }
    ];

    return (
        <section id="videography" ref={sectionRef} className="container mx-auto px-6 py-20 overflow-hidden">
            <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-5xl md:text-6xl font-bold font-playfair text-center mb-4 text-white">Videography</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-center">
                    Beyond still frames, I also craft moving stories. Explore my cinematic work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {videos.map((video, index) => (
                         <div 
                            key={video.id} 
                            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                         >
                            <a href={video.url} target="_blank" rel="noopener noreferrer" className="group block relative rounded-lg overflow-hidden shadow-2xl cursor-pointer">
                                <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col items-center justify-center">
                                    <div className="transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                                        <PlayIcon />
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                            <h3 className="text-2xl font-bold font-playfair">{video.title}</h3>
                                            <p className="text-sm text-gray-300">{video.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                         </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Videography;
