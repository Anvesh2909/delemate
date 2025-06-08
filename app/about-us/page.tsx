"use client";

import React, { useState, useEffect } from 'react';
import {
    MdSecurity,
    MdVerifiedUser,
    MdSpeed,
    MdGroups,
    MdOutlineTrendingUp,
    MdTimeline,
    MdConnectWithoutContact,
    MdStar
} from 'react-icons/md';
import Link from 'next/link';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const values = [
        {
            title: "Trust",
            description: "We build trust through transparency, reliability, and consistent service quality.",
            icon: MdVerifiedUser
        },
        {
            title: "Innovation",
            description: "Constantly improving our platform to provide the most efficient delivery solutions.",
            icon: MdSpeed
        },
        {
            title: "Community",
            description: "Fostering connections between senders and travelers across India.",
            icon: MdGroups
        },
        {
            title: "Security",
            description: "Ensuring the safety of packages and peace of mind for all our users.",
            icon: MdSecurity
        },
    ];

    return (
        <div className="pt-32 pb-24">
            {/* Hero Section */}
            <section className={`mb-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            We're Transforming <span className="relative">
                                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                                    Package Delivery
                                </span>
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12"></div>
                            </span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Delemate connects people sending packages with travelers heading to the same destination,
                            creating a community-driven delivery network that's faster and more affordable than
                            traditional shipping methods.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                        {[
                            { value: "50K+", label: "Deliveries", icon: MdConnectWithoutContact },
                            { value: "25K+", label: "Active Users", icon: MdGroups },
                            { value: "200+", label: "Cities", icon: MdOutlineTrendingUp },
                            { value: "4.9", label: "Rating", icon: MdStar }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white/90 backdrop-blur-sm border border-blue-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                                        <stat.icon size={24} className="text-blue-600" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-slate-800">{stat.value}</div>
                                    <div className="text-sm text-slate-600">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className={`mb-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 md:p-12 shadow-lg">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Mission</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Making deliveries faster, more affordable, and sustainable</h2>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    We're building a platform that leverages unused space in travelers' vehicles to
                                    create a more efficient way to send packages. By connecting senders with travelers,
                                    we reduce costs, speed up deliveries, and lower the environmental impact of shipping.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2040B0] to-[#2850D0] text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                    >
                                        Get in Touch
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center justify-center gap-2 bg-white border border-blue-200 text-slate-700 font-medium px-6 py-3 rounded-xl transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                                    >
                                        Read Our Blog
                                    </Link>
                                </div>
                            </div>
                            <div className="h-64 bg-blue-600/10 rounded-xl flex items-center justify-center">
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full flex items-center justify-center text-white">
                                    <MdConnectWithoutContact size={48} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className={`mb-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Story</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The journey of Delemate</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100 hidden md:block"></div>

                        {/* Timeline items */}
                        <div className="space-y-16">
                            {[
                                {
                                    year: "2021",
                                    title: "The Idea",
                                    description: "Delemate was born from a simple observation: while packages moved slowly through traditional courier services, thousands of people were traveling between cities with unused space in their vehicles."
                                },
                                {
                                    year: "2022",
                                    title: "Pilot Launch",
                                    description: "We started with a small pilot program connecting travelers and senders in Delhi and Mumbai, quickly proving that our community-based model could work at scale."
                                },
                                {
                                    year: "2023",
                                    title: "Rapid Growth",
                                    description: "Expanded to 50+ cities across India with our mobile app launch, growing our user base exponentially and refining our verification and safety protocols."
                                },
                                {
                                    year: "2024",
                                    title: "Where We Are Now",
                                    description: "Today, Delemate connects thousands of users daily, with a trusted network of verified travelers helping packages reach their destinations faster and more affordably than ever."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                                >
                                    <div className="md:w-1/2 flex md:justify-end justify-center">
                                        <div className={`w-full md:max-w-md p-6 bg-white border border-blue-100 rounded-xl shadow-md ${
                                            index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                                        }`}>
                                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
                                                {item.year}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                                            <p className="text-slate-600">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="md:absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                                        <div className="w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white">
                                            <MdTimeline size={20} />
                                        </div>
                                    </div>

                                    <div className="md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className={`mb-24 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '450ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">What drives us every day</h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            Our core values shape every decision we make and guide our mission to transform package delivery across India.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl flex items-center justify-center text-white mb-5">
                                    <value.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                                <p className="text-slate-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Section */}
            <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 shadow-lg text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-white/20 -mb-16 -mr-16"></div>
                            <div className="absolute left-0 top-0 w-48 h-48 rounded-full bg-white/20 -ml-12 -mt-12"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">Looking Ahead</span>
                                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">The Future of Delemate</h2>
                                <p className="text-blue-100 max-w-3xl mx-auto">
                                    Our journey is just beginning. Here's where we're headed next.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold mb-3">Nationwide Network</h3>
                                    <p className="text-blue-100">Expanding to every major city and town in India to create the country's largest P2P delivery network.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold mb-3">Enhanced Services</h3>
                                    <p className="text-blue-100">Introducing specialized delivery options for unique items, time-sensitive packages, and bulk shipments.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                    <h3 className="text-xl font-bold mb-3">Global Expansion</h3>
                                    <p className="text-blue-100">Taking our successful community delivery model to other countries with similar transportation challenges.</p>
                                </div>
                            </div>

                            <div className="text-center mt-10">
                                <Link
                                    href="/send-package"
                                    className="inline-flex items-center gap-2 bg-white text-blue-700 font-medium px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/25 hover:-translate-y-0.5"
                                >
                                    Join Our Journey
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

export default AboutUs;