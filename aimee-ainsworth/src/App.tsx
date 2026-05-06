import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, ChevronRight, MousePointer2 } from 'lucide-react';

export default function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [showAgeGate, setShowAgeGate] = useState(false);

  const handleVerify = () => {
    setIsVerified(true);
    setShowAgeGate(false);
    // Open in new tab as requested
    window.open('https://www.fanvue.com/aainsworth14', '_blank');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden font-sans select-none">
      {/* Fixed Background Layer */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[3s] hover:scale-105"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/d/1hPZHz5iCqNG2Y6PsX46Lg0NrYTKPC6Rk=s2048')`,
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Subtle Overlay gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      
      {/* Centered Content Container */}
      <AnimatePresence mode="wait">
        {!showAgeGate && (
          <motion.div 
            key="main-landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-lg px-6 flex flex-col items-center justify-center min-h-screen"
          >
            {/* Name in Serif Font */}
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12 text-5xl md:text-7xl font-serif italic text-white tracking-tighter drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] text-center"
            >
              Aimee Ainsworth
            </motion.h1>

            {/* "My World" Link Card */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                delay: 0.6, 
                duration: 2, 
                ease: [0.22, 1, 0.36, 1],
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="w-full max-w-[360px]"
            >
              <button 
                onClick={() => setShowAgeGate(true)}
                className="w-full group relative flex items-center gap-5 bg-white/10 hover:bg-white/20 backdrop-blur-3xl rounded-[2rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 transition-all duration-700 active:scale-[0.97] overflow-hidden"
              >
                {/* Rotating Border Beam */}
                <div className="absolute inset-0 p-[2px] pointer-events-none rounded-[2rem] overflow-hidden">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_60deg,rgba(255,255,255,0.4)_180deg,transparent_300deg)] opacity-60"
                  />
                </div>

                {/* Subtle Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out" />

                {/* Left Avatar */}
                <div className="w-16 flex-shrink-0 flex justify-start z-10">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1uFKE7NfSQoOutsqtqzbvT1P3PfXTYSXU=s512" 
                      alt="Aimee icon" 
                      className="h-full w-full object-cover transition-all duration-700"
                      onError={(e) => {
                        e.currentTarget.src = 'https://ui-avatars.com/api/?name=A&background=000&color=fff';
                      }}
                    />
                  </div>
                </div>

                {/* Text Center */}
                <div className="flex flex-col items-center flex-grow text-center z-10 relative">
                  <span className="text-[19px] font-semibold text-white tracking-tight mb-0.5 whitespace-nowrap drop-shadow-sm group-hover:text-white transition-colors flex items-center gap-2">
                    My World
                    <motion.div
                      animate={{ 
                        y: [0, -4, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <MousePointer2 size={16} className="text-white fill-white/20" />
                    </motion.div>
                  </span>
                  <span className="text-[10px] font-semibold text-white/70 uppercase tracking-[0.25em] transition-colors group-hover:text-white/90 whitespace-nowrap">Discover more about me</span>
                </div>

                {/* Arrow */}
                <div className="w-16 flex-shrink-0 flex justify-end z-10">
                  <div className="bg-white/5 rounded-full p-2.5 transition-all duration-500 group-hover:bg-white/10 group-hover:rotate-12 group-hover:scale-110">
                    <ChevronRight size={18} className="text-white/60 transition-transform duration-500 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Verification Modal */}
      <AnimatePresence>
        {showAgeGate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
          >
            {/* Very Light Overlay */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-[3px]" 
              onClick={() => setShowAgeGate(false)}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative z-10 w-full max-w-sm text-center px-4"
            >
              <h2 className="text-5xl font-serif italic text-white mb-6 tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">One Moment</h2>
              <p className="text-[14px] text-white/80 mb-12 leading-relaxed font-normal tracking-wide max-w-[280px] mx-auto">
                Please confirm you are 18 or older to continue to my exclusive world.
              </p>

              <div className="flex flex-col items-center gap-8">
                <button
                  onClick={handleVerify}
                  className="w-full max-w-[300px] bg-white/10 hover:bg-white/15 backdrop-blur-2xl text-white text-[12px] font-semibold py-6 px-10 rounded-[2rem] tracking-[0.4em] uppercase transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] border border-white/10 hover:scale-[1.05] active:scale-[0.95]"
                >
                  Enter 18+
                </button>
                <button
                  onClick={() => setShowAgeGate(false)}
                  className="text-[11px] text-white/50 uppercase tracking-[0.5em] font-semibold hover:text-white/80 transition-all hover:tracking-[0.6em] border-b border-transparent hover:border-white/20 pb-1"
                >
                  Exit
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

