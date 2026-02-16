import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StatusCard } from "./components/StatusCard";
import { EducationCard } from "./components/EducationCard";
import { SpotifyCard } from "./components/SpotifyCard";
import { QuoteCard } from "./components/QuoteCard";
import { AboutMe } from "./components/AboutMe";
import { GitHubContributions } from "./components/GitHubContributions";
import { ToolsMarquee } from "./components/ToolsMarquee";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Toaster position="top-center" expand={true} richColors />

      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-float opacity-30" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-float opacity-30 [animation-delay:1.5s]" />
      </div>

      <Navbar />

      <main id="main-content" className="container mx-auto px-6 py-12 space-y-6">
        {/* Row 1: Hero + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <Hero />
          </div>
          <div className="lg:col-span-4 grid grid-rows-2 gap-6">
            <StatusCard />
            <EducationCard />
          </div>
        </div>

        {/* Row 2: Spotify + Quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotifyCard />
          <QuoteCard />
        </div>

        {/* Row 3: About Me */}
        <div id="about">
          <AboutMe />
        </div>

        {/* Row 4: GitHub Contributions */}
        <GitHubContributions />

        {/* Row 5: Tools */}
        <ToolsMarquee />

        {/* Row 6: Projects */}
        <ProjectsSection />

        {/* Row 7: Contact */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 border-t border-white/5 text-center space-y-4" role="contentinfo">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
            Designed & Built by Ron Taylor
          </p>
          <p className="text-xs text-muted-foreground/30">
            &copy; {new Date().getFullYear()} Ron Taylor. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
