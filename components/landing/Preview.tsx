"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Preview = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Dashboard Preview</h2>
                    <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                        Get a glimpse of our intuitive dashboard designed for seamless package tracking and management.
                    </p>
                </div>

                {/* Preview Image with Animation */}
                <div
                    className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{
                        transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
                    }}
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-700/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl" />

                    {/* Blue Overlay Border */}
                    <div className="absolute inset-0 border-4 border-blue-600/20 rounded-2xl pointer-events-none" />

                    {/* The Image */}
                    <div className="relative z-10">
                        <Image
                            src="/dashboard-preview.jpg"
                            alt="Dashboard Preview"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default Preview;