import { motion } from 'framer-motion';

const featuredPerformances = [
  {
    id: 1,
    title: "Annual Dance Festival",
    description: "A spectacular showcase of our students' talent and dedication.",
    videoId: "D0UnqGm_miA",
    thumbnail: "/bg_image_home.jpg"
  },
  {
    id: 2,
    title: "Classical Performance Series",
    description: "Exploring the depths of traditional Kuchipudi dance forms.",
    videoId: "D0UnqGm_miA",
    thumbnail: "/bg_image_home.jpg"
  },
  {
    id: 3,
    title: "Student Showcase",
    description: "Celebrating the progress and achievements of our dancers.",
    videoId: "D0UnqGm_miA",
    thumbnail: "/bg_image_home.jpg"
  },
  {
    id: 4,
    title: "Cultural Exhibition",
    description: "Bringing classical dance to modern audiences.",
    videoId: "D0UnqGm_miA",
    thumbnail: "/bg_image_home.jpg"
  },
  {
    id: 5,
    title: "Dance Drama Production",
    description: "Storytelling through the art of Kuchipudi.",
    videoId: "D0UnqGm_miA",
    thumbnail: "/bg_image_home.jpg"
  }
];

const Media = () => {
  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl text-maroon mb-4">Media Gallery</h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto">
            Watch our performances and get a glimpse of our dance journey
          </p>
        </motion.div>

        {/* Featured Performances in Zigzag Layout */}
        <div className="space-y-32">
          {featuredPerformances.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                <h2 className="font-serif text-3xl text-maroon">{item.title}</h2>
                <p className="text-charcoal/80 text-lg leading-relaxed">{item.description}</p>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="relative z-10"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rangapravesham Videos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <h2 className="font-serif text-4xl text-maroon text-center mb-16">Rangapravesham Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array(8).fill(null).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-xl overflow-hidden shadow-xl relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/bg_image_home.jpg"
                  alt={`Rangapravesham ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D0UnqGm_miA"
                  title={`Rangapravesham ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="relative z-10"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

export default Media;
