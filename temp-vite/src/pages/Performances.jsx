import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'

// List of public images to include in the gallery
const imageFiles = [
  'kavya_rangapravesam_image.jpg',
  'shivani_rangapravesam_image.JPG',
  'srikala_rangapravesam_image.jpg',
  'meghna_rangapravesam_image.jpg',
  'shalini_rangapravesam_image.JPG',
  'lavanya_performance_1.jpg',
  'lavanya_performance_new_1.jpg',
  'lavanya_performance_new_2.jpg',
  'lavanya_performance_new_3.jpg',
  'lavanya_performance_old_1.jpg',
  'lavanya_performance_old_2.jpg',
  'lavanya_performance_old_3.jpg',
  'lavanya_srikala.jpg',
  'varshini_rangapravesam.jpg',
  'navya_rangapravesam.jpg',
  'trisha_rangapravesam.jpg',
  'denver_students_1.jpg',
  'denver_students_2.jpg',
  'denver_students_3.jpg',
  'founder_image.JPG',
  'founder_image_2.jpg',
  'meghna_award_2017.jpg',
  'meghna_certificate_2016.jpg',
  'meghna_image.JPG',
  'meghna_molaka_magazine_cover.jpg',
  'meghna_pose_2018.jpg',
  'news_coverage_2016.jpg',
  'trisha_newspaper.jpg',
  'bg_image_home.jpg'
]

const performancesData = imageFiles.map((file, idx) => {
  const base = file.replace(/\.[^.]+$/, '')
  const title = base.replace(/_/g, ' ').replace(/\b(\w)/g, (m) => m.toUpperCase())

  let category = 'Other'
  if (file.toLowerCase().includes('rangapravesam')) category = 'Rangapravesham'
  else if (file.toLowerCase().includes('lavanya') || file.toLowerCase().includes('performance')) category = 'Performance'
  else if (file.toLowerCase().includes('student') || file.toLowerCase().includes('denver')) category = 'Students'
  else if (file.toLowerCase().includes('founder')) category = 'Founder'
  else if (file.toLowerCase().includes('award') || file.toLowerCase().includes('certificate')) category = 'Awards'
  else if (file.toLowerCase().includes('news') || file.toLowerCase().includes('newspaper')) category = 'Media'

  return {
    id: idx + 1,
    title,
    description: `Photo: ${title}`,
    image: `/${file}`,
    category,
    date: '2025'
  }
})

const PerformanceModal = ({ performance, onClose }) => {
  if (!performance) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={performance.image} alt={performance.title} className="w-full aspect-video object-cover" />
        <div className="p-6 bg-white">
          <h3 className="font-serif text-2xl text-maroon mb-2">{performance.title}</h3>
          <p className="text-charcoal/80 mb-4">{performance.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-charcoal/60">{performance.date}</span>
            <span className="px-3 py-1 bg-maroon/10 text-maroon rounded-full text-sm">{performance.category}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

const Performances = () => {
  const [selectedPerformance, setSelectedPerformance] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(performancesData.map((p) => p.category)))
    return ['All', ...cats]
  }, [])

  const filteredPerformances = activeCategory === 'All' ? performancesData : performancesData.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="font-serif text-5xl text-maroon mb-4">Performance Gallery</h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">Witness the culmination of years of dedication and training</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category ? 'bg-maroon text-white shadow-lg' : 'bg-white text-charcoal hover:bg-maroon/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {filteredPerformances.map((performance, index) => (
              <motion.div
                key={performance.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPerformance(performance)}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden relative shadow-lg">
                  <img src={performance.image} alt={performance.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-serif text-xl mb-2">{performance.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/80">{performance.date}</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">{performance.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedPerformance && (
            <PerformanceModal performance={selectedPerformance} onClose={() => setSelectedPerformance(null)} />
          )}
        </AnimatePresence>

        {/* Decorative Elements */}
        <img src="/mandala.svg" alt="" className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none -z-10" />
        <img src="/kolam-divider.svg" alt="" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-20 pointer-events-none" />
      </div>
    </div>
  )
}

export default Performances
