import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects } from "@/config/content";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

// Create a lookup object for projects by slug
const projectsData = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {} as Record<string, typeof projects[0]>);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const mermaidRef = useRef<HTMLDivElement>(null);
  
  if (!slug || !projectsData[slug]) {
    return <Navigate to="/" replace />;
  }

  const project = projectsData[slug];

  useEffect(() => {
    const loadMermaid = async () => {
      if (mermaidRef.current && project.systemDesign?.diagram) {
        mermaid.initialize({ 
          startOnLoad: true,
          theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
          securityLevel: 'loose',
        });
        mermaidRef.current.innerHTML = `<pre class="mermaid">${project.systemDesign.diagram}</pre>`;
        await mermaid.run({ nodes: mermaidRef.current.querySelectorAll('.mermaid') });
      }
    };
    loadMermaid();
  }, [project.systemDesign]);

  useEffect(() => {
    const handleThemeChange = async () => {
      if (mermaidRef.current && project.systemDesign?.diagram) {
        mermaid.initialize({ 
          startOnLoad: true,
          theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
          securityLevel: 'loose',
        });
        mermaidRef.current.innerHTML = `<pre class="mermaid">${project.systemDesign.diagram}</pre>`;
        await mermaid.run({ nodes: mermaidRef.current.querySelectorAll('.mermaid') });
      }
    };
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          handleThemeChange();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [project.systemDesign]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-4">
              {project.year}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mb-8">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  View Code
                </a>
              )}
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.overview}
            </p>

            {project.challenge && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.challenge}
                </p>
              </>
            )}

            {project.solution && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Solution</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.solution}
                </p>
              </>
            )}

            {project.impact && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Impact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.impact}
                </p>
              </>
            )}

            {project.systemDesign && (
              <>
                <h2 className="text-2xl font-semibold mb-4 mt-12">System Design</h2>
                <div className="bg-card border border-border rounded-lg p-6 mb-6">
                  {project.systemDesign.image ? (
                    <img 
                      src={project.systemDesign.image} 
                      alt="System Design Diagram"
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <div ref={mermaidRef} className="flex justify-center overflow-x-auto" />
                  )}
                </div>
                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Architecture Explanation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.systemDesign.explanation}
                  </p>
                </div>
              </>
            )}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
