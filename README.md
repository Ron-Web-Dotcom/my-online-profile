# Ron Taylor Portfolio

A modern, responsive personal portfolio web application designed for Ron Taylor. This showcase features high-fidelity design, smooth animations, and a comprehensive overview of skills, projects, and experience.

## 🚀 Overview

This portfolio is built with performance and aesthetics in mind, utilizing a glassmorphism design language. It serves as a central hub for Ron's professional identity, showcasing his technical expertise and creative projects.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid transitions and interactive elements
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) and [Shadcn UI](https://ui.shadcn.com/)
- **State/Themes**: [next-themes](https://github.com/pacocoursey/next-themes) for dark mode support
- **3D Elements**: [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) (integrated in specific components)
- **Deployment**: Blink Platform

## ✨ Key Features

- **Glassmorphism UI**: Beautiful frosted-glass effects with dynamic background gradients.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewports.
- **Interactive Hero Section**: Engaging introduction with floating status cards.
- **Filterable Projects Grid**: Categorized project showcase with hover details and links.
- **Experience & Education**: Timeline-based visualization of professional growth.
- **GitHub Contributions**: Integrated visualization of coding activity.
- **Tools Marquee**: Animated scrolling display of technical proficiency.
- **Resume Modal**: Integrated PDF viewer for seamless resume access.
- **Theme Support**: Built-in dark mode with smooth theme switching.
- **Local Time Display**: Real-time clock showing Ron's current time zone.

## 📦 Project Structure

```text
src/
├── components/          # UI Components
│   ├── ui/             # Atomic components (buttons, cards, etc.)
│   ├── AboutMe.tsx     # Personal background and bio
│   ├── Hero.tsx        # Main landing section
│   ├── ProjectsSection.tsx # Filterable projects showcase
│   ├── ContactSection.tsx  # Contact info and links
│   └── ...             # Feature-specific components
├── lib/                # Utility functions and shared logic
├── hooks/              # Custom React hooks
├── App.tsx             # Main application layout and routing
├── index.css           # Global styles and design system tokens
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Bun](https://bun.sh/) or `npm` / `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ron-Web-Dotcom/my-online-profile.git
   ```

2. Install dependencies:
   ```bash
   bun install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. Build for production:
   ```bash
   bun build
   # or
   npm run build
   ```

## 📝 Documentation

### Design System
The project follows a structured design system defined in `src/index.css`. It uses HSL color tokens for consistent styling across light and dark modes. Key design principles include:
- **Spacing**: 8px grid system.
- **Typography**: Custom font pairings for hierarchy and readability.
- **Shadows**: Multi-layered shadows for depth.

### Components
- **GlassCard**: A reusable container component that implements the glassmorphism effect.
- **StatusCard**: Displays Ron's current status (e.g., "Available for new projects").
- **ToolsMarquee**: Uses an infinite scroll animation to display technology logos.

### Performance Optimization
- **Image Optimization**: High-quality images with proper sizing and formats.
- **Lazy Loading**: (Where applicable) Components are loaded efficiently.
- **Code Splitting**: Vite handles automatic code splitting for better load times.

## 👤 Author

**Ron Taylor**
- Portfolio: [rontaylor.live.blink.new](https://ron-portfolio-app-asyosp5e.live.blink.new)
- GitHub: [@Ron-Web-Dotcom](https://github.com/Ron-Web-Dotcom)

---

Developed with ❤️ using the Blink SDK.
