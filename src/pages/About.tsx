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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-2 mb-8">
                <p className="text-sm font-medium">
                  <span className="text-accent">Senior Software Engineer</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  MSc in Computer Science
                </p>
                <p className="text-sm text-muted-foreground">
                  Founder, YourStartup
                </p>
                <p className="text-sm text-muted-foreground">
                  Lead Developer (Full Stack), TechCorp
                </p>
                <p className="text-sm text-muted-foreground">
                  Ex-Software Engineer, BigTech
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                With over six years in the software development industry, I have a strong track 
                record of impactful contributions to web and mobile applications, including 
                collaborations with leading brands and startups.
              </p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a passionate software engineer, I drive innovation and excellence in 
              software development, advocating for best practices and modern technologies. 
              I've pioneered the development of various platforms and tools that have 
              impacted thousands of users worldwide.
            </p>

            <h3 className="text-xl font-semibold mb-6">Key Technical Achievements</h3>
            
            <ul className="space-y-4">
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Platform Launch</strong>: Built and launched 
                a SaaS platform serving 10,000+ users worldwide
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AI Integration</strong>: Implemented machine 
                learning models for real-time data processing and analysis
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Mobile Development</strong>: Developed 
                cross-platform mobile applications with 500K+ downloads
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">API Architecture</strong>: Designed and 
                implemented scalable RESTful APIs handling millions of requests daily
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Cloud Infrastructure</strong>: Architected 
                cloud-based solutions on AWS and Azure with 99.9% uptime
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Open Source</strong>: Active contributor 
                to open-source projects with 1000+ GitHub stars
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Team Leadership</strong>: Led development 
                teams of 5-10 engineers on complex technical projects
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Performance Optimization</strong>: Improved 
                application performance by 300% through code optimization
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Security</strong>: Implemented enterprise-grade 
                security measures and conducted security audits
              </li>
              <li className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">DevOps</strong>: Established CI/CD pipelines 
                and automated deployment processes
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
