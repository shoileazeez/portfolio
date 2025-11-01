import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-muted-foreground">
        <p>Shoile Abdulazeez Adenuga ( shoabdulazeez@gmail.com )</p>
        <a
          href="https://github.com/shoileazeez"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors flex items-center gap-2"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
};
