import Link from "next/link";

interface ProjectCardProps {
  year: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  tags: string[];
  link?: string;
}

export const ProjectCard = ({ year, title, description, date, duration, tags, link }: ProjectCardProps) => {
  const content = (
    <div className="py-6 border-b border-border last:border-b-0 group hover:bg-muted/30 transition-colors">
      <div className="grid grid-cols-[100px_1fr] gap-6">
        <div className="text-muted-foreground font-medium pt-1">{year}</div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {title}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
          <p className="text-sm text-muted-foreground mb-4">
            {date} • {duration}
          </p>
          
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
      </div>
    </div>
  );

  if (link) {
    return <Link href={link} className="block">{content}</Link>;
  }

  return content;
};
