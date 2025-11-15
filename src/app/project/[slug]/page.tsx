"use client"

import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug: id } = React.use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${id}`);
        if (response.ok) {
          const data = await response.json();
          setProject(data);
        } else if (response.status === 404) {
          notFound();
        }
      } catch (error) {
        console.error('Failed to fetch project:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          <article className="space-y-8">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm text-muted-foreground">{project.year}</span>
                <div className="flex gap-4 ml-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {(project.live_demo || project.demo_link) && (
                    <Button size="sm" asChild>
                      <a href={project.live_demo || project.demo_link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
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
    </div>
  );
}

// Dynamic route - no static generation needed