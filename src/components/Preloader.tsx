import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] bg-stone-950 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <h1 className="text-white text-2xl sm:text-4xl font-headline tracking-[0.5em] sm:tracking-[1em] mb-4 overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="block"
                >
                  MUKHESHWARI
                </motion.span>
              </h1>
              <p className="text-amber-700/60 text-[8px] sm:text-[10px] font-label uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                Eternal Stories Captured
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="absolute -bottom-24 w-48 sm:w-64 h-[1px] bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-amber-700"
              />
            </div>

            {/* Counter */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-32 text-white/20 font-headline text-4xl sm:text-6xl select-none pointer-events-none"
            >
              {progress}%
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
