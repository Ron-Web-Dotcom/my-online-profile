import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Socials", href: "#contact" },
];

export function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-sm font-bold text-foreground border border-white/10 rounded-full px-4 py-2 hover:border-primary/50 transition-colors">
          rontaylor.dev
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                link.label === "Home"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2.5 rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Moon className="w-4 h-4 text-primary" />
          ) : (
            <Sun className="w-4 h-4 text-primary" />
          )}
        </button>
      </div>
    </nav>
  );
}
