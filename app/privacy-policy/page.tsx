"use client";

import React, { useState, useEffect } from 'react';
import { MdOutlinePrivacyTip } from 'react-icons/md';

const PrivacyPolicy = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="pt-32 pb-24">
            {/* Hero Section */}
            <section className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 mb-4">
                            <MdOutlinePrivacyTip size={32} className="text-blue-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Privacy <span className="relative">
                                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Policy
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our commitment to protecting your privacy and personal information
                        </p>
                    </div>
                </div>
            </section>

            {/* PDF Viewer Section */}
            <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-white border border-blue-100 rounded-2xl p-4 shadow-lg overflow-hidden">
                        <iframe
                            src="/privacy_policy.pdf"
                            title="Delemate Privacy Policy"
                            className="w-full h-[calc(100vh-300px)] min-h-[600px] rounded-xl"
                        />
                    </div>

                    <div className="mt-8 text-center text-slate-600 text-sm">
                        <p>Last updated: June 2024</p>
                        <p className="mt-2">
                            If you have any questions about our privacy policy, please{" "}
                            <a href="/contact" className="text-blue-600 font-medium hover:text-blue-800">
                                contact us
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>

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
        </div>
    );
};

export default PrivacyPolicy;