import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Button } from '@/components/ui/button';
import { posts } from '@/data/posts';
import 'highlight.js/styles/github-dark.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-slate-50">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button asChild variant="ghost" size="sm">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Tags & Share */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-smooth"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </motion.header>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12 rounded-2xl overflow-hidden shadow-premium"
        >
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full aspect-video object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-card prose-pre:border prose-pre:border-border
            prose-blockquote:border-l-accent prose-blockquote:bg-muted/50 prose-blockquote:py-1
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-li:marker:text-accent"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>

        {/* Author */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold text-lg">{post.author.name}</p>
              <p className="text-muted-foreground">Editorial Team</p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group p-6 rounded-xl border border-border hover:border-accent/50 transition-smooth"
                >
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-smooth">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
