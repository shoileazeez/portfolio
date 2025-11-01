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
              
              <div className="space-y-2 mb-8">
                <p className="text-sm font-medium">
                  <span className="text-accent">Full-Stack Developer × Machine Learning Engineer</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  B.Eng. Software Engineering (In Progress)
                </p>
                <p className="text-sm text-muted-foreground">
                  Full-Stack Developer Intern, Flowframe
                </p>
                <p className="text-sm text-muted-foreground">
                  Ex-Machine Learning Intern, Bankwise Insights
                </p>
                <p className="text-sm text-muted-foreground">
                  ALX Software Engineering Graduate
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                With over two years in software development, I'm a full-stack engineer and machine learning 
                developer passionate about building intelligent applications that solve real-world problems. 
                My expertise spans from training ML models to crafting production-ready APIs and responsive UIs.
              </p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a passionate software engineer, I'm focused on building intelligent systems that 
              combine elegant frontend experiences with powerful backend infrastructure and machine 
              learning capabilities. I've created diabetes prediction systems with ML, real-time crypto 
              tracking tools, and robust REST APIs that serve real users in production.
            </p>

            <h3 className="text-xl font-semibold mb-6">Key Technical Achievements</h3>
            
            <ul className="space-y-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Machine Learning Deployment</strong>: Built diabetes 
                risk predictor achieving 78.6% accuracy with Random Forest and deployed via FastAPI
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Full-Stack Production</strong>: Developed production 
                features at Flowframe using Next.js and Django serving real users
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Backend Architecture</strong>: Created production-ready 
                Django REST APIs with authentication, payments, and PostgreSQL optimization
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Real-Time Applications</strong>: Built crypto tracking 
                dashboard with live price updates and market analysis using React
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Open Source</strong>: Published GeoAuth Django plugin 
                on PyPI for geographic authentication
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Database Design</strong>: Designed and optimized 
                PostgreSQL schemas for performance and scalability
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">ML Model Training</strong>: Built loan eligibility 
                prediction model achieving 85%+ accuracy with scikit-learn
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">System Integration</strong>: Implemented Slack 
                integration for real-time error monitoring and alerts
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Data Processing</strong>: Performed feature 
                engineering and data preprocessing with Pandas and NumPy
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">DevOps</strong>: Containerized applications with 
                Docker and collaborated using Git workflows
              </li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
