import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface ProjectDetailData {
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  duration: string;
  tags: string[];
  challenges?: string;
  solution?: string;
  impact?: string;
}

const projectsData: Record<string, ProjectDetailData> = {
  "diabetes-risk-predictor": {
    title: "Diabetes Risk Predictor",
    description: "Full-stack machine learning application using Random Forest to predict diabetes risk with 78.6% accuracy.",
    fullDescription: "Developed a comprehensive machine learning application that predicts diabetes risk using Random Forest algorithm achieving 78.6% accuracy. The system uses Scikit-Learn for model training, FastAPI for the backend REST API, and React for an interactive frontend that provides real-time predictions with comprehensive health insights.",
    date: "October 2024",
    duration: "3 months",
    tags: ["Python", "Scikit-Learn", "FastAPI", "React", "Machine Learning", "Random Forest"],
    challenges: "Building a reliable ML model that could provide accurate predictions while being user-friendly for non-technical users. Needed to handle various edge cases in health data and ensure the API could scale.",
    solution: "Implemented comprehensive data preprocessing pipelines, performed feature engineering on health metrics, and created an intuitive UI that guides users through the prediction process with clear explanations of results.",
    impact: "Successfully deployed a production-ready ML application that helps users assess their diabetes risk through a simple interface, providing personalized health insights and recommendations."
  },
  "crypto-price-tracker": {
    title: "Crypto Price Tracker",
    description: "Real-time cryptocurrency tracking dashboard featuring live price updates, historical charts, and portfolio management.",
    fullDescription: "Built a real-time cryptocurrency tracking dashboard with live price updates, historical price charts, and portfolio management features. The application integrates with cryptocurrency APIs to provide market analysis, advanced filtering capabilities, and real-time notifications for price changes.",
    date: "September 2024",
    duration: "2 months",
    tags: ["React", "Next.js", "TypeScript", "API Integration", "Charts", "Tailwind CSS"],
    challenges: "Managing real-time data updates efficiently without overwhelming the browser, handling API rate limits, and creating responsive charts that work across all devices.",
    solution: "Implemented WebSocket connections for live price updates, added intelligent caching mechanisms, and used React Query for efficient data management. Created custom chart components optimized for mobile devices.",
    impact: "Delivered a high-performance crypto tracking tool that handles thousands of price updates per minute while maintaining a smooth user experience across desktop and mobile devices."
  },
  "ecommerce-rest-api": {
    title: "E-Commerce REST API",
    description: "Production-ready Django REST API with complete e-commerce functionality.",
    fullDescription: "Developed a production-ready Django REST API with complete e-commerce functionality including user authentication, shopping cart management, order processing, and payment integration. Implemented comprehensive admin dashboard, optimized PostgreSQL database schemas, and added Redis caching for improved performance.",
    date: "June 2024",
    duration: "4 months",
    tags: ["Django", "Django REST Framework", "PostgreSQL", "Redis", "Docker", "REST API"],
    challenges: "Designing a scalable database architecture that could handle high traffic, implementing secure payment processing, and ensuring API performance under load.",
    solution: "Created normalized database schemas with proper indexing, implemented JWT authentication, added Redis for session management and caching, and containerized the entire application with Docker for easy deployment.",
    impact: "Built a robust API that handles thousands of transactions, serving as the backend for a production e-commerce platform with active users and real revenue."
  },
  "geoauth-django-plugin": {
    title: "GeoAuth Django Plugin",
    description: "Django REST Framework plugin for geographic authentication and authorization.",
    fullDescription: "Created and published a Django REST Framework plugin for geographic authentication and authorization on PyPI. The plugin restricts API access based on user location using IP geolocation, providing location-based security controls for Django projects. Features include custom middleware, flexible configuration, and comprehensive documentation.",
    date: "May 2024",
    duration: "2 months",
    tags: ["Django", "Django REST Framework", "PyPI", "Geolocation", "Security", "Python"],
    challenges: "Creating a reusable plugin that could work with any Django project while maintaining security best practices and handling various edge cases in IP geolocation.",
    solution: "Designed a modular architecture with clear documentation, implemented comprehensive tests, and created flexible configuration options. Published to PyPI with proper versioning and maintenance guidelines.",
    impact: "Published open-source package that helps Django developers add location-based security to their APIs, with active downloads and usage in production applications."
  }
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !projectsData[slug]) {
    return <Navigate to="/" replace />;
  }

  const project = projectsData[slug];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <article className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-muted-foreground mb-4">
              {project.date} • {project.duration}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
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

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {project.challenges && (
              <>
                <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {project.challenges}
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
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
