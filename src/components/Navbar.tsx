import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Socials", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="#" 
          className="text-xs font-bold text-foreground border border-white/10 rounded-full px-4 py-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 uppercase tracking-widest"
        >
          Ron Taylor
        </motion.a>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full transition-all duration-300 ${
                link.label === "Home"
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
        
        {/* Spacer for alignment if needed, or just leave as is since we use justify-between */}
        <div className="w-[100px] hidden md:block" /> 
      </div>
    </nav>
  );
}