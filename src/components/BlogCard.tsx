import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  year: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
  coverImage?: string;
}

export const BlogCard = ({ year, title, description, date, readTime, tags, link, coverImage }: BlogCardProps) => {
  return (
    <Link href={link} className="block">
      <article className="mb-8 overflow-hidden rounded-lg border border-border bg-card">
        {coverImage && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-medium bg-background/90 backdrop-blur-sm border border-border">
              {year}
            </span>
          </div>
        )}
        
        <div className="p-6">
          <h2 className="text-xl font-bold mb-3">
            {title}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readTime}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs tag-bg tag-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};
