import { Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-1 sm:py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <p className="text-center sm:text-left text-xs">Shoile Abdulazeez Adenuga</p>
            <a 
              href="mailto:shoabdulazeez@gmail.com"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <Mail className="h-2.5 w-2.5" />
              <span className="text-xs">shoabdulazeez@gmail.com</span>
            </a>
          </div>
          
          <a
            href="https://github.com/shoileazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <Github className="h-2.5 w-2.5" />
            <span className="hidden sm:inline text-xs">GitHub</span>
          </a>
        </div>
        
        <div className="mt-1 pt-1 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Shoile Abdulazeez. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
