import React from "react";
import { motion } from "framer-motion";

const WorkPage = () => {
  const projects = [
    {
      id: 2,
      title: "Sly Crypto Platform",
      description: "Secure banking application with biometric...",
      category: "Web Development",
      image:
        "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940",
        link: "https://sly-eight.vercel.app/"
    },
    {
      id: 1,
      title: "Quiz Platform",
      description: "A fully responsive online shopping platform...",
      category: "Web Development",
      image: "https://static.vecteezy.com/system/resources/thumbnails/050/703/026/small/speech-bubble-for-comic-text-quiz-cartoon-comic-sign-effects-explosion-png.png",
      link: "https://final-quiz.vercel.app/"
    }
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const projectPairs = [];
  for (let i = 0; i < projects.length; i += 2) {
    if (i + 1 < projects.length) {
      projectPairs.push([projects[i], projects[i + 1]]);
    } else {
      projectPairs.push([projects[i]]);
    }
  }

  return (
    <div id="work" className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <motion.div
          className=""
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-montserrat uppercase leading-tight">
            My <span className="text-lime-300">PROJECT</span>
            </h2>
            <div className="w-16 h-1 bg-lime-300 mt-2"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto"
      >
        {projectPairs.map((pair, pairIndex) => (
          <div
            key={pairIndex}
            className="flex flex-col md:flex-row gap-6 mb-8"
            style={{
              flexDirection: pairIndex % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            {pair.map((project, index) => {
              const isFirst = index === 0;
              const widthClass = isFirst ? "md:w-2/3" : "md:w-1/3";

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`bg-white rounded-lg shadow-md overflow-hidden ${widthClass}`}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkPage;
