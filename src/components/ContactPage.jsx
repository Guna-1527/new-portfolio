import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isFocused, setIsFocused] = useState({});

  // Variants for input container to lift on focus
  const inputContainerVariants = {
    focused: { y: -5, boxShadow: "0 5px 15px rgba(50, 205, 50, 0.4)" },
    unfocused: { y: 0, boxShadow: "none" },
  };

  // Floating label animation variants
  const labelVariants = {
    focused: { scale: 0.8, y: -28, x: 0, color: "#84cc16" }, // lime-500 color
    unfocused: { scale: 1, y: 0, x: 0, color: "#6b7280" }, // zinc-700 color
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4"
    >
      <div className="w-full max-w-2xl p-8 bg-black border border-zinc-700 shadow-md rounded">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl font-semibold text-center text-zinc-800 dark:text-white mb-8 tracking-tight"
        >
          Contact Us
        </motion.h1>

        <form className="space-y-8">
          {/* Name */}
          <motion.div
            variants={inputContainerVariants}
            animate={isFocused["name"] ? "focused" : "unfocused"}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <motion.label
              htmlFor="name"
              className="block mb-1 text-sm font-medium dark:text-zinc-300 relative"
              variants={labelVariants}
              animate={isFocused["name"] ? "focused" : "unfocused"}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ originX: 0 }}
            >
              Name
            </motion.label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-none"
              onFocus={() => setIsFocused((s) => ({ ...s, name: true }))}
              onBlur={() => setIsFocused((s) => ({ ...s, name: false }))}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            variants={inputContainerVariants}
            animate={isFocused["email"] ? "focused" : "unfocused"}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <motion.label
              htmlFor="email"
              className="block mb-1 text-sm font-medium dark:text-zinc-300 relative"
              variants={labelVariants}
              animate={isFocused["email"] ? "focused" : "unfocused"}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ originX: 0 }}
            >
              Email
            </motion.label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-none"
              onFocus={() => setIsFocused((s) => ({ ...s, email: true }))}
              onBlur={() => setIsFocused((s) => ({ ...s, email: false }))}
            />
          </motion.div>

          {/* Message */}
          <motion.div
            variants={inputContainerVariants}
            animate={isFocused["message"] ? "focused" : "unfocused"}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            <motion.label
              htmlFor="message"
              className="block mb-1 text-sm font-medium dark:text-zinc-300 relative"
              variants={labelVariants}
              animate={isFocused["message"] ? "focused" : "unfocused"}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ originX: 0 }}
            >
              Message
            </motion.label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-none resize-none"
              onFocus={() => setIsFocused((s) => ({ ...s, message: true }))}
              onBlur={() => setIsFocused((s) => ({ ...s, message: false }))}
            />
          </motion.div>

          {/* Submit */}
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(132, 204, 22, 0.7)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <button
              type="submit"
              className="w-full py-3 bg-lime-500 hover:bg-lime-600 text-white font-medium text-lg cursor-pointer transition-colors duration-200 rounded-none"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}
