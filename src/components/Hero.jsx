import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full flex flex-col items-center box-border px-4 sm:px-8 pt-20 overflow-hidden"
    >

      {/* Main Content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h1 className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[10rem] uppercase tracking-widest font-anton">
          guna prasanth
        </h1>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full h-full mt-4 z-10">
        {/* Left Avatar Section */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.6 }}
        >
          {/* Placeholder for AvatarGroup */}
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/052/649/951/non_2x/smiling-young-man-on-a-plain-background-png.png"
            alt="Hero"
            className="w-full h-full object-contain max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
          />
        </motion.div>

        {/* Right Text + Button */}
        <motion.div
          className="flex-1 flex flex-col justify-start items-center mt-8 md:mt-12 px-4 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm sm:text-base md:text-lg font-montserrat font-normal leading-6 max-w-[280px]">
              Hi, I'm Prasanth, a passionate frontend developer dedicated to
              creating enterprise-level web applications.
            </p>
            <button className="mt-6 mb-6 px-6 py-4 cursor-pointer rounded-lg bg-lime-200 font-bold font-montserrat transition-all duration-300 hover:shadow-[7px_5px_56px_-14px_#C3D900] active:scale-95 active:shadow-[7px_5px_56px_-10px_#C3D900]">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
