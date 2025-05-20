import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div id='about' className="bg-gray-900 min-h-screen w-full relative px-4 py-6">
      {/* Top Left "About Me" Title */}
      <motion.div
        className="absolute top-30 left-16 text-white"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger only once when 50% is in view
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat uppercase leading-tight">
          About <span className="text-lime-300">Me</span>
        </h2>
        <div className="w-16 h-1 bg-lime-300 mt-2"></div>
      </motion.div>

      {/* Centered Content */}
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="text-white font-montserrat text-center max-w-xl px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Trigger once when half visible
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg leading-relaxed">
            Hello! I'm Prasanth, a frontend developer passionate about crafting beautiful and functional interfaces. I work mainly with <span className='bg-lime-300 font-bold text-gray-900 text-black p-1'>React, Next.js, and Tailwind CSS</span> to build responsive and scalable web applications.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mt-4">
            I enjoy solving problems, learning new technologies, and creating seamless user experiences. Let’s build something amazing together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
