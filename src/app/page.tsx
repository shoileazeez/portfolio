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
      <>
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 animate-fade-in">
          <div className="mb-8 sm:mb-12">
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <h1 className="text-2xl sm:text-3xl font-bold">Projects</h1>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                A collection of projects I've built, from web applications to machine learning models and open-source packages.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Year</div>
                </div>
                <div className="text-center sm:col-span-3 sm:text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Project Name</div>
                </div>
              </div>
            </div>
          </div>
          <ProjectListSkeleton />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 animate-fade-in">
        <div className="mb-8 sm:mb-12">
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h1 className="text-2xl sm:text-3xl font-bold">Projects</h1>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              A collection of projects I've built, from web applications to machine learning models and open-source packages.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Year</div>
              </div>
              <div className="text-center sm:col-span-3 sm:text-left">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Project Name</div>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-border">
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
    </>
  );
}