import { useParams, Navigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogs } from "@/config/content";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// Create a lookup object for blogs by slug
const blogsData = blogs.reduce((acc, blog) => {
  acc[blog.slug] = blog;
  return acc;
}, {} as Record<string, typeof blogs[0]>);

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogsData[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const blog = blogsData[slug];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Cover Image */}
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        {blog.coverImage && (
          <>
            <img 
              src={blog.coverImage} 
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </>
        )}
        
        <div className="relative h-full max-w-4xl mx-auto px-6 flex flex-col justify-end pb-12 animate-fade-in">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {blog.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {blog.readTime}
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 animate-fade-in">
        <article className="space-y-6">
          {/* Description/Excerpt */}
          <div className="text-lg text-muted-foreground leading-relaxed pb-8 border-b border-border">
            {blog.description}
          </div>
          
          {/* Main Content */}
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h1:mb-4 prose-h1:mt-8
            prose-h2:text-3xl prose-h2:mb-3 prose-h2:mt-8
            prose-h3:text-2xl prose-h3:mb-2 prose-h3:mt-6
            prose-p:leading-relaxed prose-p:mb-4
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:mb-2
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
          ">
            <div className="whitespace-pre-line">
              {blog.content}
            </div>
          </div>
        </article>
        
        {/* Back to Blog Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            View all blog posts
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
