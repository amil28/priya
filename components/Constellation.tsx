import React, { useState } from 'react';
import { motion } from 'framer-motion';

const STARS = [
  { id: 1, x: 20, y: 30 },
  { id: 2, x: 50, y: 20 },
  { id: 3, x: 80, y: 40 },
  { id: 4, x: 30, y: 70 },
  { id: 5, x: 70, y: 80 },
];

const Constellation: React.FC = () => {
  const [activeStars, setActiveStars] = useState<number[]>([]);

  const handleStarClick = (id: number) => {
    if (!activeStars.includes(id)) {
      setActiveStars([...activeStars, id]);
    }
  };

  const isFull = activeStars.length === STARS.length;

  return (
    <section className="h-screen bg-black text-stone-200 relative overflow-hidden flex items-center justify-center">
      {/* Background Stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h2 className="font-serif text-4xl mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-stone-200 to-stone-600">
            {isFull ? "ALIGNMENT COMPLETE" : "CONNECT THE STARS"}
        </h2>
        {isFull && <p className="font-sans text-xs tracking-[0.3em] uppercase animate-pulse">The universe is with you</p>}
      </div>

      <div className="relative w-full max-w-lg h-96">
        {/* Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {activeStars.length > 1 && activeStars.map((starId, index) => {
             if (index === 0) return null;
             const prevStar = STARS.find(s => s.id === activeStars[index - 1]);
             const currStar = STARS.find(s => s.id === starId);
             if (!prevStar || !currStar) return null;
             return (
               <motion.line
                 key={`${prevStar.id}-${currStar.id}`}
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 transition={{ duration: 1 }}
                 x1={`${prevStar.x}%`}
                 y1={`${prevStar.y}%`}
                 x2={`${currStar.x}%`}
                 y2={`${currStar.y}%`}
                 stroke="white"
                 strokeWidth="1"
                 strokeOpacity="0.5"
               />
             );
          })}
        </svg>

        {/* Stars */}
        {STARS.map((star) => (
          <motion.button
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className={`absolute w-3 h-3 rounded-full transition-colors duration-500 ${activeStars.includes(star.id) ? 'bg-rose-200 shadow-[0_0_15px_rgba(255,228,230,0.8)]' : 'bg-stone-600 hover:bg-stone-400'}`}
            style={{ top: `${star.y}%`, left: `${star.x}%` }}
          />
        ))}
      </div>
    </section>
  );
};

export default Constellation;