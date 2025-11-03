import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { personalInfo, education, certifications, experience, skills } from "@/config/content";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-3 mb-8">
                <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
                <p className="text-lg font-medium text-accent">
                  {personalInfo.title}
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">
                {personalInfo.bio}
              </p>

              <Button
                asChild
                size="lg"
                className="gap-2"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1WrzSz-HThukbBDBNKB3QkeEQ1RYxe70Z&confirm=t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-12">
              {personalInfo.intro}
            </p>

            <h3 className="text-xl font-semibold mb-6">Education</h3>
            
            <div className="space-y-6 mb-12">
              {education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-accent">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.status}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 border border-border rounded-lg bg-card hover:shadow-lg transition-shadow">
                  <h4 className="text-base font-semibold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.description}
                  </p>
                  <span className="text-xs text-accent font-medium">{cert.year}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            
            <div className="space-y-8 mb-12">
              {experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-accent">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 mb-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-6">Skills</h3>
            
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-base font-semibold text-foreground mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-md text-xs bg-tag-bg text-tag-text">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-border">
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Have a project in mind or want to discuss opportunities? I'm always open to new collaborations.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
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
