import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ filter: 'brightness(0.7)' }}
          >
            <source src="/masthead_bg_video.mp4" type="video/mp4" />          </video>
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("/mandala.svg")',
            backgroundSize: '400px',
            backgroundRepeat: 'repeat',
            opacity: 0.05,
          }} />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="font-serif text-6xl md:text-7xl lg:text-8xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Sai Meghna Dance School
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-off-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Discover the timeless beauty of Kuchipudi through authentic classical training
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-maroon text-off-white px-8 py-4 rounded-md font-medium hover:bg-maroon/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Begin Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            className="w-6 h-6 text-off-white opacity-80" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
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
      </section>      {/* Testimonials */}
      <section className="bg-off-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl text-maroon mb-4">Student Testimonials</h2>
            <p className="text-xl text-charcoal/80">What our students say about their journey</p>
          </motion.div>

          <TestimonialCarousel />
        </div>

        {/* Decorative Elements */}
        <img 
          src="/mandala.svg" 
          alt="" 
          className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none"
        />
        <img 
          src="/kolam-divider.svg" 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-20 pointer-events-none"
        />
      </section>

      {/* Call to Action */}
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-off-white text-maroon px-8 py-3 rounded-md font-medium hover:bg-off-white/90 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
