"use client"

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { fetchWithCache } from "@/lib/cache";
import { BlogDetailSkeleton } from "@/components/ui/page-skeletons";

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Blog {
  id: number;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  year: string;
  slug: string;
  cover_image: string;
  tags: string[];
  read_time: string;
  content: string;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug: id } = React.use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await fetchWithCache<Blog>(`/api/blogs/${id}`, undefined, 5 * 60 * 1000);
        setBlog(data);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
        if (error.message.includes('404')) {
          notFound();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
          <BlogDetailSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>

          <article className="max-w-none">
            <header className="mb-8 p-6 border border-border rounded-lg bg-card">
              <h1 className="text-4xl font-bold mb-4 text-foreground">{blog.title}</h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{blog.description}</p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.read_time}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs tag-bg tag-text font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {blog.cover_image && (
              <div className="mb-8">
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg border border-border"
                />
              </div>
            )}

            <div className="p-6 border border-border rounded-lg bg-card">
              <div className="space-y-4 leading-relaxed text-base">
                {blog.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.trim() === '') return null;
                  
                  // Handle different content types
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('# ', '')}
                      </h2>
                    );
                  }
                  
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-foreground mt-6 mb-3">
                        {paragraph.replace('## ', '')}
                      </h3>
                    );
                  }
                  
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h4 key={index} className="text-lg font-medium text-foreground mt-4 mb-2">
                        {paragraph.replace('### ', '')}
                      </h4>
                    );
                  }
                  
                  // Handle lists
                  if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                    const listItems = paragraph.split('\n').filter(item => item.trim().startsWith('- '));
                    return (
                      <ul key={index} className="space-y-2 ml-4">
                        {listItems.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">{item.replace('- ', '')}</span>
                            </li>
                        ))}
                      </ul>
                    );
                  }
                  
                  // Regular paragraph
                  return (
                    <p key={index} className="leading-relaxed bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
                      {paragraph.split('\n').map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < paragraph.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Dynamic route - no static generation needed