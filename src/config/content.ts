// Portfolio Content Configuration
// Edit this file to update your portfolio content

type SystemDesign = {
  diagram?: string;
  image?: string;
  explanation: string;
};

export const personalInfo = {
  name: "Shoile Abdulazeez Adenuga",
  title: "Full-Stack Developer and AI Enthusiast",
  bio: "With over two years in software development, Abdulazeez is a full-stack engineer and machine learning developer passionate about building intelligent applications that solve real-world problems. His expertise spans from training ML models and AI systems to crafting production-ready APIs and responsive UIs.",
  intro: "As a passionate junior software engineer with two years of experience, he's focused on building intelligent systems that combine elegant frontend experiences with powerful backend infrastructure, AI, and machine learning capabilities. He's created diabetes prediction systems with ML, real-time crypto tracking tools, and robust REST APIs that serve real users in production.",
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
    description: "Intensive full-stack software engineering program covering backend development (6 months in 2024) and frontend engineering (8 months in 2025), along with algorithms and system design. Completed multiple real-world projects and technical challenges. Additionally completed a 1-month AI for Developers course focused on prompt engineering and leveraging AI tools for development.",
    achievements: [
      "Backend development with Django REST Framework and Python for scalable APIs (6-month specialization)",
      "Frontend engineering with React, JavaScript, and modern UI/UX principles (8-month specialization)",
      "Database design and SQL optimization for PostgreSQL and MySQL",
      "RESTful API architecture, authentication, and best practices",
      "Built multiple full-stack projects from scratch including e-commerce and real-time apps",
      "Completed AI for Developers course: learned prompt engineering techniques and how to effectively use AI tools as a developer (1-month course)"
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
    api_docs: "https://shark-app-6cums.ondigitalocean.app/docs",
    year: "2025",
    liveDemo: "https://diabeticspredictor.project.shoileabdulazeez.tech/",
    github: "https://github.com/shoileazeez/diabetes-classification-ml",
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
    liveDemo: "https://alx-fe-capstone-project-h2ai.vercel.app/",
    github: "https://github.com/shoileazeez/alx-fe-capstone-project",
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
    // liveDemo: "https://ecommerce-api-demo.com",
    github: "https://github.com/shoileazeez/shopsmart-AI",
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
    liveDemo: "https://shoileazeez.github.io/drf_geodata/",
    github: "https://github.com/shoileazeez/drf_geodata",
    platform: "PyPI",
    pypi_url: "https://pypi.org/project/geo-auth/",
    overview: "A Django plugin that enhances application security by adding location-based authentication, helping prevent unauthorized access from suspicious locations.",
    challenge: "Creating a flexible authentication plugin that could integrate seamlessly with existing Django projects while providing reliable location verification without compromising user experience.",
    solution: "Developed as a reusable Django plugin with easy integration, implemented geolocation verification using IP-based location services, added configurable security rules for different regions, and created comprehensive documentation for implementation.",
    impact: "Enhances security for Django applications by adding an additional layer of location-based verification, helping organizations protect against unauthorized access and account compromises."
  }
];

export const blogs = [
  {
    title: "Building a Machine Learning Pipeline for Healthcare",
    description: "A comprehensive guide on creating end-to-end ML pipelines for medical prediction systems, from data preprocessing to model deployment.",
    excerpt: "Learn how I built a production-ready diabetes prediction system using Scikit-Learn, FastAPI, and best practices for healthcare ML applications.",
    date: "2025-01-15",
    year: "2025",
    slug: "ml-pipeline-healthcare",
    link: "/blog/ml-pipeline-healthcare",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop",
    tags: ["Machine Learning", "Healthcare", "Python", "FastAPI"],
    readTime: "8 min read",
    content: `
Creating machine learning systems for healthcare requires careful attention to accuracy, reliability, and user privacy. In this article, I'll share my experience building a diabetes risk prediction system.

## The Challenge

Healthcare ML systems face unique challenges:

- High accuracy requirements - lives depend on it
- Data privacy and security concerns
- Need for explainable predictions
- Integration with existing healthcare workflows

## The Solution

I built a full-stack ML application with these key components:

### 1. Data Pipeline

- Implemented robust data validation
- Created feature engineering pipelines
- Ensured consistent preprocessing between training and inference

### 2. Model Development

- Trained multiple classification models
- Achieved 85%+ accuracy with Scikit-Learn
- Implemented cross-validation for reliability

### 3. API Development

- Built FastAPI backend for model serving
- Added comprehensive error handling
- Created clear API documentation
- UI with React and Tailwind CSS

### 4. Deployment

- Containerized with Docker
- Vercel for frontend deployment

## Key Learnings

- Start with clean, validated data
- Focus on model interpretability
- Build comprehensive testing
- Monitor model performance in production

## Impact

The system helps users make informed health decisions through quick, accurate risk assessments based on their health metrics.
    `
  },
  {
    title: "Full-Stack Development: From Backend to Frontend",
    description: "My journey learning full-stack development through ALX's intensive bootcamp, covering both backend and frontend specializations.",
    excerpt: "Insights from completing 6 months of backend development and 8 months of frontend engineering in ALX's comprehensive program.",
    date: "2025-02-01",
    year: "2025",
    slug: "fullstack-journey-alx",
    link: "/blog/fullstack-journey-alx",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    tags: ["Full-Stack", "Career", "Learning", "Web Development"],
    readTime: "6 min read",
    content: `
My journey through ALX's intensive software engineering program taught me not just how to code, but how to think like an engineer.

## The Backend Foundation (6 Months)

The first specialization focused on server-side development.

## Key Skills Learned

- Building REST APIs with Django REST Framework
- Database design and optimization
- Authentication and security
- API architecture and best practices

## Real Projects

- Built production-ready e-commerce API
- Implemented secure authentication systems
- Designed scalable database schemas

## The Frontend Transition (8 Months)

Moving to frontend development opened new perspectives.

## Modern Web Development

- React and component-based architecture
- State management patterns
- Responsive design with Tailwind CSS
- User experience principles

## Putting It Together

- Created full-stack applications
- Integrated frontend with backend APIs
- Built real-time features

## Key Takeaways

1. **Backend thinking helps frontend** - Understanding server architecture makes you a better frontend developer
2. **User experience matters** - Beautiful code means nothing if users struggle
3. **Testing is crucial** - Both frontend and backend need comprehensive testing
4. **Documentation saves time** - Good docs help your team and future you

## The Result

I can now build complete applications from database design to polished user interfaces, understanding how all pieces fit together.
    `
  },
  {
    title: "Real-Time Data in React: Building a Crypto Tracker",
    description: "Technical deep-dive into building a real-time cryptocurrency tracking application with React and external APIs.",
    excerpt: "How I built a crypto price tracker with live updates, interactive charts, and smooth performance across devices.",
    date: "2025-02-10",
    year: "2025",
    slug: "realtime-crypto-tracker",
    link: "/blog/realtime-crypto-tracker",
    coverImage: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1200&h=600&fit=crop",
    tags: ["React", "JavaScript", "API Integration", "Real-Time"],
    readTime: "7 min read",
    content: `
Building real-time applications in React can be challenging but rewarding. In this article, I'll share how I built a cryptocurrency price tracker with live updates and interactive features.

## The Challenge

Creating a responsive app that handles real-time data efficiently while providing smooth user interactions across devices.

## The Solution

Key components of the application:

###  1. React Frontend

- Component-based architecture for reusability
- State management with hooks
- Responsive design using Tailwind CSS

###  2. API Integration

- Used CoinGecko API for reliable market data
- Implemented efficient data fetching with caching

###  3. Real-Time Updates

- Polling mechanism for live price updates
- Optimized rendering for performance

###  4. Interactive Charts

- Integrated charting library for price visualization
- Added user controls for time ranges and indicators

## Key Learnings

- Efficient state management is crucial for real-time apps
- Optimize API calls to reduce latency and improve UX
- Responsive design ensures usability across devices

## The Result

The crypto tracker provides users with a reliable tool to monitor their investments with real-time data and insightful visualizations.
    `
  }
];
