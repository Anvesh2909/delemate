"use client";
import React, { useState, useEffect } from 'react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Clock,
    CheckCircle
} from 'lucide-react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setFormSubmitted(true);
        setIsLoading(false);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Us',
            subtitle: 'For general inquiries and support',
            contact: 'info@delemate.com',
            href: 'mailto:info@delemate.com'
        },
        {
            icon: Phone,
            title: 'Call Us',
            subtitle: 'Mon-Fri from 10am to 6pm IST',
            contact: '+91 123 456 7890',
            href: 'tel:+911234567890'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            subtitle: 'Our headquarters',
            contact: '123 Tech Park, Kondapur\nHyderabad, 500084',
            href: null
        }
    ];

    const subjectOptions = [
        { value: '', label: 'Select a topic' },
        { value: 'general', label: 'General Inquiry' },
        { value: 'support', label: 'Customer Support' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'partnership', label: 'Partnership' },
        { value: 'media', label: 'Media Inquiry' }
    ];

    return (
        <div className="min-h-screen">
            <div className="pt-20 pb-16">
                {/* Hero Section */}
                <section className={`mb-12 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Get in{' '}
                                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-600/20 rounded-full transform -skew-x-12"></div>
                </span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                We're here to answer your questions and hear your feedback.
                                Reach out to our team through any of the channels below.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className={`mb-16 transition-all duration-1000 ease-out delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`group bg-white/70 backdrop-blur-sm border border-blue-100/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center transform ${
                                            isVisible ? 'scale-100' : 'scale-95'
                                        }`}
                                        style={{
                                            transitionDelay: `${300 + index * 100}ms`,
                                            animationDelay: `${300 + index * 100}ms`
                                        }}
                                    >
                                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent size={28} className="text-blue-600 group-hover:text-blue-700 transition-colors" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 mb-3">{info.title}</h3>
                                        <p className="text-slate-600 mb-4">{info.subtitle}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-all duration-200"
                                            >
                                                {info.contact}
                                            </a>
                                        ) : (
                                            <div className="text-blue-600 font-medium whitespace-pre-line">
                                                {info.contact}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className={`transition-all duration-1000 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="max-w-5xl mx-auto px-6 lg:px-8">
                        <div className="bg-white/80 backdrop-blur-lg border border-blue-100/50 rounded-3xl shadow-2xl overflow-hidden">
                            <div className="grid md:grid-cols-5">
                                {/* Form Section */}
                                <div className="md:col-span-3 p-8 md:p-12">
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-slate-800 mb-3">Send us a message</h2>
                                        <p className="text-slate-600 text-lg">
                                            Fill out the form below and we'll get back to you as soon as possible.
                                        </p>
                                    </div>

                                    {formSubmitted ? (
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-50 border border-blue-200/50 rounded-2xl p-8 text-center">
                                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-100 to-blue-100 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                                <CheckCircle size={32} className="text-blue-600" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-800 mb-3">Thank You!</h3>
                                            <p className="text-slate-600 mb-6 text-lg">
                                                Your message has been sent successfully. We'll get back to you soon.
                                            </p>
                                            <button
                                                onClick={() => setFormSubmitted(false)}
                                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                            >
                                                Send Another Message
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm outline-none"
                                                        placeholder="Your full name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm outline-none"
                                                        placeholder="your.email@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Subject
                                                </label>
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm outline-none"
                                                >
                                                    {subjectOptions.map((option) => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={6}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none outline-none"
                                                    placeholder="How can we help you?"
                                                />
                                            </div>

                                            <button
                                                onClick={handleSubmit}
                                                disabled={isLoading}
                                                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 hover:from-blue-700 hover:via-blue-800 hover:to-blue-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3 disabled:cursor-not-allowed disabled:hover:scale-100"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Info Section */}
                                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-700 text-white p-8 md:p-12 flex flex-col relative overflow-hidden">
                                    {/* Background decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />

                                    <h3 className="text-2xl font-bold mb-8 relative z-10">Contact Information</h3>

                                    <div className="space-y-8 mb-8 relative z-10">
                                        <div className="flex items-start gap-4 group">
                                            <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-colors duration-300">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1">Email</p>
                                                <p className="font-semibold text-lg">info@delemate.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-colors duration-300">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1">Phone</p>
                                                <p className="font-semibold text-lg">+91 123 456 7890</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-colors duration-300">
                                                <MapPin size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1">Address</p>
                                                <p className="font-semibold">123 Tech Park, Kondapur</p>
                                                <p className="font-semibold">Hyderabad, 500084</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 group">
                                            <div className="bg-white/15 p-3 rounded-xl group-hover:bg-white/25 transition-colors duration-300">
                                                <Clock size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-blue-200 mb-1">Working Hours</p>
                                                <p className="font-semibold">Mon - Fri: 10:00 AM - 6:00 PM</p>
                                                <p className="font-semibold">Sat - Sun: Closed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto relative z-10">
                                        <div className="h-1 w-24 bg-gradient-to-r from-white/40 to-transparent rounded-full mb-6"></div>
                                        <p className="text-blue-100 leading-relaxed">
                                            We aim to respond to all inquiries within 24 hours during business days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;