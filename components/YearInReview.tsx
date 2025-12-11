import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { YEAR_IN_REVIEW } from '../constants';
import { Music, Calendar, Play, Pause } from 'lucide-react';

const YearInReview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate total width needed for horizontal scroll
  // Add 1 extra for the intro screen
  const totalMonths = YEAR_IN_REVIEW.length + 1; // +1 for intro
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${(totalMonths - 1) * 100}vw`]);

  return (
    <section ref={containerRef} className="relative bg-black" style={{ height: `${totalMonths * 100}vh` }}>
      <div className="sticky top-0 h-screen w-screen overflow-hidden">
        
        {/* Horizontal Scrolling Container */}
        <motion.div 
          style={{ x }}
          className="absolute top-0 left-0 h-full flex"
        >
          {/* Intro Panel - 2024 Title */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 to-black opacity-50"></div>
            
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0]),
                scale: useTransform(scrollYProgress, [0, 0.08, 0.12], [1, 1, 0.9])
              }}
              className="z-10 text-center"
            >
              <h2 className="font-serif text-6xl md:text-9xl tracking-[0.2em] mb-6 uppercase text-white">
                2024
              </h2>
              <p className="font-sans text-sm md:text-base text-stone-400 tracking-[0.3em] uppercase mb-4">
                A Year in Moments
              </p>
              <div className="flex items-center justify-center gap-2 text-stone-500 text-xs">
                <Calendar size={16} />
                <span>Priya's Journey</span>
              </div>
            </motion.div>
          </div>

          {/* Month Panels */}
          {YEAR_IN_REVIEW.map((month, index) => (
            <MonthPanel key={month.id} month={month} index={index} scrollProgress={scrollYProgress} totalMonths={totalMonths} />
          ))}
          
          {/* Final Thank You Panel */}
          <div className="w-screen h-full flex-shrink-0 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/20 to-black opacity-50"></div>
            
            <motion.div 
              style={{
                opacity: useTransform(scrollYProgress, [0.92, 0.96], [0, 1])
              }}
              className="z-10 text-center max-w-2xl px-6"
            >
              <h3 className="font-serif text-5xl md:text-7xl tracking-[0.2em] mb-8 uppercase text-white">
                Here's to You
              </h3>
              <p className="font-sans text-stone-400 text-base md:text-xl leading-relaxed mb-12">
                365 days. Countless memories. Infinite moments that made this year unforgettable.
                <br/>Thank you for being you, Priya.
              </p>
              <div className="inline-block border border-stone-700 px-8 py-4">
                <span className="text-sm tracking-[0.3em] uppercase text-stone-500">
                  Happy Birthday 🎂
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-1.5">
          {YEAR_IN_REVIEW.map((_, index) => {
            const adjustedIndex = index + 1; // +1 because of intro panel
            return (
              <motion.div
                key={index}
                className="h-1 bg-stone-700 rounded-full overflow-hidden"
                style={{ width: '32px' }}
              >
                <motion.div
                  className="h-full bg-white"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [adjustedIndex / totalMonths, (adjustedIndex + 1) / totalMonths],
                      [0, 1]
                    ),
                    transformOrigin: 'left'
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface MonthPanelProps {
  month: typeof YEAR_IN_REVIEW[0];
  index: number;
  scrollProgress: any;
  totalMonths: number;
}

const MonthPanel: React.FC<MonthPanelProps> = ({ month, index, scrollProgress, totalMonths }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Adjust for intro panel (+1)
  const adjustedIndex = index + 1;
  const start = adjustedIndex / totalMonths;
  const end = (adjustedIndex + 1) / totalMonths;

  // Parallax effects for this specific panel
  const opacity = useTransform(scrollProgress, [start - 0.05, start + 0.02, end - 0.02, end + 0.05], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [start - 0.03, start, end, end + 0.03], [0.96, 1, 1, 0.96]);

  const isEven = index % 2 === 0;

  const handlePlayPause = (song: typeof month.songs[0]) => {
    if (!song.audioUrl) {
      // If no audio URL, you could open Spotify/YouTube here
      alert(`🎵 "${song.title}" by ${song.artist}\n\nAdd an audioUrl to the song in constants.ts to enable playback!`);
      return;
    }

    if (currentlyPlaying === song.title) {
      // Pause current song
      audioRef.current?.pause();
      setCurrentlyPlaying(null);
    } else {
      // Play new song
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(song.audioUrl);
      audioRef.current.play();
      setCurrentlyPlaying(song.title);
      
      // Reset when song ends
      audioRef.current.onended = () => {
        setCurrentlyPlaying(null);
      };
    }
  };

  // Cleanup audio when component unmounts
  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="w-screen h-full flex-shrink-0 flex items-center justify-center p-6 md:p-12 relative"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          background: `radial-gradient(circle at ${isEven ? 'left' : 'right'}, rgba(255,255,255,0.1) 0%, transparent 70%)`
        }}
      />

      <div className="w-full max-w-7xl h-full flex items-center relative z-10">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 w-full items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
          
          {/* Magazine-Style Single Photo */}
          <div className={`relative h-[500px] md:h-[650px] ${isEven ? '' : 'md:col-start-2'}`}>
            <motion.div 
              className="w-full h-full overflow-hidden shadow-2xl relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Magazine cover gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-60 z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-40 z-10 pointer-events-none" />
              
              {/* The main image */}
              <img 
                src={month.images[0]} 
                alt={`${month.month}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ 
                  filter: 'brightness(0.85) contrast(1.15) saturate(0.9)',
                }}
              />
              
              {/* Subtle border for magazine feel */}
              <div className="absolute inset-0 border-2 border-black/20 z-20 pointer-events-none" />
              
              {/* Vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] z-10 pointer-events-none" />
            </motion.div>
          </div>

          {/* Content Column */}
          <div className={`space-y-8 ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
            {/* Month Header */}
            <div>
              <div 
                className="inline-block px-3 py-1 mb-4 text-[10px] uppercase tracking-[0.3em] border border-stone-700 text-stone-400"
              >
                Month {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-6xl md:text-8xl tracking-[0.15em] uppercase mb-6 text-white leading-none">
                {month.month}
              </h3>
              <p className="font-sans text-stone-400 text-lg md:text-xl leading-relaxed">
                {month.description}
              </p>
            </div>

            {/* Music Section - Magazine Style */}
            <div className="bg-stone-900/30 backdrop-blur-sm border border-stone-800 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6 text-stone-500 border-b border-stone-800 pb-3">
                <Music size={18} />
                <span className="text-[11px] uppercase tracking-[0.3em]">On Repeat</span>
              </div>
              
              {month.songs.map((song, i) => {
                const isPlaying = currentlyPlaying === song.title;
                return (
                  <div
                    key={i}
                    onClick={() => handlePlayPause(song)}
                    className="flex items-center gap-6 group cursor-pointer hover:bg-stone-800/30 p-3 -m-3 transition-colors rounded-sm"
                  >
                    <div className="relative flex-shrink-0">
                      <img 
                        src={song.cover} 
                        alt={song.title}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover shadow-lg transition-all duration-500"
                        style={{ 
                          filter: isPlaying ? 'grayscale(0%) brightness(1)' : 'grayscale(100%) brightness(0.8)',
                        }}
                      />
                      <div 
                        className={`absolute inset-0 transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        style={{ 
                          backgroundImage: `url(${song.cover})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div 
                        className={`absolute inset-0 border-2 transition-colors ${isPlaying ? 'border-white' : 'border-transparent group-hover:border-white'}`}
                      />
                      
                      {/* Play/Pause Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                        {isPlaying ? (
                          <Pause size={24} className="text-white" fill="white" />
                        ) : (
                          <Play size={24} className="text-white" fill="white" />
                        )}
                      </div>
                      
                      {/* Playing indicator */}
                      {isPlaying && (
                        <motion.div 
                          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-sans text-base md:text-lg font-medium mb-1 transition-colors ${isPlaying ? 'text-white' : 'text-white group-hover:text-white'}`}>
                        {song.title}
                      </div>
                      <div className={`text-sm transition-colors ${isPlaying ? 'text-stone-400' : 'text-stone-500 group-hover:text-stone-400'}`}>
                        {song.artist}
                      </div>
                    </div>
                    
                    {/* Status text */}
                    <div className="text-xs uppercase tracking-widest text-stone-600 group-hover:text-stone-500 transition-colors">
                      {isPlaying ? 'Playing' : 'Play'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Decorative Element */}
            <div className="flex items-center gap-4 opacity-30">
              <div className="h-[1px] flex-1 bg-white" />
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="h-[1px] flex-1 bg-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default YearInReview;
