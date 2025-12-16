import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    question: "The Geography Test: We had wine at a random place with the most unhelpful name in history. What was it called?",
    options: ["Here and there", "Everywhere", "Somewhere else", "Somewhere here"],
    correctAnswer: 2
  },
  {
    question: "The Khan Market Sweet Tooth: Khan Market sugar rush. Where do we actually go for the best dessert?",
    options: ["The Big Chill Cakery", "L'Opéra", "Bloom", "Ladurée"],
    correctAnswer: 2
  },
  {
    question: "The Cuisine Loyalty: If Priya had to eat one cuisine for the rest of her life, what is she picking?",
    options: ["North Indian", "Asian", "Italian", "Mexican"],
    correctAnswer: 2
  },
  {
    question: "Ashok Vihar Chronicles: We are in Ashok Vihar. We need Pasta. Where are we going?",
    options: ["Diggin", "Massons", "Rico's", "The Good Food Co."],
    correctAnswer: 1
  },
  {
    question: "The Catchphrase: Which one of these sentences does Priya say the most?",
    options: ["Mera ek dilemma hai", "Challo kuch intelligent baatein karte hai", "Pata hai kya hua", "True true", "All of the above"],
    correctAnswer: 4
  },
  {
    question: "Heights & Harmonies: She was scared at the top of the Ferris Wheel at the Mela. What song did we sing to distract her?",
    options: ["Perfect", "Love Story", "Despacito", "Baby"],
    correctAnswer: 2
  },
  {
    question: "The Specific Date: On September 25th, 2024, after the date, what specific dessert did she eat?",
    options: ["Cheesecake at Bastian", "Tiramisu at Mag St.", "Gelato at Coppetto", "Macarons at Ladurée"],
    correctAnswer: 3
  },
  {
    question: "The Big Chill Ritual: What does Priya order every single time we go to Big Chill for a beverage?",
    options: ["Lemon Iced Tea", "Peach Iced Tea", "Oreo Shake", "Diet Coke"],
    correctAnswer: 1
  },
  {
    question: "The 2 AM Vibe: It's 2 AM in Bombay. The party is over. Where does she want to drag everyone?",
    options: ["Marine Drive", "Juhu Beach", "Bandstand", "Worli Sea Face"],
    correctAnswer: 2
  },
  {
    question: "History Class: On what exact date did Priya come to Amil's college for the first time?",
    options: ["14th Feb 2024", "24th Jan 2024", "1st March 2024", "24th Feb 2024"],
    correctAnswer: 3
  },
  {
    question: "The Spice Levels: What is Priya's favorite topping for literally everything?",
    options: ["Oregano", "Chilli Oil", "Ketchup", "Peri Peri Masala"],
    correctAnswer: 1
  },
  {
    question: "The Beverage of the Year: What is Priya's official Beverage of the Year 2025?",
    options: ["Iced Coffee", "Boba Tea", "Matcha", "Diet Coke"],
    correctAnswer: 2
  },
  {
    question: "The True Fear: What is Priya actually the most afraid of?",
    options: ["Failing an exam", "Amil's Hygiene", "Spiders", "Aarav's Sleep Schedule"],
    correctAnswer: 3
  },
  {
    question: "Fruit of the Year: What was Priya's 'Fruit of the Year'?",
    options: ["Mango", "Avocado", "Strawberry", "Blueberry"],
    correctAnswer: 1
  }
];

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target Date: Dec 17, 2025
    const target = new Date('2025-12-17T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        // Automatically unlock after countdown
        onUnlock();
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [onUnlock]);

  // Show countdown until Dec 17, 2025
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Vogue-style animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center relative z-10 px-6"
      >
        {/* Vogue-style masthead */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <Lock className="mx-auto mb-6 text-rose-300" size={48} strokeWidth={1} />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            COMING SOON
          </h1>
          <div className="h-px w-32 bg-white/30 mx-auto mb-6" />
          <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-white/70">
            The Birthday Issue
          </p>
        </motion.div>

        {/* Elegant countdown */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <p className="font-serif italic text-xl md:text-2xl text-rose-200 mb-6">
            Unlocks December 17, 2025
          </p>
          <div className="flex gap-6 md:gap-8 justify-center font-sans">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-1 tabular-nums">{String(timeLeft.days).padStart(2, '0')}</div>
              <div className="text-xs tracking-widest uppercase text-white/50">Days</div>
            </div>
            <div className="text-4xl md:text-5xl font-light self-center opacity-30">:</div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-1 tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="text-xs tracking-widest uppercase text-white/50">Hours</div>
            </div>
            <div className="text-4xl md:text-5xl font-light self-center opacity-30">:</div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-1 tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="text-xs tracking-widest uppercase text-white/50">Minutes</div>
            </div>
            <div className="text-4xl md:text-5xl font-light self-center opacity-30">:</div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light mb-1 tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="text-xs tracking-widest uppercase text-white/50">Seconds</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LockScreen;