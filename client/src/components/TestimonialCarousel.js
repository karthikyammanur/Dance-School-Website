import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Student",
    text: "Learning Kuchipudi at Sai Meghna Dance School has been a transformative experience. The attention to detail and cultural authenticity is remarkable.",
    image: "https://source.unsplash.com/random/100x100/?portrait-1"
  },
  {
    name: "Ananya Reddy",
    role: "Senior Student",
    text: "The teachers here are not just instructors, but true mentors who help us understand the deeper meaning behind each movement and expression.",
    image: "https://source.unsplash.com/random/100x100/?portrait-2"
  },
  {
    name: "Maya Patel",
    role: "Parent",
    text: "From a beginner to performing on stage, my daughter's journey here has been incredible. The supportive environment makes learning enjoyable.",
    image: "https://source.unsplash.com/random/100x100/?portrait-3"
  },
  {
    name: "Riya Kumar",
    role: "Student",
    text: "The school's commitment to preserving traditional Kuchipudi while making it accessible to modern students is what sets it apart.",
    image: "https://source.unsplash.com/random/100x100/?portrait-4"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-maroon opacity-20" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl text-charcoal/80 italic mb-6">
                      {testimonials[currentIndex].text}
                    </p>
                    <div>
                      <p className="font-serif text-xl text-maroon">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-charcoal/60">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-maroon' : 'bg-maroon/20'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full">
          <button
            className="absolute left-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
