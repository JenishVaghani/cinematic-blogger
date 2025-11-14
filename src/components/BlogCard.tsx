import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { BlogPost } from '@/data/posts';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export const BlogCard = ({ post, index = 0, featured = false }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'group relative rounded-2xl overflow-hidden transition-smooth hover:shadow-premium',
        featured ? 'lg:col-span-2' : ''
      )}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h3 className={cn(
            'font-bold mb-2 text-foreground group-hover:text-accent transition-smooth line-clamp-2',
            featured ? 'text-2xl lg:text-3xl' : 'text-xl'
          )}>
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted-foreground hover:text-accent transition-smooth"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
