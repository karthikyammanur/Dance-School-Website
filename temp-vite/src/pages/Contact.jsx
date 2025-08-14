import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-off-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-5xl text-maroon mb-4">Contact Us</h1>
          <p className="text-xl text-charcoal/80">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden"
          >
            <img 
              src="/mandala.svg" 
              alt="" 
              className="absolute top-0 right-0 w-64 opacity-5 pointer-events-none"
            />
            <img 
              src="/kolam-divider.svg" 
              alt="" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-10 pointer-events-none"
            />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-off-white/50 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-maroon/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-off-white/50 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-maroon/20 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-off-white/50 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-maroon/20 transition-colors resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-maroon text-off-white rounded-md hover:bg-maroon/90 transition-colors duration-300 font-medium"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <p className="mt-3 text-green-600 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="mt-3 text-red-600 text-center">Error sending message. Please try again.</p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-lg shadow-sm p-8 relative overflow-hidden"
          >
            <h2 className="font-serif text-3xl text-maroon mb-6">Connect With Us</h2>
            <div className="space-y-6">
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://instagram.com/saimeghnadanceschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-off-white/50 transition-colors duration-300"
                >
                  <FaInstagram className="text-3xl text-maroon" />
                  <span className="text-charcoal">@saimeghnadanceschool</span>
                </a>
                <a 
                  href="https://facebook.com/saimeghnadanceschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-off-white/50 transition-colors duration-300"
                >
                  <FaFacebook className="text-3xl text-maroon" />
                  <span className="text-charcoal">Sai Meghna Dance School</span>
                </a>
                <a 
                  href="https://youtube.com/@saimeghnadanceschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-off-white/50 transition-colors duration-300"
                >
                  <FaYoutube className="text-3xl text-maroon" />
                  <span className="text-charcoal">Sai Meghna Dance School</span>
                </a>
                <a 
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-off-white/50 transition-colors duration-300"
                >
                  <FaWhatsapp className="text-3xl text-maroon" />
                  <span className="text-charcoal">WhatsApp Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-charcoal/80 mb-2">Located in Dallas, Texas</p>
          <p className="text-lg text-maroon font-medium">Email: info@saimeghnadanceschool.com</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
