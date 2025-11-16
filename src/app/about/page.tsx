"use client"

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";
import { fetchWithCache } from "@/lib/cache";
import { AboutPageSkeleton } from "@/components/ui/page-skeletons";

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  intro: string;
  avatar: string;
  github: string;
  linkedin: string;
  email: string;
}

interface Education {
  degree: string;
  institution: string;
  status: string;
  description: string;
}

interface Certification {
  title: string;
  description: string;
  year: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface Skills {
  [category: string]: string[];
}

export default function AboutPage() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [skills, setSkills] = useState<Skills>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use cached fetch for API calls with 5 minute cache
        const [personalData, experienceData] = await Promise.all([
          fetchWithCache<PersonalInfo>('/api/personal-info', undefined, 5 * 60 * 1000),
          fetchWithCache<Experience[]>('/api/experience', undefined, 5 * 60 * 1000)
        ]);

        setPersonalInfo(personalData);
        setExperience(experienceData);

        // For now, we'll use static data for education, certifications, and skills
        // until we create those API endpoints
        const { education: eduData, certifications: certData, skills: skillsData } = await import('@/config/content');
        setEducation(eduData);
        setCertifications(certData);
        setSkills(skillsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
          <AboutPageSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  if (!personalInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
          <div className="text-center">Failed to load personal information</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16 animate-fade-in">
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
                <h2 className="text-2xl font-bold text-foreground">{personalInfo.name}</h2>
                <p className="text-lg font-medium bg-gradient-to-r from-primary/80 to-primary/60 bg-clip-text text-transparent">
                  {personalInfo.title}
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6 text-base">
                {personalInfo.bio}
              </p>

              <Button
                asChild
                size="lg"
                className="gap-2"
              >
                <a
                  href="https://drive.google.com/uc?export=download&id=1WrzSz-HThukbBDBNKB3QkeEQ1RYxe70Z&confirm=t"
                  download
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="mb-12">
              <p className="text-muted-foreground leading-relaxed text-base font-medium">
                {personalInfo.intro}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              Education
            </h3>
            
            <div className="grid gap-6 mb-12">
              {education.map((edu, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-b-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="font-medium bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">{edu.status}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <div key={index} className="p-6 border border-border rounded-lg bg-card">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-semibold text-foreground">{cert.title}</h4>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              Experience
            </h3>
            
            <div className="grid gap-8 mb-12">
              {experience.map((exp, index) => (
                <div key={index} className="pb-8 border-b border-border last:border-b-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="font-medium bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md font-medium">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.achievements.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-foreground mb-2">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-muted-foreground leading-relaxed text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-md text-xs tag-bg tag-text">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
              Skills
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="p-6 border border-border rounded-lg bg-card">
                  <h4 className="text-base font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-md text-xs tag-bg tag-text font-medium">
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
                  <Link href="/contact">
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
}