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
    <div className="py-4 sm:py-6 group hover:bg-muted/30 transition-colors">
      <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-3 sm:gap-6">
        <div className="text-sm sm:text-base text-muted-foreground font-medium sm:pt-1">{year}</div>
        
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
            {title}
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
            {description}
          </p>
          
          {duration && (
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              {date} • {duration}
            </p>
          )}
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 sm:px-3 py-1 rounded-md text-xs tag-bg tag-text"
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
