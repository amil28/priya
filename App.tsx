import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LockScreen from './components/LockScreen';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import WallOfFame from './components/WallOfFame';
import YearInReview from './components/YearInReview';

function App() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="min-h-screen bg-cream text-stone-800 selection:bg-rose-200">
      <AnimatePresence>
        {isLocked ? (
          <motion.div
            key="lock-screen"
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <LockScreen onUnlock={() => setIsLocked(false)} />
          </motion.div>
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero />
            <AboutMe />
            <YearInReview />
            <WallOfFame />

            <footer className="bg-black text-stone-600 py-12 text-center font-sans text-sm tracking-widest uppercase">
              <p>Designed exclusively for Priya.</p>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;