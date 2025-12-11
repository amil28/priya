import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-stone-100 flex flex-col items-center">
      
      {/* Magazine Background - Black */}
      <div className="absolute inset-0 z-0 bg-black" />
      
      {/* Centered Magazine Cover Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="relative w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-[80vh] md:h-[85vh] shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10 rounded-sm" />
          <img 
            src="/hero-image.jpg" 
            alt="Priyamvada Rajpal" 
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </motion.div>

      {/* Magazine Content Layer */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 h-full w-full max-w-[1400px] px-6 md:px-12 pt-8 pb-12 flex flex-col justify-between"
      >
        
        {/* MASTHEAD */}
        <div className="text-center border-b border-white/20 pb-6 mx-4">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mix-blend-overlay leading-none"
          >
            THE BIRTHDAY EDIT
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
             <h2 className="text-white font-sans text-lg md:text-2xl tracking-[0.5em] uppercase font-light">
                Priyamvada Rajpal
             </h2>
          </motion.div>
        </div>

        {/* Magazine Cover Lines (The "Little Elements") */}
        <div className="flex-1 relative w-full mt-8">
            
          {/* Top Left Teaser */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-0 left-0 text-white text-left hidden md:block"
          >
            <span className="bg-white text-black px-2 py-1 text-[10px] font-bold tracking-widest uppercase mb-2 inline-block">
                Exclusive
            </span>
            <p className="font-serif italic text-3xl leading-none drop-shadow-md">
                Inside The<br/>Dreamscape
            </p>
             <p className="font-sans text-[10px] uppercase tracking-wider mt-2 opacity-80">
                Fashion • Travel • Coffee
            </p>
          </motion.div>

          {/* Right Side List */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="absolute top-8 right-0 text-right text-white"
          >
             <ul className="space-y-6">
                <li>
                    <p className="font-sans text-[10px] uppercase tracking-widest opacity-80 mb-1 text-rose-200">Just In</p>
                    <p className="font-serif text-xl md:text-2xl italic leading-tight drop-shadow-md">The Coffee<br/>Chronicles</p>
                </li>
                <li>
                    <p className="font-sans text-[10px] uppercase tracking-widest opacity-80 mb-1 text-rose-200">Must Read</p>
                    <p className="font-serif text-xl md:text-2xl italic leading-tight drop-shadow-md">22 Reasons<br/>To Sparkle</p>
                </li>
                <li className="hidden md:block">
                     <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center ml-auto bg-white/10 backdrop-blur-md">
                        <span className="font-serif italic text-xs">Vol 22</span>
                     </div>
                </li>
             </ul>
          </motion.div>

          {/* Main Headline - Bottom Left */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-[15%] left-0 text-white"
          >
            <h3 className="font-serif text-6xl md:text-8xl italic leading-none mb-4 mix-blend-overlay opacity-90">
              Golden<br/>Hour
            </h3>
            <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white"></div>
                <p className="font-sans text-xs md:text-sm tracking-widest uppercase shadow-black drop-shadow-md">
                  A Year in Review
                </p>
            </div>
          </motion.div>

          {/* Barcode & Footer - Bottom Right */}
          <div className="absolute bottom-0 right-0 flex flex-col items-end">
            <p className="font-sans text-white/80 text-[10px] tracking-[0.3em] uppercase mb-2">Dec 17 • Special Edition</p>
            <div className="bg-white/90 p-2 shadow-lg">
                <div className="h-8 w-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover mix-blend-multiply opacity-80"></div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2, duration: 1 }}
             className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-center pb-2 hidden md:block"
          >
             <p className="font-serif italic text-sm mb-2 opacity-80">Open the issue</p>
             <div className="w-[1px] h-8 bg-white/50 mx-auto animate-pulse"></div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Hero;