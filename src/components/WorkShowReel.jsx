import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  initial: { opacity: 0, x: -40 },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  initial: { opacity: 0, x: -40 },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ShowReelWork({
  videoSrc,
  topText,
  title,
  subtitle,
  linkTo,
}) {
  const navigate = useNavigate();

  return (
    <div className="w-full py-16">
      {/* Container2 */}
      <motion.div
        className="relative w-3/5 mx-auto group cursor-pointer overflow-visible"
        initial="initial"
        whileHover="hover"
        variants={containerVariants}
      >
        {/* Text Overlay */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/6 z-10 pointer-events-none">
          <div className="text-left text-black space-y-4 max-w-sm">
            <motion.p
              variants={textVariants}
              className="text-sm uppercase tracking-wider font-medium"
            >
              {topText}
            </motion.p>
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-lg opacity-90"
            >
              {subtitle}
            </motion.p>
            <motion.button
              variants={buttonVariants}
              onClick={() => navigate(linkTo)}
              className="mt-4 bg-black text-white text-sm font-medium px-5 py-2 rounded pointer-events-auto"
            >
              View Project
            </motion.button>
          </div>
        </div>

        {/* Video */}
        <div className="w-5/6 mx-auto rounded-lg">
          <video
            className="w-full h-auto transition-opacity duration-300 group-hover:opacity-25 z-0"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </motion.div>
    </div>
  );
}
