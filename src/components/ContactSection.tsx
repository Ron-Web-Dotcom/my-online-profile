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
    <GlassCard id="contact" className="p-6 md:p-8 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Let's Connect
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-0 transition-colors text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-0 transition-colors text-sm"
          />
          <textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:outline-none focus:ring-0 transition-colors text-sm resize-none"
          />
          <Button
            type="submit"
            className="w-full rounded-xl py-5 bg-primary text-primary-foreground hover:opacity-90 transition-all font-bold text-sm"
          >
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Socials */}
        <div className="space-y-5">
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold">Socials</h3>
            <p className="text-sm text-muted-foreground">
              Connect with me across the digital universe.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.02] w-fit">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:rontaylor_23@hotmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              rontaylor_23@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
