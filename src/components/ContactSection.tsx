import { GlassCard } from "./ui/glass-card";
import { Github, Linkedin, Twitter, Instagram, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Ron-Web-Dotcom" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/ron-taylor-982aa5105/" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="space-y-10 py-16" aria-label="Contact">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center">
        Let's Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Form */}
        <GlassCard className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-0 transition-colors text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-0 transition-colors text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-0 transition-colors text-sm resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-xl py-6 bg-primary text-primary-foreground hover:opacity-90 transition-all font-bold text-sm"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </GlassCard>

        {/* Socials */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Socials</h3>
            <p className="text-sm text-muted-foreground">
              Connect with me across the digital universe.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:rontaylor_23@hotmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              rontaylor_23@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
