import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INGREDIENTS } from '../constants';
import { Coffee, Plus, Check } from 'lucide-react';

const PersonalityPotion: React.FC = () => {
  const [added, setAdded] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const progress = (added.length / INGREDIENTS.length) * 100;

  const handleAdd = (id: string) => {
    if (!added.includes(id)) {
      const newAdded = [...added, id];
      setAdded(newAdded);
      if (newAdded.length === INGREDIENTS.length) {
        setTimeout(() => setIsCompleted(true), 800);
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-[#F5EBE0] py-20">
      {/* Simple texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

      {/* Header Section - Vogue Style */}
      <div className="text-center mb-20 px-6 relative z-10">
        <div className="mb-6">
          <div className="h-px w-24 bg-[#463F3A] mx-auto mb-8" />
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-[#463F3A] mb-6 tracking-tight">
            THE DAILY RITUAL
          </h2>
          <div className="h-px w-24 bg-[#463F3A] mx-auto mt-8" />
        </div>
        <p className="font-sans text-[#8C7B75] text-sm tracking-[0.3em] uppercase mt-6">
          Curating the Essence of Priya
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between px-6 md:px-12 gap-16 lg:gap-12">
        
        {/* LEFT: The Menu */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="text-left mb-8">
            <h3 className="font-serif text-3xl text-[#463F3A] mb-2 tracking-tight">
              Select Ingredients
            </h3>
            <div className="h-px w-full bg-[#463F3A]/20 mt-3"></div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {INGREDIENTS.map((ing, index) => {
              const isAdded = added.includes(ing.id);
              return (
                <button
                  key={ing.id}
                  onClick={() => handleAdd(ing.id)}
                  disabled={isAdded}
                  className={`group w-full text-left p-4 border transition-all duration-200 flex items-center justify-between
                    ${isAdded 
                      ? 'bg-[#E3D5CA]/50 border-[#D5BDAF]/50 text-[#463F3A]/50 cursor-default' 
                      : 'bg-white border-[#463F3A]/10 hover:border-[#463F3A]/30 cursor-pointer text-[#463F3A]'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-xs text-[#8C7B75] w-6">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className={`font-serif text-lg ${isAdded && 'line-through decoration-1'}`}>
                      {ing.name}
                    </h4>
                  </div>
                  
                  <div className={`w-6 h-6 border flex items-center justify-center transition-all
                    ${isAdded 
                      ? 'bg-[#463F3A] border-[#463F3A] text-white' 
                      : 'border-[#463F3A]/30 text-[#463F3A]/30'
                    }`}>
                    {isAdded ? <Check size={14} strokeWidth={2.5} /> : <Plus size={14} />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Simple progress bar */}
          <div className="pt-6 border-t border-[#463F3A]/10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-xs text-[#8C7B75] tracking-widest uppercase">Progress</span>
              <span className="font-sans text-sm text-[#463F3A]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1 bg-[#E3D5CA]">
              <div 
                className="h-full bg-[#463F3A] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* CENTER: The Glass Cup */}
        <div className="w-full lg:w-1/3 flex justify-center items-center relative py-10 lg:py-0">
            <div className="relative w-64 h-80 md:w-72 md:h-96">
                
                {/* Simple steam - only when brewing */}
                {added.length > 0 && added.length < INGREDIENTS.length && (
                    <div className="absolute -top-20 left-0 right-0 h-20 flex justify-center gap-4 pointer-events-none">
                         {[1, 2].map(i => (
                             <div
                                key={i}
                                className="w-3 h-16 bg-gradient-to-t from-[#8C7B75]/20 to-transparent blur-lg"
                                style={{ 
                                    animation: `rise ${3 + i}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.5}s`
                                }}
                             />
                         ))}
                    </div>
                )}

                {/* The Glass - Clean and minimal */}
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 border-2 border-[#463F3A]/20 bg-white/10 backdrop-blur-sm shadow-xl overflow-hidden">
                        
                        {/* Liquid Container */}
                        <div 
                            className="absolute bottom-0 left-0 right-0 w-full transition-all duration-700 ease-out flex flex-col-reverse justify-start" 
                            style={{ height: `${progress}%` }}
                        >
                            {/* Mixing Layers */}
                            {added.map((id) => {
                                const ing = INGREDIENTS.find(item => item.id === id);
                                return (
                                    <div
                                        key={id}
                                        className={`w-full flex-grow ${ing?.color} opacity-80 transition-all duration-700`}
                                        style={{ height: `${100 / added.length}%` }}
                                    />
                                );
                            })}
                        </div>

                        {/* Simple glass reflection */}
                        <div className="absolute top-4 right-4 w-6 h-2/3 bg-white/5 blur-sm pointer-events-none"></div>
                    </div>
                </div>
                
                {/* Simple shadow */}
                <div className="absolute -bottom-2 -left-6 -right-6 h-3 bg-[#2C2622]/20 blur-lg rounded-full"></div>

                {/* Completion indicator - minimal */}
                {isCompleted && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <div className="border border-[#463F3A]/20 bg-white px-4 py-1">
                            <p className="font-sans text-[#463F3A] text-xs tracking-widest uppercase">Complete</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

        <style jsx>{`
          @keyframes rise {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(-60px) translateX(5px); opacity: 0; }
          }
        `}</style>

        {/* RIGHT: The Order Details */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
             <div className="bg-white w-80 md:w-96 border-2 border-[#463F3A]/10 shadow-lg">
                 <div className="p-8 text-center">
                     {/* Header */}
                     <div className="flex flex-col items-center mb-8 pb-6 border-b border-[#463F3A]/10">
                        <Coffee size={32} className="text-[#463F3A] mb-4" strokeWidth={1.5} />
                        <h3 className="font-serif text-3xl text-[#463F3A] tracking-tight mb-2">
                            Order Details
                        </h3>
                        <p className="font-sans text-xs text-[#8C7B75] tracking-[0.3em] uppercase">No. 22</p>
                     </div>

                     {/* Order items */}
                     <div className="space-y-2 mb-8 text-left">
                        {added.length === 0 ? (
                            <div className="text-center py-8">
                                <p className="font-sans text-sm text-[#8C7B75] tracking-wide">Select ingredients to begin</p>
                            </div>
                        ) : (
                            added.map((id, index) => {
                                const ing = INGREDIENTS.find(i => i.id === id);
                                return (
                                    <div 
                                        key={id} 
                                        className="flex justify-between items-center py-3 border-b border-[#463F3A]/5"
                                    >
                                        <span className="font-serif text-base text-[#463F3A]">{ing?.name}</span>
                                        <Check size={16} className="text-[#463F3A]" strokeWidth={2} />
                                    </div>
                                )
                            })
                        )}
                     </div>

                     {/* Progress */}
                     {added.length > 0 && (
                         <div className="mb-8 pb-6 border-b border-[#463F3A]/10">
                             <div className="flex justify-between items-center mb-3">
                                 <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#8C7B75]">Completion</span>
                                 <span className="font-sans text-lg text-[#463F3A]">{Math.round(progress)}%</span>
                             </div>
                             <div className="h-1 bg-[#E3D5CA]">
                                 <div
                                     className="h-full bg-[#463F3A] transition-all duration-500"
                                     style={{ width: `${progress}%` }}
                                 />
                             </div>
                         </div>
                     )}

                     {/* Completion message */}
                     {isCompleted && (
                         <div className="border border-[#463F3A]/20 p-6 bg-[#F5EBE0]">
                             <p className="font-serif italic text-lg text-[#463F3A] leading-relaxed">
                                 "A perfect blend of sugar, spice, and pure brilliance."
                             </p>
                         </div>
                     )}

                     {!isCompleted && added.length > 0 && (
                         <div className="py-4">
                             <p className="font-sans text-xs text-[#8C7B75] tracking-wide">In progress...</p>
                         </div>
                     )}
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default PersonalityPotion;