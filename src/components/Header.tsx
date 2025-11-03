import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Linkedin, Github, BookOpen } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
          Shoile Abdulazeez
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link
            to="/about"
            className={`text-sm hover:text-accent transition-colors ${
              location.pathname === "/about" ? "text-accent" : ""
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`text-sm hover:text-accent transition-colors ${
              location.pathname === "/contact" ? "text-accent" : ""
            }`}
          >
            Contact
          </Link>
          
          <a
            href="https://github.com/shoileazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          
          <a
            href="https://linkedin.com/in/shoile-abdulazeez-8143842ab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          
          <a
            href="https://medium.com/@shoileabdulazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors"
            aria-label="Medium Blog"
          >
            <BookOpen className="h-4 w-4" />
          </a>
          
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
