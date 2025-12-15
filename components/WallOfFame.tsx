import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const WallOfFame: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-stone-50 to-stone-100 overflow-hidden">
      {/* Header */}
      <div className="mb-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-stone-800 mb-4 tracking-tight">Letters to Priya</h2>
          </motion.div>
      </div>

      {/* Letters Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <LetterCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>

      {/* Footer note */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20 px-6"
      >
        <p className="font-sans text-xs text-stone-400 tracking-wider uppercase">With love from those who cherish you</p>
      </motion.div>
    </section>
  );
};

interface LetterCardProps {
  testimonial: typeof TESTIMONIALS[0];
  index: number;
}

const LetterCard: React.FC<LetterCardProps> = ({ testimonial, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative group cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      {/* Envelope Container */}
      <div className="relative w-full h-[480px]">
        
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-stone-200 rounded-sm shadow-xl border border-stone-300">
          {/* Envelope flap pattern */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-stone-200 to-transparent opacity-50" />
          
          {/* Address label */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="font-serif text-2xl text-stone-600 mb-2">To: Priya</p>
            <p className="font-sans text-sm text-stone-500 tracking-widest uppercase">From: {testimonial.name}</p>
          </div>
        </div>

        {/* Envelope Flap (opens on hover) */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-stone-200 to-stone-300 origin-top shadow-lg border-x border-t border-stone-300"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
          }}
          animate={{
            rotateX: isOpen ? -180 : 0,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Letter Inside (slides up on hover) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: -20, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-4 top-4 bottom-4 bg-white shadow-2xl rounded-sm overflow-hidden z-10"
            >
              {/* Vintage paper texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')]" />
              
              {/* Letter content */}
              <div className="relative h-full overflow-y-auto p-6 md:p-7">
                {/* Greeting */}
                <div className="mb-4 pb-3 border-b border-stone-200">
                  <p className="font-serif text-base text-stone-600 italic">Dear Priya,</p>
                </div>
                
                {/* Message */}
                <div className="mb-5 space-y-3">
                  {testimonial.message.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="font-serif text-sm md:text-base text-stone-700 leading-relaxed">
                      {paragraph.split('\n').map((line, j) => (
                        <React.Fragment key={j}>
                          {line}
                          {j < paragraph.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  ))}
                </div>
                
                {/* Signature */}
                <div className="flex flex-col items-end mt-auto">
                  <div className="text-right">
                    <p className="font-serif text-lg text-stone-800 mb-1" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                      {testimonial.name}
                    </p>
                    <div className="h-px w-20 bg-stone-300 ml-auto"></div>
                  </div>
                </div>
              </div>

              {/* Paper edge effect */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.03)]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default WallOfFame;