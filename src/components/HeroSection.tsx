"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import theme from "./theme";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  // Typewriter effect for subheading
  const fullText = "Join Boom for Personalized Mental Wellness and Success";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative min-h-screen flex flex-col items-center justify-start px-4 pt-8 pb-4`}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Torch Light Effects */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Left stage spotlight - animate angle */}
        <motion.div
          className="absolute -top-10 left-0"
          style={{
            width: '200px',
            height: '80vh',
            background: 'rgba(253,230,138,0.18)',
            filter: 'blur(100px)',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          }}
          initial={{ opacity: 0, x: -60, rotate: -40 }}
          animate={{ opacity: 1, x: 0, rotate: -20 }}
          transition={{ duration: 1.1, delay: 0.1 }}
        />
        {/* Right stage spotlight - animate angle */}
        <motion.div
          className="absolute -top-10 right-0"
          style={{
            width: '200px',
            height: '80vh',
            background: 'rgba(96,165,250,0.13)',
            filter: 'blur(100px)',
            clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
          }}
          initial={{ opacity: 0, x: 60, rotate: 40 }}
          animate={{ opacity: 1, x: 0, rotate: 10 }}
          transition={{ duration: 1.1, delay: 0.2 }}
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        className={`relative z-10 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl flex items-center justify-between rounded-full ${theme.navBg} backdrop-blur-md px-2 sm:px-4 md:px-6 py-2 sm:py-3 mb-8 sm:mb-12 shadow-lg border ${theme.navBorder}`}
        variants={fadeUp}
      >
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className={`w-8 h-8 ${theme.accent} rounded flex items-center justify-center`}>
            <span className="text-2xl font-bold">B</span>
          </div>
        </div>
        <div className="hidden sm:flex gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
          <button className={`px-3 sm:px-4 py-1 rounded-full ${theme.accent} ${theme.accentText}`}>Features</button>
          <button className="px-3 sm:px-4 py-1 rounded-full hover:bg-white/10 transition">Benefits</button>
          <button className="px-3 sm:px-4 py-1 rounded-full hover:bg-white/10 transition">How It Works</button>
          <button className="px-3 sm:px-4 py-1 rounded-full hover:bg-white/10 transition">Testimonials</button>
        </div>
        <button className={`${theme.navButton} px-4 sm:px-5 py-2 rounded-full font-semibold shadow ${theme.navButtonHover} transition text-xs sm:text-base`}>Contact Us</button>
      </motion.nav>

      {/* Avatars and Join Info */}
      <motion.div className="flex flex-col items-center mb-4 relative z-10 w-full" variants={fadeUp}>
        <div className="flex items-center mb-2">
          {/* Avatars */}
          <div className="flex -space-x-2">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar1" className={`w-8 h-8 rounded-full border-2 ${theme.avatarBorder}`} />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar2" className={`w-8 h-8 rounded-full border-2 ${theme.avatarBorder}`} />
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="avatar3" className={`w-8 h-8 rounded-full border-2 ${theme.avatarBorder}`} />
          </div>
          <span className={`ml-2 sm:ml-3 ${theme.joinInfoBg} px-2 sm:px-3 py-1 rounded-full ${theme.joinInfoText}`}>Join 100k + students</span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        className={`relative z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 leading-tight ${theme.heading} max-w-full sm:max-w-2xl`}
        variants={fadeUp}
      >
        Empower Your Mind,<br />Achieve Your Dreams
      </motion.h1>
      <motion.p
        className={`relative z-10 text-base sm:text-lg md:text-xl text-center ${theme.subheading} mb-6 sm:mb-8 max-w-xs sm:max-w-xl mx-auto`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {displayed}
        <span className="hidden sm:inline">&nbsp;</span>
      </motion.p>

      {/* Join Waitlist Button with Arrow */}
      <motion.div className="flex flex-col items-center mb-4 relative z-10 w-full" variants={fadeUp}>
        <div className="relative flex flex-col items-center w-full">
          <div className="flex items-center justify-center w-full">
            {/* Arrow SVG - only the curve and arrowhead, no left stick */}
            <svg className="-mr-2 sm:-mr-4 md:mr-1" width="70" height="48" viewBox="0 0 70 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 38C28 10 60 10 68 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              <path d="M68 28L60 23M68 28L65 19" stroke="white" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            {/* Animated Border Button */}
            <motion.button
              className="relative py-3 bg-white text-[#18182b] font-semibold text-sm sm:text-base rounded-full overflow-hidden max-w-xs sm:max-w-md flex items-center transition-colors duration-300 pl-10 pr-10"
              style={{ border: 'none', outline: 'none', minWidth: 220, justifyContent: 'flex-start' }}
              initial={false}
              animate="rest"
              whileHover="hover"
              variants={{}}
            >
              {/* Animated background color and width, expanding from left to right on hover */}
              <motion.div
                className="absolute top-0 bottom-0 left-0 h-full rounded-full z-0"
                initial={false}
                variants={{
                  rest: { backgroundColor: '#fff', width: 0 },
                  hover: { backgroundColor: '#1a1a1a', width: '100%' }
                }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ minWidth: 0, maxWidth: 320, overflow: 'hidden' }}
              />
              {/* Animated border (hide on hover) */}
              <motion.svg
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                viewBox="0 0 300 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={false}
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.rect
                  x="2" y="2" width="296" height="56" rx="28"
                  stroke="#9C6B6B"
                  strokeWidth="2"
                  strokeDasharray="400 60"
                  strokeDashoffset={0}
                  initial={{ strokeDashoffset: 460 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 2,
                    ease: "linear"
                  }}
                />
              </motion.svg>
              {/* Button text */}
              <motion.span
                className="relative z-20 mr-2 text-xs sm:text-sm"
                initial={false}
                variants={{
                  rest: { color: '#18182b' },
                  hover: { color: '#fff' }
                }}
                transition={{ duration: 0.3 }}
              >
                START EXPLORING
              </motion.span>
              {/* Arrow icon on hover */}
              <motion.div
                className="absolute right-4 z-20 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.5, x: 20 }}
                variants={{
                  rest: { opacity: 0, scale: 0.5, x: 20 },
                  hover: { opacity: 1, scale: 1, x: 0 }
                }}
                transition={{ duration: 0.5 }}
                style={{ width: 24, height: 24 }}
              >
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 11L11 5M11 5H6.5M11 5V9.5" stroke="#18182b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            </motion.button>
          </div>
        </div>
        <span className="text-xs text-white/40 mt-3">No Spams Only Genuine Updates</span>
      </motion.div>
    </motion.div>
  );
} 


// on hover the background color of black theme, should be fill like a bottle and on remove the cursor it should be unfill and convert to white background angain like a unfilling water 