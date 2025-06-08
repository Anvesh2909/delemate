"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Menu,
    X,
    Building2,
    PenTool,
    Lightbulb,
    Mail,
    Sparkles
} from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        {
            name: 'About Us',
            href: '/#about',
            icon: Building2
        },
        {
            name: 'Blogs',
            href: '/blogs',
            icon: PenTool
        },
        {
            name: 'Others',
            href: '/others',
            icon: Lightbulb
        },
        {
            name: 'Contact',
            href: '/contact',
            icon: Mail
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isMenuOpen && !target.closest('nav')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/15 backdrop-blur-lg shadow-lg shadow-blue-900/5 py-3'
                    : 'bg-transparent py-5'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 group">
                                <div className="h-10 w-10 relative transition-transform duration-200 group-hover:scale-110">
                                    <Image
                                        src="/logo.png"
                                        alt="Delemate Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                                <span className={`font-semibold text-lg transition-opacity duration-300 ${
                                    scrolled ? 'text-slate-800' : 'text-slate-900'
                                }`}>
                                    Delemate
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href);
                                const Icon = link.icon;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`group flex items-center gap-2 font-medium text-sm px-4 py-2.5 rounded-xl transition-all duration-300 ${
                                            isActive
                                                ? 'text-blue-700 bg-white/30 backdrop-blur-md shadow-sm'
                                                : `${scrolled ? 'text-slate-600' : 'text-slate-700'} hover:text-blue-600 hover:bg-white/20 hover:backdrop-blur-md`
                                        }`}
                                    >
                                        <Icon size={16} className={`transition-colors duration-200 ${
                                            isActive
                                                ? 'text-blue-500'
                                                : 'text-slate-400 group-hover:text-blue-500'
                                        }`} />
                                        <span className="relative">
                                            {link.name}
                                            {isActive && (
                                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                                            )}
                                        </span>
                                    </Link>
                                );
                            })}

                            {/* Action Button */}
                            <Link
                                href="/send-package"
                                className="ml-2 flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`transition-colors duration-300 focus:outline-none p-2 rounded-xl ${
                                    scrolled
                                        ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50/70'
                                        : 'text-slate-800 hover:text-blue-600 hover:bg-white/20 backdrop-blur-md'
                                }`}
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu - Sliding panel */}
                <div
                    className={`md:hidden fixed inset-y-0 right-0 w-[300px] bg-white/60 backdrop-blur-2xl z-50 shadow-2xl shadow-blue-500/10 transform transition-transform duration-500 ease-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="p-6 border-b border-blue-100/50 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent">
                            <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                                <div className="h-8 w-8 relative">
                                    <Image
                                        src="/logo.png"
                                        alt="Delemate Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-semibold text-slate-800">Delemate</span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full bg-blue-50/80 hover:bg-blue-100/80 transition-colors duration-200 text-slate-500 hover:text-blue-600"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <div className="flex-1 overflow-y-auto py-6 px-4">
                            <div className="space-y-3">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href || pathname.startsWith(link.href);
                                    const Icon = link.icon;

                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 ${
                                                isActive
                                                    ? 'text-blue-700 bg-blue-50/80 border border-blue-200/30 shadow-sm'
                                                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/50'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <div className="flex items-center gap-3.5 w-full">
                                                <div className={`p-2.5 rounded-lg transition-colors duration-200 ${
                                                    isActive
                                                        ? 'bg-blue-100/80 border border-blue-200/30'
                                                        : 'bg-slate-100/70 group-hover:bg-blue-100/60'
                                                }`}>
                                                    <Icon size={18} className={
                                                        isActive ? 'text-blue-500' : 'text-slate-400'
                                                    } />
                                                </div>
                                                <span className="font-medium text-base">{link.name}</span>
                                                {isActive && (
                                                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                                                )}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/send-package"
                                className="mt-6 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>

                            {/* Mobile menu decorative element */}
                            <div className="mt-8 mx-2 p-5 rounded-xl bg-gradient-to-br from-blue-50/80 to-blue-100/40 border border-blue-200/20 backdrop-blur-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={16} className="text-blue-500" />
                                    <div className="text-xs uppercase text-blue-600 font-semibold tracking-wider">Delemate</div>
                                </div>
                                <div className="text-sm text-slate-600 leading-relaxed">
                                    Smart delivery through community—faster, safer, more affordable.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isMenuOpen && (
                    <div
                        className="md:hidden fixed inset-0 bg-blue-900/10 backdrop-blur-sm z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </nav>
        </>
    );
};

export default Navbar;