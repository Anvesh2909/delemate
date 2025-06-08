"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MdArrowForward,
    MdNavigation,
    MdLocalShipping as MdPackage,
    MdAccessTime,
    MdSecurity,
    MdFlashOn,
    MdGroup,
    MdPublic,
    MdStar,
    MdCheckCircle,
    MdPlayArrow,
    MdVerifiedUser,
} from 'react-icons/md';
import {
    FiPackage,
    FiTruck
} from 'react-icons/fi';

interface StatItem {
    value: string;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
}

const Hero: React.FC = () => {
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

    const stats: StatItem[] = [
        { value: '50K+', label: 'Deliveries', icon: FiPackage },
        { value: '25K+', label: 'Active Users', icon: MdGroup },
        { value: '200+', label: 'Cities', icon: MdPublic },
        { value: '4.9', label: 'Rating', icon: MdStar }
    ];

    const features = [
        { text: 'Real-time tracking', icon: MdNavigation },
        { text: 'Secure payments', icon: MdSecurity },
        { text: 'Same-day delivery', icon: MdFlashOn },
        { text: 'Verified travelers', icon: MdVerifiedUser }
    ];

    return (
        <section className="relative min-h-screen overflow-hidden">


            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        {/* Logo and Badge */}
                        <div className="flex items-center gap-4 mb-2">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium text-slate-700">Live Platform</span>
                                </div>
                                <div className="h-3 w-px bg-slate-300" />
                                <span className="text-sm text-blue-600 font-medium">P2P Delivery</span>
                                <MdPackage size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
                            </div>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                                <span className="block text-slate-900 mb-2">
                                    Smart Delivery
                                </span>
                                <span className="block">
                                    <span className="text-slate-900">Through </span>
                                    <span className="relative inline-block">
                                        <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                                            Community
                                        </span>
                                        <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12" />
                                    </span>
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                            Connect with verified travelers and transform how packages move between cities.
                            <span className="font-semibold text-slate-700"> Faster, safer, and more affordable</span> than traditional shipping.
                        </p>

                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-slate-600"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                                        <feature.icon size={12} className="text-blue-600" />
                                    </div>
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* App Store Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6">
                            {/* Google Play Button */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.delemate.delemate"
                                className="group flex items-center gap-3 px-5 py-3.5 bg-white/90 backdrop-blur-md border border-blue-100 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download from Google Play"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                                        <path fill="#4285F4" d="M12.954 11.616l2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341z"/>
                                        <path fill="#EA4335" d="M3.766 2.435c-.235.234-.39.54-.39.929v17.272c0 .39.156.695.39.928l8.472-8.472-8.472-8.657z"/>
                                        <path fill="#FBBC04" d="M12.954 12.384l-8.34 8.34c.52.373 1.113.326 1.746-.016l9.55-5.368-2.956-2.956z"/>
                                        <path fill="#34A853" d="M22.758 10.366l-3.236-1.816-3.055 3.066 3.055 3.066 3.236-1.817c1.02-.573 1.02-1.922 0-2.499z"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 font-medium">GET IT ON</span>
                                    <span className="text-sm font-bold text-slate-800">Google Play</span>
                                </div>
                            </a>

                            {/* App Store Button */}
                            <a
                                href="https://apps.apple.com/in/app/delemate/id6547860986"
                                className="group flex items-center gap-3 px-5 py-3.5 bg-white/90 backdrop-blur-md border border-blue-100 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Download from App Store"
                            >
                                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                                        <path d="M15.527 11.42c-.013-1.516.71-2.677 2.173-3.525-1.157-1.536-2.644-2.031-4.577-1.591-1.794.408-3.05 1.7-3.395 1.7-.4 0-1.567-1.591-2.937-1.591-2.917 0-5.416 2.653-5.416 6.1 0 1.957.745 4.006 1.968 6.034 1.018 1.63 2.37 3.453 4.122 3.453 1.716 0 2.324-1.248 4.058-1.248 1.659 0 2.309 1.248 4.078 1.248 1.724 0 3.14-1.918 4.11-3.495 1.157-1.861 1.54-3.624 1.562-3.699-.048-.013-3.096-1.194-3.096-4.262 0-2.452 1.978-3.586 2.09-3.662-.115-.374-2.143-1.049-3.74-.262zm-1.12-5.918c.981-1.14 1.598-2.678 1.456-4.215-1.413.092-3.082.93-4.076 2.11-.897 1.002-1.672 2.576-1.456 4.084 1.5.106 3.096-.749 4.076-1.979z" fill="#000000"/>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 font-medium">DOWNLOAD ON THE</span>
                                    <span className="text-sm font-bold text-slate-800">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Visual Element */}
                    <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl blur-3xl transform rotate-6" />

                            {/* Main delivery interface mockup */}
                            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                                {/* Header with logo style */}
                                <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-6 text-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Image src="/logo.png" alt="logo" width={25} height={25}/>
                                                <h3 className="text-lg font-semibold">Active Delivery</h3>
                                            </div>
                                            <p className="text-blue-100 text-sm">Delhi → Mumbai</p>
                                        </div>
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <FiTruck size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-6">
                                    {/* Status */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-green-700 font-medium">En Route</span>
                                        <span className="text-slate-500 text-sm">• 2 hours remaining</span>
                                    </div>

                                    {/* Progress */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-slate-600">Progress</span>
                                            <span className="font-medium">75%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full w-3/4 transition-all duration-1000" />
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold text-blue-700">₹245</div>
                                            <div className="text-sm text-slate-600">You Save</div>
                                        </div>
                                        <div className="bg-blue-50 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold text-blue-700">4.9★</div>
                                            <div className="text-sm text-slate-600">Traveler Rating</div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full bg-gradient-to-r from-blue-700 to-blue-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                                        <MdPlayArrow size={18} />
                                        Track Live
                                    </button>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-blue-100 p-4 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <MdCheckCircle size={20} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">98.5%</div>
                                        <div className="text-sm text-slate-600">Success Rate</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-blue-100 p-4 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <MdAccessTime size={20} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">2.5 hrs</div>
                                        <div className="text-sm text-slate-600">Avg Delivery</div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                @keyframes fade-in-right {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }

                .animate-fade-in-right {
                    animation: fade-in-right 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;