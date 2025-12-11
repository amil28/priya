import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Coffee, Book, Music, Plane } from 'lucide-react';

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
            About <span className="italic">Priya</span>
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
              To the girl who lights up every room she walks into—
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              Twenty-two looks <Highlight>beautiful</Highlight> on you. Not because of the number, 
              but because of the <Highlight>person</Highlight> you've become. You're the kind of rare 
              that makes ordinary moments feel like <Highlight>magic</Highlight>.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              You have this way of being <Highlight>effortlessly brilliant</Highlight>—whether you're 
              conquering your MBA, exploring new cities, or simply making the perfect cup of coffee. 
              Your <Highlight>ambition</Highlight> inspires me, your <Highlight>kindness</Highlight> grounds 
              me, and your laugh? It's my favorite sound in the world.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              This year, I hope you chase every <Highlight>dream</Highlight> that sets your soul on fire. 
              I hope you travel to places that take your breath away, read books that change your perspective, 
              and dance like nobody's watching (even though I always am, because you're <Highlight>mesmerizing</Highlight>).
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-stone-600 mt-6">
              Here's to <Highlight>22</Highlight>—to new adventures, endless possibilities, 
              and all the beautiful moments waiting for you. You deserve every bit of happiness 
              this world has to offer, and I'm so lucky I get to witness your <Highlight>journey</Highlight>.
            </p>

            <p className="text-xl md:text-2xl leading-relaxed font-light text-stone-700 mt-8 italic">
              Happy Birthday, Priya. Keep shining. ✨
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
            <StatBar label="Caffeine Dependency" percentage={95} icon={<Coffee size={18} />} />
            <StatBar label="Kindness & Empathy" percentage={100} icon={<Heart size={18} />} />
            <StatBar label="Ambition & Drive" percentage={98} icon={<Sparkles size={18} />} />
            <StatBar label="Bookworm Level" percentage={85} icon={<Book size={18} />} />
            <StatBar label="Music Taste" percentage={100} icon={<Music size={18} />} />
            <StatBar label="Wanderlust" percentage={92} icon={<Plane size={18} />} />
          </div>

          {/* Report Card Footer */}
          <div className="border-t-2 border-stone-900 mt-8 pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Teacher's Notes</p>
                <p className="text-sm text-stone-700 italic max-w-md">
                  "Exceptional performance across all categories. A true inspiration to everyone around her. 
                  Keep being amazing! ⭐"
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
}

const StatBar: React.FC<StatBarProps> = ({ label, percentage, icon }) => {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-stone-500 group-hover:text-stone-900 transition-colors">
            {icon}
          </div>
          <span className="font-medium text-stone-900">{label}</span>
        </div>
        <span className="text-sm font-bold text-stone-900 tabular-nums">{percentage}%</span>
      </div>
      <div className="h-3 bg-stone-200 overflow-hidden relative">
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
    </div>
  );
};

export default AboutMe;

