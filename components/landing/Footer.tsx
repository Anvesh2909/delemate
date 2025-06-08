"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MdOutlinePrivacyTip,
    MdDescription,
    MdEmail,
    MdInfo,
    MdPhone
} from 'react-icons/md';
import {
    FiTwitter,
    FiInstagram,
    FiFacebook,
    FiLinkedin
} from 'react-icons/fi';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <footer className="relative overflow-hidden border-t border-blue-100/50 mt-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
                <div className={`grid md:grid-cols-4 gap-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link href="/" className="flex items-center mb-5 group">
                            <div className="h-10 w-10 relative transition-transform duration-200 group-hover:scale-110 mr-3">
                                <Image src="/logo.png" alt="logo" width={40} height={40}/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold bg-black bg-clip-text text-transparent">
                                    Delemate
                                </h3>
                            </div>
                        </Link>
                        <p className="text-slate-600 mb-6">
                            We Deliver Trust, Not Just Parcels. Smart delivery through community—faster, safer, more affordable.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-blue-100">
                                <FiTwitter size={18} className="text-blue-600" />
                            </a>
                            <a href="https://facebook.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-blue-100">
                                <FiFacebook size={18} className="text-blue-600" />
                            </a>
                            <a href="https://instagram.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-blue-100">
                                <FiInstagram size={18} className="text-blue-600" />
                            </a>
                            <a href="https://linkedin.com" className="w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-blue-100">
                                <FiLinkedin size={18} className="text-blue-600" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'About Us', href: '/about', icon: MdInfo },
                                { name: 'Blogs', href: '/blogs', icon: MdDescription },
                                { name: 'Others', href: '/others', icon: MdOutlinePrivacyTip },
                                { name: 'Contact', href: '/contact', icon: MdEmail }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-[#2040B0] transition-colors flex items-center gap-2"
                                    >
                                        <link.icon size={16} className="text-blue-500" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Legal</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Terms of Service', href: '/terms' },
                                { name: 'Privacy Policy', href: '/privacy' },
                                { name: 'Cookie Policy', href: '/cookies' },
                                { name: 'FAQ', href: '/faq' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 hover:text-[#2040B0] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-4">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <MdEmail size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Email</p>
                                    <a href="mailto:info@delemate.com" className="text-slate-700 font-medium hover:text-[#2040B0]">
                                        info@delemate.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <MdPhone size={20} className="text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Phone</p>
                                    <a href="tel:+91-1234567890" className="text-slate-700 font-medium hover:text-[#2040B0]">
                                        +91-1234567890
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Download App Section */}
                <div className={`mt-12 pt-8 border-t border-slate-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-6 md:mb-0">
                            <h4 className="text-lg font-semibold text-slate-800 mb-2">
                                Download Our Mobile App
                            </h4>
                            <p className="text-slate-600">
                                Get exclusive offers and track your deliveries on the go
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {/* Google Play Button */}
                            <a
                                href="https://play.google.com/store/apps/details?id=com.delemate.delemate"
                                className="flex items-center gap-3 px-4 py-3 bg-white/90 border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                        <path fill="#4285F4" d="M12.954 11.616l2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341z"/>
                                        <path fill="#EA4335" d="M3.766 2.435c-.235.234-.39.54-.39.929v17.272c0 .39.156.695.39.928l8.472-8.472-8.472-8.657z"/>
                                        <path fill="#FBBC04" d="M12.954 12.384l-8.34 8.34c.52.373 1.113.326 1.746-.016l9.55-5.368-2.956-2.956z"/>
                                        <path fill="#34A853" d="M22.758 10.366l-3.236-1.816-3.055 3.066 3.055 3.066 3.236-1.817c1.02-.573 1.02-1.922 0-2.499z"/>
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500">GET IT ON</span>
                                    <div className="text-sm font-semibold text-slate-800">Google Play</div>
                                </div>
                            </a>

                            {/* App Store Button */}
                            <a
                                href="https://apps.apple.com/in/app/delemate/id6547860986"
                                className="flex items-center gap-3 px-4 py-3 bg-white/90 border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                        <path d="M15.527 11.42c-.013-1.516.71-2.677 2.173-3.525-1.157-1.536-2.644-2.031-4.577-1.591-1.794.408-3.05 1.7-3.395 1.7-.4 0-1.567-1.591-2.937-1.591-2.917 0-5.416 2.653-5.416 6.1 0 1.957.745 4.006 1.968 6.034 1.018 1.63 2.37 3.453 4.122 3.453 1.716 0 2.324-1.248 4.058-1.248 1.659 0 2.309 1.248 4.078 1.248 1.724 0 3.14-1.918 4.11-3.495 1.157-1.861 1.54-3.624 1.562-3.699-.048-.013-3.096-1.194-3.096-4.262 0-2.452 1.978-3.586 2.09-3.662-.115-.374-2.143-1.049-3.74-.262zm-1.12-5.918c.981-1.14 1.598-2.678 1.456-4.215-1.413.092-3.082.93-4.076 2.11-.897 1.002-1.672 2.576-1.456 4.084 1.5.106 3.096-.749 4.076-1.979z" fill="#000000"/>
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500">DOWNLOAD ON THE</span>
                                    <div className="text-sm font-semibold text-slate-800">App Store</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                    <p className="text-slate-600 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Delemate. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span>Made with ❤️ in India</span>
                        <span>•</span>
                        <span>v1.0.0</span>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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
        </footer>
    );
};

export default Footer;