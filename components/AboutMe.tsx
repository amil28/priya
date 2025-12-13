import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Coffee, Book } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section className="min-h-screen bg-stone-50 text-stone-900 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-4xl w-full relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 text-rose-400">
              <div className="h-[1px] w-8 bg-rose-400" />
              <Heart size={16} fill="currentColor" />
              <div className="h-[1px] w-8 bg-rose-400" />
            </div>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight mb-4">
            The <span className="italic">Priya</span> Effect
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            Twenty-Two & Thriving
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {/* The Letter */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl md:text-2xl leading-relaxed font-light text-stone-700">
              Is it the smile? Is it the quiet innocence? Is it the way kindness just seems to spill out of you? 
              No, wait... I think it's the <Highlight>eyes</Highlight>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              There is a specific kind of <Highlight>sweetness</Highlight> in your eyes. It's there when you 
              look at the world with that pure curiosity. It's there when you ask those questions that are so 
              simply, wonderfully <Highlight>you</Highlight>. You don't just walk into a room; you become 
              the <Highlight>light</Highlight> in it. You have this rare, beautiful gift: you love to speak, 
              but you also love to <Highlight>listen</Highlight>. You make people feel seen. You heal them just 
              by being near.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              And then, there is the <Highlight>fire</Highlight>. The girl who attacks her MBA with the same 
              intensity she attacks a spicy bowl of noodles. The girl who finds as much joy in a perfect Avocado 
              Toast or a morning Matcha as she does in conquering the <Highlight>corporate world</Highlight>.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              You are a mix of <Highlight>soft and strong</Highlight>, of ambition and comfort. You are home, 
              and you are an <Highlight>adventure</Highlight>, all at once.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed font-light text-stone-700 mt-8 italic">
              Happy Birthday, Priya. To the girl who heals the world, one smile (and one case competition) at a time. ✨
            </p>
          </div>
        </motion.div>

        {/* Personality Report Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-stone-900 p-8 md:p-12 mb-16 shadow-lg"
        >
          {/* Report Card Header */}
          <div className="border-b-2 border-stone-900 pb-6 mb-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif text-3xl md:text-4xl">Personality Report</h3>
              <div className="text-right">
                <p className="text-xs uppercase tracking-widest text-stone-500">Grade</p>
                <p className="text-2xl font-bold text-stone-900">A+</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <p className="text-stone-600">Student: <span className="font-medium">Priyamvada Rajpal</span></p>
              <p className="text-stone-600">Year: <span className="font-medium">2024</span></p>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <StatBar 
              label="Caffeine & Chlorophyll" 
              percentage={100} 
              icon={<Coffee size={18} />}
              comment="Has successfully replaced blood with Matcha. Dedication to finding the perfect green drink is inspiring, bordering on obsessive."
            />
            <StatBar 
              label="Culinary Arts (Consumption)" 
              percentage={100} 
              icon={<Sparkles size={18} />}
              comment="Specializes in Avocado Toast appreciation and Bang Bang Noodle destruction. Can spot a good cafe from a mile away."
            />
            <StatBar 
              label="Emotional Intelligence" 
              percentage={100} 
              icon={<Heart size={18} />}
              comment="Off the charts."
            />
            <StatBar 
              label="Corporate Domination" 
              percentage={100} 
              icon={<Book size={18} />}
              comment="Crushing the MBA. Winning Apple Case Comps. Scaring competitors while wearing a great outfit. A true Girl Boss."
            />
            <StatBar 
              label="Curiosity" 
              percentage={98} 
              icon={<Sparkles size={18} />}
              comment="Never stops asking questions. Maintains a level of innocence and wonder that the world hasn't been able to take away."
            />
          </div>

          {/* Report Card Footer */}
          <div className="border-t-2 border-stone-900 mt-8 pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Final Verdict</p>
                <p className="text-sm text-stone-700 italic max-w-md">
                  "An exceptional student who has mastered the art of being both brilliantly ambitious and beautifully human. 
                  Highly recommend for world domination. ⭐"
                </p>
              </div>
              <div className="text-right hidden md:block">
                <div className="w-24 h-16 border-2 border-stone-300 flex items-center justify-center">
                  <p className="text-xs text-stone-400">Official<br/>Stamp</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center border-t border-stone-200 pt-12"
        >
          <blockquote className="font-serif text-2xl md:text-3xl italic text-stone-600 mb-4">
            "She believed she could, so she did."
          </blockquote>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            — And she's just getting started
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Highlight component for emphasized words
const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10 font-medium text-stone-900">{children}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute bottom-1 left-0 right-0 h-3 bg-rose-200/50 -z-0 origin-left"
      />
    </span>
  );
};

// Stat Bar component for report card
interface StatBarProps {
  label: string;
  percentage: number;
  icon: React.ReactNode;
  comment?: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, percentage, icon, comment }) => {
  return (
    <div className="group border-b border-stone-200 pb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-stone-500 group-hover:text-stone-900 transition-colors">
            {icon}
          </div>
          <span className="font-medium text-stone-900 uppercase text-sm tracking-wide">Subject: {label}</span>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-widest text-stone-500 mb-1">Grade</div>
          <div className="text-lg font-bold text-stone-900 tabular-nums">
            {percentage === 100 ? 'A++' : percentage >= 98 ? 'A+' : 'A'}
          </div>
        </div>
      </div>
      <div className="h-2 bg-stone-200 overflow-hidden relative mb-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-stone-700 to-stone-900 relative"
        >
          {/* Shine effect */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
      {comment && (
        <p className="text-xs text-stone-600 italic mt-2">
          <span className="font-semibold not-italic">Teacher's Comment:</span> {comment}
        </p>
      )}
    </div>
  );
};

export default AboutMe;

