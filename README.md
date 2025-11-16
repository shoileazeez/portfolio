# Shoile Abdulazeez - Portfolio Website

A modern, full-stack portfolio website showcasing the work of Shoile Abdulazeez, a Full-Stack Developer and AI Enthusiast. Built with Next.js, TypeScript, PostgreSQL, and Tailwind CSS with a complete admin dashboard for content management.

## About

This portfolio represents the journey of a passionate software engineer with expertise in:
- **Machine Learning & AI**: Diabetes prediction systems, data analysis with Scikit-Learn, Pandas, NumPy, sklearn
- **Full-Stack Development**: React, Next.js, Tailwindcssm, Django REST Framework, FastAPI
- **Database Design**: PostgreSQL optimization, Redis integration, Django ORM
- **Cloud & DevOps**: Docker, Slack API integration, production deployments,

## Features

### Core Functionality
- 🎨 Modern, responsive design with dark/light theme support
- 📱 Mobile-first approach with Tailwind CSS and shadcn/ui components
- 🗄️ PostgreSQL database with full CRUD operations
- 🔐 Secure admin authentication and dashboard
- 📝 Complete content management for projects, blogs, and personal information
- 🚀 Server-side rendering with Next.js 15
- 🔧 TypeScript for enhanced type safety
- 🎭 Beautiful UI components from shadcn/ui library

### Performance & UX Optimizations
- ⚡ **Smart Caching System**: In-memory API cache with configurable TTL (Time-To-Live)
- 🏗️ **Skeleton Loading**: Custom skeleton components for all pages during data fetching
- 📡 **Request Optimization**: Cached API calls with stale-while-revalidate strategy
- 🎯 **Clean UI**: Removed unnecessary hover effects for cleaner, static card designs
- 🔄 **Error Handling**: Graceful fallback to stale cached data on network failures

### Plugin & Package Support
- 📦 **Plugin Projects**: Special support for PyPI packages, npm modules, etc.
- 🔗 **Package Links**: Direct links to PyPI, npm, or other package repositories
- 🏷️ **Platform Badges**: Visual indicators for different package platforms
- 📚 **API Documentation**: Links to API docs for projects with public APIs

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

### Frontend
- **Framework**: Next.js 15 with React 18
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom theme configuration
- **UI Components**: shadcn/ui component library
- **State Management**: React Hooks with optimized caching

### Backend & Database
- **API**: Next.js API routes with TypeScript
- **Database**: PostgreSQL with connection pooling
- **Caching**: Custom in-memory cache with TTL support
- **Authentication**: JWT-based custom authentication

### Performance Features
- **Caching Strategy**: 
  - In-memory API cache with 3-5 minute TTL
  - Stale-while-revalidate for better UX
  - Automatic cache invalidation
- **Loading States**: Custom skeleton components for each page type
- **Request Optimization**: Cached fetch utility with error fallback

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

### Add Database Columns (If Needed)
```bash
# Add new columns for plugin support
npx tsx scripts/add-columns.ts
```

## Admin Dashboard

Access the admin panel at `/admin` to manage:

- **Projects**: Add/edit portfolio projects with images, links, and descriptions
- **Blogs**: Create blog posts with markdown support and cover images  
- **Personal Info**: Update bio, contact information, and professional summary
- **Experience**: Manage work history and achievements

## Performance & Caching

### Smart Caching System
The portfolio implements a sophisticated caching system to improve performance and user experience:

#### Cache Features
- **In-Memory Storage**: Fast access to frequently requested data
- **TTL (Time-To-Live)**: Configurable expiration times (3-5 minutes default)
- **Stale-While-Revalidate**: Returns cached data while fetching fresh data in background
- **Error Fallback**: Serves stale cached data if API requests fail
- **Cache Invalidation**: Manual cache clearing for admin operations

#### Cache Configuration
```typescript
// Default cache times
Projects: 3 minutes
Blogs: 3 minutes
Personal Info: 5 minutes
Experience: 5 minutes
```

#### Usage Example
```typescript
import { fetchWithCache } from '@/lib/cache';

// Cached API call with 3-minute TTL
const projects = await fetchWithCache<Project[]>(
  '/api/projects', 
  undefined, 
  3 * 60 * 1000
);
```

### Skeleton Loading
Custom skeleton components provide immediate visual feedback:

- **AboutPageSkeleton**: Mimics profile, education, experience sections
- **ProjectListSkeleton**: Matches project card layouts
- **BlogListSkeleton**: Includes cover image and content placeholders
- **BlogDetailSkeleton**: Full article layout skeleton
- **ProjectDetailSkeleton**: Detailed project page skeleton

### UI Improvements
- **Removed Hover Effects**: Cleaner, more accessible card designs
- **Static Cards**: Better touch device compatibility
- **Consistent Spacing**: Unified design system across all components

## API Endpoints

### Public API (Cached)
- `GET /api/projects` - All portfolio projects (3min cache)
- `GET /api/blogs` - All blog posts (3min cache)  
- `GET /api/personal-info` - Personal information (5min cache)
- `GET /api/experience` - Professional experience (5min cache)

### Project-Specific Fields
- `platform` - Package platform (PyPI, npm, etc.)
- `pypi_url` - Direct link to package repository
- `api_docs_url` - Link to API documentation

### Admin API (Protected)
- `POST /api/admin/auth/login` - Admin login
- `POST /api/projects` - Create project
- `PUT /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- Similar CRUD operations for blogs and personal info

## Plugin & Package Project Support

The portfolio has special support for showcasing software packages and plugins:

### Project Types
- **Regular Projects**: Web applications, APIs, frontend projects
- **Plugin Projects**: Django plugins, React components, utility packages
- **Package Projects**: PyPI packages, npm modules, published libraries

### Plugin-Specific Fields
```typescript
interface Project {
  // Standard fields
  title: string;
  description: string;
  // ... other fields
  
  // Plugin-specific fields
  platform?: string;        // "PyPI", "npm", "GitHub", etc.
  pypi_url?: string;        // Direct package URL
  api_docs_url?: string;    // Documentation URL
}
```

### Admin Interface
The admin dashboard includes fields for:
- **Platform**: Specify the package platform (PyPI, npm, etc.)
- **Package URL**: Direct link to the package repository
- **API Documentation**: Link to project documentation

### Display Features
- **Platform Badges**: Visual indicators for package type
- **Package Links**: Direct buttons to PyPI, npm, etc.
- **API Doc Links**: Easy access to documentation
- **Plugin Identification**: Special styling for plugin projects

## Development Notes

### Cache Management
```typescript
import { apiCache } from '@/lib/cache';

// Clear specific cache entry
apiCache.invalidate('/api/projects');

// Clear all cache
apiCache.clear();

// Get cache statistics
const stats = apiCache.getStats();
console.log(`Cache size: ${stats.size}, Keys: ${stats.keys}`);
```

### Adding New Skeleton Components
```typescript
// Create in src/components/ui/page-skeletons.tsx
export const YourPageSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Your skeleton structure */}
    </div>
  );
};
```

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

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   ```bash
   # Check PostgreSQL is running
   pg_isready -h localhost -p 5432
   
   # Verify connection string format
   DATABASE_URL=postgresql://user:password@localhost:5432/database
   ```

2. **Missing Database Columns**
   ```bash
   # Add missing columns for plugin support
   npx tsx scripts/add-columns.ts
   ```

3. **Cache Issues**
   ```typescript
   // Clear cache in development
   import { apiCache } from '@/lib/cache';
   apiCache.clear();
   ```

4. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

## Contact

**Shoile Abdulazeez**
- **Email**: [shoileabdulazeez@gmail.com](mailto:shoileabdulazeez@gmail.com)
- **GitHub**: [github.com/shoileazeez](https://github.com/shoileazeez)
- **LinkedIn**: [linkedin.com/in/shoile-abdulazeez](https://linkedin.com/in/shoile-abdulazeez)

---

**Built with passion by a Full-Stack Developer and AI Enthusiast** 🚀
