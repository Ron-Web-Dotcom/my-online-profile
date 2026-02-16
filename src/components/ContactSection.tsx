import { GlassCard } from "./ui/glass-card";
import { Github, Linkedin, Twitter, Instagram, Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
    <GlassCard id="contact" className="p-8 md:p-12 space-y-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
      
      <div className="space-y-2 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Let's <span className="text-primary text-glow">Connect</span>
        </h2>
        <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-medium">
          Get in touch
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <motion.form 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="lg:col-span-7 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:bg-primary/[0.02] focus:outline-none focus:ring-0 transition-all duration-300 text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:bg-primary/[0.02] focus:outline-none focus:ring-0 transition-all duration-300 text-sm"
            />
          </div>
          <textarea
            placeholder="How can I help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground/40 focus:border-primary/50 focus:bg-primary/[0.02] focus:outline-none focus:ring-0 transition-all duration-300 text-sm resize-none"
          />
          <Button
            type="submit"
            className="w-full rounded-2xl py-6 bg-primary text-primary-foreground hover:opacity-90 transition-smooth font-bold text-base shadow-elegant hover:scale-[1.02] active:scale-95"
          >
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </motion.form>

        {/* Socials & Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Social Presence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/social"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/social:bg-primary/10 transition-colors">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                </div>
                <span className="text-sm font-bold text-muted-foreground group-hover/social:text-foreground transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] group/email hover:border-primary/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-bold">Email Me</span>
                <a href="mailto:rontaylor_23@hotmail.com" className="text-base font-medium text-foreground hover:text-primary transition-colors">
                  rontaylor_23@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </GlassCard>
  );
}
