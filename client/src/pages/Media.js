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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-video rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/D0UnqGm_miA"
              title="Featured Performance"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-3xl text-maroon mb-4">Featured Performance</h2>
              <p className="text-charcoal/80">
                Experience the mesmerizing blend of rhythm, expression, and storytelling
                in this featured Kuchipudi performance. Our students demonstrate the
                intricate footwork and graceful movements that define this classical
                dance form.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-maroon mb-4">Coming Soon</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="aspect-video bg-charcoal/10 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-charcoal/40">Video {index}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Media;
