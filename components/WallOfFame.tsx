import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const WallOfFame: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-stone-50">
      {/* Minimal header */}
      <div className="mb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl text-stone-800 mb-4 tracking-tight">Guest List</h2>
            <p className="font-sans text-sm md:text-base text-stone-500 tracking-wider uppercase">
              Birthday Wishes
            </p>
          </motion.div>
      </div>

      {/* Grid Layout - Cards side by side */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Minimal Card - Fixed height for uniform look */}
              <div className="relative h-[400px] bg-white rounded-xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 hover:border-stone-200 flex flex-col overflow-hidden">
                
                {/* Message - Scrollable if too long */}
                <div className="flex-1 mb-5 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-200 scrollbar-track-transparent">
                  <p className="font-serif text-sm md:text-base text-stone-700 leading-relaxed">
                    {testimonial.message.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < testimonial.message.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                
                {/* Author - Simple & Clean */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100 flex-shrink-0">
                  <div className="w-7 h-7 rounded-full bg-stone-800 flex items-center justify-center">
                    <span className="text-white font-sans text-xs font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-stone-800 font-medium">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16 px-6"
      >
        <p className="font-sans text-xs text-stone-400 tracking-wider uppercase">Scroll for more</p>
      </motion.div>
    </section>
  );
};

export default WallOfFame;