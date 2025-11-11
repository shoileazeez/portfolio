import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { blogs } from "@/config/content";

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
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <article className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-muted-foreground mb-4">
              {blog.date} • {blog.readTime}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {blog.content}
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
