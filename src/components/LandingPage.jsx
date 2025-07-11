import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage({ children }) {
  const [isShrunk, setIsShrunk] = useState(false);

  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      <motion.div
        initial={{
          width: "100vw",
          height: "100vh",
        }}
        animate={{
          width: isShrunk ? "60vw" : "100vw",
          height: isShrunk ? "60vh" : "100vh",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`bg-white mx-auto relative z-10 shadow-xl rounded-2xl ${
          isShrunk ? "mt-12" : ""
        }`}
      >
        {/* Top Text */}
        <div className="absolute top-10 left-10 text-3xl font-bold">Logan Bondoc</div>

        {/* CTA Button */}
        {!isShrunk && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg z-20"
            onClick={() => setIsShrunk(true)}
          >
            Enter
          </motion.button>
        )}
      </motion.div>

      {/* Showreel content scrolls underneath once landing shrinks */}
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
