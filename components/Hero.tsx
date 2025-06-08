"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-20 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                    }}
                />
                <div
                    className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
                    style={{
                        transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
                    }}
                />
                <div className="absolute inset-0 bg-[size:64px_64px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-slate-700">Live Platform</span>
                            </div>
                            <div className="h-3 w-px bg-slate-300" />
                            <span className="text-sm text-blue-600 font-medium">P2P Delivery</span>
                            <MdPackage size={16} className="text-blue-500 group-hover:scale-110 transition-transform" />
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
                                        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                                            Community
                                        </span>
                                        <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full -skew-x-12" />
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
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <feature.icon size={12} className="text-green-600" />
                                    </div>
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/send-package"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <FiPackage size={20} />
                                Send Package
                                <MdArrowForward size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/become-deliverer"
                                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <MdNavigation size={20} className="text-blue-600" />
                                Become Deliverer
                            </Link>
                        </div>

                    </div>

                    {/* Right Column - Visual Element */}
                    <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl transform rotate-6" />

                            {/* Main delivery interface mockup */}
                            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                                {/* Header */}
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold">Active Delivery</h3>
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
                                            <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full w-3/4 transition-all duration-1000" />
                                        </div>
                                    </div>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold text-blue-600">₹245</div>
                                            <div className="text-sm text-slate-600">You Save</div>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4 text-center">
                                            <div className="text-2xl font-bold text-green-600">4.9★</div>
                                            <div className="text-sm text-slate-600">Traveler Rating</div>
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                                        <MdPlayArrow size={18} />
                                        Track Live
                                    </button>
                                </div>
                            </div>

                            {/* Floating stats */}
                            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <MdCheckCircle size={20} className="text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">98.5%</div>
                                        <div className="text-sm text-slate-600">Success Rate</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 animate-float" style={{ animationDelay: '1s' }}>
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