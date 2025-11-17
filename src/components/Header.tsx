"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Linkedin, Github, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-medium hover:opacity-70 transition-opacity"
          >
            Shoile Abdulazeez
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
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
              aria-label="GitHub Profile"
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className={`text-sm transition-colors ${
                  pathname === "/about" 
                    ? "nav-link-active" 
                    : "nav-link"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`text-sm transition-colors ${
                  pathname === "/contact" 
                    ? "nav-link-active" 
                    : "nav-link"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://github.com/shoileazeez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  aria-label="GitHub Profile"
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
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
