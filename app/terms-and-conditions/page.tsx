"use client";

import React, { useState, useEffect } from 'react';
import { MdOutlineGavel, MdOutlineDescription, MdOutlineInfo, MdDownload } from 'react-icons/md';
import Link from 'next/link';

const TermsAndConditions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewMode, setViewMode] = useState<'pdf' | 'text'>('text');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="pt-32 pb-24">
            {/* Header Section */}
            <section className={`mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Terms and <span className="relative">
                                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Conditions
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Please read these terms and conditions carefully before using our services. By accessing or using Delemate, you agree to be bound by these terms.
                        </p>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-lg p-1 shadow-md inline-flex">
                            <button
                                className={`px-5 py-2.5 rounded-md flex items-center gap-2 text-sm font-medium transition-all ${
                                    viewMode === 'text'
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'text-slate-700 hover:bg-blue-50'
                                }`}
                                onClick={() => setViewMode('text')}
                            >
                                <MdOutlineDescription />
                                Text View
                            </button>
                            <button
                                className={`px-5 py-2.5 rounded-md flex items-center gap-2 text-sm font-medium transition-all ${
                                    viewMode === 'pdf'
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'text-slate-700 hover:bg-blue-50'
                                }`}
                                onClick={() => setViewMode('pdf')}
                            >
                                <MdOutlineGavel />
                                PDF View
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    {viewMode === 'pdf' ? (
                        <div className="bg-white border border-blue-100 rounded-xl shadow-lg p-4 mb-8">
                            <iframe
                                src="/terms_and_conditions.pdf"
                                className="w-full h-[70vh] rounded-lg"
                                title="Terms and Conditions PDF"
                            />
                        </div>
                    ) : (
                        <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl shadow-lg p-6 md:p-8">
                            <div className="space-y-8">
                                {/* Legal Sections - This would be replaced with your actual content */}
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
                                    <p className="text-slate-600 mb-4">
                                        Welcome to Delemate. These Terms and Conditions govern your use of our website, mobile application, and services. By accessing or using our platform, you agree to these terms in their entirety.
                                    </p>
                                    <p className="text-slate-600">
                                        Our platform connects users who want to send packages ("Senders") with travelers who are willing to transport them ("Travelers"). These terms outline the rights, obligations, and limitations that apply to all users.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-4">2. User Registration</h2>
                                    <p className="text-slate-600 mb-4">
                                        To use our services, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate and complete.
                                    </p>
                                    <p className="text-slate-600">
                                        You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Service Description</h2>
                                    <p className="text-slate-600 mb-4">
                                        Delemate is a peer-to-peer platform that facilitates the connection between Senders and Travelers. We do not provide delivery services directly and are not responsible for the actual transportation of packages.
                                    </p>
                                    <p className="text-slate-600">
                                        All transactions and agreements between Senders and Travelers are subject to our policies but are ultimately contracts between the parties involved.
                                    </p>
                                </div>

                                {/* More sections would continue here */}
                                <div className="text-center py-4">
                                    <p className="text-slate-500 italic">This is a summarized version. For the full terms and conditions, please download the PDF.</p>
                                </div>

                                <div className="flex justify-center mt-6">
                                    <a
                                        href="/terms_and_conditions.pdf"
                                        download="Delemate_Terms_and_Conditions.pdf"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2040B0] to-[#2850D0] text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                    >
                                        <MdDownload size={18} />
                                        Download Full Terms & Conditions
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Additional Information Card */}
                    <div className={`mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                        <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <MdOutlineInfo size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">Have Questions?</h3>
                            </div>
                            <p className="text-slate-600 mb-4">
                                If you have any questions or concerns about our terms and conditions, please don't hesitate to contact our support team.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-white border border-blue-200 text-slate-700 font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/faq"
                                    className="inline-flex items-center justify-center gap-2 bg-white border border-blue-200 text-slate-700 font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                                >
                                    View FAQ
                                </Link>
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

export default TermsAndConditions;