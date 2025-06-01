import { motion } from 'framer-motion';
import { useState } from 'react';

const PerformanceModal = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-4xl w-full aspect-video bg-white rounded-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <img src={image} alt="Performance" className="w-full h-full object-cover" />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

const Performances = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const performances = [
    "https://source.unsplash.com/random/800x600/?indian-dance-1",
    "https://source.unsplash.com/random/800x600/?indian-dance-2",
    "https://source.unsplash.com/random/800x600/?indian-dance-3",
    "https://source.unsplash.com/random/800x600/?indian-dance-4",
    "https://source.unsplash.com/random/800x600/?indian-dance-5",
    "https://source.unsplash.com/random/800x600/?indian-dance-6"
  ];

  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl text-maroon mb-4">Our Performances</h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Experience the grace and beauty of Kuchipudi through our stunning performances
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performances.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
                <img
                  src={image}
                  alt={`Performance ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {selectedImage && (
          <PerformanceModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Performances;
