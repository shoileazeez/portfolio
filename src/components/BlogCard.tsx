import { Link } from "react-router-dom";
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
    <Link to={link}>
      <article className="group mb-12 overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50">
        {coverImage && (
          <div className="relative h-48 overflow-hidden">
            <img 
              src={coverImage} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-background/90 backdrop-blur-sm border border-border">
              {year}
            </span>
          </div>
        )}
        
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {date}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
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
