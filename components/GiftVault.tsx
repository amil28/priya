import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GIFT_VAULT_PIN, GIFTS } from '../constants';
import { Lock, Unlock } from 'lucide-react';

const GiftVault: React.FC = () => {
  const [pin, setPin] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleNumClick = (num: string) => {
    if (pin.length < 4) {
      setPin(prev => prev + num);
    }
  };

  const handleEnter = () => {
    if (pin === GIFT_VAULT_PIN) {
      setIsUnlocked(true);
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <section className="min-h-screen bg-[#000] text-white flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 to-black opacity-50"></div>
      
      <div className="z-10 w-full max-w-md">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl tracking-[0.2em] mb-2 uppercase">The Vault</h2>
            <p className="font-sans text-xs text-stone-500">Restricted Access • Level 22</p>
        </div>

        {!isUnlocked ? (
            <motion.div 
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                className="bg-stone-900/50 backdrop-blur-md p-8 border border-stone-800 rounded-sm"
            >
                <div className="flex justify-center mb-8 gap-4">
                    {[0, 1, 2, 3].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full border border-stone-600 flex items-center justify-center">
                            {pin[i] && <div className="w-2 h-2 bg-rose-500 rounded-full" />}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-6 font-mono">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button 
                            key={num}
                            onClick={() => handleNumClick(num.toString())}
                            className="h-16 flex items-center justify-center text-xl hover:bg-stone-800 transition-colors border border-transparent hover:border-stone-700 rounded-sm"
                        >
                            {num}
                        </button>
                    ))}
                    <button onClick={() => setPin('')} className="text-xs uppercase tracking-widest text-stone-500 hover:text-white">Clear</button>
                    <button onClick={() => handleNumClick('0')} className="h-16 flex items-center justify-center text-xl hover:bg-stone-800 transition-colors">0</button>
                    <button onClick={handleEnter} className="text-xs uppercase tracking-widest text-rose-500 hover:text-rose-400">Enter</button>
                </div>
            </motion.div>
        ) : (
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="space-y-6"
            >
                <div className="flex items-center justify-center mb-8 text-rose-300">
                    <Unlock size={32} />
                </div>
                {GIFTS.map(gift => (
                    <div key={gift.id} className="bg-stone-900 border border-stone-800 p-6 flex items-center gap-6 group hover:border-rose-900/50 transition-colors">
                        <img src={gift.image} alt={gift.name} className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all" />
                        <div>
                            <h3 className="font-serif text-xl mb-1">{gift.name}</h3>
                            <span className="text-[10px] bg-stone-800 px-2 py-1 uppercase tracking-widest text-stone-400">Acquired</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        )}
      </div>
    </section>
  );
};

export default GiftVault;