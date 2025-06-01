import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4 relative">
        <img 
          src="/mandala.svg" 
          alt="" 
          className="absolute top-0 right-0 w-64 opacity-10 -z-10"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/800x1000/?indian-classical-dance"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <img 
              src="/kolam-divider.svg" 
              alt="" 
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 opacity-50"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="font-serif text-5xl text-maroon mb-4">About Our School</h1>
            <h2 className="text-2xl text-gold mb-8">Preserving the Art of Kuchipudi</h2>
            <div className="space-y-6 text-charcoal/80">
              <p>
                Founded with a vision to preserve and promote the classical dance form of Kuchipudi,
                Sai Meghna Dance School has been a beacon of artistic excellence for over two decades.
              </p>
              <p>
                Our founder, a distinguished performer and guru, brings years of expertise and dedication
                to nurturing young talents. Through rigorous training and personalized attention,
                we ensure that each student not only learns the technical aspects but also understands
                the spiritual and cultural significance of this ancient art form.
              </p>
              <p>
                At Sai Meghna Dance School, we believe in creating an environment where tradition
                meets innovation, where ancient wisdom is passed down through generations while
                embracing contemporary teaching methods.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
