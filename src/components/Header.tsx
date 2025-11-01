import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Twitter, Linkedin, Github } from "lucide-react";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
          Your Name
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
          
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors flex items-center gap-1"
          >
            <Twitter className="h-4 w-4" />
            <span className="hidden sm:inline">Follow me</span>
          </a>
          
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-accent transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};
