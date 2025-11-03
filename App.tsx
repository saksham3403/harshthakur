
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Videography from './components/Videography';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // Matches animation duration in index.html
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className="bg-[#0a0a0a] min-h-screen animate-content-fade-in">
            <CustomCursor />
            <Header />
            <main>
                <Hero />
                <Gallery />
                <Videography />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
