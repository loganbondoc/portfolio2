import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aurora from "./Aurora";
import BoidFlock from "../utils/BoidFlock";
import DecryptedText from "../utils/DecryptedText";

export default function LandingPage({ children }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [hasShrunkBefore, setHasShrunkBefore] = useState(false);

  const handleEnter = () => {
    setIsShrunk(true);
    setHasShrunkBefore(true);
  };

  const handleExpand = () => {
    if (isShrunk) {
      setIsShrunk(false);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-x-hidden relative">
      <motion.div
        initial={{ width: "100vw", height: "100vh" }}
        animate={{
          width: isShrunk ? "50vw" : "100vw",
          height: isShrunk ? "28vw" : "100vh",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={` mx-auto relative z-10 overflow-hidden ${isShrunk ? "mt-12 cursor-pointer" : "cursor-default"
          }`}
        onClick={handleExpand}
      >
        {/* Aurora BG fills the container */}
        <div className="absolute inset-0 z-0 bg-black">
          <BoidFlock />
        </div>

        {/* Name and title */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 text-white text-center">
          {/* <DecryptedText
            text="Logan Bondoc"
            animateOn="view"
            revealDirection="left"
            className="text-8xl font-bold smooch-sans"
            encryptedClassName="text-8xl font-bold smooch-sans text-gray-500"
            speed={50}
            maxIterations={50}
            sequential={true}
            parentClassName="block"
          />

          <DecryptedText
            text="Creative Technologist / UX Designer"
            animateOn="view"
            revealDirection="left"
            className="text-5xl font-medium smooch-sans"
            encryptedClassName="text-5xl font-medium smooch-sans text-gray-500"
            speed={50}
            maxIterations={50}
            sequential={true}
            parentClassName="block"
          /> */}
          <h1 className="text-8xl font-bold smooch-sans">Logan Bondoc</h1>
          <h2 className="text-4xl font-medium smooch-sans">Creative Technologist / UX Designer</h2>
        </div>


        {/* CTA only when not shrunk */}
        {!isShrunk && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-black text-sm font-medium px-6 py-3 rounded-lg z-10"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from bubbling to container
              handleEnter();
            }}
          >
            View Works
          </motion.button>
        )}
      </motion.div>

      {/* Content shown after shrink */}
      <AnimatePresence>
        {isShrunk && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
