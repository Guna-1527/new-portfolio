import React from 'react'
import { motion } from 'framer-motion'

const inputVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 12 } },
  focus: {
    scale: 1.05,
    borderColor: '#84cc16', // lime-400
    boxShadow: '0 0 8px rgba(132, 204, 22, 0.6)',
  },
}

const ContactPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full relative px-6 py-12 flex flex-col items-center justify-center">
      {/* Animated Title */}
      <motion.div
        className="absolute top-20 left-6 sm:left-16 text-white z-10"
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat uppercase leading-tight">
          About <span className="text-lime-300">Me</span>
        </h2>
        <div className="w-16 h-1 bg-lime-300 mt-2"></div>
      </motion.div>

      {/* Form (full width, no border-radius) */}
      <form className="w-full max-w-xl mt-24 flex flex-col gap-6">
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileFocus="focus"
          custom={0}
        />

        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-400"
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileFocus="focus"
          custom={1}
        />

        <motion.textarea
          placeholder="Your Message"
          rows={5}
          className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-lime-400"
          variants={inputVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          whileFocus="focus"
          custom={2}
        />

        <motion.button
          className="w-full bg-lime-200 text-gray-900 font-bold py-3 tracking-wide hover:shadow-[7px_5px_56px_-14px_#C3D900] transition-all rounded-none"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 80, damping: 12, delay: 0.6 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  )
}

export default ContactPage
