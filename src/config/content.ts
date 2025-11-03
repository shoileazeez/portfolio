// Portfolio Content Configuration
// Edit this file to update your portfolio content

export const personalInfo = {
  name: "Shoile Abdulazeez Adenuga",
  title: "Full-Stack Developer and AI Enthusiast",
  bio: "With over two years in software development, I'm a full-stack engineer and machine learning developer passionate about building intelligent applications that solve real-world problems. My expertise spans from training ML models and AI systems to crafting production-ready APIs and responsive UIs.",
  intro: "As a passionate junior software engineer with two years of experience, I'm focused on building intelligent systems that combine elegant frontend experiences with powerful backend infrastructure, AI, and machine learning capabilities. I've created diabetes prediction systems with ML, real-time crypto tracking tools, and robust REST APIs that serve real users in production.",
  avatar: "https://avatars.githubusercontent.com/u/170754445?s=400&u=f38310f962ed1a442e43496faaa144419df0e09a&v=4",
  github: "https://github.com/Shoilev",
  linkedin: "https://linkedin.com/in/shoile-abdulazeez",
  email: "shoileabdulazeez@gmail.com"
};

export const education = [
  {
    degree: "B.Eng. Software Engineering",
    institution: "AL-Hikmah University",
    status: "In Progress",
    description: "Pursuing a Bachelor's degree in Software Engineering with focus on full-stack development, AI, machine learning, and software architecture."
  }
];

export const certifications = [
  {
    title: "ALX Software Engineering",
    description: "Intensive full-stack software engineering program covering backend (6 months) and frontend (8 months), databases, and system design.",
    year: "2024-2025"
  },
  {
    title: "DataCamp Certifications",
    description: "Completed multiple courses in data science, Python programming, SQL, machine learning, and data analysis.",
    year: "2025"
  }
];

export const experience = [
  {
    title: "Full-Stack Developer Intern",
    company: "Flowframe",
    period: "Aug 2025 - Present",
    description: "Building full-stack features from frontend to backend in a production environment. Working on real applications with modern tech stack serving actual users.",
    achievements: [
      "Built backend logging system with Slack integration for real-time error monitoring and alerts",
      "Developed reusable Next.js components following modern design patterns and best practices",
      "Designed and optimized PostgreSQL database schemas for performance and scalability",
      "Implemented full-stack features using Next.js and Django in production environment",
      "Migrated Yjs storage from y-leveldb to y-redis to make live collaboration persistent and production-ready"
    ],
    technologies: ["Next.js", "React", "Django", "PostgreSQL", "Slack API", "Docker", "Git"]
  },
  {
    title: "Machine Learning Intern",
    company: "Bankwise Insights",
    period: "May 2025 - Jul 2025",
    description: "Developed machine learning models for loan recommendation system in fintech domain, working with real financial data and production ML pipelines.",
    achievements: [
      "Built ML model for loan eligibility prediction using Scikit-Learn achieving 85%+ accuracy",
      "Performed data cleaning, preprocessing, and feature engineering with Pandas and NumPy",
      "Trained, evaluated, and optimized models using cross-validation and hyperparameter tuning",
      "Developed FastAPI backend for serving ML predictions in production environment",
      "Created comprehensive API documentation for integration with frontend teams"
    ],
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "FastAPI", "SQLite", "ML Pipelines"]
  },
  {
    title: "Full-Stack Software Engineering Bootcamp",
    company: "ALX Africa",
    period: "2024 - 2025",
    description: "Intensive full-stack software engineering program covering backend development (6 months in 2024) and frontend engineering (8 months in 2025), along with algorithms and system design. Completed multiple real-world projects and technical challenges.",
    achievements: [
      "Backend development with Django REST Framework and Python for scalable APIs (6-month specialization)",
      "Frontend engineering with React, JavaScript, and modern UI/UX principles (8-month specialization)",
      "Database design and SQL optimization for PostgreSQL and MySQL",
      "RESTful API architecture, authentication, and best practices",
      "Built multiple full-stack projects from scratch including e-commerce and social platforms"
    ],
    technologies: ["Backend Specialization", "Frontend Specialization", "SQL & Databases", "AI for Developers", "System Design"]
  }
];

export const skills = {
  "Machine Learning": [
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Feature Engineering",
    "Model Deployment",
    "Classification Models",
    "Data Processing"
  ],
  "Backend": [
    "Django",
    "Django REST Framework",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Redis",
    "REST APIs",
    "Authentication"
  ],
  "Frontend": [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX"
  ],
  "Tools & DevOps": [
    "Git",
    "Docker",
    "Slack API",
    "Linux",
    "Agile Methodologies"
  ]
};

export const projects = [
  {
    title: "Diabetes Risk Predictor",
    description: "ML-powered web application that predicts diabetes risk based on user health metrics. Built with Python, Scikit-Learn for the ML model, and FastAPI for the backend API.",
    tags: ["Python", "Scikit-Learn", "FastAPI", "Machine Learning", "Healthcare"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    slug: "diabetes-risk-predictor",
    link: "/project/diabetes-risk-predictor",
    year: "2025",
    liveDemo: "https://diabetes-predictor-demo.com",
    github: "https://github.com/Shoilev/diabetes-predictor",
    overview: "A machine learning application that helps users assess their diabetes risk through an intuitive web interface. The system uses a trained classification model to provide accurate risk predictions based on various health metrics.",
    challenge: "Creating an accessible healthcare tool that could provide accurate diabetes risk assessments while maintaining user privacy and ensuring the ML model's predictions were reliable and actionable.",
    solution: "Developed a full-stack application with a Scikit-Learn classification model achieving 85%+ accuracy. Built a FastAPI backend for efficient model serving and created an intuitive frontend for easy health data input. Implemented data preprocessing pipelines to ensure prediction quality.",
    impact: "Helps users make informed health decisions by providing quick, accurate diabetes risk assessments. The tool has been tested with real health data and demonstrates high prediction accuracy for early risk detection."
  },
  {
    title: "Crypto Price Tracker",
    description: "Real-time cryptocurrency tracking application with live price updates, interactive charts, and portfolio management. Integrates with CoinGecko API for market data.",
    tags: ["React", "JavaScript", "CoinGecko API", "Charts", "Tailwind CSS", "API Integration"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    slug: "crypto-price-tracker",
    link: "/project/crypto-price-tracker",
    year: "2025",
    liveDemo: "https://crypto-tracker-demo.com",
    github: "https://github.com/Shoilev/crypto-tracker",
    overview: "A comprehensive cryptocurrency tracking platform that provides real-time price updates, historical data visualization, and portfolio management features for crypto enthusiasts and investors.",
    challenge: "Building a responsive application that could handle real-time data updates efficiently while providing smooth chart interactions and maintaining good performance across different devices.",
    solution: "Implemented React with JavaScript for the frontend, integrated CoinGecko API for reliable market data, and used Tailwind CSS for responsive design. Added interactive charts for price visualization and implemented efficient state management for real-time updates.",
    impact: "Provides crypto traders and enthusiasts with a reliable tool for tracking their investments and making informed decisions based on real-time market data and historical trends."
  },
  {
    title: "E-commerce REST API",
    description: "Production-ready RESTful API for e-commerce platform with user authentication, product management, cart functionality, and order processing. Built with Django REST Framework.",
    tags: ["Django", "REST API", "PostgreSQL", "JWT", "Python"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    slug: "ecommerce-rest-api",
    link: "/project/ecommerce-rest-api",
    year: "2024",
    liveDemo: "https://ecommerce-api-demo.com",
    github: "https://github.com/Shoilev/ecommerce-api",
    overview: "A robust and scalable REST API that powers e-commerce operations including user management, product catalog, shopping cart, and order processing with secure authentication.",
    challenge: "Designing a scalable API architecture that could handle multiple concurrent users, ensure data consistency, and maintain security for sensitive operations like payments and user data.",
    solution: "Built with Django REST Framework following RESTful principles, implemented JWT authentication for secure access, designed normalized PostgreSQL database schema, and created comprehensive API documentation. Included features like pagination, filtering, and search for optimal performance.",
    impact: "Provides a solid foundation for e-commerce applications with secure, scalable, and well-documented endpoints that can handle real-world commercial operations."
  },
  {
    title: "GeoAuth Django Plugin",
    description: "Location-based authentication plugin for Django applications. Adds an extra security layer by verifying user location during login attempts.",
    tags: ["Django", "Security", "Geolocation", "Python", "Authentication"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    slug: "geoauth-django-plugin",
    link: "/project/geoauth-django-plugin",
    year: "2025",
    liveDemo: "https://geoauth-demo.com",
    github: "https://github.com/Shoilev/geoauth-plugin",
    overview: "A Django plugin that enhances application security by adding location-based authentication, helping prevent unauthorized access from suspicious locations.",
    challenge: "Creating a flexible authentication plugin that could integrate seamlessly with existing Django projects while providing reliable location verification without compromising user experience.",
    solution: "Developed as a reusable Django plugin with easy integration, implemented geolocation verification using IP-based location services, added configurable security rules for different regions, and created comprehensive documentation for implementation.",
    impact: "Enhances security for Django applications by adding an additional layer of location-based verification, helping organizations protect against unauthorized access and account compromises."
  }
];
