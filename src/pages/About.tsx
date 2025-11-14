import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Stories Published', value: '50+', icon: BookOpen },
    { label: 'Active Readers', value: '10K+', icon: Users },
    { label: 'Awards Won', value: '5', icon: Award },
    { label: 'Topics Covered', value: '20+', icon: Target },
  ];

  const values = [
    {
      title: 'Quality First',
      description:
        'Every piece of content is crafted with care, ensuring accuracy and depth that respects our readers\' time.',
    },
    {
      title: 'Visual Excellence',
      description:
        'We believe great content deserves great presentation. Our design philosophy prioritizes clarity and beauty.',
    },
    {
      title: 'Innovation',
      description:
        'Pushing boundaries in digital storytelling, we explore new ways to engage and inspire our audience.',
    },
    {
      title: 'Community',
      description:
        'Building a space where creators and readers connect, share ideas, and grow together.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're on a mission to transform how stories are told and experienced on
            the web. Through thoughtful design, cutting-edge technology, and
            compelling narratives, we create experiences that resonate.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-heavy rounded-2xl p-8 text-center shadow-premium"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold mb-2 text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-4xl mx-auto glass-heavy rounded-3xl p-12 lg:p-16 shadow-premium">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              To create a digital platform where exceptional content meets exceptional
              design. We believe that the medium is as important as the message, and
              every interaction should be delightful, intuitive, and inspiring. Through
              innovative technology and thoughtful curation, we're building the future
              of editorial experiences.
            </p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border hover:border-accent/50 transition-smooth"
              >
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2024', title: 'Launch', description: 'Platform goes live with first curated stories' },
              { year: '2024', title: 'Growth', description: 'Reached 10K+ active readers' },
              { year: '2024', title: 'Innovation', description: 'Introduced 3D interactive experiences' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-accent">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-glow" />
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
