"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Blog, BlogTextBlock } from "@/types/blogs";
import axios from 'axios';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetail() {
    const params = useParams();
    const router = useRouter();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        setIsVisible(true);
        const fetchBlog = async () => {
            try {
                if (params.id) {
                    const response = await axios.get(`/api/blog/${params.id}`);
                    setBlog(response.data);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlog();
    }, [params.id]);

    if (isLoading) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-16">
                <div className="h-64 bg-slate-200 rounded-lg animate-pulse mb-6"></div>
                <div className="h-10 bg-slate-200 rounded animate-pulse w-3/4 mb-4"></div>
                <div className="h-6 bg-slate-200 rounded animate-pulse w-1/2 mb-8"></div>
                <div className="space-y-4">
                    <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4"></div>
                </div>
            </div>
        );
    }

    if (isError || !blog) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-16">
                <div className="bg-white/70 backdrop-blur-sm border border-blue-100 rounded-xl p-8 text-center shadow-md">
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">Blog not found</h3>
                    <p className="text-slate-600 mb-6">The blog post you're looking for doesn't exist or was removed.</p>
                    <Link href="/blog" className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                        <ArrowLeft size={16} />
                        <span>Back to all blogs</span>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`pt-32 pb-24 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-3xl mx-auto px-4">
                <Link href="/blog" className="flex items-center text-slate-500 hover:text-slate-700 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    <span>Back to all blogs</span>
                </Link>

                <div className={`${isVisible ? 'animate-fade-in-up' : ''}`}>
                    <div className="relative h-80 mb-8 overflow-hidden rounded-xl">
                        <img
                            src={blog.link}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">{blog.title}</h1>
                    <p className="text-xl text-slate-600 mb-6">{blog.subtitle}</p>

                    <div className="flex items-center text-slate-500 gap-6 mb-12 border-b border-slate-200 pb-6">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={16} />
                            <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock size={16} />
                            <span>{blog.min} min read</span>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        {Array.isArray(blog.text) ? (
                            blog.text.map((block: BlogTextBlock, index: number) => {
                                if (!block) return null; // Skip null or undefined blocks

                                if (block.heading) {
                                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{block.heading}</h2>;
                                } else if (block.paragraph) {
                                    return <p key={index} className="mb-6 text-slate-700 leading-relaxed">{block.paragraph}</p>;
                                } else {
                                    return null; // Skip blocks without heading or paragraph
                                }
                            })
                        ) : (
                            <p className="text-slate-700">No content available for this blog post.</p>
                        )}
                    </div>
                </div>
            </div>

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
}