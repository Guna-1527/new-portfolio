import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const links = [
    { id: 1, linkName: 'HOME', link: 'home' },
    { id: 2, linkName: 'ABOUT', link: 'about' },
    { id: 3, linkName: 'SKILL', link: 'skill' },
    { id: 4, linkName: 'WORK', link: 'work' },
    { id: 5, linkName: 'CONTACT', link: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 bg-white ${
        hasShadow ? 'shadow-lg' : ''
      } transition-shadow duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 font-montserrat">
          Portfo<span className="text-lime-300">lio.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {links.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.link}`}
              whileHover={{ scale: 1.05 }}
              className="
                relative text-gray-900 font-medium font-montserrat px-1 py-0.5
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2
                after:h-0.5 after:bg-lime-300
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
            >
              {item.linkName}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white"
        >
          {links.map((item) => (
            <a
              key={item.id}
              href={`#${item.link}`}
              className="
                relative text-black font-medium font-montserrat px-1 py-1
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2
                after:h-0.5 after:bg-lime-300
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
              onClick={() => setIsOpen(false)}
            >
              {item.linkName}
            </a>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
