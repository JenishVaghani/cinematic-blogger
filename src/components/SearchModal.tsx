import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { posts } from '@/data/posts';
import { cn } from '@/lib/utils';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredPosts = posts.filter((post) =>
    query.length > 0
      ? post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      : false
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleResultClick = (slug: string) => {
    navigate(`/blog/${slug}`);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl glass-heavy rounded-2xl shadow-premium overflow-hidden"
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
                <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search posts, categories, tags..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none text-lg placeholder:text-muted-foreground"
                />
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {query.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-muted-foreground">
                      Start typing to search posts...
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <kbd className="px-2 py-1 text-xs rounded bg-muted border border-border">
                        Cmd/Ctrl
                      </kbd>
                      <span className="text-muted-foreground">+</span>
                      <kbd className="px-2 py-1 text-xs rounded bg-muted border border-border">
                        K
                      </kbd>
                      <span className="text-muted-foreground text-sm ml-2">
                        to close
                      </span>
                    </div>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-muted-foreground">
                      No results found for "{query}"
                    </p>
                  </div>
                ) : (
                  <div className="py-2">
                    {filteredPosts.map((post, index) => (
                      <motion.button
                        key={post.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleResultClick(post.slug)}
                        className={cn(
                          'w-full px-6 py-4 text-left transition-smooth',
                          'hover:bg-muted/50 border-b border-border last:border-0'
                        )}
                      >
                        <h3 className="font-semibold text-foreground mb-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                            {post.category}
                          </span>
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs text-muted-foreground"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
