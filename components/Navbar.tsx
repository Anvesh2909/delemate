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
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-slate-900/5 border-b border-slate-200/50 py-3'
                    : 'bg-white/80 backdrop-blur-md py-5 border-b border-slate-100/30'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="h-10 w-10 relative transition-transform duration-200 group-hover:scale-105">
                                    <Image
                                        src="/logo.png"
                                        alt="Delemate Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href);
                                const Icon = link.icon;

                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center gap-2 font-medium text-sm px-4 py-2.5 rounded-xl transition-all duration-200 ${
                                            isActive
                                                ? 'text-blue-700 bg-blue-50 border border-blue-200 shadow-sm'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/80'
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
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none p-2 rounded-lg hover:bg-blue-50"
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
                    className={`md:hidden fixed inset-y-0 right-0 w-[300px] bg-white/95 backdrop-blur-xl z-50 shadow-2xl shadow-blue-500/20 transform transition-transform duration-300 ease-out border-l border-blue-100 ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="p-6 border-b border-blue-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent">
                            <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                                <div className="h-8 w-8 relative">
                                    <Image
                                        src="/logo.png"
                                        alt="Delemate Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-200 text-slate-500 hover:text-blue-600"
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
                                                    ? 'text-blue-700 bg-blue-50 border border-blue-200 shadow-sm'
                                                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/70'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <div className="flex items-center gap-3.5 w-full">
                                                <div className={`p-2.5 rounded-lg transition-colors duration-200 ${
                                                    isActive
                                                        ? 'bg-blue-100 border border-blue-200'
                                                        : 'bg-slate-100 group-hover:bg-blue-100'
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

                            {/* Mobile menu decorative element */}
                            <div className="mt-8 mx-2 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200/30">
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={16} className="text-blue-500" />
                                    <div className="text-xs uppercase text-blue-600 font-semibold tracking-wider">Delemate</div>
                                </div>
                                <div className="text-sm text-slate-600 leading-relaxed">
                                    Your Ultimate Task Management Solution for Enhanced Productivity
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isMenuOpen && (
                    <div
                        className="md:hidden fixed inset-0 bg-blue-900/20 backdrop-blur-sm z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </nav>
        </>
    );
};

export default Navbar;