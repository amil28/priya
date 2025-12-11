import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const WallOfFame: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-48 bg-stone-100 overflow-hidden">
      <div className="mb-20 px-12 max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl text-stone-800 mb-4">Guest List</h2>
          <p className="font-sans text-lg text-stone-600 tracking-wide">Messages from those who know you best</p>
          <div className="w-full h-[1px] bg-stone-300 mt-6"></div>
      </div>

      <div 
        className="relative flex w-full cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              duration: isHovered ? 100 : 50, 
              ease: "linear" 
            }}
        >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={i} className="inline-flex flex-col px-16 md:px-24 py-8 border-r border-stone-300 min-w-[500px] md:min-w-[700px]">
                    <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-stone-900 mb-6 italic leading-relaxed whitespace-normal">
                      "{t.message}"
                    </p>
                    <p className="font-sans text-sm md:text-base tracking-widest uppercase text-stone-500 whitespace-nowrap">— {t.name}</p>
                </div>
            ))}
        </motion.div>
      </div>
      
      <div className="text-center mt-12 px-6">
        <p className="font-sans text-sm text-stone-400 italic">Hover to slow down and read</p>
      </div>
    </section>
  );
};

export default WallOfFame;