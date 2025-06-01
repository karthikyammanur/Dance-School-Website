import { motion } from 'framer-motion';

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
        </motion.div>        {/* Featured Performances in Zigzag Layout */}
        <div className="space-y-24">
          {[
            {
              title: "Annual Dance Festival",
              description: "A spectacular showcase of our students' talent and dedication.",
              align: "right"
            },
            {
              title: "Classical Performance Series",
              description: "Exploring the depths of traditional Kuchipudi dance forms.",
              align: "left"
            },
            {
              title: "Student Showcase",
              description: "Celebrating the progress and achievements of our dancers.",
              align: "right"
            },
            {
              title: "Cultural Exhibition",
              description: "Bringing classical dance to modern audiences.",
              align: "left"
            },
            {
              title: "Dance Drama Production",
              description: "Storytelling through the art of Kuchipudi.",
              align: "right"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                item.align === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${item.align === "right" ? "lg:pr-12" : "lg:pl-12"}`}>
                <h2 className="font-serif text-3xl text-maroon">{item.title}</h2>
                <p className="text-charcoal/80">{item.description}</p>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D0UnqGm_miA"
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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
          className="mt-32"
        >
          <h2 className="font-serif text-4xl text-maroon text-center mb-16">Rangapravesham Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(8).fill(null).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-video rounded-lg overflow-hidden shadow-lg"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D0UnqGm_miA"
                  title={`Rangapravesham ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Media;
