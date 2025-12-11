import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TAROT_CARDS } from '../constants';

const TarotFuture: React.FC = () => {
  const [revealed, setRevealed] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-stone-900 flex flex-col items-center justify-center py-20">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-6xl text-stone-200 mb-4">The Oracle</h2>
        <p className="font-sans text-stone-500 tracking-widest uppercase text-sm">Tap a card to reveal your year</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 perspective-1000">
        {TAROT_CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative w-72 h-[450px] cursor-pointer group"
            onClick={() => setRevealed(card.id)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d transition-all duration-700"
              style={{ transform: revealed === card.id ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden bg-[#1a1a1a] border border-stone-700 flex items-center justify-center">
                  <div className="w-[90%] h-[95%] border border-stone-800 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-80">
                      <span className="font-serif text-4xl text-stone-600 font-thin">XXII</span>
                  </div>
              </div>

              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-stone-200 text-stone-900 p-4 flex flex-col items-center justify-between border-4 border-white shadow-2xl">
                 <div className="w-full h-2/3 overflow-hidden grayscale">
                     <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                 </div>
                 <div className="text-center mt-4">
                     <h3 className="font-serif text-2xl uppercase tracking-widest mb-2">{card.title}</h3>
                     <p className="font-sans text-xs leading-relaxed opacity-80">{card.description}</p>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TarotFuture;