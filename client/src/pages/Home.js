import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("/images/hero-bg.jpg")',
            filter: 'brightness(0.7)'
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
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16 text-charcoal">Why Choose Us</h2>
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
      </section>

      {/* Call to Action */}
      <section className="bg-maroon text-off-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-4xl mb-6">Begin Your Dance Journey Today</h2>
          <p className="text-lg mb-8 text-off-white/90">
            Join our community of dancers and experience the joy of classical Indian dance.
          </p>
          <button className="bg-off-white text-maroon px-8 py-3 rounded-md font-medium hover:bg-off-white/90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
