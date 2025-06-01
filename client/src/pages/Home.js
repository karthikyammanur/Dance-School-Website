import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-off-white">      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="fixed inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("client\public\bg_image_home.jpg")',
            filter: 'brightness(0.7)',
            zIndex: -1
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Sai Meghna Dance School
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the beauty of classical Indian dance
          </motion.p>
          <motion.button
            className="bg-maroon text-off-white px-8 py-3 rounded-md font-medium hover:bg-maroon/90 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>      {/* Featured Section */}
      <section className="py-20 px-4 relative">
        <img 
          src="/mandala.svg" 
          alt="" 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 opacity-10 pointer-events-none"
        />
        <img 
          src="/kolam-divider.svg" 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-20 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl text-center mb-16 text-charcoal"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Expert Instruction',
                description: 'Learn from experienced dancers who are passionate about teaching Indian classical dance.'
              },
              {
                title: 'Rich Tradition',
                description: 'Immerse yourself in the ancient art form while learning its cultural significance.'
              },
              {
                title: 'Performance Focus',
                description: 'Regular opportunities to showcase your skills through various cultural events.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-2xl mb-4 text-maroon">{feature.title}</h3>
                <p className="text-charcoal/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Call to Action */}
      <section className="relative bg-maroon text-off-white py-20 overflow-hidden">
        <img 
          src="/divider-curve.svg" 
          alt="" 
          className="absolute top-0 left-0 w-full transform -translate-y-1/2 opacity-10"
        />
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl mb-6">Begin Your Dance Journey Today</h2>
            <p className="text-lg mb-8 text-off-white/90">
              Join our community of dancers and experience the joy of classical Indian dance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-off-white text-maroon px-8 py-3 rounded-md font-medium hover:bg-off-white/90 transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
