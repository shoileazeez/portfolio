"use client"

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";

interface Blog {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  year: string;
  slug: string;
  link: string;
  coverImage: string;
  tags: string[];
  readTime: string;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Add timeout and better error handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch('/api/blogs', {
          signal: controller.signal,
          cache: 'no-store' // Ensure fresh data
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs:', response.status, response.statusText);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.error('Request timeout: Blogs took too long to load');
        } else {
          console.error('Failed to fetch blogs:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground">
              Thoughts on software development, machine learning, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse">
                <article className="group mb-8 overflow-hidden rounded-lg border border-border bg-card">
                  <div className="bg-muted h-48 w-full"></div>
                  <div className="p-6 space-y-4">
                    <div className="bg-muted h-6 w-3/4 rounded"></div>
                    <div className="bg-muted h-4 w-full rounded"></div>
                    <div className="bg-muted h-4 w-5/6 rounded"></div>
                    <div className="flex gap-4">
                      <div className="bg-muted h-4 w-24 rounded"></div>
                      <div className="bg-muted h-4 w-20 rounded"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-muted h-6 w-16 rounded"></div>
                      <div className="bg-muted h-6 w-20 rounded"></div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts on software development, machine learning, and technology.
          </p>
        </div>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              year={blog.year}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              readTime={blog.readTime}
              tags={blog.tags}
              link={`/blog/${blog.id}`}
              coverImage={blog.coverImage}
            />
          ))}
        </div>

        {/* View More on Medium Section */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">Read More Articles</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Explore more of my thoughts and insights on software development, technology, and innovation on Medium.
            </p>
            <a 
              href="https://medium.com/@shoileazeez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              View More on Medium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}