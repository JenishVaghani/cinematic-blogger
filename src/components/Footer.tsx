import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { name: 'Blog', path: '/blog' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'About', path: '/about' },
    ],
    categories: [
      { name: 'Development', path: '/blog?category=development' },
      { name: 'Design', path: '/blog?category=design' },
      { name: 'Technology', path: '/blog?category=technology' },
    ],
    social: [
      { name: 'GitHub', icon: Github, url: 'https://github.com' },
      { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
      { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
      { name: 'Email', icon: Mail, url: 'mailto:hello@example.com' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-2xl font-bold text-gradient">Cinematic</h3>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A premium editorial platform for stories that matter. Experience content
              with cinematic visuals and smooth interactions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">
                Subscribe to newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-smooth">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Cinematic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-smooth"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
