"use client";
import React, { useState, useEffect, useRef } from 'react';
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
    Sparkles,
    ChevronDown
} from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const navLinks = [
        {
            name: 'About Us',
            href: '/about-us',
            icon: Building2
        },
        {
            name: 'Blogs',
            href: '/blog',
            icon: PenTool
        },
        {
            name: 'Contact',
            href: '/contact-us',
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

            // Close dropdown when clicking outside
            if (
                isDropdownOpen &&
                dropdownRef.current &&
                buttonRef.current &&
                !dropdownRef.current.contains(target) &&
                !buttonRef.current.contains(target)
            ) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen, isDropdownOpen]);

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/15 backdrop-blur-lg py-3'
                    : 'bg-transparent py-5'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo Section */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2 group">
                                <div className="h-10 w-10 relative transition-transform duration-200 group-hover:scale-110">
                                    <Image src="/logo.png" alt="logo" width={50} height={50}/>
                                </div>
                                <span className={`font-semibold text-lg transition-opacity duration-300 ${
                                    scrolled ? 'text-black' : 'text-black'
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
                                                ? 'text-[#2040B0] bg-white/10'
                                                : `${scrolled ? 'text-slate-600' : 'text-slate-700'} hover:text-[#2040B0] hover:bg-white/5`
                                        }`}
                                    >
                                        <Icon size={16} className={`transition-colors duration-200 ${
                                            isActive
                                                ? 'text-[#2040B0]'
                                                : 'text-slate-400 group-hover:text-[#2040B0]'
                                        }`} />
                                        <span className="relative">
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            })}

                            {/* Others Dropdown */}
                            <div className="relative">
                                <button
                                    ref={buttonRef}
                                    onClick={() => setDropdownOpen((prev) => !prev)}
                                    className={`group flex items-center gap-2 font-medium text-sm px-4 py-2.5 rounded-xl transition-all duration-300 ${
                                        pathname.startsWith('/privacy-policy') || pathname.startsWith('/terms-and-conditions') || pathname.startsWith('/refund-policy')
                                            ? 'text-[#2040B0] bg-white/10'
                                            : `${scrolled ? 'text-slate-600' : 'text-slate-700'} hover:text-[#2040B0] hover:bg-white/5`
                                    }`}
                                >
                                    <Lightbulb size={16} className={`transition-colors duration-200 ${
                                        pathname.startsWith('/privacy-policy') || pathname.startsWith('/terms-and-conditions') || pathname.startsWith('/refund-policy')
                                            ? 'text-[#2040B0]'
                                            : 'text-slate-400 group-hover:text-[#2040B0]'
                                    }`} />
                                    <span>Others</span>
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                                </button>

                                {isDropdownOpen && (
                                    <div
                                        ref={dropdownRef}
                                        className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-md rounded-xl z-10 overflow-hidden"
                                    >
                                        <Link
                                            href="/privacy-policy"
                                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-[#2040B0] transition-colors duration-200"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Privacy Policy
                                        </Link>
                                        <Link
                                            href="/terms-and-conditions"
                                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-[#2040B0] transition-colors duration-200"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Terms & Conditions
                                        </Link>
                                        <Link
                                            href="/refund-policy"
                                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-[#2040B0] transition-colors duration-200"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            Refund Policy
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Action Button */}
                            <Link
                                href="/send-package"
                                className="ml-2 flex items-center gap-1.5 bg-gradient-to-r from-[#2040B0] to-[#2850D0] hover:from-[#1a3699] hover:to-[#2346b8] text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
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
                                        ? 'text-slate-700 hover:text-[#2040B0]'
                                        : 'text-slate-800 hover:text-[#2040B0]'
                                }`}
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden fixed inset-y-0 right-0 w-[300px] bg-white/60 backdrop-blur-2xl z-50 transform transition-transform duration-500 ease-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="p-6 border-b border-[#2040B0]/10 flex items-center justify-between">
                            <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMenuOpen(false)}>
                                <div className="h-8 w-8 relative bg-[#2040B0] rounded-md flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">D</span>
                                </div>
                                <span className="font-semibold text-[#2040B0]">Delemate</span>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full text-slate-500 hover:text-[#2040B0]"
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
                                                    ? 'text-[#2040B0] bg-[#2040B0]/5'
                                                    : 'text-slate-600 hover:text-[#2040B0] hover:bg-[#2040B0]/5'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <div className="flex items-center gap-3.5 w-full">
                                                <Icon size={18} className={
                                                    isActive ? 'text-[#2040B0]' : 'text-slate-400'
                                                } />
                                                <span className="font-medium text-base">{link.name}</span>
                                            </div>
                                        </Link>
                                    );
                                })}

                                {/* Others dropdown for mobile */}
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                                        className={`flex items-center px-4 py-3.5 rounded-xl transition-all duration-200 w-full text-left ${
                                            pathname.startsWith('/privacy-policy') || pathname.startsWith('/terms-and-conditions') || pathname.startsWith('/refund-policy')
                                                ? 'text-[#2040B0] bg-[#2040B0]/5'
                                                : 'text-slate-600 hover:text-[#2040B0] hover:bg-[#2040B0]/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3.5 w-full">
                                            <Lightbulb size={18} className={
                                                pathname.startsWith('/privacy-policy') || pathname.startsWith('/terms-and-conditions') || pathname.startsWith('/refund-policy')
                                                    ? 'text-[#2040B0]'
                                                    : 'text-slate-400'
                                            } />
                                            <span className="font-medium text-base">Others</span>
                                            <ChevronDown
                                                size={16}
                                                className={`ml-auto transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                            />
                                        </div>
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="ml-12 mt-2 space-y-2 mb-2">
                                            <Link
                                                href="/privacy-policy"
                                                className="block py-2 px-4 text-slate-600 hover:text-[#2040B0] rounded-lg"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Privacy Policy
                                            </Link>
                                            <Link
                                                href="/terms-and-conditions"
                                                className="block py-2 px-4 text-slate-600 hover:text-[#2040B0] rounded-lg"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Terms & Conditions
                                            </Link>
                                            <Link
                                                href="/refund-policy"
                                                className="block py-2 px-4 text-slate-600 hover:text-[#2040B0] rounded-lg"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Refund Policy
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/send-package"
                                className="mt-6 flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#2040B0] to-[#2850D0] text-white font-medium py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </Link>

                            {/* Mobile menu decorative element */}
                            <div className="mt-8 mx-2 p-5 rounded-xl bg-gradient-to-br from-[#2040B0]/5 to-[#2040B0]/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Sparkles size={16} className="text-[#2040B0]" />
                                    <div className="text-xs uppercase text-[#2040B0] font-semibold tracking-wider">Delemate</div>
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
                        className="md:hidden fixed inset-0 bg-[#2040B0]/5 backdrop-blur-sm z-40"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </nav>
        </>
    );
};

export default Navbar;