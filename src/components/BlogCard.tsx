import { Link } from "react-router-dom";

interface BlogCardProps {
  year: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

export const BlogCard = ({ year, title, description, date, readTime, tags, link }: BlogCardProps) => {
  return (
    <Link to={link}>
      <div className="grid grid-cols-[100px_1fr] gap-8 mb-16 group transition-all duration-300 hover:translate-x-2">
        <div className="text-muted-foreground font-medium pt-1">{year}</div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
            {title}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          <p className="text-sm text-muted-foreground mb-4">
            {date} • {readTime}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
