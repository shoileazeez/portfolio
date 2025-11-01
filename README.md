# Duo-Tone Folio

A modern, minimalist portfolio website showcasing the work and experience of Shoile Abdulazeez Adenuga, a Full-Stack Software Engineer and Machine Learning Developer.

![Portfolio Preview](https://lovable.dev/opengraph-image-p98pqg.png)

## 🌟 About

This portfolio website features a clean, duo-tone design that highlights projects, experience, and technical skills. Built with modern web technologies, it provides an elegant and responsive interface to showcase professional work in software engineering and machine learning.

## ✨ Features

- **🎨 Modern Duo-Tone Design**: Clean and minimalist aesthetic with light/dark theme support
- **📱 Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **🌓 Dark Mode**: Toggle between light and dark themes with persistent preference
- **📂 Project Showcase**: Detailed project cards with tags, descriptions, and links
- **👤 About Page**: Comprehensive professional experience and skills overview
- **🔗 Social Integration**: Direct links to GitHub and LinkedIn profiles
- **⚡ Fast Performance**: Built with Vite for lightning-fast load times
- **♿ Accessible**: Follows web accessibility best practices

## 🚀 Tech Stack

### Frontend
- **React 18.3** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite 5.4** - Next-generation frontend build tool
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library built with Radix UI
- **Lucide React** - Beautiful icon library

### State Management & Data Fetching
- **TanStack Query** - Powerful data synchronization and caching

### UI Components & Styling
- **Radix UI Primitives** - Unstyled, accessible components
- **class-variance-authority** - Component variant styling
- **tailwindcss-animate** - Animation utilities
- **next-themes** - Theme management with system preference detection

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS & Autoprefixer** - CSS processing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **bun** - Package manager (npm comes with Node.js)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/shoileazeez/duo-tone-folio.git
   cd duo-tone-folio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with bun
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or with bun
   bun run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8080` to view the portfolio

## 📜 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint to check code quality
```

## 📁 Project Structure

```
duo-tone-folio/
├── public/              # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   │   ├── About.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── ProjectDetail.tsx
│   ├── App.tsx         # Main app component
│   ├── App.css         # App-specific styles
│   ├── index.css       # Global styles
│   └── main.tsx        # App entry point
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md          # This file
```

## 🎨 Customization

### Updating Projects

Edit the projects array in `src/pages/Index.tsx` to add or modify your projects:

```typescript
const projects = [
  {
    year: "2024",
    title: "Your Project Title",
    description: "Project description...",
    date: "Month Year",
    duration: "X months",
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "/project/project-slug",
  },
  // Add more projects...
];
```

### Modifying Personal Information

Update your details in:
- `src/pages/About.tsx` - Professional experience and skills
- `src/components/Header.tsx` - Name and social links
- `src/components/Footer.tsx` - Contact information
- `index.html` - Meta tags and page title

### Theme Customization

Modify colors and design tokens in:
- `tailwind.config.ts` - Tailwind theme configuration
- `src/index.css` - CSS variables for theme colors

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to gh-pages branch

### Other Platforms
The built `dist` folder can be deployed to any static hosting service.

## 👨‍💻 Author

**Shoile Abdulazeez Adenuga**
- Software Engineer | Full-Stack & ML Developer
- GitHub: [@shoileazeez](https://github.com/shoileazeez)
- LinkedIn: [Shoile Abdulazeez](https://linkedin.com/in/shoile-abdulazeez-8143842ab)
- Email: shoabdulazeez@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: This portfolio was initially scaffolded using [Lovable](https://lovable.dev/projects/99b9d23f-061c-4d98-b89a-ce383ca84f63), a platform for rapid React application development.
