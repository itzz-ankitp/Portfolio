import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        className="w-20 h-20 border-4 border-cyan-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          borderRadius: ["50%", "40%", "50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="w-full h-full border-4 border-blue-500 rounded-full"
          animate={{
            rotate: [360, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;