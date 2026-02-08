import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import bizcompXMoooodLogo from '@/assets/characters/BizCompXMoood.svg';

const CTAScreen = () => {
  const handleRegister = () => {
    // Open registration link or show registration form
    window.open('https://forms.gle/bizcomp-registration', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-pink via-blush-pink to-coral-pink/40 relative overflow-hidden flex items-center justify-center">
      {/* Bizcomp-style decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right iridescent blob */}
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-300/50 via-blue-300/40 to-cyan-300/50 rounded-full blur-2xl"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Bottom left pink blob */}
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-pink-300/50 via-rose-200/40 to-orange-200/40 rounded-full blur-2xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mid-left cyan accent */}
        <motion.div
          className="absolute top-1/3 -left-16 w-40 h-40 bg-gradient-to-r from-cyan-300/40 to-purple-300/40 rounded-full blur-xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mid-right pink accent */}
        <motion.div
          className="absolute bottom-1/4 -right-12 w-48 h-48 bg-gradient-to-l from-pink-300/50 to-rose-300/50 rounded-full blur-xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Brush strokes decoration */}
        <div className="absolute top-[20%] left-[5%] w-32 h-8 bg-gradient-to-r from-pink-200/40 to-transparent rounded-full rotate-12" />
        <div className="absolute bottom-[25%] right-[8%] w-40 h-10 bg-gradient-to-l from-pink-200/30 to-transparent rounded-full -rotate-6" />
        
        {/* Question mark decorations like Bizcomp */}
        <div className="absolute top-[12%] left-[6%] text-7xl text-pink-300/25 font-display rotate-12">?</div>
        <div className="absolute bottom-[18%] right-[8%] text-8xl text-pink-200/20 font-display -rotate-12">?</div>
        <div className="absolute top-[45%] right-[4%] text-5xl text-purple-300/15 font-display rotate-6">?</div>
        <div className="absolute bottom-[40%] left-[3%] text-6xl text-rose-300/15 font-display -rotate-6">?</div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base font-display tracking-widest text-foreground/60 uppercase mb-4">
            🎊 March Showcase 🎊
          </p>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Meet the
            <span className="text-char-creative"> Club</span>.
            <br />
            Taste the
            <span style={{ color: '#e8662a', fontFamily: 'Anton, sans-serif', fontWeight: 400 }}> MOOOOD</span>!
          </h1>
        </motion.div>

        <motion.p
          className="text-lg font-body text-foreground/70 mb-8 max-w-md mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join us for an amazing collaboration event! 
          Show your result screen at our booth to claim your exclusive reward! 🎁
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button 
            variant="hero" 
            size="xl" 
            onClick={handleRegister}
            className="w-full max-w-sm rounded-full font-display text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            🚀 REGISTER FOR EVENT
          </Button>
          
          {/* Reward info card */}
          <motion.div 
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 max-w-sm border border-white/50 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p className="text-base font-display text-foreground/90 mb-1">
              🎁 <span className="font-bold">Exclusive Reward!</span>
            </p>
            <p className="text-sm font-body text-foreground/60 leading-relaxed">
              Show your result screen at our booth to get a free 
              <span className="font-semibold text-foreground/80"> Mooood × Bizcomp Sticker Pack!</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Brand footer */}
        <motion.div
          className="mt-12 pt-6 border-t border-foreground/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <img src={bizcompXMoooodLogo} alt="BIZCOMP × MOOOOD" className="h-12" />
        </motion.div>
      </div>
    </div>
  );
};

export default CTAScreen;
