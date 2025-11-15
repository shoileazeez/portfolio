"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Linkedin, Github, BookOpen } from "lucide-react";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium hover:opacity-70 transition-opacity">
          Shoile Abdulazeez
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className={`text-sm transition-colors ${
              pathname === "/about" 
                ? "nav-link-active" 
                : "nav-link"
            }`}
          >
            About
          </Link>

          <Link
            href="/blog"
            className={`text-sm transition-colors ${
              pathname === "/blog" || pathname?.startsWith("/blog/") 
                ? "nav-link-active" 
                : "nav-link"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`text-sm transition-colors ${
              pathname === "/contact" 
                ? "nav-link-active" 
                : "nav-link"
            }`}
          >
            Contact
          </Link>
          
          <a
            href="https://github.com/shoileazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <Github className="h-4 w-4" />
          </a>
          
          <a
            href="https://linkedin.com/in/shoile-abdulazeez-8143842ab"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          
          <a
            href="https://medium.com/@shoabdulazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
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
