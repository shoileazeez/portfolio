import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    year: "2024",
    title: "Diabetes Risk Predictor",
    description: "Full-stack machine learning application using Random Forest to predict diabetes risk with 78.6% accuracy. Built with Scikit-Learn for the model, FastAPI for the backend API, and React for an interactive frontend with comprehensive health insights and real-time predictions.",
    date: "October 2024",
    duration: "3 months",
    tags: ["Python", "Scikit-Learn", "FastAPI", "React", "Machine Learning", "Random Forest"],
  },
  {
    year: "2024",
    title: "Crypto Price Tracker",
    description: "Real-time cryptocurrency tracking dashboard featuring live price updates, historical charts, and portfolio management. Built with React and integrated with cryptocurrency APIs to provide market analysis and advanced filtering capabilities for tracking multiple digital assets.",
    date: "September 2024",
    duration: "2 months",
    tags: ["React", "Next.js", "TypeScript", "API Integration", "Charts", "Tailwind CSS"],
  },
  {
    year: "2024",
    title: "E-Commerce REST API",
    description: "Production-ready Django REST API with complete e-commerce functionality including user authentication, shopping cart management, order processing, payment integration, and comprehensive admin dashboard. Optimized PostgreSQL database schemas and implemented Redis caching.",
    date: "June 2024",
    duration: "4 months",
    tags: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Docker", "REST API"],
  },
  {
    year: "2024",
    title: "GeoAuth Django Plugin",
    description: "Django REST Framework plugin for geographic authentication and authorization. Restricts API access based on user location using IP geolocation. Published on PyPI for easy integration into Django projects requiring location-based security controls.",
    date: "May 2024",
    duration: "2 months",
    tags: ["Django", "Django REST Framework", "PyPI", "Geolocation", "Security", "Python"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-4">
            <h1 className="text-sm font-medium text-muted-foreground">date</h1>
            <h1 className="text-sm font-medium text-muted-foreground">title</h1>
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
