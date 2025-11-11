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

        <div className="mb-8">
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="text-sm font-medium text-muted-foreground">date</h2>
            <h2 className="text-sm font-medium text-muted-foreground">title</h2>
          </div>
        </div>

        <div className="space-y-8">
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
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
