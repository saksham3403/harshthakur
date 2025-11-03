
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => setIsHovering(true);
        const onMouseLeave = () => setIsHovering(false);

        document.addEventListener('mousemove', updatePosition);
        document.querySelectorAll('a, button, [role="button"], input, .cursor-pointer').forEach(el => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.querySelectorAll('a, button, [role="button"], input, .cursor-pointer').forEach(el => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    const cursorStyle: React.CSSProperties = {
        left: `${position.x}px`,
        top: `${position.y}px`,
    };

    return (
        <>
            <div 
                className={`hidden md:block fixed w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ${isHovering ? 'scale-0' : 'scale-100'}`}
                style={cursorStyle}
            ></div>
            <div 
                className={`hidden md:block fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${isHovering ? 'scale-150 opacity-50 bg-white/20' : 'scale-100 opacity-100'}`}
                style={cursorStyle}
            ></div>
        </>
    );
};

export default CustomCursor;
