import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogs } from "@/config/content";
import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground mb-6">
            Thoughts on software development, machine learning, and technology. I write about my experiences building full-stack applications and working with AI.
          </p>
          <a
            href="https://medium.com/@shoabdulazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <BookOpen className="h-4 w-4" />
            Read more on Medium
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              year={blog.year}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              readTime={blog.readTime}
              tags={blog.tags}
              link={blog.link}
              coverImage={blog.coverImage}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
