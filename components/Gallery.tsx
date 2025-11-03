
import React, { useState, useRef } from 'react';
import { GalleryImage } from '../types';
import useScrollAnimation from '../hooks/useScrollAnimation';

const images: GalleryImage[] = [
    { id: 1, src: 'shoot1.jpg', title: 'Whispering Pines', category: 'Nature', width: 800, height: 1200 },
    { id: 2, src: 'shoot2.jpg', title: 'City Lights', category: 'Urban', width: 1200, height: 800 },
    { id: 3, src: 'shoot3.jpg', title: 'Silent Gaze', category: 'Portrait', width: 900, height: 900 },
    { id: 4, src: 'shoot4.jpg', title: 'Coastal Serenity', category: 'Landscape', width: 800, height: 1000 },
    { id: 5, src: 'shoot5.jpg', title: 'Urban Jungle', category: 'Urban', width: 1200, height: 700 },
    { id: 6, src: 'shoot6.jpg', title: 'Crimson Fields', category: 'Nature', width: 600, height: 900 },
    { id: 7, src: 'shoot10.jpg', title: 'Morning Mist', category: 'Landscape', width: 1000, height: 800 },
    { id: 8, src: 'https://picsum.photos/seed/h/800/1100', title: 'Reflections', category: 'Portrait', width: 800, height: 1100 },
    { id: 9, src: 'https://picsum.photos/seed/i/1200/900', title: 'Metropolis', category: 'Urban', width: 1200, height: 900 },
];

const GalleryItem: React.FC<{ image: GalleryImage, onClick: () => void, delay: number }> = ({ image, onClick, delay }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);
    
    return (
        <div 
            ref={ref} 
            className={`mb-4 break-inside-avoid transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
            onClick={onClick}
        >
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img src={image.src} alt={image.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end p-6">
                    <div className="text-white transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <h3 className="text-xl font-bold font-playfair">{image.title}</h3>
                        <p className="text-sm text-gray-300">{image.category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const closeModal = () => setSelectedImage(null);

    const findImageIndex = (id: number) => images.findIndex(img => img.id === id);

    const showNextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = findImageIndex(selectedImage.id);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const showPrevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedImage) return;
        const currentIndex = findImageIndex(selectedImage.id);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    return (
        <section id="gallery" className="container mx-auto px-6 py-20">
            <h2 className="text-5xl md:text-6xl font-bold font-playfair text-center mb-12 text-white">My Work</h2>
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
                {images.map((image, index) => (
                    <GalleryItem key={image.id} image={image} onClick={() => setSelectedImage(image)} delay={index * 100} />
                ))}
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center animate-fade-in"
                    onClick={closeModal}
                >
                    <div 
                        className="relative max-w-screen-lg max-h-[90vh] w-full p-4 animate-modal-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.title} 
                            className="w-full h-full object-contain"
                        />
                        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-3xl cursor-pointer">&times;</button>
                        <button onClick={showPrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/30 p-2 rounded-full cursor-pointer">&#8249;</button>
                        <button onClick={showNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/30 p-2 rounded-full cursor-pointer">&#8250;</button>
                        <div className="absolute bottom-4 left-4 text-white p-2 bg-black/50 rounded">
                            <h3 className="text-xl font-bold font-playfair">{selectedImage.title}</h3>
                            <p className="text-sm text-gray-300">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
