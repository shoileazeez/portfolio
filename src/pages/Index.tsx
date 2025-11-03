import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/config/content";

const Index = () => {
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              year={project.year}
              title={project.title}
              description={project.description}
              date={project.year}
              duration=""
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
