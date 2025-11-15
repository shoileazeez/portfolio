"use client"

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  tags: string[];
  slug: string;
  link: string;
  live_demo: string;
  github: string;
  image: string;
  demo_link: string;
  cover_image: string;
  overview: string;
  challenge: string;
  solution: string;
  impact: string;
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Add timeout and better error handling
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch('/api/projects', {
          signal: controller.signal,
          cache: 'no-store' // Ensure fresh data
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        } else {
          console.error('Failed to fetch projects:', response.status, response.statusText);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.error('Request timeout: Projects took too long to load');
        } else {
          console.error('Failed to fetch projects:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
          <div className="mb-12">
            <div className="flex items-baseline gap-4 mb-4">
              <h1 className="text-sm font-medium text-muted-foreground">date</h1>
              <h1 className="text-sm font-medium text-muted-foreground">title</h1>
            </div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 border border-border rounded-lg bg-card animate-pulse">
                <div className="grid grid-cols-[100px_1fr] gap-6">
                  <div className="bg-muted h-6 w-16 rounded"></div>
                  <div className="space-y-2">
                    <div className="bg-muted h-6 w-3/4 rounded"></div>
                    <div className="bg-muted h-4 w-full rounded"></div>
                    <div className="bg-muted h-4 w-2/3 rounded"></div>
                    <div className="flex gap-2 mt-4">
                      <div className="bg-muted h-6 w-16 rounded"></div>
                      <div className="bg-muted h-6 w-20 rounded"></div>
                      <div className="bg-muted h-6 w-14 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <h1 className="text-sm font-medium text-muted-foreground">date</h1>
            <h1 className="text-sm font-medium text-muted-foreground">title</h1>
          </div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              year={project.year}
              title={project.title}
              description={project.description}
              date={project.year}
              duration=""
              tags={project.tags}
              link={`/project/${project.id}`}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}