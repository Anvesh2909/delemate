"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import {BlogTextBlock, Blog} from "@/types/blogs";


const BlogPage: React.FC = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('/api/blog');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-24">
            {/* Hero Section */}
            <section className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Our <span className="relative">
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Blogs
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full -skew-x-12"></div>
              </span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Insights, updates, and stories about package delivery and the Delemate community
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '150ms' }}>
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-white/70 border border-blue-100 rounded-xl overflow-hidden shadow-md">
                                    <div className="h-48 bg-slate-200 animate-pulse"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-6 bg-slate-200 rounded animate-pulse"></div>
                                        <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                                        <div className="flex justify-between">
                                            <div className="h-4 bg-slate-200 rounded animate-pulse w-1/4"></div>
                                            <div className="h-4 bg-slate-200 rounded animate-pulse w-1/4"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <Link href={`/blog/${blog._id}`} key={blog._id}>
                                    <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                        <div className="h-48 relative overflow-hidden">
                                            <img
                                                src={blog.link}
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2">
                                                {blog.title}
                                            </h2>
                                            <p className="text-slate-600 mb-4 line-clamp-2">
                                                {blog.subtitle}
                                            </p>
                                            <div className="mt-auto flex items-center justify-between text-sm text-slate-500">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar size={14} />
                                                    <span>{blog.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock size={14} />
                                                    <span>{blog.min} min read</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-8 text-center shadow-md">
                            <h3 className="text-xl font-semibold text-slate-700 mb-2">No blog posts yet</h3>
                            <p className="text-slate-600">Check back soon for new articles and updates!</p>
                        </div>
                    )}
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

export default BlogPage;