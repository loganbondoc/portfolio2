import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aurora from "./Aurora";

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
    <div className="w-full min-h-screen overflow-x-hidden relative bg-black">
      <motion.div
        initial={{ width: "100vw", height: "100vh" }}
        animate={{
          width: isShrunk ? "60vw" : "100vw",
          height: isShrunk ? "60vh" : "100vh",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={` mx-auto relative z-10 shadow-xl rounded-2xl overflow-hidden ${
          isShrunk ? "mt-12 cursor-pointer" : "cursor-default"
        }`}
        onClick={handleExpand}
      >
        {/* Aurora BG fills the container */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Name and title */}
        <div className="absolute top-10 left-10 z-10 text-white">
          <h1 className="text-3xl font-bold">Logan Bondoc</h1>
          <h2 className="text-2xl font-medium">Creative Technologist / UX Designer</h2>
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
