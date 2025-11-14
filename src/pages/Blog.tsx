import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { posts, categories } from "@/data/posts";
import { cn } from "@/lib/utils";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Insights, tutorials, and stories about design, development, and
            creativity.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-smooth"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-smooth",
                  selectedCategory === category.slug
                    ? "bg-accent text-accent-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-16"
            >
              <p className="text-xl text-muted-foreground">
                No posts found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
