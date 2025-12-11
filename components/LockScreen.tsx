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
    question: "What is Priya's favorite coffee order?",
    options: ["Cappuccino", "Latte", "Americano", "Mocha"],
    correctAnswer: 1 // Index of correct answer
  },
  {
    question: "Which city does Priya dream of visiting?",
    options: ["Paris", "Tokyo", "New York", "London"],
    correctAnswer: 0
  },
  {
    question: "What's Priya's go-to comfort food?",
    options: ["Pizza", "Pasta", "Tiramisu", "Sushi"],
    correctAnswer: 2
  }
];

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const [showTrivia, setShowTrivia] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Target Date: Dec 17, 2025
    const target = new Date('2025-12-17T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      
      if (diff <= 0) {
        setIsUnlocked(true);
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
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === TRIVIA_QUESTIONS[currentQuestion].correctAnswer) {
      // Correct answer
      setTimeout(() => {
        if (currentQuestion < TRIVIA_QUESTIONS.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
        } else {
          // All questions answered correctly
          onUnlock();
        }
      }, 800);
    } else {
      // Wrong answer
      setError(true);
      setTimeout(() => {
        setError(false);
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  // Before Dec 17, 2025 - Show countdown
  if (!isUnlocked) {
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

          {/* Temporary bypass button - REMOVE BEFORE LAUNCH */}
          <motion.button
            onClick={() => setIsUnlocked(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8 px-6 py-2 border border-white/20 hover:border-rose-300/50 transition-all text-xs tracking-widest uppercase"
          >
            Skip to Trivia (Remove this later)
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // After Dec 17, 2025 - Show trivia
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6">
      {/* Vogue-style animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-4">
            THE BIRTHDAY QUIZ
          </h1>
          <div className="h-px w-24 bg-white/30 mx-auto mb-4" />
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-white/70">
            Question {currentQuestion + 1} of {TRIVIA_QUESTIONS.length}
          </p>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8 italic text-rose-100">
              {TRIVIA_QUESTIONS[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-4">
              {TRIVIA_QUESTIONS[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={
                    error && selectedAnswer === index
                      ? { x: [-10, 10, -10, 10, 0] }
                      : selectedAnswer === index && index === TRIVIA_QUESTIONS[currentQuestion].correctAnswer
                      ? { backgroundColor: ['rgba(0,0,0,0)', 'rgba(34, 197, 94, 0.2)'] }
                      : {}
                  }
                  className={`w-full p-4 md:p-6 border border-white/20 hover:border-rose-300/50 transition-all text-left font-sans text-base md:text-lg
                    ${selectedAnswer === index && index === TRIVIA_QUESTIONS[currentQuestion].correctAnswer ? 'border-green-500' : ''}
                    ${error && selectedAnswer === index ? 'border-red-500' : ''}
                  `}
                >
                  <span className="text-rose-300 mr-4 font-serif">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="flex gap-2 justify-center mt-8">
          {TRIVIA_QUESTIONS.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-12 transition-all ${
                index < currentQuestion ? 'bg-rose-300' : 
                index === currentQuestion ? 'bg-white' : 
                'bg-white/20'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default LockScreen;