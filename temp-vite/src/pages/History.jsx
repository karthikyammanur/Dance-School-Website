import { motion } from 'framer-motion';

const timelineEvents = [
  {
    period: '1980–2000',
    title: "Guru Lavanya's Dance Journey",
    description: "From early training in India to becoming a renowned Kuchipudi dancer, mastering multiple dance forms under esteemed Gurus.",
    image: "/history_image_1.jpg"
  },
  {
    period: '2000–2010',
    title: "School Established in Denver, CO",
    description: "Founded Sai Meghna Dance School, nurturing young talents and promoting Indian classical dance in the USA.",
    image: "/history_image_2.jpg"
  },
  {
    period: '2010–2020',
    title: "8 Rangapraveshams Completed",
    description: "Celebrated the graduation performances of dedicated students, marking their mastery of Kuchipudi.",
    image: "/history_image_3.jpg"
  },
  {
    period: '2020–2025',
    title: "Online Classes Begin",
    description: "Adapted to changing times by embracing technology, making Kuchipudi accessible to students worldwide.",
    image: "/bg_image_home.jpg"
  }
];

const History = () => {
  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-serif text-5xl text-maroon mb-4">Our Journey</h1>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              A legacy of classical dance education spanning over two decades
            </p>
          </motion.div>

          {/* Timeline Section */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-maroon/20" />
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex flex-col justify-center ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}>
                  <div className="text-gold text-4xl font-serif mb-4">{event.period}</div>
                  <h2 className="text-2xl text-maroon mb-4">{event.title}</h2>
                  <p className="text-charcoal/80">{event.description}</p>
                </div>
                <div className={`${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                }`}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <img 
          src="/mandala.svg" 
          alt="" 
          className="absolute top-0 right-0 w-64 opacity-10 -z-10"
        />
        <img 
          src="/kolam-divider.svg" 
          alt="" 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-20"
        />
      </div>
    </div>
  );
};

export default History;
