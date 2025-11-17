"use client"

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchWithCache } from "@/lib/cache";
import { ProjectDetailSkeleton } from "@/components/ui/page-skeletons";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

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

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug: id } = React.use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await fetchWithCache<Project>(`/api/projects/${id}`, undefined, 5 * 60 * 1000);
        setProject(data);
      } catch (error) {
        console.error('Failed to fetch project:', error);
        if (error.message.includes('404')) {
          notFound();
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 animate-fade-in">
          <ProjectDetailSkeleton />
        </main>
        <Footer />
      </>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          <article className="space-y-6 sm:space-y-8">
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <span className="text-sm text-muted-foreground">{project.year}</span>
                <div className="flex flex-wrap gap-2 sm:gap-4 sm:ml-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-initial">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        <span className="hidden xs:inline">GitHub</span>
                      </a>
                    </Button>
                  )}
                  {(project.live_demo || project.demo_link) && (
                    <Button size="sm" asChild className="flex-1 sm:flex-initial">
                      <a href={project.live_demo || project.demo_link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        <span className="hidden xs:inline">Live </span>Demo
                      </a>
                    </Button>
                  )}
                  {project.pypi_url && (
                    <Button size="sm" variant="outline" asChild className="flex-1 sm:flex-initial">
                      <a href={project.pypi_url} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        <span className="hidden xs:inline">PyPI</span>
                      </a>
                    </Button>
                  )}
                  {project.api_docs_url && (
                    <Button size="sm" variant="secondary" asChild className="flex-1 sm:flex-initial">
                      <a href={project.api_docs_url} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14,2 14,8 20,8"/>
                          <line x1="16" y1="13" x2="8" y2="13"/>
                          <line x1="16" y1="17" x2="8" y2="17"/>
                          <polyline points="10,9 9,9 8,9"/>
                        </svg>
                        <span className="hidden xs:inline">API </span>Docs
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{project.title}</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.platform && (
                  <span className="px-3 py-1 rounded-md text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 font-semibold">
                    {project.platform} Package
                  </span>
                )}
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(project.image || project.cover_image) && (
              <div className="mb-8">
                <img
                  src={project.image || project.cover_image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg border border-border"
                />
              </div>
            )}

            <div className="space-y-8">
              {project.overview && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
                </div>
              )}

              {project.challenge && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-destructive rounded-full mr-3"></span>
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    The Solution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              )}

              {project.impact && (
                <div className="p-6 border border-border rounded-lg bg-card">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Impact & Results
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
                </div>
              )}
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

// Dynamic route - no static generation needed