import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const skills = [
  {
    name: 'React.js',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHV6dGBNSKqnGeplyzHEpRTw7aLOelr8qGw&s',
    description: "Experienced in building dynamic and scalable user interfaces with React.js. Created reusable, modular components using React hooks and functional programming principles to ensure maintainable and efficient codebases. Implemented state management solutions to handle complex UI logic and seamless user interactions. Integrated RESTful APIs and third-party services to build data-driven applications with real-time updates. Collaborated closely with designers and backend developers to deliver responsive and performant web applications aligned with business goals.",
  },
  {
    name: 'Java',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINugP5L2fZ7EB_zsfu_08DIKCfaHj6RhV8w&s',
    description: "Developed object-oriented solutions using core Java concepts, including classes, inheritance, and interfaces. Implemented multithreading, exception handling, and collections to build efficient and reliable software components. Worked with Java frameworks like Spring to create RESTful APIs and manage application lifecycle. Collaborated with cross-functional teams to design, develop, and maintain enterprise-grade applications meeting business requirements.",
  },
  {
    name: 'Tailwind CSS',
    image: 'https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-4406745.png',
    description: "Adept at crafting modern, utility-first designs using Tailwind CSS. Leveraged Tailwind's atomic classes to build clean, responsive layouts with minimal custom CSS. Focused on rapid UI development by composing reusable styles that promote consistency and scalability. Implemented design systems and theming, ensuring seamless cross-browser compatibility and pixel-perfect interfaces. Collaborated with frontend teams to translate wireframes and prototypes into fully functional user interfaces.",
  },
  {
    name: 'PowerApps',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2u-j2jM451RN48yizjq_OUxvWxKZOGbI6Q&s',
    description: "Hands-on experience developing enterprise-grade applications using Microsoft PowerApps. Built custom Canvas Apps to streamline business processes and improve user experience. Implemented features like dynamic form rendering, conditional logic, role-based access control, and integrated Power Automate for workflow automation including approval flows and SLA tracking. Used SharePoint and SQL Server as back-end data sources to manage and store structured data. Collaborated with cross-functional teams to gather requirements, prototype solutions, and deploy production-ready apps that significantly reduced manual effort and improved operational efficiency.",
  },
  {
    name: 'Power Automate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIR1aIPGWEjc_1NLNwiiwl0rA-edRDwIePHw&s',
    description: "Proficient in Microsoft Power Automate for creating seamless workflow automations. Developed and managed cloud flows, instant flows, and scheduled flows to automate repetitive tasks and streamline business operations. Integrated workflows directly with PowerApps to enable interactive app-driven automation, enhancing user-driven process efficiency. Connected multiple data sources like SharePoint, SQL Server, and Microsoft 365 services to orchestrate data and approvals across platforms. Designed robust flows with conditional logic, parallel branching, and approval processes to support complex business scenarios and real-time notifications.",
  },
  {
    name: 'MySQL',
    image: 'https://cdn-icons-png.flaticon.com/512/5968/5968254.png',
    description: "Skilled in SQL for efficient data management and complex querying. Designed and optimized queries to extract, manipulate, and analyze data from relational databases, primarily using SQL Server. Developed stored procedures, views, and functions to support application backends and reporting needs. Worked with database schemas, indexes, and relationships to ensure data integrity and performance. Collaborated with developers and business teams to translate requirements into robust database solutions that drive informed decision-making.",
  },
];

const SkillPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [prevActiveIndex, setPrevActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Responsive sizing based on screen width
  const getResponsiveSize = () => {
    if (windowWidth < 640) return { size: 300, radius: 130, iconSize: 50 };
    if (windowWidth < 768) return { size: 350, radius: 150, iconSize: 56 };
    return { size: 400, radius: 180, iconSize: 64 };
  };

  const { size, radius, iconSize } = getResponsiveSize();

  // Handle window resize
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768); // Set mobile breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const selectSkill = (index) => {
    setPrevActiveIndex(activeIndex);
    setActiveIndex(index);
  };

  const clearSelection = () => {
    setPrevActiveIndex(activeIndex);
    setActiveIndex(null);
  };

  const navigatePrev = () => {
    if (activeIndex === null) return;
    setPrevActiveIndex(activeIndex);
    setActiveIndex((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const navigateNext = () => {
    if (activeIndex === null) return;
    setPrevActiveIndex(activeIndex);
    setActiveIndex((prev) => (prev + 1) % skills.length);
  };

  return (
    <div id="skill" className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 sm:py-20">
      <motion.div
        className="absolute top-10 left-16 text-gray-900"
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
      
      <div className={`flex flex-col ${isMobile ? '' : 'lg:flex-row'} items-center justify-center w-full max-w-6xl gap-8`}>
        {/* Skill Circle */}
        <motion.div
          className="relative"
          style={{ 
            width: `${size}px`, 
            height: `${size}px`,
            minWidth: `${size}px`,
          }}
          animate={{ 
            x: !isMobile && activeIndex !== null ? -30 : 0,
            marginBottom: isMobile && activeIndex !== null ? '2rem' : '0'
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* SVG connections */}
          <svg className="absolute w-full h-full" viewBox={`0 0 ${size} ${size}`}>
            {skills.map((_, i) => {
              const angle = (360 / skills.length) * i * (Math.PI / 180);
              const x1 = size / 2 + radius * Math.cos(angle);
              const y1 = size / 2 + radius * Math.sin(angle);
              const nextAngle = (360 / skills.length) * ((i + 1) % skills.length) * (Math.PI / 180);
              const x2 = size / 2 + radius * Math.cos(nextAngle);
              const y2 = size / 2 + radius * Math.sin(nextAngle);
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  initial={{ opacity: 0.5 }}
                  animate={{ 
                    opacity: activeIndex === null ? 0.7 : 0.4,
                    strokeWidth: activeIndex === i || activeIndex === (i + 1) % skills.length ? "2" : "1.5",
                    stroke: activeIndex === i || activeIndex === (i + 1) % skills.length ? "#ceff55" : "#cbd5e1"
                  }}
                  transition={{ duration: 0.3 }}
                />
              );
            })}
          </svg>

          {/* Center circle */}
          <motion.div 
            className={`absolute cursor-pointer hover:shadow-md hover:bg-lime-200 transition-all top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-full shadow-lg flex items-center justify-center ${
              activeIndex !== null ? 'hover:shadow-[5px_5px_30px_-10px_#C3D900]' : 'hover:shadow-[7px_5px_56px_-14px_#C3D900]'
            }`}
            animate={{ 
              width: activeIndex === null ? (isMobile ? 100 : 120) : (isMobile ? 70 : 80),
              height: activeIndex === null ? (isMobile ? 100 : 120) : (isMobile ? 70 : 80),
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={activeIndex !== null ? clearSelection : undefined}
          >
            {activeIndex === null ? (
              <motion.p 
                className="text-gray-600 font-medium text-center px-4 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Click a skill to view details
              </motion.p>
            ) : (
              <motion.button
                className="text-black font-medium cursor-pointer transition-colors text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Reset
              </motion.button>
            )}
          </motion.div>

          {/* Skill icons */}
          {skills.map((skill, i) => {
            const angle = (360 / skills.length) * i * (Math.PI / 180);
            const iconSizeHalf = iconSize / 2;
            const x = size / 2 + radius * Math.cos(angle) - iconSizeHalf;
            const y = size / 2 + radius * Math.sin(angle) - iconSizeHalf;
            
            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer"
                style={{
                  width: iconSize,
                  height: iconSize,
                  left: x,
                  top: y,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectSkill(i)}
                animate={{ 
                  scale: i === activeIndex ? 1.2 : 1,
                  zIndex: i === activeIndex ? 10 : 5
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div 
                  className={`w-full h-full rounded-full flex items-center justify-center shadow-md
                   ${i === activeIndex ? 'bg-lime-300 text-white' : 'bg-white text-gray-800'}`}
                  animate={{ 
                    borderWidth: i === activeIndex ? 3 : 2,
                    borderColor: i === activeIndex ? "#C3D900" : "#e2e8f0",
                    backgroundColor: i === activeIndex ? "#ffffff" : "#ffffff",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8 sm:w-10 sm:h-10'} rounded-full object-contain`}
                  />
                </motion.div>
                
              </motion.div>
            );
          })}

          {/* Mobile Navigation Buttons - Only visible on mobile when a skill is selected */}
          {isMobile && activeIndex !== null && (
            <div className="absolute -bottom-16 left-0 w-full flex justify-center space-x-8">
              
            </div>
          )}
        </motion.div>

        {/* Skill Content */}
        <motion.div 
          className="w-full max-w-md px-4"
          initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
          animate={{ 
            opacity: activeIndex !== null ? 1 : 0,
            x: !isMobile && activeIndex !== null ? 0 : (isMobile ? 0 : 50),
            y: isMobile && activeIndex !== null ? 0 : (isMobile ? 20 : 0),
            display: activeIndex !== null ? "block" : "none"
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            delay: activeIndex !== null ? 0.2 : 0 
          }}
        >
          {activeIndex !== null && (
            <>
              <motion.h2 
                className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 font-montserrat text-gray-800 text-center lg:text-left"
                key={`title-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {skills[activeIndex].name}
              </motion.h2>
              <motion.div 
                className="h-1 w-16 bg-lime-300 mb-3 sm:mb-4 rounded mx-auto lg:mx-0"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              />
              <motion.p 
                className="text-gray-600 font-montserrat text-sm sm:text-base text-justify leading-relaxed"
                key={`desc-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {skills[activeIndex].description}
              </motion.p>
              
              {/* Non-mobile navigation */}
              {!isMobile && activeIndex !== null && (
                <motion.div
                  className="mt-6 flex justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillPage;