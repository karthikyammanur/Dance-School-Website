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
        
        {/* Kuchipudi Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h1 className="font-serif text-5xl text-maroon mb-8">About Kuchipudi</h1>
          <p className="text-lg text-charcoal/80 max-w-4xl mx-auto leading-relaxed">
            Kuchipudi is a classical dance which was originated in the 12th century in Kuchipudi village of Andhra Pradesh. 
            This splendid dance form is profoundly aesthetic and the experience of watching it is most exhilarating. 
            Strictly adhering to the rules laid down in Bharata's Natya Shastra (science of Dancing) and Nandikeshwara's 
            Abhinaya Darpam (mirror of expression), Kuchipudi has all the salient features of a classical dance. All it's 
            compositions are set to Carnatic music and the songs are written in Telugu language. Kuchipudi is a perfect 
            balance between 3 aspects – Nritta, Nritya and Naatya each being equivalent in nature. The Nritta is a rhythmic 
            sequence that concludes a song or averse, the Nritya is where the rhythmic passages are followed by interpretation 
            and Naatya is a complete dance drama with various characters and a story line. The charm of Kuchipudi lies in its 
            graceful movements, intricate footwork, complicated rhythmic patterns and the rapid tempo and thus distinguishes 
            it from the other dance forms.
          </p>
        </motion.div>

        {/* Founder Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/founder_image.JPG"
                alt="Lavanya Yammanur"
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
            <h2 className="font-serif text-4xl text-maroon mb-2">Lavanya Yammanur</h2>
            <h3 className="text-2xl text-gold mb-8">The Founder of Sai Meghna Dance School</h3>
            <div className="space-y-4 text-charcoal/80">
              <p>
                Smt. Lavanya Yammanur, daughter of Dr. P.R. Aravinda Babu and Smt Vijaya, was born and brought up in India. 
                She is a renowned Kuchipudi Dancer in India and in USA. She was trained in various dances like Kuchipudi, 
                Bharatanatyam and Folk from the age of 5 under Gurus Sri. P. Ramanjeneyalu and Smt. Sharada Devi.
              </p>
              <p>
                After getting married to Sri Umashankar Yammanur, she moved from India to US. She established Sai Meghna 
                Dance School in July 2000 and even today continues to nurture South Indian culture through her dedicated 
                training and advocacy of Kuchipudi.
              </p>
              <p>
                She received numerous awards, honours and citations; notable among them are "Natya Mayuri", "Natya Rani" 
                and Best Dancer awards. She was crowned as Miss Cuddapah by YMCA Proddutur.
              </p>
              <p>
                Since the school's inception, she has choreographed productions such as Girija Kalyanam, Mohini Bhasmasura, 
                Sri Venkateswara Kalyanam to name a few. Lavanya's vision for Kuchipudi is to present high quality 
                performances, educate audiences through lecture demonstrations, and teach the art to younger generations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Meghna Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:order-2 relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/meghna_image.JPG"
                alt="Sai Meghna Yammanur"
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
            className="lg:order-1"
          >
            <h2 className="font-serif text-4xl text-maroon mb-2">Sai Meghna Yammanur</h2>
            <div className="space-y-4 text-charcoal/80">
              <p>
                Meghna Yammanur, daughter of Umashankar and Lavanya Yammanur, was born and brought up in Denver, 
                Colorado USA. She moved to India in 2013 to learn more about Our Indian Culture and Tradition.
              </p>
              <p>
                She started learning Kuchipudi Dance from her mother Smt Lavanya Yammanur at the tender age of 4. 
                She gave her first stage performance when she was 5 years old. She has been blessed to perform in 
                numerous cultural talent shows hosted by Colorado Telugu Association, Indian Association of Colorado 
                and Colorado Fine Arts Association, Hindu Temple of Colorado and Sri Venkateshwara Temple of Colorado, 
                Dhim-TANA etc.
              </p>
              <p>
                She participated in several Indian cultural heritage events and non-profit fund raising events that 
                showcased Indian classical dance. She has given more than 75 stage performances in India and USA. 
                Meghna has learnt Carnatic Music for 2 years.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
