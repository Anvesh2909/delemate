"use client";

import React, { useState, useEffect } from 'react';
import {
    MdPersonAdd,
    MdPeopleAlt,
    MdLocalShipping,
    MdArrowForward
} from 'react-icons/md';
import Link from 'next/link';

const Feature = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const steps = [
        {
            number: 1,
            title: "Sign Up",
            description: "Create an account by entering your mobile number, and you're ready to send parcels.",
            icon: MdPersonAdd
        },
        {
            number: 2,
            title: "Choose a Traveler",
            description: "Find a traveler heading to your destination, and select them to carry your package.",
            icon: MdPeopleAlt
        },
        {
            number: 3,
            title: "Send Your Parcel",
            description: "Send your parcel and enjoy real-time tracking until it reaches its destination.",
            icon: MdLocalShipping
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Start sending your parcel <span className="relative">
                            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                                across India
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12"></div>
                        </span>
                    </h2>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        Try out DeleMate Today. We are here to make your life easier.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                                isVisible ? 'animate-fade-in-up' : 'opacity-0'
                            }`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full flex items-center justify-center text-white">
                                        <step.icon size={32} />
                                    </div>
                                    <div className="absolute -top-1 -right-1 bg-blue-100 rounded-full w-7 h-7 flex items-center justify-center">
                                        <span className="text-sm font-bold text-blue-700">{step.number}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3">Step {step.number}: {step.title}</h3>
                                <p className="text-slate-600 mb-6">{step.description}</p>

                                {/* Decorative element - path */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute -right-4 top-16 z-10">
                                        <MdArrowForward size={24} className="text-blue-500" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '450ms' }}>
                    <Link
                        href="/send-package"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2040B0] to-[#2850D0] text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                    >
                        Get Started Today
                        <MdArrowForward size={18} />
                    </Link>
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

export default Feature;