import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero3D } from '@/components/Hero3D';
import { BlogCard } from '@/components/BlogCard';
import { posts } from '@/data/posts';

const Index = () => {
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh">
        {/* 3D Background */}
        <div className="absolute inset-0 ">
          <Hero3D />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/20"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Premium Editorial Experience</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Stories That{' '}
              <span className="text-gradient">Transform</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Immersive content experiences with cinematic visuals and buttery-smooth
              interactions. Where design meets storytelling.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="text-base px-8 py-6 rounded-xl shadow-glow">
                <Link to="/blog">
                  Explore Stories
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl"
              >
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-2 bg-muted-foreground/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 container mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Stories</h2>
          <p className="text-xl text-muted-foreground">
            Handpicked articles that inspire and inform
          </p>
        </motion.div>

        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} featured />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="rounded-xl">
            <Link to="/blog/blog">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-mesh">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center glass-heavy rounded-3xl p-12 lg:p-16 shadow-premium"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience More?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community and stay updated with the latest stories,
              insights, and creative explorations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-xl bg-background border border-border text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
              />
              <Button size="lg" className="px-8 py-4 rounded-xl text-base">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
