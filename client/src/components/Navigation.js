import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const location = useLocation();
  const links = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      subMenu: [
        { name: 'Lavanya Bio', path: '/about' },
        { name: 'School History', path: '/about/history' }
      ]
    },
    { name: 'Performances', path: '/performances' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (    <nav className="bg-off-white border-b border-maroon/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl text-maroon">Sai Meghna Dance School</span>
            </Link>
          </div>
          
          {/* Desktop menu - Centered */}
          <div className="hidden sm:flex flex-grow justify-center space-x-8">
            {links.map((link) => (
              <div key={link.name} className="relative">
                {link.subMenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setShowAboutDropdown(true)}
                    onMouseLeave={() => setShowAboutDropdown(false)}
                  >
                    <button
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive(link.path)
                          ? 'text-maroon border-b-2 border-maroon'
                          : 'text-charcoal hover:text-maroon'
                      }`}
                    >
                      {link.name}
                      <ChevronDownIcon className="ml-1 w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {showAboutDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg z-50"
                        >
                          {link.subMenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-charcoal hover:text-maroon hover:bg-maroon/5"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      isActive(link.path)
                        ? 'text-maroon border-b-2 border-maroon'
                        : 'text-charcoal hover:text-maroon'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-maroon hover:bg-maroon/10"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <div key={link.name}>
                  {link.subMenu ? (
                    <>
                      <div
                        className={`block pl-3 pr-4 py-2 text-base font-medium ${
                          isActive(link.path)
                            ? 'text-maroon bg-maroon/10'
                            : 'text-charcoal hover:text-maroon hover:bg-maroon/5'
                        }`}
                      >
                        {link.name}
                      </div>
                      {link.subMenu.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block pl-6 pr-4 py-2 text-sm font-medium text-charcoal/80 hover:text-maroon hover:bg-maroon/5"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block pl-3 pr-4 py-2 text-base font-medium ${
                        isActive(link.path)
                          ? 'text-maroon bg-maroon/10'
                          : 'text-charcoal hover:text-maroon hover:bg-maroon/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
