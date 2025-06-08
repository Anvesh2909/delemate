'use client';

import React, { useState, useEffect } from 'react';
import { MdDescription, MdInfo, MdLocalShipping } from 'react-icons/md';

const RefundPolicyPage = () => {
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Our <span className="relative">
                                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Refund Policy
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            We strive for complete transparency in our operations. Below is our comprehensive refund policy.
                        </p>
                    </div>
                </div>
            </section>

            {/* PDF Section */}
            <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-lg overflow-hidden">
                        <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-700 to-blue-600">
                            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                                <MdDescription size={24} />
                            </div>
                            <h2 className="text-white font-medium">Official Refund Policy Document</h2>
                        </div>
                        <div className="p-6">
                            <iframe
                                src="/refund_policy.pdf"
                                className="w-full h-[70vh] border-none rounded-xl"
                                title="Delemate Refund Policy"
                            />
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 shadow-md">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MdInfo size={24} className="text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">Have questions about our policy?</h3>
                                <p className="text-slate-600 mb-4">
                                    If you have any questions or need clarification on our refund policy, please don't hesitate to contact our customer support team.
                                </p>
                                <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white border border-blue-200 text-slate-700 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50">
                                    Contact Support
                                </a>
                            </div>
                        </div>
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

export default RefundPolicyPage;