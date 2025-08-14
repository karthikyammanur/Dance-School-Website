import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const PerformanceModal = ({ performance, onClose }) => {
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
        className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <img 
          src={performance.image} 
          alt={performance.title} 
          className="w-full aspect-video object-cover"
        />
        <div className="p-6 bg-white">
          <h3 className="font-serif text-2xl text-maroon mb-2">{performance.title}</h3>
          <p className="text-charcoal/80 mb-4">{performance.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-charcoal/60">{performance.date}</span>
            <span className="px-3 py-1 bg-maroon/10 text-maroon rounded-full text-sm">
              {performance.category}
            </span>
          </div>
        </div>
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

const performancesData = [
  {
    id: 1,
    title: "Kavya's Rangapravesham",
    description: "A stunning graduation performance showcasing years of dedication.",
    image: "/kavya_rangapravesam_image.jpg",
    category: "Rangapravesham",
    date: "March 2025"
  },
  {
    id: 2,
    title: "Shivani's Rangapravesham",
    description: "A beautiful display of Kuchipudi's intricate movements.",
    image: "/shivani_rangapravesam_image.JPG",
    category: "Rangapravesham",
    date: "April 2025"
  },
  {
    id: 3,
    title: "Srikala's Rangapravesham",
    description: "Mastery of classical dance forms on display.",
    image: "/srikala_rangapravesam_image.jpg",
    category: "Rangapravesham",
    date: "February 2025"
  },
  {
    id: 4,
    title: "Meghna's Rangapravesham",
    description: "A celebration of grace and dedication.",
    image: "/meghna_rangapravesam_image.jpg",
    category: "Rangapravesham",
    date: "January 2025"
  },
  {
    id: 5,
    title: "Shalini's Rangapravesham",
    description: "A mesmerizing solo performance.",
    image: "/shalini_rangapravesam_image.JPG",
    category: "Rangapravesham",
    date: "December 2024"
  },
  // Fill remaining with placeholders
  {
    id: 6,
    title: "Annual Performance",
    description: "A celebration of classical dance.",
    image: "/bg_image_home.jpg",
    category: "Rangapravesham",
    date: "November 2024"
  },
  {
    id: 7,
    title: "Dance Recital",
    description: "Students showcase their progress.",
    image: "/bg_image_home.jpg",
    category: "Rangapravesham",
    date: "October 2024"
  },
  {
    id: 8,
    title: "Classical Evening",
    description: "An evening of traditional dance.",
    image: "/bg_image_home.jpg",
    category: "Rangapravesham",
    date: "September 2024"
  },
  // Cultural Events
  ...[...Array(8)].map((_, index) => ({
    id: index + 9,
    title: `Cultural Event ${index + 1}`,
    description: "A celebration of Indian classical dance and culture.",
    image: "/bg_image_home.jpg",
    category: "Cultural Events",
    date: `May ${2025 - Math.floor(index / 2)}`
  }))
];

const categories = ["All", "Rangapravesham", "Cultural Events"];

const Performances = () => {
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPerformances = activeCategory === 'All'
    ? performancesData
    : performancesData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl text-maroon mb-4">Performance Gallery</h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Witness the culmination of years of dedication and training
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-maroon text-white shadow-lg'
                  : 'bg-white text-charcoal hover:bg-maroon/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Performance Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {filteredPerformances.map((performance, index) => (
              <motion.div
                key={performance.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPerformance(performance)}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-lg">
                  <img
                    src={performance.image}
                    alt={performance.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl mb-2">{performance.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">{performance.date}</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
                        {performance.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedPerformance && (
            <PerformanceModal
              performance={selectedPerformance}
              onClose={() => setSelectedPerformance(null)}
            />
          )}
        </AnimatePresence>

        {/* Decorative Elements */}
        <img 
          src="/mandala.svg" 
          alt="" 
          className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none -z-10"
        />
        <img 
          src="/kolam-divider.svg" 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-20 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Performances;
