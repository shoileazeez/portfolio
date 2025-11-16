"use client"

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { fetchWithCache } from "@/lib/cache";
import { ProjectListSkeleton } from "@/components/ui/page-skeletons";


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
  platform?: string;
  pypi_url?: string;
  api_docs_url?: string;
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Use cached fetch with 3 minute cache for projects
        const data = await fetchWithCache<Project[]>('/api/projects', undefined, 3 * 60 * 1000);
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
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
          <ProjectListSkeleton />
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