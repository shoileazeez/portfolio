import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-muted mb-6 overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/170754445?s=400&u=f38310f962ed1a442e43496faaa144419df0e09a&v=4"
                  alt="Shoile Abdulazeez Adenuga"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3 mb-8">
                <h2 className="text-2xl font-bold">Shoile Abdulazeez Adenuga</h2>
                <p className="text-lg font-medium text-accent">
                  Full-Stack Developer and AI Enthusiast
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                With over two years in software development, I'm a full-stack engineer and machine learning 
                developer passionate about building intelligent applications that solve real-world problems. 
                My expertise spans from training ML models and AI systems to crafting production-ready APIs and responsive UIs.
              </p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12">
              As a passionate junior software engineer with two years of experience, I'm focused on 
              building intelligent systems that combine elegant frontend experiences with powerful 
              backend infrastructure, AI, and machine learning capabilities. I've created diabetes prediction 
              systems with ML, real-time crypto tracking tools, and robust REST APIs that serve real 
              users in production.
            </p>

            <h3 className="text-xl font-semibold mb-6">Education</h3>
            
            <div className="space-y-6 mb-12">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">B.Eng. Software Engineering</h4>
                    <p className="text-accent">AL-Hikmah University</p>
                  </div>
                  <span className="text-sm text-muted-foreground">In Progress</span>
                </div>
                <p className="text-muted-foreground">
                  Pursuing a Bachelor's degree in Software Engineering with focus on full-stack development, 
                  AI, machine learning, and software architecture.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <h4 className="text-base font-semibold text-foreground mb-2">ALX Software Engineering</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Intensive full-stack software engineering program covering backend (6 months) and frontend (8 months), 
                  databases, and system design.
                </p>
                <span className="text-xs text-accent font-medium">2024-2025</span>
              </div>
              
              <div className="p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <h4 className="text-base font-semibold text-foreground mb-2">DataCamp Certifications</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Completed multiple courses in data science, Python programming, SQL, machine learning, 
                  and data analysis.
                </p>
                <span className="text-xs text-accent font-medium">2025</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            
            <div className="space-y-8 mb-12">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Full-Stack Developer Intern</h4>
                    <p className="text-accent">Flowframe</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Aug 2025 - Present</span>
                </div>
                <p className="text-muted-foreground mb-3">
                  Building full-stack features from frontend to backend in a production environment. 
                  Working on real applications with modern tech stack serving actual users.
                </p>
                <ul className="space-y-2 mb-3">
                  <li className="text-muted-foreground leading-relaxed">
                    Built backend logging system with Slack integration for real-time error monitoring and alerts
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Developed reusable Next.js components following modern design patterns and best practices
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Designed and optimized PostgreSQL database schemas for performance and scalability
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Implemented full-stack features using Next.js and Django in production environment
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Migrated Yjs storage from y-leveldb to y-redis to make live collaboration persistent and production-ready
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Django", "PostgreSQL", "Slack API", "Docker", "Git"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Machine Learning Intern</h4>
                    <p className="text-accent">Bankwise Insights</p>
                  </div>
                  <span className="text-sm text-muted-foreground">May 2025 - Jul 2025</span>
                </div>
                <p className="text-muted-foreground mb-3">
                  Developed machine learning models for loan recommendation system in fintech domain, 
                  working with real financial data and production ML pipelines.
                </p>
                <ul className="space-y-2 mb-3">
                  <li className="text-muted-foreground leading-relaxed">
                    Built ML model for loan eligibility prediction using Scikit-Learn achieving 85%+ accuracy
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Performed data cleaning, preprocessing, and feature engineering with Pandas and NumPy
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Trained, evaluated, and optimized models using cross-validation and hyperparameter tuning
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Developed FastAPI backend for serving ML predictions in production environment
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Created comprehensive API documentation for integration with frontend teams
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Scikit-Learn", "Pandas", "NumPy", "FastAPI", "SQLite", "ML Pipelines"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Full-Stack Software Engineering Bootcamp</h4>
                    <p className="text-accent">ALX Africa</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2024 - 2025</span>
                </div>
                <p className="text-muted-foreground mb-3">
                  Intensive full-stack software engineering program covering backend development (6 months in 2024) 
                  and frontend engineering (8 months in 2025), along with algorithms and system design. 
                  Completed multiple real-world projects and technical challenges.
                </p>
                <ul className="space-y-2 mb-3">
                  <li className="text-muted-foreground leading-relaxed">
                    Backend development with Django REST Framework and Python for scalable APIs (6-month specialization)
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Frontend engineering with React, JavaScript, and modern UI/UX principles (8-month specialization)
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Database design and SQL optimization for PostgreSQL and MySQL
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    RESTful API architecture, authentication, and best practices
                  </li>
                  <li className="text-muted-foreground leading-relaxed">
                    Built multiple full-stack projects from scratch including e-commerce and social platforms
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {["Backend Specialization", "Frontend Specialization", "SQL & Databases", "AI for Developers", "System Design"].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6">Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-3">Machine Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Feature Engineering", "Model Deployment", "Classification Models", "Data Processing"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold text-foreground mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {["Django", "Django REST Framework", "FastAPI", "Python", "PostgreSQL", "Redis", "REST APIs", "Authentication"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold text-foreground mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive Design", "UI/UX"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-base font-semibold text-foreground mb-3">Tools & DevOps</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Docker", "Slack API", "Linux", "Agile Methodologies"].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
