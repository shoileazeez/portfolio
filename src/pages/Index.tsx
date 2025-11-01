import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    year: "2025",
    title: "AI-Powered Analytics Platform",
    description: "Led a team to create an advanced analytics platform that leverages machine learning to provide real-time insights for enterprise clients. The platform processes millions of data points daily and has helped companies increase their efficiency by 40%.",
    date: "January 2025",
    duration: "2 months",
    tags: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    year: "2024",
    title: "E-Commerce Mobile Application",
    description: "Built a cross-platform mobile application for a leading retail brand that serves over 500,000 active users. The app features real-time inventory tracking, personalized recommendations, and seamless payment integration with multiple gateways.",
    date: "May 2024",
    duration: "8 months",
    tags: ["React Native", "TypeScript", "Firebase", "Redux", "Stripe API", "GraphQL"],
  },
  {
    year: "2024",
    title: "Real-Time Collaboration Tool",
    description: "Developed a web-based collaboration platform that enables teams to work together seamlessly with features like live document editing, video conferencing, and project management. Used by over 10,000 teams worldwide.",
    date: "February 2024",
    duration: "5 months",
    tags: ["Next.js", "WebSocket", "WebRTC", "MongoDB", "Redis", "Tailwind CSS"],
  },
  {
    year: "2023",
    title: "Cloud Infrastructure Automation",
    description: "Created an infrastructure-as-code solution that automates cloud resource provisioning and management. This reduced deployment time by 70% and improved system reliability with automated monitoring and scaling.",
    date: "November 2023",
    duration: "6 months",
    tags: ["Terraform", "Kubernetes", "AWS", "Python", "GitHub Actions", "Prometheus"],
  },
  {
    year: "2023",
    title: "Healthcare Management System",
    description: "Designed and implemented a comprehensive healthcare management system for hospitals and clinics. The system handles patient records, appointment scheduling, billing, and integrates with various medical devices for real-time health monitoring.",
    date: "March 2023",
    duration: "12 months",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker", "HIPAA Compliance", "REST API"],
  },
  {
    year: "2022",
    title: "Blockchain-Based Supply Chain",
    description: "Built a blockchain solution for supply chain transparency and traceability. The system tracks products from manufacturing to delivery, ensuring authenticity and reducing counterfeit goods by 95% for participating brands.",
    date: "September 2022",
    duration: "10 months",
    tags: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS", "Smart Contracts"],
  },
  {
    year: "2022",
    title: "Social Media Analytics Dashboard",
    description: "Developed a comprehensive analytics dashboard that aggregates data from multiple social media platforms. Provides detailed insights on engagement, reach, and audience demographics with AI-powered sentiment analysis.",
    date: "January 2022",
    duration: "4 months",
    tags: ["React", "D3.js", "Node.js", "Express", "MongoDB", "Social Media APIs"],
  },
  {
    year: "2021",
    title: "IoT Smart Home Platform",
    description: "Created a unified platform for managing smart home devices from different manufacturers. Features include voice control, automation rules, energy monitoring, and mobile app integration for remote management.",
    date: "June 2021",
    duration: "8 months",
    tags: ["IoT", "MQTT", "Node.js", "React Native", "AWS IoT", "Alexa Skills"],
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
