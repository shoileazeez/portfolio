# Shoile Abdulazeez - Portfolio Website

A modern, full-stack portfolio website showcasing the work of Shoile Abdulazeez, a Full-Stack Developer and AI Enthusiast. Built with Next.js, TypeScript, PostgreSQL, and Tailwind CSS with a complete admin dashboard for content management.

## About

This portfolio represents the journey of a passionate software engineer with expertise in:
- **Machine Learning & AI**: Diabetes prediction systems, data analysis with Scikit-Learn, Pandas, NumPy
- **Full-Stack Development**: React, Next.js, Django REST Framework, FastAPI
- **Database Design**: PostgreSQL optimization, Redis integration
- **Cloud & DevOps**: Docker, Slack API integration, production deployments

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 📱 Mobile-first approach with Tailwind CSS and shadcn/ui components
- 🗄️ PostgreSQL database with full CRUD operations
- 🔐 Secure admin authentication and dashboard
- 📝 Complete content management for projects, blogs, and personal information
- 🚀 Server-side rendering with Next.js 15
- 🔧 TypeScript for enhanced type safety
- 🎭 Beautiful UI components from shadcn/ui library

## Live Projects Showcase

This portfolio features real-world projects including:

### Machine Learning Projects
- **Diabetes Risk Predictor**: ML-powered web application with 85%+ accuracy using Scikit-Learn and FastAPI
- **Healthcare Analytics**: Data processing pipelines with Pandas and NumPy

### Full-Stack Applications
- **Crypto Price Tracker**: Real-time cryptocurrency tracking with CoinGecko API integration
- **E-commerce REST API**: Production-ready Django REST Framework backend with PostgreSQL
- **GeoAuth Django Plugin**: Location-based authentication system for enhanced security

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui component library
- **Backend**: Next.js API routes with TypeScript
- **Database**: PostgreSQL with connection pooling
- **Authentication**: JWT-based custom authentication
- **Styling**: Tailwind CSS with custom theme configuration

## Quick Start

### Prerequisites

- Node.js 18 or higher
- PostgreSQL 12 or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/shoileazeez/duo-tone-folio.git
   cd duo-tone-folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/duo_tone_folio
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=http://localhost:3000
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=your-secure-password
   ```

4. **Database Setup**
   
   Run the provided setup script:
   ```bash
   ./setup-db.sh
   ```

5. **Initialize Database with Content**
   ```bash
   npm run seed
   ```

6. **Create Admin User**
   ```bash
   npm run create-admin
   ```

7. **Start Development Server**
   ```bash
   npm run dev
   ```

8. **Access the Application**
   - **Portfolio Website**: http://localhost:3000
   - **Admin Dashboard**: http://localhost:3000/admin

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create optimized production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `npm run seed` - Initialize database tables and populate with content
- `npm run create-admin` - Interactive admin user creation

## Database Commands

### Setup Database (First Time)
```bash
# Make setup script executable and run
chmod +x setup-db.sh
./setup-db.sh
```

### Seed Database with Portfolio Content
```bash
# Populate database with projects, blogs, and personal info
npm run seed
```

### Create Admin User for Dashboard
```bash
# Interactive script to create admin account
npm run create-admin
```

## Admin Dashboard

Access the admin panel at `/admin` to manage:

- **Projects**: Add/edit portfolio projects with images, links, and descriptions
- **Blogs**: Create blog posts with markdown support and cover images  
- **Personal Info**: Update bio, contact information, and professional summary
- **Experience**: Manage work history and achievements

## API Endpoints

### Public API
- `GET /api/projects` - All portfolio projects
- `GET /api/blogs` - All blog posts
- `GET /api/personal-info` - Personal information
- `GET /api/experience` - Professional experience

### Admin API (Protected)
- `POST /api/admin/auth/login` - Admin login
- `POST /api/projects` - Create project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- Similar CRUD operations for blogs and personal info

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### Environment Variables for Production
```env
DATABASE_URL=your-postgres-connection-string
NEXTAUTH_SECRET=production-secret-key
NEXTAUTH_URL=https://your-domain.com
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=secure-production-password
```

## Contact

**Shoile Abdulazeez**
- **Email**: [shoileabdulazeez@gmail.com](mailto:shoileabdulazeez@gmail.com)
- **GitHub**: [github.com/shoileazeez](https://github.com/shoileazeez)
- **LinkedIn**: [linkedin.com/in/shoile-abdulazeez](https://linkedin.com/in/shoile-abdulazeez)

---

**Built with passion by a Full-Stack Developer and AI Enthusiast** 🚀
