import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { posts } from '@/data/posts';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = posts.map((post) => ({
    id: post.id,
    src: post.coverImage,
    title: post.title,
    category: post.category,
  }));

  return (
    <div className="min-h-screen pt-24 pb-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of visual stories and creative explorations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer shadow-premium hover:shadow-glow transition-smooth"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent w-fit mb-2">
                  {image.category}
                </span>
                <h3 className="font-semibold text-lg">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-accent/10 transition-smooth"
              >
                <X className="h-6 w-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-premium"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
